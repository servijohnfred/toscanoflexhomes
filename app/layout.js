import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import LenisProvider from '@/components/LenisProvider'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Toscano Flex Homes | Tri-Cities WA Realtors',
  description: 'Laura and Ernesto Toscano, trusted Realtors in Kennewick, Pasco and Richland WA. Buying, selling and investing in Washington State. English and Spanish service.',
  keywords: 'Tri Cities WA Realtor, Kennewick Realtor, Pasco homes for sale, Richland Realtor, Spanish speaking Realtor Tri Cities, sell my house Tri Cities, buy home Tri Cities Washington, Washington State real estate, bilingual realtor Washington, Toscano Flex Homes',
  authors: [{ name: 'Toscano Flex Homes' }],
  creator: 'Toscano Flex Homes',
  metadataBase: new URL('https://toscanoflexhomes.vercel.app'),
  alternates: {
    canonical: 'https://toscanoflexhomes.vercel.app',
  },
  openGraph: {
    title: 'Toscano Flex Homes | Tri-Cities WA Realtors',
    description: 'Laura and Ernesto Toscano. Your trusted Realtors in Kennewick, Pasco, Richland and all of Washington State. English and Spanish service.',
    url: 'https://toscanoflexhomes.com',
    siteName: 'Toscano Flex Homes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toscano Flex Homes - Tri-Cities WA Realtors',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toscano Flex Homes | Tri-Cities WA Realtors',
    description: 'Your trusted Realtors in Kennewick, Pasco, Richland and all of Washington State.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Toscano Flex Homes',
  url: 'https://toscanoflexhomes.com',
  logo: 'https://toscanoflexhomes.com/images/logo.png',
  image: 'https://toscanoflexhomes.com/images/og-image.jpg',
  description: 'Husband and wife real estate team serving Tri-Cities WA and all of Washington State. Bilingual English and Spanish service.',
  telephone: ['+15093780223', '+15093807913'],
  email: 'toscanoflexhomes@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kennewick',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Kennewick', containedIn: 'Washington' },
    { '@type': 'City', name: 'Pasco', containedIn: 'Washington' },
    { '@type': 'City', name: 'Richland', containedIn: 'Washington' },
    { '@type': 'State', name: 'Washington' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  knowsLanguage: ['en', 'es'],
  sameAs: [
    'https://www.instagram.com/toscanoflexhomes',
    'https://www.facebook.com/share/1C3An2hLwU/',
    'https://www.tiktok.com/@toscanoflexhomes',
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Laura Toscano',
      jobTitle: 'Realtor',
      telephone: '+15093807913',
    },
    {
      '@type': 'Person',
      name: 'Ernesto Toscano',
      jobTitle: 'Realtor',
      telephone: '+15093780223',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cinzel:wght@400;500;600&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <LenisProvider>
          <ScrollReveal />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  )
}
