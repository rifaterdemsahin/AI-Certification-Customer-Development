#!/usr/bin/env python3
"""
parse_interview_markdown.py
Parses Customer Discovery interview markdown files into structured JSON and HTML card snippets.
"""

import argparse
import json
import re
import sys
from pathlib import Path

def parse_interview(file_path):
    path = Path(file_path)
    if not path.exists():
        print(f"Error: File {file_path} not found.", file=sys.stderr)
        sys.exit(1)
        
    content = path.read_text(encoding='utf-8')
    
    # Extract metadata fields
    name_match = re.search(r"# Customer Discovery Interview:\s*(.+)", content)
    date_match = re.search(r"-\s*\*\*Date Logged:\*\*\s*(.+)", content)
    candidate_match = re.search(r"-\s*\*\*Candidate Name:\*\*\s*(.+)", content)
    channel_match = re.search(r"-\s*\*\*Channel / Location:\*\*\s*(.+)", content)
    referral_match = re.search(r"-\s*\*\*Referral / Source:\*\*\s*(.+)", content)
    hyp_match = re.search(r"-\s*\*\*Related Hypotheses:\*\*\s*(.+)", content)
    
    # Extract qualitative sections
    routine_match = re.search(r"## 1\.\s*Day-In / Day-Out[^\n]*\n([\s\S]*?)(?=## 2\.|\Z)", content)
    workaround_match = re.search(r"## 2\.\s*Current Workarounds[^\n]*\n([\s\S]*?)(?=## 3\.|\Z)", content)
    stories_match = re.search(r"## 3\.\s*Past Actions & Stories[^\n]*\n([\s\S]*?)(?=## 4\.|\Z)", content)
    pains_match = re.search(r"## 4\.\s*Key Pains Identified[^\n]*\n([\s\S]*?)(?=## 5\.|\Z)", content)
    gains_match = re.search(r"## 5\.\s*Key Gains Identified[^\n]*\n([\s\S]*?)(?=---|##|\Z)", content)
    
    candidate_name = (candidate_match.group(1).strip() if candidate_match 
                      else (name_match.group(1).strip() if name_match else path.stem))
    
    data = {
        "file": str(path),
        "candidate": candidate_name,
        "date_logged": date_match.group(1).strip() if date_match else "N/A",
        "channel": channel_match.group(1).strip() if channel_match else "N/A",
        "referral": referral_match.group(1).strip() if referral_match else "N/A",
        "related_hypotheses": hyp_match.group(1).strip() if hyp_match else "N/A",
        "routine": routine_match.group(1).strip() if routine_match else "N/A",
        "workaround": workaround_match.group(1).strip() if workaround_match else "N/A",
        "past_stories": stories_match.group(1).strip() if stories_match else "N/A",
        "pains": pains_match.group(1).strip() if pains_match else "N/A",
        "gains": gains_match.group(1).strip() if gains_match else "N/A",
    }
    return data

def main():
    parser = argparse.ArgumentParser(description="Parse customer discovery markdown file.")
    parser.add_argument("--file", "-f", required=True, help="Path to interview markdown file")
    parser.add_argument("--json", action="store_true", help="Output pure JSON")
    args = parser.parse_args()
    
    data = parse_interview(args.file)
    print(json.dumps(data, indent=2))

if __name__ == "__main__":
    main()
