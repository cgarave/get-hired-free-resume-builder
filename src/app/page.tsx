import Link from 'next/link'
import Accordion from '@/components/Accordion'
import Blob from '@/public/svg/blob.svg'

export default function Home() {
  return (
      <div className={'flex flex-col h-full items-center p-5 gap-y-10 md:justify-between md:pt-64'}>
          <div className={'flex flex-col gap-y-10 md:flex-row md:gap-x-24 md:items-start'}>
              <div className={'flex flex-col gap-y-4 max-w-2xl'}>
                  <h1 className={'text-2xl md:text-7xl font-bold align-top leading-none'}>Simple Resumes. Professional
                      Results. <span className={'font-serif italic'}>Get Hired</span>.</h1>
                  <p>A modern, ATS-friendly resume builder designed for professionals — fully customizable and 100% free
                      forever.</p>
                  <Link href={"/editor"} className={'md:mt-6 w-fit h-fit'}>
                      <button
                          className={'bg-blue-600 text-sm text-white font-bold w-fit p-4 rounded-lg cursor-pointer'}>Build
                          Your
                          Resume
                      </button>
                  </Link>
              </div>
              <Accordion/>
          </div>
          <div className={'text-xs text-zinc-600 md:mt-0 flex flex-row justify-between w-full'}>
              <h5>Built by <Link href="https://raveflores.vercel.app" target={'_blank'} className={'font-bold text-blue-600'}>Rave</Link></h5>
              <Link href={"/privacy-policy"} className={'text-blue-600'}>Privacy Policy</Link>
          </div>
      </div>
  )
}
