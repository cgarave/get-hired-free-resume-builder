import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get Hired - Free Resume Builder',
  description: 'Create a professional resume in minutes. No subscription. ATS-friendly. 100% free.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
