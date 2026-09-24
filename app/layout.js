import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";
import Analytics from "../components/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://eiraforklifts.com.pk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
    template: "%s | EIRA Forklifts Pakistan",
  },
  description:
    "EIRA supplies reliable diesel, electric & LPG forklifts (3–10 ton) across Pakistan. Karachi stock, genuine parts & factory-trained service. Get a quote on WhatsApp +92 300 0214188.",
  keywords: [
    "forklift price in Pakistan",
    "forklift for sale Karachi",
    "diesel forklift Pakistan",
    "electric forklift Pakistan",
    "LPG forklift",
    "EIRA forklifts",
    "material handling equipment Pakistan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "EIRA Forklifts Pakistan",
    title: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
    description:
      "Reliable diesel, electric & LPG forklifts (3–10 ton) for sale in Pakistan. Karachi stock, genuine parts, nationwide service.",
    images: [{ url: "/images/eira-3-5-ton-heavy-diesel-forklift.jpg", alt: "EIRA 3 ton diesel forklift in Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
    description: "Reliable diesel, electric & LPG forklifts (3–10 ton) for sale in Pakistan.",
    images: ["/images/eira-3-5-ton-heavy-diesel-forklift.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#121c2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="shell-type" content="web_standard" />
      </head>
      <body className={`bg-surface text-on-surface antialiased ${poppins.className} ${inter.variable} ${manrope.variable}`}>
        <Header />
        {children}
        <Footer />
        <Tilt3D />
        <Analytics />
      </body>
    </html>
  );
}
