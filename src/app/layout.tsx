import type { Metadata } from 'next';
import { DM_Mono, DM_Serif_Display, Outfit } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import { cn } from '@/lib/utils';
import CustomCursor from '@/components/containers/customCursor';

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  weight: '400',
  subsets: ['latin'],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif-display',
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Rinaldi Adrian',
  description: 'Software engineer portofolio',
  icons: {
    icon: '/icons/favicon.svg',
  },
  openGraph: {
    title: 'Rinaldi Adrian',
    description: 'Software engineer portofolio',
    url: '',
    images: [
      {
        url: '/images/OG.png',
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/images/OG.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        clsx(
          dmSerifDisplay.variable,
          dmMono.variable,
          outfit.variable,
          'h-full',
          'antialiased',
          'font-sans',
          'scroll-smooth'
        )
      )}
    >
      <body className='flex min-h-full flex-col'>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
