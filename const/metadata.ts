import { Metadata } from "next";

export const siteMetaData: Metadata = {
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
        url: "https://dwigunardimeinaki.vercel.app",
        siteName: "Dwi Gunardi M Portfolio",
        images: [{
            url: "https://dwigunardimeinaki.vercel.app/Logo-D.png",
            width: 1200,
            height: 630,
        }],
    },
    verification: {
        google: "7zxm8DQfpEF5GELxvJB05R337OegQeJfz7eDXkfKv44",
    },
};