import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lexendRegular = localFont({
  src: './fonts/Lexend-Regular.ttf',
  variable: '--font-lexend-regular',
  fallback: ['Comic Sans MS']
})

const lexendBold = localFont({
  src: './fonts/Lexend-Bold.ttf',
  variable: '--font-lexend-bold',
})

export const metadata: Metadata = {
  title: "RELEVANCY AI",
  description: "Create your own nepotism.",
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [{ url: '/favicon/favicon.ico' }],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexendRegular.variable} ${lexendBold.variable} font-sans antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
