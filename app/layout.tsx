
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import ClickSoundProvider from "@/components/ClickSoundProvider";

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "KarimOS - Portfolio",
  description: "A portfolio styled like a desktop OS, showcasing my projects, skills, and journey as a web developer.",
  keywords: ["Portfolio", "Web Developer", "Next.js", "React", "Frontend", "KarimOS"],
  authors: [{ name: "Karim Chehab" }],
  creator: "Karim Chehab",
  openGraph: {
    title: "KarimOS - Portfolio",
    description: "Explore my OS-themed portfolio showcasing projects, skills, and creativity.",
    url: "https://karimos.vercel.app/",
    siteName: "KarimOS",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "KarimOS Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        <ClickSoundProvider />
        {children}
      </body>
    </html>
  );
}
