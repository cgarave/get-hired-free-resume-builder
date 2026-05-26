import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet, Font,
} from '@react-pdf/renderer'
import { ResumData } from '@/types/resume'
import { fontSizeMap, spacingMap } from '@/lib/resume-defaults'
import path from 'path'

/**
 * Built-in PDF fonts — no Font.register(), no network requests, never blank.
 *
 * @react-pdf/renderer ships these out of the box:
 *   Helvetica / Helvetica-Bold / Helvetica-Oblique         (sans-serif)
 *   Times-Roman / Times-Bold / Times-Italic                 (serif / Times New Roman)
 *   Courier / Courier-Bold / Courier-Oblique                (monospace)
 *
 * Bold/italic must be set via fontFamily, NOT fontWeight/fontStyle,
 * unless you've registered variants with Font.register().
 */

Font.register({
  family: 'Merriweather',
  fonts: [
    {
      src: path.join(
          process.cwd(),
          'public/fonts/Merriweather_24pt-Regular.ttf'
      ),
      fontWeight: 400,
    },
    {
      src: path.join(
          process.cwd(),
          'public/fonts/Merriweather_24pt-Bold.ttf'
      ),
      fontWeight: 700,
    },
    {
      src: path.join(
          process.cwd(),
          'public/fonts/Merriweather_24pt-Italic.ttf'
      ),
      fontStyle: 'italic'
    },
  ],
})

Font.register({
  family: 'FiraCode',
  fonts: [
    {
      src: path.join(
          process.cwd(),
          'public/fonts/FiraCode-Regular.ttf'
      ),
      fontWeight: 400,
    },
    {
      src: path.join(
          process.cwd(),
          'public/fonts/FiraCode-Medium.ttf'
      ),
      fontWeight: 700,
    }
  ],
})

const PDF_FONTS: Record<string, { regular: string; bold: string; italic: string }> = {
  sans:  { regular: 'Helvetica',   bold: 'Helvetica-Bold',   italic: 'Helvetica-Oblique' },
  serif:  { regular: 'Merriweather',   bold: 'Merriweather',   italic: 'Merriweather' },
  times: { regular: 'Times-Roman', bold: 'Times-Bold',       italic: 'Times-Italic'      },
  mono:  { regular: 'FiraCode',     bold: 'FiraCode',     italic: 'Courier-Oblique'   },
}

interface Props { data: ResumData }

