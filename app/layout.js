import "./globals.css";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

export const metadata = {
  title: "EIRA Forklifts Pakistan | Heavy-Duty Material Handling Solutions",
  description:
    "Heavy-duty diesel, electric Li-ion, and LPG industrial forklifts across Pakistan. Sourced from Shanghai, supported from Karachi.",
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
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
