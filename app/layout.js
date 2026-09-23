import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
    images: [{ url: "/images/eira-3-ton-heavy-duty-diesel-forklift-pakistan.jpg", alt: "EIRA 3 ton diesel forklift in Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
    description: "Reliable diesel, electric & LPG forklifts (3–10 ton) for sale in Pakistan.",
    images: ["/images/eira-3-ton-heavy-duty-diesel-forklift-pakistan.jpg"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-surface text-on-surface antialiased ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
        <Tilt3D />
      </body>
    </html>
  );
}
