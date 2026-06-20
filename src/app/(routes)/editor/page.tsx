'use client'

import { useState } from 'react'
import { useResumeData } from '@/hooks/useResumeData'
import { ResumeEditor } from '@/components/ResumeEditor'
import { ResumePreview } from '@/components/ResumePreview'
import { ActionButtons } from '@/components/ActionButtons'
import { Menu, X, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
    const {
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
    } = useResumeData()

    const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor')

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
                <div className="text-center space-y-3">
                    <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin mx-auto" />
                    <p className="text-slate-600 font-medium">Loading your resume…</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col md:h-screen md:overflow-hidden">
            {/* ── Header ── */}
            <header className="top-0 w-full shrink-0 z-40 border-b border-zinc-800 shadow-sm backdrop-blur-sm">
                <nav className="flex items-center justify-between px-6 py-5 gap-x-4">
                    <div className='flex flex-col gap-y-1'>
                        <Link href={'/'}><h1 className="text-xl font-bold leading-tight font-serif italic">Get Hired</h1></Link>
                        <p className='text-zinc-400 text-xs'>Build a professional ATS-friendly resume in minutes. No account required. No subscriptions. No paywalls. Ever.</p>
                    </div>
                    {/* Mobile toggle */}
                    <button onClick={() => setMobileView(mobileView === 'editor' ? 'preview' : 'editor')}
                        className="md:hidden flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors">
                        {mobileView === 'editor' ? <><Eye size={16} /> Preview</> : <><Menu size={16} /> Edit</>}
                    </button>
                </nav>
            </header>
            {/* <header className="no-print sticky top-0 w-full shrink-0 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="flex items-center justify-between px-5 py-3">
                    <Link href={'/'}><h1 className="text-xl font-bold text-slate-900 leading-tight font-serif italic">Get Hired</h1></Link>

                    <button
                        onClick={() => setMobileView(mobileView === 'editor' ? 'preview' : 'editor')}
                        className="md:hidden flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                    >
                        {mobileView === 'editor' ? <><Eye size={16} /> Preview</> : <><Menu size={16} /> Edit</>}
                    </button>
                </div>
            </header> */}

            {/* ── Main Layout ── */}
            <div className="flex flex-1 min-h-0">
                {/* Left — Editor */}
                <div className={`no-print shrink-0 w-full md:w-[380px] lg:w-[420px] border-r border-zinc-800 ${mobileView === 'editor' ? 'block' : 'hidden'} md:block`}>
                    <ResumeEditor
                        data={resume}
                        onUpdatePersonalInfo={updatePersonalInfo}
                        onUpdateSectionTitle={updateSectionTitle}
                        onAddEntry={addEntry}
                        onUpdateEntry={updateEntry}
                        onDeleteEntry={deleteEntry}
                        onAddSection={addSection}
                        onDeleteSection={deleteSection}
                        onUpdateStyle={updateStyle}
                        onReset={resetResume}
                    />
                </div>

                {/* Right — Paged Preview */}
                <div className={`flex-1 min-w-0 overflow-auto ${mobileView === 'preview' ? 'block' : 'hidden'} md:block`} style={{ padding: '24px' }}>
                    {/* A4-width centering wrapper */}
                    <div className="mx-auto" style={{ maxWidth: 794 }}>
                        <p className={'font-semibold text-xs text-zinc-500'}>A4</p>
                        <ResumePreview data={resume} />
                    </div>
                </div>
            </div>

            {/* ── Floating Export Buttons ── */}
            <ActionButtons data={resume} />
        </div>
    )
}
