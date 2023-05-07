import ThemeProvider from '@/theme_provider'
// import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
  style: ['normal'],
})

export const metadata = {
  title: 'Formuálario ART',
  description: 'Formulário para ART',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
