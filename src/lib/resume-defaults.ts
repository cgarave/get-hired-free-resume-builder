import { ResumData, SectionType } from '@/types/resume'

// Entry templates per section type — fixes the wrong labels bug
export const entryTemplates: Record<SectionType, Record<string, string>> = {
  experience: {
    position: '',
    company: '',
    duration: '',
    location: '',
    description: '',
  },
  education: {
    degree: '',
    field: '',
    school: '',
    graduation: '',
    description: '',
  },
  skills: {
    skills: '',
  },
  custom: {
    title: '',
    organization: '',
    date: '',
    description: '',
  },
}

// Human-readable labels for each field key
export const fieldLabels: Record<string, string> = {
  position: 'Position / Job Title',
  company: 'Company',
  duration: 'Duration (e.g. Jan 2024 — Dec 2024)',
  location: 'Location',
  description: 'Description (each new line = one bullet)',
  degree: 'Degree (e.g. Bachelor of Science)',
  field: 'Field of Study',
  school: 'School / University',
  graduation: 'Graduation Year',
  skills: 'Skills (comma-separated)',
  title: 'Title',
  organization: 'Organization',
  date: 'Date / Year',
}

export const defaultResumeData: ResumData = {
  personalInfo: {
    fullName: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    website: '',
  },
  sections: [],
  style: {
    fontSize: 'medium',
    fontFamily: 'sans',
    accent: '#1e293b',
    spacing: 'normal',
  },
}

export const fontSizeMap = {
  small: { heading: '28px', subheading: '14px', body: '10px' },
  medium: { heading: '32px', subheading: '15px', body: '11px' },
  large: { heading: '36px', subheading: '16px', body: '13px' },
}

export const fontFamilyMap: Record<string, string> = {
  sans: 'Inter, system-ui, sans-serif',
  serif: '"Merriweather", serif',
  times: '"Times New Roman", Times, serif',
  mono: '"FiraCode", monospace',
}

export const fontFamilyLabels: Record<string, string> = {
  sans: 'Sans-serif (Inter)',
  serif: 'Serif (Merriweather)',
  times: 'Times New Roman',
  mono: 'Fira Code (Monospace)',
}

export const spacingMap = {
  compact: { section: '16px', item: '8px', gap: '4px' },
  normal: { section: '24px', item: '12px', gap: '6px' },
  spacious: { section: '32px', item: '16px', gap: '8px' },
}

export function generateUUID(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
