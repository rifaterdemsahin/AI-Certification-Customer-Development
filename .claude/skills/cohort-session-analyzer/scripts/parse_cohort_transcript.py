#!/usr/bin/env python3
"""
Cohort Session PDF and Transcript Parser
Extracts text from PDF transcripts and architectural summaries.
"""

import sys
import argparse
import pypdf

def extract_text(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"\n--- Page {i+1} ---\n" + (page.extract_text() or "")
    return text

def main():
    parser = argparse.ArgumentParser(description="Parse Cohort Session PDFs")
    parser.add_argument("--summary", help="Path to Session Summary PDF", default="3_Simulation/Cohorts/session8_AI_Cohort_Summary_and_References.pdf")
    parser.add_argument("--transcript", help="Path to Session Transcript PDF", default="3_Simulation/Cohorts/session8_AI_Cohort_Transcript.pdf")
    parser.add_argument("--output_summary", help="Output text file for summary", default="/tmp/cohort_summary.txt")
    parser.add_argument("--output_transcript", help="Output text file for transcript", default="/tmp/cohort_transcript.txt")
    args = parser.parse_args()

    if args.summary:
        print(f"Parsing summary: {args.summary}")
        summary_text = extract_text(args.summary)
        with open(args.output_summary, "w") as f:
            f.write(summary_text)
        print(f"Saved summary text ({len(summary_text)} chars) to {args.output_summary}")

    if args.transcript:
        print(f"Parsing transcript: {args.transcript}")
        transcript_text = extract_text(args.transcript)
        with open(args.output_transcript, "w") as f:
            f.write(transcript_text)
        print(f"Saved transcript text ({len(transcript_text)} chars) to {args.output_transcript}")

if __name__ == "__main__":
    main()
