import type { Metadata } from "next";
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

export const metadata:Metadata = {
    title: 'Логистика сложных грузов из ЕС — Express Logistics',
    description: 'Полное ВЭД, сертификация и безопасные поставки промышленного оборудования из Европы. Выкуп у производителя, фиксированные сроки, онлайн-отслеживание 24/7.',
    keywords: ['логистика', 'ВЭД', 'сертификация', 'поставка из ЕС', 'промышленное оборудование', 'подшипники'],
    openGraph: {
        title: 'Логистика сложных грузов из ЕС — Express Logistics',
        description: 'Полное ВЭД, сертификация и безопасные поставки промышленного оборудования из Европы. Выкуп у производителя, фиксированные сроки, онлайн-отслеживание 24/7.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
