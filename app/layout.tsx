import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import dynamic from 'next/dynamic'

// Dynamically import the Footer component with SSR disabled
const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'PANHA Buddy Training Certification',
  description: 'Transform Your Psychology Degree into a Professional Career - Train as a Mental Wellbeing Buddy in Just 2 Weeks',
  icons: {
    icon: 'https://www.panhacare.com/logo-light.svg',
    shortcut: 'https://www.panhacare.com/logo-light.svg',
    apple: 'https://www.panhacare.com/logo-light.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}