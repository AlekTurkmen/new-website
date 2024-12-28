import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const isDevelopment = process.env.NODE_ENV === 'development';
const pathPrefix = isDevelopment ? '' : '.';

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
  title: "ALEK TURKMEN",
  description: "Founder | Engineer @ Cooper Union",
  icons: {
    icon: [
      {
        url: `${pathPrefix}/favicon/favicon.ico`,
        sizes: 'any',
      },
      {
        url: `${pathPrefix}/favicon/favicon-16x16.png`,
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: `${pathPrefix}/favicon/favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [{ url: `${pathPrefix}/favicon/favicon.ico` }],
    apple: {
      url: `${pathPrefix}/favicon/apple-touch-icon.png`,
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'manifest',
        url: `${pathPrefix}/favicon/site.webmanifest`,
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
