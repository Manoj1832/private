import type { Metadata } from "next";
import { Teko, Instrument_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/lib/LanguageContext";

const teko = Teko({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-teko',
  display: 'swap',
  preload: true,
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-ins-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vijaybalajimla.in';

export const metadata: Metadata = {
  title: {
    default: 'M. Vijay Balaji | Minister for Handlooms & Textiles | Govt of Tamil Nadu',
    template: '%s | M. Vijay Balaji — Erode East MLA',
  },
  description: 'Official website of M. Vijay Balaji, Minister for Handlooms & Textiles, Government of Tamil Nadu. Elected MLA for Erode East constituency. Member of Tamilaga Vettri Kazhagam (TVK).',
  keywords: [
    'M. Vijay Balaji', 'Vijay Balaji MLA', 'Erode East MLA',
    'Handlooms Minister Tamil Nadu', 'Textiles Minister Tamil Nadu',
    'TVK Erode', 'Tamilaga Vettri Kazhagam',
    'ஈரோடு கிழக்கு சட்டமன்ற உறுப்பினர்', 'ம. விஜய் பாலாஜி',
    'கைத்தறி அமைச்சர்', 'ஜவுளித்துறை அமைச்சர்',
    '2026 Tamil Nadu election', 'Erode East constituency'
  ],
  authors: [{ name: 'M. Vijay Balaji' }],
  creator: 'M. Vijay Balaji',
  publisher: 'Tamilaga Vettri Kazhagam',
  formatDetection: { email: false, telephone: true, address: false },
  openGraph: {
    title: 'M. Vijay Balaji — Minister for Handlooms & Textiles, Govt of Tamil Nadu',
    description: 'Elected MLA for Erode East. Serving the people of Tamil Nadu with transparency and dedication.',
    url: siteUrl,
    siteName: 'M. Vijay Balaji Official',
    locale: 'ta_IN',
    alternateLocale: ['en_IN', 'ta'],
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'M. Vijay Balaji — Minister for Handlooms & Textiles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Vijay Balaji | Minister for Handlooms & Textiles',
    description: 'Official site of M. Vijay Balaji, Minister for Handlooms & Textiles, Govt of Tamil Nadu. MLA Erode East, TVK.',
    creator: '@TVKVijayHQ',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-IN': `${siteUrl}/en`,
      'ta-IN': `${siteUrl}/ta`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'politics',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0a0a' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'M. Vijay Balaji',
  alternateName: ['ம. விஜய் பாலாஜி', 'Vijay Balaji MLA'],
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  jobTitle: 'Minister for Handlooms and Textiles',
  worksFor: {
    '@type': 'Organization',
    name: 'Government of Tamil Nadu',
  },
  memberOf: {
    '@type': 'PoliticalParty',
    name: 'Tamilaga Vettri Kazhagam',
    alternateName: 'TVK',
  },
  knowsAbout: ['Handlooms', 'Textiles', 'Public Service', 'Tamil Nadu Politics'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Erode',
    addressRegion: 'Tamil Nadu',
    postalCode: '638001',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://instagram.com/vijaybalaji_erode_tvk',
    'https://facebook.com/vijaybalajitvk',
    'https://linkedin.com/in/vijay-balaji-310053176',
    'https://youtube.com/@TVKVijayHQ',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${teko.variable} ${instrumentSans.variable}`} style={{ fontFamily: 'var(--font-ins-sans)' }}>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
