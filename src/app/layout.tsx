import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'PixelVault – Digital Goods Store', description: 'Buy digital files unlocked by Stellar payments' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /></head>
      <body style={{ fontFamily: "'Manrope', sans-serif", background: '#0e0e0e', color: '#f0f0f0', margin: 0 }}>{children}</body>
    </html>
  )
}
