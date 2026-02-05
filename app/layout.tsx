import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenClaw Keychain - ซื้อเลย!',
  description: 'พวงกุญแจ OpenClaw หรูหรา เก๋ไก๋ พร้อมส่งทั่วไทย',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
