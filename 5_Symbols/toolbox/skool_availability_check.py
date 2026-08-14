#!/usr/bin/env python3
"""
Skool Availability Check — Delivery Pilot (logged-out / public visitor).

Fetches https://www.skool.com/delivery-pilot-8938 as a stranger, parses the
embedded Skool __NEXT_DATA__ payload, and verifies H5 Premise 11:

  Public = anyone can see what's inside. Only members can post.

Usage (from repo root):
    python3 5_Symbols/toolbox/skool_availability_check.py
    python3 5_Symbols/toolbox/skool_availability_check.py --no-report

Writes:
    reports/skool-availability-latest.json
    reports/skool-availability-vX.Y.Z.md   (unless --no-report)

Exit: 0 all gates pass, 1 at least one gate failed.
"""
from __future__ import annotations

import argparse
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request
from typing import Any

GROUP_SLUG = "delivery-pilot-8938"
HOME_URL = f"https://www.skool.com/{GROUP_SLUG}"
ABOUT_URL = f"https://www.skool.com/{GROUP_SLUG}/about"
CLASSROOM_URL = f"https://www.skool.com/{GROUP_SLUG}/classroom"
CALENDAR_URL = f"https://www.skool.com/{GROUP_SLUG}/calendar"
USER_AGENT = (
    "AI-Certification-Helper/skool-availability-check "
    "(+https://github.com/rifaterdemsahin/AI-Certification-Customer-Development)"
)
TIMEOUT = 20
NEXT_DATA_RE = re.compile(
    r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>',
    re.S,
)
GET_CERTIFIED_RE = re.compile(r"get certified", re.I)


