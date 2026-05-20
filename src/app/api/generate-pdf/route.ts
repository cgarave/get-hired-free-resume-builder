import { NextRequest, NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { ResumePDFDocument } from '@/components/ResumePDFDocument'
import { ResumData } from '@/types/resume'

export const runtime = 'nodejs'
export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ResumData

    if (!data?.personalInfo) {
      return NextResponse.json({ error: 'Invalid resume data' }, { status: 400 })
    }

    // ResumePDFDocument uses only built-in PDF fonts —
    // no network requests, no Chromium, works on any platform including Vercel free tier.
    const element = ResumePDFDocument({ data })
    const pdfBuffer = await renderToBuffer(element)

    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error('renderToBuffer returned an empty buffer')
    }

    const name = (data.personalInfo.fullName || 'resume').replace(/[^a-z0-9 \-_]/gi, '').trim()
    const filename = `${name}-resume.pdf`

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"`,
        'Content-Length': String(pdfBuffer.length),
      },
    })
  } catch (error) {
    // Log the full error on the server so you can see it in `npm run dev` terminal
    console.error('[generate-pdf] Error:', error)

    return NextResponse.json(
      {
        error: 'Failed to generate PDF',
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}
