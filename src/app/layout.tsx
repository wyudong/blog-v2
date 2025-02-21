import { Metadata } from 'next'
import { Montserrat } from 'next/font/google';
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.wyudong.com'),
  title: {
    default: 'wyudong',
    template: '%s - wyudong'
  },
  description: 'my portfolio',
  icons: {
    shortcut: '/favicon/favicon.ico',
    icon: [
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: '/favicon/apple-touch-icon.png'
  }
}

const montserratFont = Montserrat({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserratFont.className} bg-neutral-50`}>{children}</body>
    </html>
  )
}
