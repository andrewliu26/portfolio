import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/components/nav";
import Footer from "@/app/components/footer";
import React from "react";

const GeistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const GeistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: 'Andrew Liu',
        template: 'Andrew Liu | %s',
    },
    description: 'My portfolio.',
    openGraph: {
        title: 'Andrew Liu',
        description: 'My portfolio.',
        siteName: 'Andrew Liu',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-black',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
        <head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
            />
            <title/>
        </head>
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
        </main>
        </body>
        </html>
    );
}
