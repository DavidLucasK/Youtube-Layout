import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'YouTube',
  description: 'Youtube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-neutral-950'>{children}</body>
    </html>
  )
}
