import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const Dune = localFont({
  src: '../assets/Font/Dune_Rise.ttf',
})

const Pitviper = localFont({
  src: '../assets/Font/Pitviper.ttf',
})

export const metadata: Metadata = {
  title: "Rocket || Risk it, Ride it, Win it",
  description: "The Game Where Ever Seconds Counts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Dune.className} ${Pitviper.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
