import type { Metadata } from "next";
import { Poppins, Inter } from 'next/font/google';

import "primeflex/primeflex.min.css";
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/link.css";
import "./styles/text.css";
import "./styles/button.css";
import "./styles/color.css";
import 'aos/dist/aos.css';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "Dana",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
            <head>
                <link rel="icon" href="/dana-landing-page/favicon.ico" sizes="any" />
            </head>
            <body>{children}</body>
        </html>
    );
}