import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { buildResumePrompt } from "@/lib/prompts";
import { canMakeRequest } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";

    if (!canMakeRequest(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { resume } = body;

    if (!resume) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 }
      );
    }

    const prompt = buildResumePrompt(resume);

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    return NextResponse.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "AI request failed" },
      { status: 500 }
    );
  }
}