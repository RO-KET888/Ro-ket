import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import React from "react";

const Dune = localFont({
  src: '../public/Dune_Rise.ttf',
  display: 'swap',
})

const Pitviper = localFont({
  src: '../public/Pitviper.ttf',
  display: 'swap',
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
