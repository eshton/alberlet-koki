import type { AppProps } from 'next/app'
import { Cormorant, Outfit } from 'next/font/google'
import '@styles/globals.css'

const heading = Cormorant({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

function Application({ Component, pageProps }: AppProps) {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default Application
