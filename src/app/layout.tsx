import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitMorph - Advanced Git Operations CLI',
  description: 'GitMorph is an advanced Git operations and developer productivity tool that simplifies Git commands and enhances your development workflow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}