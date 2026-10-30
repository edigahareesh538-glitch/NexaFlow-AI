import type { Metadata, Viewport } from "next";
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
  title: {
    default: "NexaFlow AI - Automate Smarter. Grow Faster.",
    template: "%s | NexaFlow AI",
  },
  description: "AI-powered business automation platform for SMBs. Automate repetitive tasks, manage customer interactions, organize leads, and improve productivity using LLMs and AI agents.",
  keywords: ["AI automation", "business automation", "AI agents", "LLM", "workflow automation", "customer support AI", "lead management"],
  authors: [{ name: "NexaFlow AI" }],
  creator: "NexaFlow AI",
  publisher: "NexaFlow AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexafow.ai",
    siteName: "NexaFlow AI",
    title: "NexaFlow AI - Automate Smarter. Grow Faster.",
    description: "AI-powered business automation platform for SMBs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexaFlow AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFlow AI",
    description: "AI-powered business automation platform for SMBs.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}