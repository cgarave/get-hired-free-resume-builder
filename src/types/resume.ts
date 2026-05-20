export type SectionType = 'experience' | 'education' | 'skills' | 'custom'

export interface ResumeSection {
  id: string
  title: string
  type: SectionType
  entries: ResumeEntry[]
}

export interface ResumeEntry {
  id: string
  [key: string]: string | undefined
}

export interface ResumeStyle {
  fontSize: 'small' | 'medium' | 'large'
  fontFamily: 'sans' | 'serif' | 'times' | 'mono'
  accent: string
  spacing: 'compact' | 'normal' | 'spacious'
}

export interface ResumData {
  personalInfo: {
    fullName: string
    role: string
    email: string
    phone: string
    location: string
    website: string
  }
  sections: ResumeSection[]
  style: ResumeStyle
}