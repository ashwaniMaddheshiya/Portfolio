import type { Metadata } from "next";
import { Bree_Serif } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwani Portfolio",
  description: "A description about my journey",
};


const poppins = Bree_Serif({
  weight: ['400'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
