'use client'

import { Download, FileJson, Share2 } from 'lucide-react'
import { ResumData } from '@/types/resume'

interface ActionButtonsProps {
  data: ResumData
}

export function ActionButtons({ data }: ActionButtonsProps) {
  const downloadAsJSON = () => {
    const element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2))
    )
    element.setAttribute('download', 'resume.json')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const downloadAsHTML = () => {
    const previewElement = document.getElementById('resume-preview')
    if (!previewElement) return

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.fullName} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: ${
              data.style.fontFamily === 'serif'
                ? 'Merriweather, Georgia, serif'
                : data.style.fontFamily === 'mono'
                  ? 'Fira Code, monospace'
                  : 'Inter, system-ui, sans-serif'
            };
            padding: 48px;
            background: white;
            color: #333;
            line-height: 1.5;
        }
        @media (max-width: 768px) {
            body {
                padding: 24px;
            }
        }
    </style>
</head>
<body>
    ${previewElement.innerHTML}
</body>
</html>
`

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent))
    element.setAttribute('download', `${data.personalInfo.fullName}-resume.html`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const downloadAsPDF = async () => {
    const previewElement = document.getElementById('resume-preview')
    if (!previewElement) {
      console.error('Resume preview element not found')
      return
    }

    try {
      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default

      const opt = {
        margin: [0, 0, 0, 0],
        filename: `${data.personalInfo.fullName}-resume.pdf`,
        image: { 
          type: 'png',  // Changed from jpeg to png for better quality
          quality: 1.0   // Maximum quality
        },
        html2canvas: { 
          scale: 5,      // Increased from 2 to 5 for higher resolution (can go up to 6-8)
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true  // Enable compression to keep file size reasonable
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],  // Better page break handling
        }
      }

      html2pdf().set(opt).from(previewElement).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }

  return (
    <div className="action-buttons fixed bottom-6 right-6 flex gap-3 flex-col sm:flex-row z-50">
      <button
        onClick={downloadAsJSON}
        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-all hover:shadow-xl active:scale-95 font-medium"
        title="Save resume as JSON file"
      >
        <FileJson size={20} />
        <span className="hidden sm:inline">JSON</span>
      </button>

      <button
        onClick={downloadAsHTML}
        className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg transition-all hover:shadow-xl active:scale-95 font-medium"
        title="Download resume as HTML"
      >
        <Download size={20} />
        <span className="hidden sm:inline">HTML</span>
      </button>

      <button
        onClick={downloadAsPDF}
        className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-lg transition-all hover:shadow-xl active:scale-95 font-medium"
        title="Download resume as PDF"
      >
        <Share2 size={20} />
        <span className="hidden sm:inline">PDF</span>
      </button>
    </div>
  )
}
