import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pylon Solar Services | Gold Coast Solar Panel Cleaning',
  description: 'Professional solar panel cleaning services across the Gold Coast and South East Queensland. Purified de-ionised water, safe roof-friendly methods. Get a free quote today.',
  keywords: 'solar panel cleaning Gold Coast, solar cleaning, panel maintenance, Gold Coast solar',
  openGraph: {
    title: 'Pylon Solar Services | Gold Coast Solar Panel Cleaning',
    description: 'Professional solar panel cleaning across the Gold Coast. Restore your panels to peak efficiency.',
    url: 'https://pylonsolarservices.com',
    siteName: 'Pylon Solar Services',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Pylon Solar Services',
              description: 'Professional solar panel cleaning services for Gold Coast and South East Queensland',
              url: 'https://pylonsolarservices.com',
              telephone: '0412293143',
              email: 'pylonsolarservices@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'QLD',
                addressCountry: 'AU',
                addressLocality: 'Gold Coast'
              },
              areaServed: 'Gold Coast',
              priceRange: '$$',
              openingHours: ['Mo-Su 00:00-23:59'],
              sameAs: [
                'https://facebook.com/pylonsolar',
                'https://instagram.com/pylonsolar'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}