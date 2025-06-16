import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const isDevelopment = process.env.NODE_ENV === 'development';
const pathPrefix = isDevelopment ? '' : '.';

const lexendRegular = localFont({
  src: '../public/fonts/Lexend/static/Lexend-Regular.ttf',
  variable: '--font-lexend-regular',
  fallback: ['Comic Sans MS']
})

const lexendBold = localFont({
  src: '../public/fonts/Lexend/static/Lexend-Bold.ttf',
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51RTDPZZEY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51RTDPZZEY');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
