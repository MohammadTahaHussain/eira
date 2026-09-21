import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
  description: "Reliable Forklifts for Sale in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="shell-type" content="web_standard" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-surface font-body-md text-on-surface antialiased ${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
