

import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter, Roboto_Mono } from "next/font/google";
import { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetaData";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Anuj Sharma",
    template: "%s - Anuj Sharma",
  },
  description: siteMetadata.description,
  keywords: [
    "Anuj Sharma",
    "Frontend Developer",
    "React.js",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "Next.js",
  ].join(", "),
  authors: [{ name: "Anuj Sharma", url: "https://anujsharma.dev" }],
  creator: "Anuj Sharma",
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
