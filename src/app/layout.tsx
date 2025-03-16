import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from "tailwind-merge"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Karan | Mavadiya",
  description: "Not just an ordinary devloper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-2.png" type="image/png"/>
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
