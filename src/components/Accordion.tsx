export default function Accordion() {
    return (
        <div className={'flex flex-col gap-y-2 md:w-[40rem]'}>
            <h1 className={'font-bold italic'}>Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-white border border-zinc-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">Is my data private and secure?</div>
                <div className="collapse-content text-sm">Yes. Your resume data belongs to you and is stored locally on your device only. We do not send, collect, or store any of your information on external servers.</div>
            </div>
            <div className="collapse collapse-arrow bg-white border border-zinc-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Do I need to create an account?</div>
                <div className="collapse-content text-sm">No account is required. You can start building your resume immediately.</div>
            </div>
            <div className="collapse collapse-arrow bg-white border border-zinc-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Why does the app only use one template?</div>
                <div className="collapse-content text-sm">The app uses a single resume template by design. The goal is to provide a clean, professional, and ATS-friendly format that works effectively for most job applications — without overwhelming users with unnecessary designs or complicated customization.</div>
            </div>
            <div className="collapse collapse-arrow bg-white border border-zinc-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What is ATS / ATS-friendly?</div>
                <div className="collapse-content text-sm flex flex-col gap-y-4 pr-[2rem]">
                    <p>ATS stands for <span className={'font-semibold'}>Applicant Tracking System.</span> It’s software used by companies to scan, filter, and
                        rank resumes before a human recruiter even sees them.</p>
                    <p>An <span className={'font-semibold'}>ATS-friendly resume</span> is designed to be easily read by these systems. It avoids complex layouts,
                        images, or formatting that could confuse the software, and instead uses clean structure,
                        standard fonts, and clear headings so your information can be correctly parsed and ranked.</p>
                    <p>In simple terms: ATS-friendly resumes make sure your application gets properly read — not ignored
                        by software.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-white border border-zinc-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Does it work on mobile devices?</div>
                <div className="collapse-content text-sm">Yes. The app works on both desktop and mobile browsers.</div>
            </div>
        </div>
    )
}