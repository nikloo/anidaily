import './globals.css';

export const metadata = {
  metadataBase: new URL('https://anidaily.net'),
  title: {
    default: 'AniDaily — Anime, Manga & TCG News | Never Miss a Panel',
    template: '%s | AniDaily',
  },
  description: 'Your daily source for anime news, manga updates, TCG card prices, rankings & reviews. AI-powered, updated every 2 hours. Never miss a panel.',
  keywords: ['anime news', 'manga news', 'tcg prices', 'pokemon tcg', 'one piece tcg', 'anime rankings', 'anime reviews', 'manga updates'],
  authors: [{ name: 'AniDaily Editorial' }],
  creator: 'AniDaily',
  publisher: 'AniDaily',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anidaily.net',
    siteName: 'AniDaily',
    title: 'AniDaily — Anime, Manga & TCG News',
    description: 'Your daily source for anime, manga & TCG news. AI-powered. Updated every 2 hours.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'AniDaily' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AniDailyNet',
    creator: '@AniDailyNet',
  },
  alternates: { canonical: 'https://anidaily.net' },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org for Google News */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "AniDaily",
              url: "https://anidaily.net",
              logo: { "@type": "ImageObject", url: "https://anidaily.net/images/logo.png" },
              sameAs: [
                "https://twitter.com/AniDailyNet",
                "https://discord.gg/anidaily",
                "https://instagram.com/anidaily.net",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
