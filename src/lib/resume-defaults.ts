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
    fullName: 'Ravfore Jinoe Flores',
    role: 'Software Engineer',
    email: 'reyflores40@gmail.com',
    phone: '+63 976-199-5527',
    location: 'Philippines',
    website: 'https://raveflores.vercel.app',
  },
  sections: [
    {
      id: 'experience',
      title: 'EXPERIENCE',
      type: 'experience',
      entries: [
        {
          id: '1',
          position: 'Frontend Designer & Developer',
          company: 'Trentis Corporation',
          duration: 'Feb 2025 — Nov 2025',
          location: 'BGC, Taguig, Philippines',
          description:
            'Led frontend engineering efforts by developing and maintaining scalable web platform features.\nCollaborated closely with Product, UI/UX, Marketing, and Sponsorship teams.\nBuilt internal tools and automation systems that reduced manual processes by nearly 70%.',
        },
        {
          id: '2',
          position: 'Marketing Web Design Analyst',
          company: 'Avantice Corporation',
          duration: 'Jun 2024 — Dec 2024',
          location: 'Makati, Philippines',
          description:
            'Created promotional banners, videos, and web content while maintaining consistent brand identity.\nContributed to frontend development by resolving technical issues and building new features.\nDeveloped my first internal tool automation system that improved team efficiency.',
        },
      ],
    },
    {
      id: 'education',
      title: 'EDUCATION',
      type: 'education',
      entries: [
        {
          id: '1',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          school: 'University Name',
          graduation: '2023',
          description: 'Relevant coursework and honors',
        },
      ],
    },
    {
      id: 'skills',
      title: 'SKILLS',
      type: 'skills',
      entries: [
        {
          id: '1',
          skills:
            'Frontend Development, Backend Development, API Integration, Digital Design, User Interface and Experience Design, Video Editing, Email Marketing Campaign',
        },
      ],
    },
  ],
  style: {
    fontSize: 'medium',
    fontFamily: 'sans',
    accent: '#1e293b',
    spacing: 'normal',
  },
}

export const fontSizeMap = {
  small: { heading: '28px', subheading: '14px', body: '11px' },
  medium: { heading: '32px', subheading: '15px', body: '12px' },
  large: { heading: '36px', subheading: '16px', body: '13px' },
}

export const fontFamilyMap: Record<string, string> = {
  sans: 'Inter, system-ui, sans-serif',
  serif: 'Merriweather, Georgia, serif',
  times: '"Times New Roman", Times, serif',
  mono: '"Fira Code", monospace',
}

export const fontFamilyLabels: Record<string, string> = {
  sans: 'Sans-serif (Inter)',
  serif: 'Serif (Merriweather)',
  times: 'Times New Roman',
  mono: 'Monospace (Fira Code)',
}

export const spacingMap = {
  compact: { section: '16px', item: '8px', gap: '4px' },
  normal: { section: '24px', item: '12px', gap: '6px' },
  spacious: { section: '32px', item: '16px', gap: '8px' },
}

export function generateUUID(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
