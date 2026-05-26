function TextBlockComponent({title, description, bullets}: {title: string, description?: string[], bullets?: string[]}) {
        return (
            <div className="flex flex-col gap-y-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                {
                    description?.map(desc => (
                        <p>{desc}</p>
                    ))
                }
                <ul className="list-disc list-inside">
                    {
                        bullets?.map(bullet => (
                            <li>{bullet}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

export default function PrivacyPolicy() {
    return (
        <div className="px-5 py-10 md:px-60 md:py-20 flex flex-col gap-y-9">
            <div className="flex flex-col gap-y-1">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="text-sm">We value your privacy and aim to keep your data safe and transparent.</p>
            </div>
            <TextBlockComponent title={'1. Data We Collect'} 
                                description={['We only collect the information you provide in your resume, such as:']} 
                                bullets={['Name and contact details', 'Work experience', 'Education', 'Skills and related content']} />
            <TextBlockComponent title={'2. How We Use Your Data'} 
                                description={['Your resume data is used only to:']} 
                                bullets={['Generate AI-powered resume feedback', 'Improve formatting and ATS compatibility', 'Provide rewriting and optimization suggestions']} />
            <TextBlockComponent title={"3. AI Processing"}
                                description={['To provide AI features, your resume data is securely sent to a third-party AI service (Bard AI powered by Google Gemini) for processing.', 'We do not sell or share your data with advertisers or third parties for marketing purposes.']} />
            <TextBlockComponent title={"4. Data Storage"}
                                description={['We do not permanently store your resume data unless explicitly stated in future features (e.g., user accounts or saved resumes).']} />
            <TextBlockComponent title={"5. Security"}
                                description={['We take reasonable security measures to protect your data, but no system is 100% secure.']} />
            <TextBlockComponent title={"6. Your Consent"}
                                description={['By using this app, you agree to the processing of your resume data as described above.']} />
            <TextBlockComponent title={"7. Changes"}
                                description={['We may update this policy as the app evolves. Updates will be posted on this page.']} />
            <TextBlockComponent title={"Contact"}
                                description={['If you have any questions, please contact the developer through email.']} />
        </div>
    )
}