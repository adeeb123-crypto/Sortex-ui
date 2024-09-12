import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import {Poppins } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Quick AI",
  description: "Connect with people who share your interests. | Quick AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
