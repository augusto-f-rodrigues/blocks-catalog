import './globals.css'
import { Open_Sans } from 'next/font/google'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Famílias | Blocks',
  description: 'Catálogo de famílias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
