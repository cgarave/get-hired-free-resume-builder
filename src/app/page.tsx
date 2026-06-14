import Link from 'next/link'
import Accordion from '@/components/Accordion'
import { Star } from 'lucide-react'


export default function Home() {
    return (
        <main className={'flex flex-col items-center gap-y-10'}>
            <header className="sticky top-0 w-full shrink-0 z-40 border-b border-zinc-800 shadow-sm backdrop-blur-sm">
                <nav className="flex items-center justify-between px-10 md:px-60 py-5">
                    <Link href={'/'}><h1 className="text-xl font-bold leading-tight font-serif italic">Get Hired</h1></Link>
                    <Link href={'/editor'}><button className='rounded-full py-2 px-5 bg-white hover:bg-white/80 text-slate-900 text-xs font-semibold uppercase'>Get Started</button></Link>
                </nav>
            </header>
            <div className={'flex flex-col gap-y-4 px-4 md:px-0 md:max-w-2xl text-center md:min-h-[80dvh] justify-center'}>
                <h1 className={'text-4xl md:text-6xl font-bold align-top leading-none'}>Simple Resumes.</h1>
                <h1 className={'text-4xl md:text-6xl font-bold align-top leading-none'}>Professional Results.</h1>
                <h1 className={'text-4xl md:text-6xl font-bold align-top leading-none font-serif italic'}>Get Hired.</h1>
                <p className='text-zinc-500 text-sm px-4 md:px-0 md:text-lg'>A modern, ATS-friendly resume builder designed for professionals by professionals — fully customizable and 100% free forever.</p>
                <Link href={'/editor'}>
                    <button className='rounded-full py-3 px-5 mt-4 md:mt-10 bg-white hover:bg-white/80 text-slate-900 text-sm font-semibold uppercase'>Create Resume</button>
                </Link>
                <div className="stats stats-horizontal shadow mt-10 uppercase font-semibold tracking-wider">
                    <div className="stat space-y-2">
                        <div className="stat-title text-zinc-500">Downloads</div>
                        <div className="stat-value">1,789</div>
                        <div className="stat-desc text-zinc-500">Total resume converted<br /> into professional template</div>
                    </div>
                    <div className="stat space-y-2">
                        <div className="stat-title text-zinc-500">Resume Reviewed</div>
                        <div className="stat-value">1,129</div>
                        <div className="stat-desc text-zinc-500">Total resume reviewed<br />& improved by Bard AI</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-zinc-800'></div>
            <div className='text-center'>
                <h5 className='text-zinc-200 uppercase tracking-wider font-semibold text-xl font-serif text-center mb-4'>Features</h5>
                <div className="md:grid md:grid-cols-2 stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">Data Security</div>
                        <div className="stat-desc text-zinc-500">Your data is yours and yours only.</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">AI-Powered</div>
                        <div className="stat-desc text-zinc-500">Bard AI acts as an ATS Expert and a Hiring Manager</div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">Flexibility</div>
                        <div className="stat-desc text-zinc-500">Personalize your resume with any colors, fonts or designs, and make it your own.</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">Reactive Preview</div>
                        <div className="stat-desc text-zinc-500">See every change instantly as you type.</div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">Flexibility</div>
                        <div className="stat-desc text-zinc-500">Personalize your resume with any colors, fonts or designs, and make it your own.</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-zinc-200 font-semibold tracking-wider uppercase">Instant Download</div>
                        <div className="stat-desc text-zinc-500">Export your resume to PDF instantly, without any waiting or delays.</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-zinc-800'></div>
            <div className='w-full flex flex-col md:flex-row gap-x-30 gap-y-10 items-start px-10 md:px-60'>
                <Accordion />
                <section className='flex flex-col md:w-1/2 text-sm gap-y-4 text-zinc-500'>
                    <h5 className='text-zinc-200 uppercase tracking-wider font-semibold text-xl font-serif'>How this project started</h5>
                    <p>One night, I needed to update my resume for a job application. What should have been a simple task quickly turned into a frustrating experience when I realized I had accidentally deleted my old resume template.</p>
                    <p>I started searching for alternatives—free PDF editors, online resume builders, and downloadable templates. But almost every option came with a catch. Some locked essential features behind a subscription, others limited exports, and many required payment just to download the finished resume.</p>
                    <p>After spending more time fighting the tools than actually improving my resume, I thought:</p>
                    <p className='font-semibold text-zinc-200'>"Why not just build my own?"</p>
                    <p>So I opened my laptop and started coding.</p>
                    <p>What began as a personal solution turned into an overnight project. I focused on the features that mattered most: a clean and professional design, ATS-friendly formatting, full customization, and a straightforward user experience without unnecessary paywalls.</p>
                    <p>By the next day, <span className='text-zinc-200 font-semibold'>Get Hired </span>was born.</p>
                    <p>Get Hired is a simple resume builder created to solve the exact problem I faced. It's designed to help job seekers create professional resumes without subscriptions, hidden fees, or frustrating limitations.</p>
                    <p className='font-semibold text-zinc-200'>Just build your resume, download it, and focus on what matters most—getting hired.</p>
                </section>
            </div>
            <div className='w-full h-[1px] bg-zinc-800'></div>
            <footer className='w-full flex flex-col-reverse md:flex-row gap-x-30 gap-y-10 px-10 md:px-60 mb-10 text-xs text-zinc-500'>
                <section className='md:w-[40rem] flex flex-col gap-y-2'>
                    <h1 className='text-zinc-200 uppercase tracking-wider font-semibold text-xl font-serif'>Get Hired</h1>
                    <p>A modern open-source, ATS-friendly resume builder designed for professionals by professionals — fully customizable and 100% free forever.</p>
                    <p>A passion project by <Link href={'https://raveflores.vercel.app'} className='underline hover:text-zinc-200'>Rave Flores</Link>.</p>
                    <Link href={"/privacy-policy"} className='underline hover:text-zinc-200 w-fit'>Privacy Policy</Link>
                    <p>Get Hired v2.0.0</p>
                </section>
                <section className='md:w-1/2 space-y-4 text-sm'>
                    <h5 className='text-zinc-200 uppercase tracking-wider font-semibold text-xl font-serif'>A note from the creator</h5>
                    <p>Hi, I'm Rave</p>
                    <p>I built Get Hired because I experienced the same frustrations many job seekers face. What started as a late-night attempt to update my own resume quickly turned into a project that I felt could help others too.</p>
                    <p>My goal was simple: create a resume builder that is professional, ATS-friendly, easy to use, and accessible to everyone without subscriptions or hidden paywalls.</p>
                    <p>I hope Get Hired helps you spend less time worrying about formatting and more time focusing on your next opportunity.</p>
                    <p>If this tool helps even one person land their next job, then the overnight build was worth it.</p>
                    <p>Good luck with your job search, and thank you for using Get Hired.</p>
                </section>
            </footer>
            {/* <img src="/svg/blob.svg" alt="blob" className='absolute top-0 -z-10 w-full h-screen object-cover'/> */}
        </main>
    )
}
