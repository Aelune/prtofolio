import React from "react";
import type { Metadata } from "next";
import {
  Roboto,
  Inknut_Antiqua,
  Jacques_Francois,
  Just_Another_Hand,
  Gloock,
  Cookie
} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto'
});

const cookie = Cookie({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cookie'
});
const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inukit'
});

const jacques = Jacques_Francois({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jacques'
});
const hand = Just_Another_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hand'
});
const gloock = Gloock({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gloock'
});

export const metadata: Metadata = {
  title: "Dawood Khan - Full Stack Developer & Designer | DΛωσσd Portfolio",
  description: "Full Stack Developer specializing in GoLang, JavaScript, and modern web technologies. Creator of Vanish, Venus, Hecate, and other open-source projects. Available for freelance work.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  keywords: [
    "Dawood Khan",
    "Dwukn",
    "Full Stack Developer",
    "Frontend Developer",
    "Rust Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Vanish CLI",
    "Venus Browser Extension",
    "Hecate Hyprland",
    "Open Source",
    "Linux Developer",
    "System Programming"
  ],
  authors: [{ name: "Dawood Khan" }],
  creator: "Dawood Khan",
  publisher: "Dawood Khan",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dwukn.vercel.app',
    title: "Dawood Khan - Full Stack Developer & Designer",
    description: "Full Stack Developer specializing in Rust, JavaScript, and modern web technologies. Creator of open-source projects like Vanish, Venus, and Hecate.",
    siteName: 'Dawood Khan Portfolio',
    images: [
      {
        url: 'https://dwukn.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dawood Khan - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dawood Khan - Full Stack Developer & Designer",
    description: "Full Stack Developer specializing in Rust, JavaScript, and modern web technologies. Creator of open-source projects.",
    images: ['https://dwukn.vercel.app/og-image.jpg'],
    creator: '@dwukn',
  },
  metadataBase: new URL('https://dwukn.vercel.app'),
  alternates: {
    canonical: 'https://dwukn.vercel.app',
  },
  category: 'technology',
  classification: 'Portfolio',
//   verification: {
//     google: 'your-google-verification-code'
//   },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dawood Khan',
  alternateName: 'Dwukn',
  url: 'https://dwukn.vercel.app',
  image: 'https://dwukn.vercel.app/og-image.jpg',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance / Open Source Projects'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Lords Institute of Engineering and Technology'
  },
  knowsAbout: [
    'Go',
    'JavaScript',
    'React',
    'Next.js',
    'Linux',
    'Web Development',
    'System Programming'
  ],
  sameAs: [
    'https://github.com/Dwukn',
    'https://www.linkedin.com/in/dwukn',
    'https://x.com/dwukn',
    'https://leetcode.com/dwukn',
    // add other profiles
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dwukn.vercel.app'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cookie.variable} ${roboto.variable} ${inknut.variable} ${jacques.variable} ${hand.variable} ${gloock.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
