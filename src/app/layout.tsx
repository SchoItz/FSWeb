import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francois Scholtz | Portfolio",
  description: "Cybersecurity & IT Professional — Portfolio of Francois Scholtz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#1a1a1a' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer
          className="border-t py-6 text-center text-sm"
          style={{ borderColor: '#2a2a2a', color: '#555555' }}
        >
          © {new Date().getFullYear()} Francois Scholtz · Built with Next.js
        </footer>
      </body>
    </html>
  );
}
