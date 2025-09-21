import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "РИСЭГ-интеллектуальные решения в энергетике",
    description: "",
};
import { Jura } from 'next/font/google';

const jura = Jura({
    subsets: ['latin', 'cyrillic'], // если нужен русский
    weight: ['400', '500', '600', '700'], // выбери веса
    display: 'swap',
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={jura.className}>
        {children}
        </body>
        </html>
    );
}