export function ResumePDFDocument({ data }: Props) {
  const sizes   = fontSizeMap[data.style.fontSize]
  const spacing = spacingMap[data.style.spacing]
  const accent  = data.style.accent
  const fonts   = PDF_FONTS[data.style.fontFamily] ?? PDF_FONTS.sans

  // Convert px strings to pt (PDF uses points; 1 px ≈ 0.75 pt)
  const pt = (v: string) => Math.round(parseFloat(v) * 0.75)

  const styles = StyleSheet.create({
    page: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#333333',
      paddingTop: 40,
      paddingBottom: 40,
      paddingHorizontal: 50,
      lineHeight: 1.5,
      backgroundColor: '#ffffff',
    },
    /* ── Header ── */
    headerWrap: {
      borderColor: accent,
      marginBottom: pt(spacing.section),
      alignItems: 'center',
    },
    name: {
      fontFamily: fonts.bold,
      fontWeight: '700',
      fontSize: pt(sizes.heading),
      color: accent,
      textAlign: 'center',
    },
    role: {
      fontFamily: fonts.italic,
      fontStyle: 'italic',
      fontSize: pt('16px'),
      color: '#555',
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 5,
    },
    contactItem: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#555555',
    },
    dot: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#999999',
      marginHorizontal: 4,
    },
    /* ── Section ── */
    sectionWrap: {
      marginBottom: pt(spacing.section),
    },
    sectionTitle: {
      fontFamily: fonts.bold,
      fontWeight: '700',
      fontSize: pt(sizes.subheading),
      color: accent,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      borderBottomWidth: 1.5,
      borderColor: accent,
      paddingBottom: 3,
      marginBottom: 8,
    },
    /* ── Entry ── */
    entryWrap: {
      marginBottom: pt(spacing.item),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    entryTitle: {
      fontFamily: fonts.bold,
      fontWeight: '700',
      fontSize: pt(sizes.body),
      color: '#222222',
      flex: 1,
    },
    entryRight: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#666666',
      marginLeft: 8,
    },
    entrySubtitle: {
      fontFamily: fonts.italic,
      fontStyle: 'italic',
      fontSize: pt(sizes.body),
      color: '#555555',
      flex: 1,
    },
    entryLight: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#666666',
    },
    /* ── Bullets ── */
    bulletList: {
      marginTop: 3,
      paddingLeft: 10,
    },
    bulletRow: {
      flexDirection: 'row',
      marginBottom: 2,
    },
    bulletDot: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#555555',
      width: 12,
    },
    bulletText: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#555555',
      flex: 1,
    },
    /* ── Skills ── */
    skillsText: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#444444',
    },
    /* ── Divider between entries ── */
    divider: {
      borderBottomWidth: 0.5,
      borderColor: '#e5e7eb',
      marginBottom: pt(spacing.item),
    },
    emptyNote: {
      fontFamily: fonts.italic,
      fontStyle: 'italic',
      fontSize: pt(sizes.body) - 1,
      color: '#aaaaaa',
    },
    linkText: {
      fontFamily: fonts.regular,
      fontSize: pt(sizes.body),
      color: '#555555',
      textDecoration: 'none',
    },
  })

  /** Splits a description string into an array of bullet lines */
  const toBullets = (text: string | undefined): string[] => {
    if (!text?.trim()) return []
    return text.split('\n').map(l => l.trim()).filter(Boolean)
  }

  const renderBullets = (text: string | undefined) => {
    const lines = toBullets(text)
    if (!lines.length) return null
    return (
      <View style={styles.bulletList}>
        {lines.map((line, i) => (
          <View key={i} style={styles.bulletRow}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>{line}</Text>
          </View>
        ))}
      </View>
    )
  }

  const renderEntry = (
    entry: Record<string, string | undefined>,
    type: string,
    isLast: boolean
  ) => {
    const divider = !isLast ? <View style={styles.divider} /> : null

    switch (type) {
      case 'experience':
        return (
          <View key={entry.id} style={styles.entryWrap}>
            <View style={styles.row}>
              <Text style={styles.entryTitle}>{entry.position}</Text>
              <Text style={styles.entryRight}>{entry.duration}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.entrySubtitle}>{entry.company}</Text>
              <Text style={styles.entryLight}>{entry.location}</Text>
            </View>
            {renderBullets(entry.description)}
            {divider}
          </View>
        )

      case 'education':
        return (
          <View key={entry.id} style={styles.entryWrap}>
            <View style={styles.row}>
              <Text style={styles.entryTitle}>{entry.degree}</Text>
              <Text style={styles.entryRight}>{entry.graduation}</Text>
            </View>
            <Text style={styles.entrySubtitle}>{entry.school}</Text>
            {entry.field ? <Text style={styles.entryLight}>{entry.field}</Text> : null}
            {renderBullets(entry.description)}
            {divider}
          </View>
        )

      case 'skills':
        return (
          <View key={entry.id} style={styles.entryWrap}>
            <Text style={styles.skillsText}>{entry.skills}</Text>
          </View>
        )

      default:
        return (
          <View key={entry.id} style={styles.entryWrap}>
            <View style={styles.row}>
              <Text style={styles.entryTitle}>{entry.title}</Text>
              <Text style={styles.entryRight}>{entry.date}</Text>
            </View>
            {entry.organization
              ? <Text style={styles.entrySubtitle}>{entry.organization}</Text>
              : null}
            {renderBullets(entry.description)}
            {Object.entries(entry).map(([k, v]) => {
              if (['id','title','organization','date','description'].includes(k) || !v) return null
              return <Text key={k} style={styles.entryLight}>{k}: {v}</Text>
            })}
            {divider}
          </View>
        )
    }
  }

  const { personalInfo: pi, sections } = data
  const contactItems = [
    pi.location,
    pi.email,
    pi.phone,
    pi.website,
  ].filter(Boolean) as string[]

  return (
    <Document
      title={`${pi.fullName} — Resume`}
      author={pi.fullName}
      creator="Get Hired"
    >
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.headerWrap}>
          <Text style={styles.name}>{pi.fullName}</Text>
          <Text style={styles.role}>{pi.role}</Text>

          {/* Contact row with dots between items */}
          <View style={styles.contactRow}>
            {contactItems.map((item, i) => {
              const isEmail = item.includes('@')
              const isUrl   = item.startsWith('http')
              return (
                <React.Fragment key={i}>
                  {isEmail || isUrl
                    ? (
                      <Link
                        src={isEmail ? `mailto:${item}` : item}
                        style={styles.linkText}
                      >
                        {item}
                      </Link>
                    )
                    : <Text style={styles.contactItem}>{item}</Text>
                  }
                  {i < contactItems.length - 1 && (
                    <Text style={styles.dot}> • </Text>
                  )}
                </React.Fragment>
              )
            })}
          </View>
        </View>

        {/* ── Sections ── */}
        {sections.map(section => (
          <View key={section.id} style={styles.sectionWrap}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.entries.length === 0
              ? <Text style={styles.emptyNote}>No entries yet.</Text>
              : section.entries.map((entry, i) =>
                  renderEntry(
                    entry as Record<string, string | undefined>,
                    section.type,
                    i === section.entries.length - 1
                  )
                )
            }
          </View>
        ))}

      </Page>
    </Document>
  )
}
