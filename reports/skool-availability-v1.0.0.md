# Skool Availability Check — v1.0.0

**Date:** 2026-08-14T15:21:32Z  
**Target:** [https://www.skool.com/delivery-pilot-8938](https://www.skool.com/delivery-pilot-8938)  
**Visitor:** logged-out stranger (no Skool cookie)  
**Hypothesis:** H5 Premise 11 (Public visibility)  
**Test:** `5_Symbols/toolbox/skool_availability_check.py`  
**Page:** `5_Symbols/product/skool-availability.html`  
**Status of this note:** live reachability evidence. Not a paid-enrollment signal. H5 stays 🟡 In Testing.

---

## Verdict

# ✅ PASS — 11 / 11 gates

A logged-out fetch of Delivery Pilot returns HTTP 200, `currentGroup.public = True`, `metadata.privacy = 0` (0 = public), **14 posts**, and **11 members**. Anyone can read the board. That is the Public state the founder set on 2026-08-14.

Classroom and calendar URLs also return 200. Posting still requires a join (this script does not attempt to post). Setting Public is not a paid enrollment.

---

## What the stranger can see

| Field | Live value |
|---|---|
| Display name | Delivery Pilot |
| Slug | `delivery-pilot-8938` |
| `public` | `True` |
| `privacy` | `0` (0 = Public) |
| Members | 11 |
| Admins | 1 |
| Online | 1 |
| Posts | 14 |
| Courses / modules | 3 / 21 |
| Membership model | `3` (3 = Freemium) |

### Unique posts visible without joining

- `how-im-turning-my-claude-conversations-into-a-living-second-brain` — Sude Ünal
- `how-are-you-automating-your-second-brain-directly-from-chat-history` — Rifat Erdem Sahin
- `welcome-to-the-claude-architect-lab-start-here` — Rifat Erdem Sahin
- `welcome-everyone` — Rifat Erdem Sahin
- `grok-cli-tool` — Rifat Erdem Sahin
- `which-ai-tool-is-actually-the-best-for-coding-right-now` — Rifat Erdem Sahin
- `442-github-repositories-later` — Rifat Erdem Sahin
- `gemini-36-thinking-multi-model-image-updates` — Rifat Erdem Sahin
- `current-model-comparison-2026-aug-12` — Rifat Erdem Sahin
- `glossary` — Rifat Erdem Sahin
- `claude-offical-course` — Rifat Erdem Sahin
- `skool-app-install` — Rifat Erdem Sahin
- `assesments` — Rifat Erdem Sahin
- `installing-obsidian` — Rifat Erdem Sahin

Authors: `{"Sude Ünal": 1, "Rifat Erdem Sahin": 13}`

### Upcoming events visible without joining

- **Cohort session** — 2026-08-16T09:00:00+01:00 → 2026-08-16T11:00:00+01:00 (Europe/London)

---

## Checks

| | Kind | Check | Detail |
|---|---|---|---|
| ✅ | Gate | Home HTTP 200 | status=200 475ms 495470 bytes |
| ✅ | Gate | Embedded group JSON present | __NEXT_DATA__ parsed |
| ✅ | Gate | Group slug is Delivery Pilot | name='delivery-pilot-8938' |
| ✅ | Gate | Group is Public (API flag) | currentGroup.public=True |
| ✅ | Gate | Privacy enum is Public (0) | metadata.privacy=0 (0=public) |
| ✅ | Gate | Display name visible | displayName='Delivery Pilot' |
| ✅ | Gate | Community board visible to a stranger | 14 unique post slugs; metadata.totalPosts=14 |
| ✅ | Gate | Member count readable without joining | totalMembers=11 |
| ✅ | Gate | About page HTTP 200 | status=200 404ms |
| ✅ | Gate | Classroom URL reachable (not 404) | status=200 413ms |
| ✅ | Gate | Calendar URL reachable (not 404) | status=200 387ms |
| ⚠️ | Observe | Listing line still says 'get certified' | listing='Master Anthropic Claude & get certified as a Claude Architect. Build secure RAG pipelines, n8n agents, and AI-driven workflows.' |
| ✅ | Observe | About body uses Peek / Sit In language | lpDescription mentions Peek and Sit In |
| ✅ | Observe | At least one non-founder post visible | non-founder posts=1; authors={'Sude Ünal': 1, 'Rifat Erdem Sahin': 13} |

---

## Observations (do not fail the run)

1. **Listing line still sells a pass.** Live `metadata.description` is:

   > Master Anthropic Claude & get certified as a Claude Architect. Build secure RAG pipelines, n8n agents, and AI-driven workflows.

   Paste-ready replacement is on `product/skool-about.html`. This is the same “get certified” line H5 Premise 9 already flagged.

2. **About body is closer.** `lpDescription` starts:

   > 🚀 Delivery Pilot is a Sunday practice room for the AI Certified Architect exam. 💡

Starting with Claude Certified Architecture Exam

YouTube teaches concepts. 🎬 This room is where you get unstuck on your architecture. 🛠️

🎟️ HOW CLOSE YOU SIT
[ul][li]🪟 Peek \($0\): See the room, 1 sample replay, read the board.[li]🎧 Sit In \($1/mo\): Join Sunday live, listen-only. Cancel anytime.[li]🖥️ Share Scree

3. **Non-founder voice is now on the public board.** 1 unique non-founder post(s) are readable by a stranger. That is a Golden Rules / H8 activation signal, not a regular counted, and not a paid enrollment.

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
