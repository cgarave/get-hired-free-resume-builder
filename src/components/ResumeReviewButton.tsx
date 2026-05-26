"use client";

import { useState } from "react";
import { Bot, Loader2 } from 'lucide-react'
import { ResumData } from '@/types/resume'

interface ReviewData {
  score: number,
  issues: string[],
  improvements: string[],
  bulletPointFeedback: [{
    original: string,
    issue: string,
    improved: string
  }],
  otherFeedback: [{
    original: string,
    issue: string,
    improved: string
  }]
}

type Props = {
    resume: ResumData
    setReviewData: React.Dispatch<React.SetStateAction<ReviewData>>
}

export default function ResumeReviewButton({ resume, setReviewData }: Props) {
  const [loading, setLoading] = useState(false);

  async function reviewResume() {
    setLoading(true);

    const response = await fetch("/api/ai/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resume: resume
      }),
    });

    const data = await response.json();
    const parsed = JSON.parse(data.result)
    
    setReviewData({
        score: parsed.score,
        issues: parsed.issues,
        improvements: parsed.improvements,
        bulletPointFeedback: parsed.bullet_point_feedback.map((item: { original: string, issue: string, improved: string}) => (
            {
                original: item.original,
                issue: item.issue,
                improved: item.improved
            }
        )),
        otherFeedback: parsed.other_feedback.map((item: { original: string, issue: string, improved: string}) => (
            {
                original: item.original,
                issue: item.issue,
                improved: item.improved
            }
        ))
    })
    setLoading(false);
  }

  const isEmptyFields = 
                        resume.personalInfo.fullName.length === 0 || 
                        resume.personalInfo.role.length === 0 ||
                        resume.personalInfo.email.length === 0 ||
                        resume.personalInfo.location.length === 0 || 
                        resume.personalInfo.phone.length === 0
  
  return (
    <button disabled={isEmptyFields || resume.sections.length === 0 ? true : false} onClick={reviewResume} className="w-full py-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white rounded font-medium text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
      {loading ? <>
                    <Loader2 size={20} className="animate-spin"/>
                    <span>Reviewing</span>
                </> 
                : <>
                    <span>Review Resume</span>
                    <Bot size={20} />
                </>}
      
    </button>
  );
}