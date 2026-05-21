'use client'

import { useState } from 'react'
import { ResumData, SectionType } from '@/types/resume'
import { fieldLabels, fontFamilyLabels, fontSizeMap, spacingMap } from '@/lib/resume-defaults'
import {
  Plus, Trash2, ChevronDown, ChevronUp, Sliders, RotateCcw,
} from 'lucide-react'

interface ResumeEditorProps {
  data: ResumData
  onUpdatePersonalInfo: (field: "fullName" | "role" | "email" | "phone" | "location" | "website", value: string) => void
  onUpdateSectionTitle: (sectionId: string, title: string) => void
  onAddEntry: (sectionId: string) => void
  onUpdateEntry: (sectionId: string, entryId: string, field: string, value: string) => void
  onDeleteEntry: (sectionId: string, entryId: string) => void
  onAddSection: (title: string, type: SectionType) => void
  onDeleteSection: (sectionId: string) => void
  onUpdateStyle: (field: "fontSize" | "fontFamily" | "accent" | "spacing", value: string) => void
  onReset: () => void
}

const ACCENT_COLORS = [
  { name: 'Slate', value: '#1e293b' },
  { name: 'Blue', value: '#0066cc' },
  { name: 'Green', value: '#059669' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Purple', value: '#7c3aed' },
  { name: 'Gray', value: '#6b7280' },
  { name: 'Black', value: '#000000' },
]

export function ResumeEditor({
  data,
  onUpdatePersonalInfo,
  onUpdateSectionTitle,
  onAddEntry,
  onUpdateEntry,
  onDeleteEntry,
  onAddSection,
  onDeleteSection,
  onUpdateStyle,
  onReset,
}: ResumeEditorProps) {
  const [styleOpen, setStyleOpen] = useState(false)
  const [personalOpen, setPersonalOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(data.sections.map((s) => s.id))
  )
  const [newSectionTitle, setNewSectionTitle] = useState('')
  const [newSectionType, setNewSectionType] = useState<SectionType>('custom')

  const toggleSection = (id: string) => {
    const next = new Set(expandedSections)
    next.has(id) ? next.delete(id) : next.add(id)
    setExpandedSections(next)
  }

  const handleAddSection = () => {
    if (newSectionTitle.trim()) {
      onAddSection(newSectionTitle.trim(), newSectionType)
      setNewSectionTitle('')
      setNewSectionType('custom')
    }
  }

  // Determines which fields to show in the entry editor based on section type
  const getEntryFields = (sectionId: string, entry: Record<string, string | undefined>) => {
    return Object.entries(entry).filter(([key]) => key !== 'id')
  }

  return (
    <div className="h-full md:overflow-y-scroll divide-y divide-gray-200">

      {/* ── Customize (Collapsible) ── */}
      <div>
        <button
          onClick={() => setStyleOpen(!styleOpen)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2 font-semibold text-gray-800">
            <Sliders size={16} className="text-blue-600" />
            Customize
          </div>
          {styleOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
        </button>

        {styleOpen && (
          <div className="px-5 pb-5 space-y-5 bg-blue-50/30 border-t border-blue-100">
            {/* Font Size */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Font Size</p>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => onUpdateStyle('fontSize', size)}
                    className={`flex-1 py-1.5 rounded text-sm font-medium border transition-colors ${
                      data.style.fontSize === size
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Family */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Font Family</p>
              <div className="space-y-1.5">
                {(Object.entries(fontFamilyLabels) as [string, string][]).map(([key, label]) => (
                  <label
                    key={key}
                    className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer border transition-colors ${
                      data.style.fontFamily === key
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="fontFamily"
                      value={key}
                      checked={data.style.fontFamily === key}
                      onChange={() => onUpdateStyle('fontFamily', key)}
                      className="sr-only"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Spacing */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Spacing</p>
              <div className="flex gap-2">
                {(['compact', 'normal', 'spacious'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => onUpdateStyle('spacing', s)}
                    className={`flex-1 py-1.5 rounded text-sm font-medium border transition-colors ${
                      data.style.spacing === s
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Accent Color</p>
              <div className="flex gap-2 flex-wrap mb-2">
                {ACCENT_COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => onUpdateStyle('accent', c.value)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                      data.style.accent === c.value ? 'border-gray-900 scale-110 ring-2 ring-offset-1 ring-gray-400' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={data.style.accent}
                  onChange={(e) => onUpdateStyle('accent', e.target.value)}
                  className="w-9 h-9 rounded cursor-pointer border border-gray-300"
                />
                <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 flex-1">{data.style.accent}</code>
                <button
                  onClick={onReset}
                  className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 border border-red-200"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Personal Information (Collapsible) ── */}
      <div>
        <button
          onClick={() => setPersonalOpen(!personalOpen)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-800">Personal Information</span>
          {personalOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
        </button>

        {personalOpen && (
          <div className="px-5 pb-5 space-y-3 border-t border-gray-100">
            {(
              [
                ['fullName', 'Full Name', 'text'],
                ['role', 'Role', 'text'],
                ['email', 'Email', 'email'],
                ['phone', 'Phone', 'tel'],
                ['location', 'Location', 'text'],
                ['website', 'Website / Portfolio URL', 'url'],
              ] as const
            ).map(([field, label, type]) => (
              <div key={field} className="pt-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input
                  type={type}
                  value={data.personalInfo[field]}
                  onChange={(e) => onUpdatePersonalInfo(field, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Sections ── */}
      <div className="px-5 py-4">
        <p className="font-semibold text-gray-800 mb-3">Sections</p>

        <div className="space-y-2 mb-4">
          {data.sections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Section header */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 transition-colors">
                <button
                  className="flex items-center gap-2 flex-1 p-3 text-left"
                  onClick={() => toggleSection(section.id)}
                >
                  {expandedSections.has(section.id)
                    ? <ChevronUp size={16} className="text-gray-500 shrink-0" />
                    : <ChevronDown size={16} className="text-gray-500 shrink-0" />}
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => onUpdateSectionTitle(section.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold text-sm text-gray-800 bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 flex-1 min-w-0"
                  />
                </button>
                {/* Delete button — available on ALL sections */}
                <button
                  onClick={() => onDeleteSection(section.id)}
                  className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Delete section"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              {/* Entries */}
              {expandedSections.has(section.id) && (
                <div className="p-3 space-y-3 border-t border-gray-100 bg-white">
                  {section.entries.length === 0 && (
                    <p className="text-xs text-gray-400 italic text-center py-2">No entries yet — click Add Entry below.</p>
                  )}

                  {section.entries.map((entry, idx) => (
                    <div
                      key={entry.id}
                      className={`space-y-2 ${idx < section.entries.length - 1 ? 'pb-3 border-b border-dashed border-gray-200' : ''}`}
                    >
                      {getEntryFields(section.id, entry as Record<string, string | undefined>).map(([key, value]) => (
                        <div key={key}>
                          <label className="block text-xs font-medium text-gray-500 mb-0.5">
                            {fieldLabels[key] ?? key}
                          </label>
                          <textarea
                            value={(value as string) ?? ''}
                            onChange={(e) => onUpdateEntry(section.id, entry.id, key, e.target.value)}
                            placeholder={
                              key === 'description'
                                ? 'Each line becomes a bullet point…'
                                : (fieldLabels[key] ?? key)
                            }
                            rows={key === 'description' ? 4 : key === 'skills' ? 3 : 1}
                            className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent leading-relaxed"
                          />
                          {key === 'description' && (
                            <p className="text-[10px] text-gray-400 mt-0.5">↵ Each new line = one bullet point in the preview</p>
                          )}
                        </div>
                      ))}

                      <button
                        onClick={() => onDeleteEntry(section.id, entry.id)}
                        className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={12} /> Remove entry
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => onAddEntry(section.id)}
                    className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded border border-blue-200 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Plus size={15} /> Add Entry
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add new section */}
        <div className="border border-dashed border-gray-300 rounded-lg p-3 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Add New Section</p>
          <input
            type="text"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddSection()}
            placeholder="Section name (e.g. Languages, Volunteer)"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newSectionType}
            onChange={(e) => setNewSectionType(e.target.value as SectionType)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="experience">Experience style (position, company, duration…)</option>
            <option value="education">Education style (degree, school, graduation…)</option>
            <option value="skills">Skills style (skills list)</option>
            <option value="custom">Custom style (title, organization, date…)</option>
          </select>
          <button
            onClick={handleAddSection}
            disabled={!newSectionTitle.trim()}
            className="w-full py-2 bg-green-600 hover:bg-green-700 disabled:opacity-40 text-white rounded font-medium text-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <Plus size={15} /> Add Section
          </button>
        </div>
      </div>
    </div>
  )
}
