import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import SmoothScrollProvider from "@/components/provider/SmoothScrollProvider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { siteMetaData } from "@/const/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = siteMetaData;

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrollProvider>
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
        <GoogleTagManager gtmId={process.env.GA_TRACKING_ID || ""} />
        <GoogleAnalytics gaId={process.env.GA_TRACKING_ID || ""} />
      </body>
    </html>
  );
}
