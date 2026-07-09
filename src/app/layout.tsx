import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S.P Tailors - Premium Tailoring & Custom Clothing',
  description: 'Experience premium tailoring excellence with 21+ years of expertise. Custom shirts, suits, wedding wear, and ethnic clothing. Book your appointment today!',
  keywords: 'tailoring, custom clothing, suits, shirts, wedding wear, ethnic wear, tailors near me',
  openGraph: {
    title: 'S.P Tailors - Premium Business Website',
    description: 'Discover premium tailoring services with 21+ years of excellence',
    type: 'website',
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23D4AF37' font-family='serif'>✂️</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
