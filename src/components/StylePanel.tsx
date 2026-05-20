'use client'

import { ResumData } from '@/types/resume'
import { Sliders } from 'lucide-react'

interface StylePanelProps {
  data: ResumData
  onUpdateStyle: (field: string, value: any) => void
  onReset: () => void
}

export function StylePanel({ data, onUpdateStyle, onReset }: StylePanelProps) {
  const colors = [
    { name: 'Slate', value: '#1e293b' },
    { name: 'Blue', value: '#0066cc' },
    { name: 'Green', value: '#059669' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Gray', value: '#6b7280' },
    { name: 'Black', value: '#000000' },
  ]

  return (
    <div className="h-full overflow-y-auto bg-white p-6 border-l border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Sliders size={24} className="text-gray-700" />
        <h2 className="text-xl font-bold text-gray-900">Customize</h2>
      </div>

      {/* Font Size */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Font Size</h3>
        <div className="space-y-2">
          {(['small', 'medium', 'large'] as const).map((size) => (
            <label key={size} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fontSize"
                value={size}
                checked={data.style.fontSize === size}
                onChange={(e) => onUpdateStyle('fontSize', e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm capitalize text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Font Family */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Font Family</h3>
        <div className="space-y-2">
          {(['sans', 'serif', 'mono'] as const).map((font) => (
            <label key={font} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fontFamily"
                value={font}
                checked={data.style.fontFamily === font}
                onChange={(e) => onUpdateStyle('fontFamily', e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm capitalize text-gray-700">{font}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Spacing */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Spacing</h3>
        <div className="space-y-2">
          {(['compact', 'normal', 'spacious'] as const).map((space) => (
            <label key={space} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="spacing"
                value={space}
                checked={data.style.spacing === space}
                onChange={(e) => onUpdateStyle('spacing', e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm capitalize text-gray-700">{space}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Accent Color</h3>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => onUpdateStyle('accent', color.value)}
              className={`w-12 h-12 rounded border-2 transition-transform hover:scale-110 ${
                data.style.accent === color.value
                  ? 'border-gray-900 scale-110'
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="color"
            value={data.style.accent}
            onChange={(e) => onUpdateStyle('accent', e.target.value)}
            className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
          />
          <div className="flex-1 flex items-center">
            <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded flex-1">
              {data.style.accent}
            </code>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full py-2 px-4 bg-red-50 text-red-700 rounded-md hover:bg-red-100 border border-red-200 font-medium text-sm transition-colors"
      >
        Reset to Default
      </button>
    </div>
  )
}
