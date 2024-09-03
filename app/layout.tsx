import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Liu",
  description: "Personal portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
            <body className={montserrat.className}>{children}</body>
      </html>
  );
}
