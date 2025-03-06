import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolioweb-beta-gray.vercel.app/'),
  title: "Jeffrey Ye's portfolio",
  description: 'Software Engineer specializing in web development and creative solutions.',
  openGraph: {
    title: "Jeffrey Ye's portfolio",
    description: 'Software Engineer specializing in web development and creative solutions.',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to add this image to your public/images folder
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeffrey Ye's portfolio",
    description: 'Software Engineer specializing in web development and creative solutions.',
    images: ['/images/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
