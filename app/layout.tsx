import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import Image from 'next/image';
import bg from 'public/images/home/bg.jpg';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { Navbar } from './components/nav';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ehabhosam.vercel.app'),
  title: {
    default: 'Ehab Hosam',
    template: '%s | Ehab Hosam',
  },
  description: 'Software Engineer',
  openGraph: {
    title: 'Ehab Hosam',
    description: 'Software Engineer',
    url: 'https://ehabhosam.vercel.app',
    siteName: 'Ehab Hosam',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Ehab Hosam',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <div className="fixed top-0 h-screen w-screen left-0 right-0 z-[-1]">
          <Image
            src={bg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
            className="bottom-0 z-[-2] opacity-25"
          />
        </div>
      </body>
    </html>
  );
}
