// frontend/src/app/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "vendorV1",
    description: "Daily operations for small and mid-sized vendors",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