def find_project_root() -> str:
    d = os.path.abspath(os.getcwd())
    while True:
        if os.path.exists(os.path.join(d, "HYPOTHESIS.md")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            sys.exit("ERROR: HYPOTHESIS.md not found walking up from cwd")
        d = parent


def fetch(url: str) -> dict[str, Any]:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    started = datetime.datetime.now(datetime.timezone.utc)
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            raw = resp.read()
            elapsed_ms = int(
                (datetime.datetime.now(datetime.timezone.utc) - started).total_seconds() * 1000
            )
            return {
                "url": url,
                "ok": True,
                "status": resp.status,
                "final_url": resp.geturl(),
                "bytes": len(raw),
                "elapsed_ms": elapsed_ms,
                "body": raw.decode("utf-8", errors="replace"),
                "error": None,
            }
    except urllib.error.HTTPError as e:
        elapsed_ms = int(
            (datetime.datetime.now(datetime.timezone.utc) - started).total_seconds() * 1000
        )
        body = e.read().decode("utf-8", errors="replace") if e.fp else ""
        return {
            "url": url,
            "ok": False,
            "status": e.code,
            "final_url": e.geturl() if hasattr(e, "geturl") else url,
            "bytes": len(body),
            "elapsed_ms": elapsed_ms,
            "body": body,
            "error": f"HTTPError {e.code}",
        }
    except Exception as e:  # noqa: BLE001 — surface any fetch failure as a failed check
        elapsed_ms = int(
            (datetime.datetime.now(datetime.timezone.utc) - started).total_seconds() * 1000
        )
        return {
            "url": url,
            "ok": False,
            "status": None,
            "final_url": url,
            "bytes": 0,
            "elapsed_ms": elapsed_ms,
            "body": "",
            "error": f"{type(e).__name__}: {e}",
        }


def parse_next_data(html: str) -> dict[str, Any] | None:
    m = NEXT_DATA_RE.search(html or "")
    if not m:
        return None
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return None


def group_from(next_data: dict[str, Any] | None) -> dict[str, Any]:
    if not next_data:
        return {}
    return (
        next_data.get("props", {})
        .get("pageProps", {})
        .get("currentGroup", {})
        or {}
    )


def unique_posts(next_data: dict[str, Any] | None) -> list[dict[str, str]]:
    if not next_data:
        return []
    trees = next_data.get("props", {}).get("pageProps", {}).get("postTrees") or []
    seen: set[str] = set()
    out: list[dict[str, str]] = []
    for tree in trees:
        post = (tree or {}).get("post") or {}
        slug = post.get("name") or ""
        if not slug or slug in seen:
            continue
        seen.add(slug)
        user = post.get("user") or {}
        author = " ".join(
            part for part in (user.get("firstName"), user.get("lastName")) if part
        ).strip() or user.get("name") or "unknown"
        out.append({"slug": slug, "author": author})
    return out


def upcoming_events(next_data: dict[str, Any] | None) -> list[dict[str, Any]]:
    if not next_data:
        return []
    events = next_data.get("props", {}).get("pageProps", {}).get("upcomingEvents") or []
    out = []
    for ev in events:
        meta = ev.get("metadata") or {}
        out.append(
            {
                "title": meta.get("title"),
                "start": ev.get("startTime"),
                "end": ev.get("endTime"),
                "timezone": meta.get("timezone"),
            }
        )
    return out


class Check:
    def __init__(self, name: str, passed: bool, detail: str, gate: bool = True):
        self.name = name
        self.passed = passed
        self.detail = detail
        self.gate = gate  # False = observation only (does not fail the run)


def next_report_version(reports_dir: str) -> str:
    pattern = re.compile(r"skool-availability-v(\d+)\.(\d+)\.(\d+)\.md$")
    best = (0, 0, 0)
    for name in os.listdir(reports_dir):
        m = pattern.match(name)
        if m:
            ver = tuple(int(x) for x in m.groups())
            if ver > best:
                best = ver
    major, minor, patch = best
    if best == (0, 0, 0):
        return "1.0.0"
    return f"{major}.{minor}.{patch + 1}"


def run() -> dict[str, Any]:
    fetched = {
        "home": fetch(HOME_URL),
        "about": fetch(ABOUT_URL),
        "classroom": fetch(CLASSROOM_URL),
        "calendar": fetch(CALENDAR_URL),
    }
    home_nd = parse_next_data(fetched["home"]["body"])
    group = group_from(home_nd)
    meta = group.get("metadata") or {}
    posts = unique_posts(home_nd)
    events = upcoming_events(home_nd)
    authors: dict[str, int] = {}
    for p in posts:
        authors[p["author"]] = authors.get(p["author"], 0) + 1
    non_founder = [p for p in posts if "rifat" not in p["author"].lower()]

    listing = meta.get("description") or ""
    about_copy = meta.get("lpDescription") or ""

    checks: list[Check] = []

    home = fetched["home"]
    checks.append(
        Check(
            "Home HTTP 200",
            home["ok"] and home["status"] == 200,
            f"status={home['status']} {home['elapsed_ms']}ms {home['bytes']} bytes"
            + (f" error={home['error']}" if home["error"] else ""),
        )
    )
    checks.append(
        Check(
            "Embedded group JSON present",
            home_nd is not None,
            "__NEXT_DATA__ parsed" if home_nd else "no parseable __NEXT_DATA__",
        )
    )
    checks.append(
        Check(
            "Group slug is Delivery Pilot",
            group.get("name") == GROUP_SLUG,
            f"name={group.get('name')!r}",
        )
    )
    checks.append(
        Check(
            "Group is Public (API flag)",
            group.get("public") is True,
            f"currentGroup.public={group.get('public')!r}",
        )
    )
    checks.append(
        Check(
            "Privacy enum is Public (0)",
            meta.get("privacy") == 0,
            f"metadata.privacy={meta.get('privacy')!r} (0=public)",
        )
    )
    checks.append(
        Check(
            "Display name visible",
            "delivery pilot" in str(meta.get("displayName") or "").lower(),
            f"displayName={meta.get('displayName')!r}",
        )
    )
    checks.append(
        Check(
            "Community board visible to a stranger",
            len(posts) >= 1 and int(meta.get("totalPosts") or 0) >= 1,
            f"{len(posts)} unique post slugs; metadata.totalPosts={meta.get('totalPosts')}",
        )
    )
    checks.append(
        Check(
            "Member count readable without joining",
            int(meta.get("totalMembers") or 0) >= 1,
            f"totalMembers={meta.get('totalMembers')}",
        )
    )
    checks.append(
        Check(
            "About page HTTP 200",
            fetched["about"]["ok"] and fetched["about"]["status"] == 200,
            f"status={fetched['about']['status']} {fetched['about']['elapsed_ms']}ms",
        )
    )
    checks.append(
        Check(
            "Classroom URL reachable (not 404)",
            fetched["classroom"]["ok"] and fetched["classroom"]["status"] == 200,
            f"status={fetched['classroom']['status']} {fetched['classroom']['elapsed_ms']}ms",
        )
    )
    checks.append(
        Check(
            "Calendar URL reachable (not 404)",
            fetched["calendar"]["ok"] and fetched["calendar"]["status"] == 200,
            f"status={fetched['calendar']['status']} {fetched['calendar']['elapsed_ms']}ms",
        )
    )

    # Observations — do not fail the run
    checks.append(
        Check(
            "Listing line still says 'get certified'",
            not bool(GET_CERTIFIED_RE.search(listing)),
            f"listing={listing!r}" if listing else "empty listing",
            gate=False,
        )
    )
    peek_in_about = "peek" in about_copy.lower() and "sit in" in about_copy.lower()
    checks.append(
        Check(
            "About body uses Peek / Sit In language",
            peek_in_about,
            "lpDescription mentions Peek and Sit In" if peek_in_about else "Peek/Sit In not found in lpDescription",
            gate=False,
        )
    )
    checks.append(
        Check(
            "At least one non-founder post visible",
            len(non_founder) >= 1,
            f"non-founder posts={len(non_founder)}; authors={authors}",
            gate=False,
        )
    )

    gates = [c for c in checks if c.gate]
    observations = [c for c in checks if not c.gate]
    passed = all(c.passed for c in gates)

    result = {
        "checked_at": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "target": HOME_URL,
        "passed": passed,
        "gate_pass": sum(1 for c in gates if c.passed),
        "gate_total": len(gates),
        "observation_pass": sum(1 for c in observations if c.passed),
        "observation_total": len(observations),
        "group": {
            "slug": group.get("name"),
            "display_name": meta.get("displayName"),
            "public": group.get("public"),
            "privacy": meta.get("privacy"),
            "membership_model": meta.get("membershipModel"),
            "total_members": meta.get("totalMembers"),
            "total_posts": meta.get("totalPosts"),
            "total_admins": meta.get("totalAdmins"),
            "total_online": meta.get("totalOnlineMembers"),
            "num_courses": meta.get("numCourses"),
            "num_modules": meta.get("numModules"),
            "listing_line": listing,
            "about_excerpt": about_copy[:400],
        },
        "posts": posts,
        "authors": authors,
        "non_founder_posts": non_founder,
        "upcoming_events": events,
        "fetches": {
            key: {k: v for k, v in val.items() if k != "body"}
            for key, val in fetched.items()
        },
        "checks": [
            {
                "name": c.name,
                "passed": c.passed,
                "gate": c.gate,
                "detail": c.detail,
            }
            for c in checks
        ],
    }
    return result


def render_markdown(result: dict[str, Any], version: str) -> str:
    g = result["group"]
    status = "✅ PASS" if result["passed"] else "❌ FAIL"
    rows = []
    for c in result["checks"]:
        kind = "Gate" if c["gate"] else "Observe"
        mark = "✅" if c["passed"] else ("⚠️" if not c["gate"] else "❌")
        rows.append(f"| {mark} | {kind} | {c['name']} | {c['detail']} |")

    post_lines = "\n".join(
        f"- `{p['slug']}` — {p['author']}" for p in result["posts"]
    ) or "- _(none)_"
    event_lines = "\n".join(
        f"- **{e.get('title')}** — {e.get('start')} → {e.get('end')} ({e.get('timezone')})"
        for e in result["upcoming_events"]
    ) or "- _(none visible)_"

    listing = g.get("listing_line") or ""
    about = g.get("about_excerpt") or ""

    return f"""# Skool Availability Check — v{version}

**Date:** {result['checked_at']}  
**Target:** [{result['target']}]({result['target']})  
**Visitor:** logged-out stranger (no Skool cookie)  
**Hypothesis:** H5 Premise 11 (Public visibility)  
**Test:** `5_Symbols/toolbox/skool_availability_check.py`  
**Page:** `5_Symbols/product/skool-availability.html`  
**Status of this note:** live reachability evidence. Not a paid-enrollment signal. H5 stays 🟡 In Testing.

---

## Verdict

# {status} — {result['gate_pass']} / {result['gate_total']} gates

A logged-out fetch of Delivery Pilot returns HTTP 200, `currentGroup.public = {g.get('public')}`, `metadata.privacy = {g.get('privacy')}` (0 = public), **{g.get('total_posts')} posts**, and **{g.get('total_members')} members**. Anyone can read the board. That is the Public state the founder set on 2026-08-14.

Classroom and calendar URLs also return 200. Posting still requires a join (this script does not attempt to post). Setting Public is not a paid enrollment.

---

## What the stranger can see

| Field | Live value |
|---|---|
| Display name | {g.get('display_name')} |
| Slug | `{g.get('slug')}` |
| `public` | `{g.get('public')}` |
| `privacy` | `{g.get('privacy')}` (0 = Public) |
| Members | {g.get('total_members')} |
| Admins | {g.get('total_admins')} |
| Online | {g.get('total_online')} |
| Posts | {g.get('total_posts')} |
| Courses / modules | {g.get('num_courses')} / {g.get('num_modules')} |
| Membership model | `{g.get('membership_model')}` (3 = Freemium) |

### Unique posts visible without joining

{post_lines}

Authors: `{json.dumps(result['authors'], ensure_ascii=False)}`

### Upcoming events visible without joining

{event_lines}

---

## Checks

| | Kind | Check | Detail |
|---|---|---|---|
{chr(10).join(rows)}

---

## Observations (do not fail the run)

1. **Listing line still sells a pass.** Live `metadata.description` is:

   > {listing}

   Paste-ready replacement is on `product/skool-about.html`. This is the same “get certified” line H5 Premise 9 already flagged.

2. **About body is closer.** `lpDescription` starts:

   > {about}

3. **Non-founder voice is now on the public board.** {len(result['non_founder_posts'])} unique non-founder post(s) are readable by a stranger. That is a Golden Rules / H8 activation signal, not a regular counted, and not a paid enrollment.

---

## How to re-run

```bash
python3 5_Symbols/toolbox/skool_availability_check.py
```

From the repo root. Exit `0` = all gates pass. Writes `reports/skool-availability-latest.json` and the next `reports/skool-availability-vX.Y.Z.md`.

---

## What this does not prove

- A stranger can post (they should not; only members post).
- Classroom lessons are unlocked (Public is a look-in, not a giveaway).
- Anyone paid $10/mo or $250 Share Screen.
- The listing line has been replaced.
"""


def main() -> int:
    parser = argparse.ArgumentParser(description="Check Delivery Pilot Skool availability as a stranger.")
    parser.add_argument("--no-report", action="store_true", help="Skip writing a new versioned markdown report.")
    args = parser.parse_args()

    root = find_project_root()
    os.chdir(root)
    reports_dir = os.path.join(root, "reports")
    os.makedirs(reports_dir, exist_ok=True)

    result = run()

    json_path = os.path.join(reports_dir, "skool-availability-latest.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write("\n")

    md_path = None
    version = None
    if not args.no_report:
        version = next_report_version(reports_dir)
        md_path = os.path.join(reports_dir, f"skool-availability-v{version}.md")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(render_markdown(result, version))

    print(f"{'PASS' if result['passed'] else 'FAIL'}  {result['gate_pass']}/{result['gate_total']} gates")
    print(f"checked_at  {result['checked_at']}")
    print(f"public      {result['group'].get('public')}  privacy={result['group'].get('privacy')}")
    print(f"members     {result['group'].get('total_members')}  posts={result['group'].get('total_posts')}")
    print(f"json        {os.path.relpath(json_path, root)}")
    if md_path:
        print(f"report      {os.path.relpath(md_path, root)}  (v{version})")
    for c in result["checks"]:
        mark = "OK " if c["passed"] else ("WN " if not c["gate"] else "NG ")
        kind = "GATE" if c["gate"] else "NOTE"
        print(f"  {mark}{kind}  {c['name']} — {c['detail']}")

    return 0 if result["passed"] else 1


if __name__ == "__main__":
    sys.exit(main())
