'use client'

import { useRef, useEffect, useState } from 'react'
import { ResumData } from '@/types/resume'
import { fontFamilyMap, fontSizeMap, spacingMap } from '@/lib/resume-defaults'

interface ResumePreviewProps {
  data: ResumData
}

// A4 at 96 dpi is 794 × 1123 px.
// We measure the rendered content and draw dashed page-break lines every A4_HEIGHT px.
const A4_HEIGHT = 1056 // slightly conservative so lines don't fall mid-line

export function ResumePreview({ data }: ResumePreviewProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [pageBreaks, setPageBreaks] = useState<number[]>([])

  // Recalculate page-break positions whenever data changes
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const update = () => {
      const h = el.scrollHeight
      const count = Math.max(1, Math.ceil(h / A4_HEIGHT))
      setPageBreaks(
        Array.from({ length: count - 1 }, (_, i) => (i + 1) * A4_HEIGHT)
      )
    }
    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    return () => ro.disconnect()
  }, [data])

  const fontSizes = fontSizeMap[data.style.fontSize]
  const fontFamily = fontFamilyMap[data.style.fontFamily] ?? fontFamilyMap.sans
  const spacing = spacingMap[data.style.spacing]
  const accent = data.style.accent

  // Render a description string as a bullet list when it has multiple lines
  const renderDescription = (description: string | undefined) => {
    if (!description?.trim()) return null
    const lines = description.split('\n').map((l) => l.trim()).filter(Boolean)
    if (lines.length === 1) {
      return (
        <p style={{ fontSize: fontSizes.body, color: '#555', marginTop: 4 }}>
          {lines[0]}
        </p>
      )
    }
    return (
      <ul style={{ paddingLeft: 18, margin: '4px 0 0', listStyleType: 'disc' }}>
        {lines.map((line, i) => (
          <li key={i} style={{ fontSize: fontSizes.body, color: '#555', marginBottom: 2 }}>
            {line}
          </li>
        ))}
      </ul>
    )
  }

  // Section-type-aware entry renderer
  const renderEntry = (
    entry: Record<string, string | undefined>,
    sectionType: string,
    isLast: boolean,
    itemMargin: string
  ) => {
    const divider = !isLast ? (
      <div style={{ borderBottom: '1px solid #e5e7eb', marginTop: itemMargin }} />
    ) : null

    switch (sectionType) {
      case 'experience':
        return (
          <div key={entry.id} style={{ marginBottom: itemMargin }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 600, fontSize: fontSizes.body }}>{entry.position}</span>
              <span style={{ fontSize: fontSizes.body, color: '#666', marginLeft: 8, whiteSpace: 'nowrap' }}>
                {entry.duration}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <em style={{ fontSize: fontSizes.body, color: '#555' }}>{entry.company}</em>
              <span style={{ fontSize: fontSizes.body, color: '#666' }}>{entry.location}</span>
            </div>
            {renderDescription(entry.description)}
            {divider}
          </div>
        )

      case 'education':
        return (
          <div key={entry.id} style={{ marginBottom: itemMargin }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 600, fontSize: fontSizes.body }}>{entry.degree}</span>
              <span style={{ fontSize: fontSizes.body, color: '#666', marginLeft: 8 }}>{entry.graduation}</span>
            </div>
            <em style={{ fontSize: fontSizes.body, color: '#555', display: 'block' }}>{entry.school}</em>
            {entry.field && (
              <span style={{ fontSize: fontSizes.body, color: '#666' }}>{entry.field}</span>
            )}
            {renderDescription(entry.description)}
            {divider}
          </div>
        )

      case 'skills':
        return (
          <div key={entry.id} style={{ fontSize: fontSizes.body, color: '#444' }}>
            {entry.skills}
          </div>
        )

      default:
        // custom / generic section
        return (
          <div key={entry.id} style={{ marginBottom: itemMargin }}>
            {(entry.title || entry.date) && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600, fontSize: fontSizes.body }}>{entry.title}</span>
                <span style={{ fontSize: fontSizes.body, color: '#666', marginLeft: 8 }}>{entry.date}</span>
              </div>
            )}
            {entry.organization && (
              <em style={{ fontSize: fontSizes.body, color: '#555', display: 'block' }}>
                {entry.organization}
              </em>
            )}
            {renderDescription(entry.description)}
            {/* Fallback: any remaining keys not yet rendered */}
            {Object.entries(entry).map(([k, v]) => {
              if (['id', 'title', 'organization', 'date', 'description'].includes(k) || !v) return null
              return (
                <div key={k} style={{ fontSize: fontSizes.body, color: '#444' }}>
                  <strong style={{ textTransform: 'capitalize' }}>{k}: </strong>{v}
                </div>
              )
            })}
            {divider}
          </div>
        )
    }
  }

  return (
    // Outer wrapper — gray "desk" background to give depth
    <div className="relative bg-white shadow-lg" style={{ fontFamily }}>
      {/* The actual printable resume content */}
      <div
        ref={contentRef}
        id="resume-preview"
        style={{
          padding: '48px',
          fontSize: fontSizes.body,
          color: '#333',
          lineHeight: 1.55,
          minHeight: A4_HEIGHT,
          backgroundColor: '#fff',
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '5px',
            paddingBottom: '5px',
            marginBottom: spacing.section,
          }}
        >
          <h1
            style={{
              fontSize: fontSizes.heading,
              fontWeight: 700,
              color: accent,
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            {data.personalInfo.fullName}
          </h1>
          <h2 style={{
              fontSize: fontSizes.subheading,
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#555',
              marginTop: 10,
              letterSpacing: '-0.5px',
          }}>
              {data.personalInfo.role}
          </h2>

          {/* Contact row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '6px',
              marginTop: 10,
              fontSize: fontSizes.body,
              color: '#555',
            }}
          >
            {[
              data.personalInfo.location,
              data.personalInfo.email && (
                <a href={`mailto:${data.personalInfo.email}`} style={{ color: 'inherit' }}>
                  {data.personalInfo.email}
                </a>
              ),
              data.personalInfo.phone,
              data.personalInfo.website && (
                <a href={data.personalInfo.website} style={{ color: 'inherit' }}>
                  {data.personalInfo.website}
                </a>
              ),
            ]
              .filter(Boolean)
              .map((item, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {item}
                  {i < arr.length - 1 && <span style={{ color: '#999' }}>•</span>}
                </span>
              ))}
          </div>
        </div>

        {/* ── Sections ── */}
        {data.sections.map((section) => (
          <div key={section.id} style={{ marginBottom: spacing.section }}>
            {/* Section title */}
            <h2
              style={{
                fontSize: fontSizes.subheading,
                fontWeight: 700,
                color: accent,
                borderBottom: `2px solid ${accent}`,
                paddingBottom: 4,
                marginBottom: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {section.title}
            </h2>

            {/* Entries */}
            {section.entries.length === 0 ? (
              <p style={{ fontSize: fontSizes.body, color: '#aaa', fontStyle: 'italic' }}>
                No entries yet.
              </p>
            ) : (
              section.entries.map((entry, i) =>
                renderEntry(
                  entry as Record<string, string | undefined>,
                  section.type,
                  i === section.entries.length - 1,
                  spacing.item
                )
              )
            )}
          </div>
        ))}
      </div>

      {/* ── Visual page-break indicators (screen only, hidden in pdf) ── */}
      {pageBreaks.map((pos) => (
        <div
          key={pos}
          className="no-print"
          style={{
            position: 'absolute',
            top: pos,
            left: 0,
            right: 0,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          {/* Gray gap simulating paper separation */}
          <div
            style={{
              height: 24,
              background: 'linear-gradient(to bottom, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: '#94a3b8',
                fontFamily: 'system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              ── Page Break ──
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
