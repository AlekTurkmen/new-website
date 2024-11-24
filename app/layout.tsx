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
    icon: '/favicon.ico',
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
