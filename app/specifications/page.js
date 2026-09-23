import SpecificationsClient from "./SpecificationsClient";

export const metadata = {
  title: "Forklift Technical Specifications — K Series Diesel, LPG & Electric (CPCD/CPC/CPG/CPD)",
  description:
    "Official EIRA factory spec sheets: 3–10 ton diesel forklifts (CPCD30–CPCD100t), 3.5T LPG (CPG35) and electric CPD10–CPD50. Engines, dimensions, performance data.",
  alternates: { canonical: "https://eiraforklifts.com.pk/specifications" },
  openGraph: {
    title: "EIRA Forklift Technical Specifications",
    description: "Official factory spec sheets for the full K Series lineup — diesel 3–10T, LPG 3.5T, electric 1–5T.",
  },
};

export default function SpecificationsPage() {
  return <SpecificationsClient />;
}
