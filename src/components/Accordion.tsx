export default function Accordion() {
    return (
        <div className={'flex flex-col md:w-[40rem]'}>
            <h1 className={'font-semibold text-xl tracking-wider uppercase text-zinc-200 font-serif mb-4'}>Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow border-t border-zinc-800 rounded-none">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold text-zinc-200">Is my data private and secure?</div>
                <div className="collapse-content text-sm text-zinc-500">Yes. Your resume data belongs to you and is stored locally on your device only. We do not send, collect, or store any of your information on external servers.</div>
            </div>
            <div className="collapse collapse-arrow border-t border-zinc-800 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-zinc-200">Do I need to create an account?</div>
                <div className="collapse-content text-sm text-zinc-500">No account is required. You can start building your resume immediately.</div>
            </div>
            <div className="collapse collapse-arrow border-t border-zinc-800 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-zinc-200">Why does the app only use one template?</div>
                <div className="collapse-content text-sm text-zinc-500">The app uses a single resume template by design. The goal is to provide a clean, professional, and ATS-friendly format that works effectively for most job applications — without overwhelming users with unnecessary designs or complicated customization.</div>
            </div>
            <div className="collapse collapse-arrow border-t border-zinc-800 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-zinc-200">What is ATS / ATS-friendly?</div>
                <div className="collapse-content text-sm flex flex-col gap-y-4 pr-[2rem] text-zinc-500">
                    <p>ATS stands for <span className={'font-semibold text-zinc-200'}>Applicant Tracking System.</span> It’s software used by companies to scan, filter, and
                        rank resumes before a human recruiter even sees them.</p>
                    <p>An <span className={'font-semibold text-zinc-200'}>ATS-friendly resume</span> is designed to be easily read by these systems. It avoids complex layouts,
                        images, or formatting that could confuse the software, and instead uses clean structure,
                        standard fonts, and clear headings so your information can be correctly parsed and ranked.</p>
                    <p>In simple terms: ATS-friendly resumes make sure your application gets properly read — not ignored
                        by software.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-t border-b border-zinc-800 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-zinc-200">Does it work on mobile devices?</div>
                <div className="collapse-content text-sm text-zinc-500">Yes. The app works on both desktop and mobile browsers.</div>
            </div>
        </div>
    )
}