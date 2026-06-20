'use client'

import { useState } from 'react'
import { Download, FileJson, FileText, Loader2 } from 'lucide-react'
import { ResumData } from '@/types/resume'
import { addToDownloadsCount } from '@/lib/actions'

interface ActionButtonsProps {
  data: ResumData
}

export function ActionButtons({ data }: ActionButtonsProps) {
  const [pdfLoading, setPdfLoading] = useState(false)
  const [pdfError,   setPdfError]   = useState<string | null>(null)

  /* ── JSON backup ────────────────────────────────────── */
  const downloadAsJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url  = URL.createObjectURL(blob)
    const a    = Object.assign(document.createElement('a'), { href: url, download: `${data.personalInfo.fullName || 'resume'}-backup.json` })
    a.click()
    URL.revokeObjectURL(url)
  }

  /* ── HTML export ────────────────────────────────────── */
  const downloadAsHTML = () => {
    const el = document.getElementById('resume-preview')
    if (!el) return

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${data.personalInfo.fullName} — Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: white; }
    a { color: inherit; }
    ul { list-style-type: disc; }
  </style>
</head>
<body>${el.outerHTML}</body>
</html>`

    const blob = new Blob([html], { type: 'text/html' })
    const url  = URL.createObjectURL(blob)
    const a    = Object.assign(document.createElement('a'), { href: url, download: `${data.personalInfo.fullName || 'resume'}-resume.html` })
    a.click()
    URL.revokeObjectURL(url)
  }

  /* ── PDF via @react-pdf/renderer (no browser needed) ── */
  const downloadAsPDF = async () => {
    setPdfLoading(true)
    setPdfError(null)
    addToDownloadsCount()
    try {
      // Send the raw resume data — the server renders the PDF using @react-pdf/renderer
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.detail ?? `Server error ${response.status}`)
      }

      const blob     = await response.blob()
      const url      = URL.createObjectURL(blob)
      const filename = `${data.personalInfo.fullName || 'resume'}-resume.pdf`
      const a        = Object.assign(document.createElement('a'), { href: url, download: filename })
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err: any) {
      console.error('[PDF]', err)
      setPdfError(err.message ?? 'Unknown error')
    } finally {
      setPdfLoading(false)
    }
  }

  return (
    <>
      {/* Error toast */}
      {pdfError && (
        <div className="action-buttons no-print fixed bottom-24 right-6 z-50 max-w-xs bg-red-600 text-white text-sm rounded-xl px-4 py-3 shadow-xl">
          <strong>PDF failed:</strong> {pdfError}
          <button className="ml-3 underline opacity-80 hover:opacity-100" onClick={() => setPdfError(null)}>
            dismiss
          </button>
        </div>
      )}

      {/* Floating buttons */}
      <div className="action-buttons no-print fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-2">
        {/* JSON */}
        {/* <button
          onClick={downloadAsJSON}
          title="Download backup as JSON"
          className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl active:scale-95 font-medium transition-all">
          <FileJson size={18} />
          <span className="hidden sm:inline text-sm">JSON</span>
        </button> */}

        {/* HTML */}
        {/* <button
          onClick={downloadAsHTML}
          title="Download as HTML"
          className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl active:scale-95 font-medium transition-all"
        >
          <Download size={18} />
          <span className="hidden sm:inline text-sm">HTML</span>
        </button> */}

        {/* PDF */}
        <button
          onClick={downloadAsPDF}
          disabled={pdfLoading}
          title="Download as PDF"
          className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-white/80 disabled:opacity-60 disabled:cursor-wait text-slate-900 rounded-full shadow-lg hover:shadow-xl active:scale-95 font-medium transition-all cursor-pointer"
        >
          {pdfLoading
            ? <><Loader2 size={18} className="animate-spin" /><span className="hidden sm:inline text-sm">Generating…</span></>
            : <><Download size={18} /><span className="hidden sm:inline text-sm">Download as PDF</span></>}
        </button>
      </div>
    </>
  )
}
