import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      <body className={`bg-surface font-body-md text-on-surface antialiased ${inter.variable} ${manrope.variable} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
