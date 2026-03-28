import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import SmoothScrollProvider from "@/components/provider/SmoothScrollProvider";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

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
    default: "Dwi Gunardi M | Frontend Developer",
    template: "%s | Dwi Gunardi M", // Jika nanti ada halaman /blog, judulnya otomatis "Blog | Dwi Gunardi M"
  },
  description: "Portfolio website of Dwi Gunardi M, a passionate Frontend Developer specializing in React and Next.js.",
  applicationName: "Dwi Gunardi M Portfolio",
  authors: [{ name: "Dwi Gunardi M", url: "https://github.com/dwigunardi" }],
  creator: "Dwi Gunardi M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dwigunardimeinaki.vercel.app/",
    siteName: "Dwi Gunardi M Portfolio",
    images: [{
      url: "https://dwigunardimeinaki.vercel.app/og_dwi.png",
      width: 1200,
      height: 630,
    }],
  },
  verification: {
    google: "google-site-verification=9nXWidSl0m9DDB93k7Rm84WVGl_-TeE4RhTUpyD6Utk", // Pastikan ini kode asli dari Google Search Console nanti
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" className="rounded-full" />
        <link
          rel="apple-touch-icon"
          href="/assets/favicon/apple-icon?<generated>"
          type="image/png"
          sizes="sizes=180x180"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrollProvider>
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
