'use client'

import { useState, useEffect, useCallback } from 'react'
import { ResumData, ResumeSection, SectionType } from '@/types/resume'
import { defaultResumeData, generateUUID, entryTemplates } from '@/lib/resume-defaults'

const STORAGE_KEY = 'resume_builder_data'

export function useResumeData() {
  const [resume, setResume] = useState<ResumData>(defaultResumeData)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setResume(JSON.parse(stored))
      } catch {
        setResume(defaultResumeData)
      }
    } else {
      setResume(defaultResumeData)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume))
    }
  }, [resume, isLoaded])

  const updatePersonalInfo = useCallback(
    (field: keyof typeof resume.personalInfo, value: string) => {
      setResume((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, [field]: value },
      }))
    },
    []
  )

  const updateSectionTitle = useCallback((sectionId: string, title: string) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((s) =>
        s.id === sectionId ? { ...s, title } : s
      ),
    }))
  }, [])

  // Uses the section's type to pick the right entry template — fixes wrong labels bug
  const addEntry = useCallback((sectionId: string) => {
    setResume((prev) => {
      const section = prev.sections.find((s) => s.id === sectionId)
      if (!section) return prev

      const template = entryTemplates[section.type] ?? entryTemplates.custom
      const newEntry = { id: generateUUID(), ...template }

      return {
        ...prev,
        sections: prev.sections.map((s) =>
          s.id === sectionId ? { ...s, entries: [...s.entries, newEntry] } : s
        ),
      }
    })
  }, [])

  const updateEntry = useCallback(
    (sectionId: string, entryId: string, field: string, value: string) => {
      setResume((prev) => ({
        ...prev,
        sections: prev.sections.map((s) =>
          s.id === sectionId
            ? {
                ...s,
                entries: s.entries.map((e) =>
                  e.id === entryId ? { ...e, [field]: value } : e
                ),
              }
            : s
        ),
      }))
    },
    []
  )

  const deleteEntry = useCallback((sectionId: string, entryId: string) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((s) =>
        s.id === sectionId
          ? { ...s, entries: s.entries.filter((e) => e.id !== entryId) }
          : s
      ),
    }))
  }, [])

  // All sections (including built-ins) can now be added/deleted
  const addSection = useCallback((title: string, type: SectionType = 'custom') => {
    const newSection: ResumeSection = {
      id: generateUUID(),
      title: title.toUpperCase(),
      type,
      entries: [],
    }
    setResume((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }))
  }, [])

  const deleteSection = useCallback((sectionId: string) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.filter((s) => s.id !== sectionId),
    }))
  }, [])

  const updateStyle = useCallback((field: keyof typeof resume.style, value: string) => {
    setResume((prev) => ({
      ...prev,
      style: { ...prev.style, [field]: value },
    }))
  }, [])

  const resetResume = useCallback(() => {
    setResume(defaultResumeData)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return {
    resume,
    isLoaded,
    updatePersonalInfo,
    updateSectionTitle,
    addEntry,
    updateEntry,
    deleteEntry,
    addSection,
    deleteSection,
    updateStyle,
    resetResume,
  }
}
