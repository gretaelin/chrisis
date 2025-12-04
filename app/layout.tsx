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
  title: "Hemmeligt Juleløb på Kontoret – En Nissejagt fyldt med Hygge og Hemmelige Spor",
  description: "Tag på et hemmeligt juleløb gennem kontoret! Følg sporene, find koderne, løs quizzer og find den skjulte julepræmie. En hyggelig nissejagt med billeder, rim og julestemning – lige til at fortsætte derfra, hvor du slap.",
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
