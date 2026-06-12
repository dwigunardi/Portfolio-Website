import { Metadata } from "next";

export const siteMetaData: Metadata = {
    metadataBase: new URL("https://dwigunardimeinaki.vercel.app"),
    title: {
        default: "Dwi Gunardi M | Frontend Developer",
        template: "%s | Dwi Gunardi M",
    },
    description: "Portfolio website of Dwi Gunardi M, a passionate Frontend Developer specializing in React and Next.js.",
    applicationName: "Dwi Gunardi M Portfolio",
    authors: [{ name: "Dwi Gunardi M", url: "https://github.com/dwigunardi" }],
    creator: "Dwi Gunardi M",
    keywords: ["Dwi Gunardi M", "Frontend Developer", "React", "Next.js", "Portfolio", "Web Developer"],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dwigunardimeinaki.vercel.app",
        siteName: "Dwi Gunardi M Portfolio",
        images: [{
            url: "/Logo-D.png",
            width: 1200,
            height: 630,
            alt: "Dwi Gunardi M Portfolio",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dwi Gunardi M | Frontend Developer",
        description: "Portfolio website of Dwi Gunardi M, a passionate Frontend Developer specializing in React and Next.js.",
        images: ["/Logo-D.png"],
    },
    verification: {
        google: "7zxm8DQfpEF5GELxvJB05R337OegQeJfz7eDXkfKv44",
    },
};