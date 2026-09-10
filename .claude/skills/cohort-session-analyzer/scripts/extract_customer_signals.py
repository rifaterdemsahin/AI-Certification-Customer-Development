#!/usr/bin/env python3
"""
Extract customer discovery signals, speaker segments, and architectural references from cohort transcripts.
"""

import sys
import re
import argparse
from collections import defaultdict

def analyze_transcript(transcript_path):
    with open(transcript_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find turns
    pattern = r"(👨‍💻\s*Rifat|📈\s*Bora|👩‍💻\s*Sude|🌟\s*Marianna)"
    segments = re.split(pattern, content)

    speakers_count = defaultdict(int)
    tech_mentions = defaultdict(int)

    keywords = [
        "second brain", "obsidian", "cloudflare", "zero trust", "polymarket", 
        "kalshi", "hermes", "telegram", "neo4j", "qdrant", "postgres", 
        "google drive", "ocr", "contractor", "venture cafe", "cambridge", 
        "london", "anthropic", "langchain", "langgraph", "latenc", "party"
    ]

    for i in range(1, len(segments), 2):
        speaker = segments[i].strip()
        text = segments[i+1] if i+1 < len(segments) else ""
        speakers_count[speaker] += 1
        
        for kw in keywords:
            if re.search(r'\b' + re.escape(kw), text, re.IGNORECASE):
                tech_mentions[kw] += 1

    print("=== SPEAKER TURN COUNTS ===")
    for spk, cnt in sorted(speakers_count.items(), key=lambda x: x[1], reverse=True):
        print(f"{spk}: {cnt} speaking turns")

    print("\n=== TOPIC & KEYWORD FREQUENCY ===")
    for kw, cnt in sorted(tech_mentions.items(), key=lambda x: x[1], reverse=True):
        print(f"{kw}: {cnt} mentions")

def main():
    parser = argparse.ArgumentParser(description="Extract Customer Signals from Cohort Transcript")
    parser.add_argument("--transcript", help="Path to text transcript", default="/tmp/transcript.txt")
    args = parser.parse_args()

    analyze_transcript(args.transcript)

if __name__ == "__main__":
    main()
