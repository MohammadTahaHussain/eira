"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from 'lucide-react';

const FLEET = [
 {
 type: "diesel",
 fleetLabel: "Diesel Fleet",
 specLabel: "Standard Spec",
 title: "3 Ton Diesel Forklift",
 payload: "3,000 kg",
 lift: "3.0m - 4.5m",
 bestFor: "Warehouses & Logistics",
 image: "/images/eira-3-ton-diesel-forklift.webp",
 imageAlt: "EIRA 3 Ton Diesel Forklift",
 badge: { text: "Most Popular", className: "bg-primary-container text-on-primary-container" },
 stockTag: "Karachi Stock",
 link: "/products/3-ton-diesel-forklift-cpcd30",
 secondaryCta: "Full Specs",
 },
 {
 type: "diesel",
 fleetLabel: "Diesel Fleet",
 specLabel: "Reinforced Mast",
 title: "3.5 Ton Diesel Forklift",
 payload: "3,500 kg",
 lift: "3.0m - 5.0m",
 bestFor: "Port & Cargo Freight",
 image: "/images/eira-3-5-ton-heavy-diesel-forklift.webp",
 imageAlt: "EIRA 3.5 Ton Heavy Diesel Forklift",
 badge: { text: "Heavy Duty", className: "bg-on-surface text-surface-container-lowest" },
 stockTag: "Import Ready",
 link: "/products/3-5-ton-diesel-forklift-cpc35",
 secondaryCta: "View Specs",
 },
 {
 type: "diesel",
 fleetLabel: "Diesel Fleet",
 specLabel: "High Torque",
 title: "4 Ton Diesel Forklift",
 payload: "4,000 kg",
 lift: "3.0m - 5.0m",
 bestFor: "Heavy Engineering & Steel",
 image: "/images/heavy-4-ton-industrial-diesel-forklift-operating-i.jpg",
 imageAlt: "Heavy 4 Ton industrial diesel forklift operating in a Pakistani cargo yard",
 badge: { text: "Industrial Depot", className: "bg-secondary text-surface-container-lowest" },
 stockTag: null,
 link: "/products/4-ton-diesel-forklift-cpc40",
 secondaryCta: "View Specs",
 },
 {
 type: "diesel",
 fleetLabel: "Diesel Fleet",
 specLabel: "Dual Front Tyres",
 title: "5 Ton Diesel Forklift",
 payload: "5,000 kg",
 lift: "3.0m - 6.0m",
 bestFor: "Steel, Timber & Cement Plants",
 image: "/images/5-ton-heavy-duty-industrial-forklift-handling-timb.jpg",
 imageAlt: "5 Ton heavy duty industrial forklift handling timber and steel pipes",
 badge: { text: "Heavy Yard", className: "bg-on-surface text-surface-container-lowest" },
 stockTag: null,
 link: "/products/5-ton-diesel-forklift-cpc50",
 secondaryCta: "View Specs",
 },
 {
 type: "diesel",
 fleetLabel: "Port & Rail Series",
 specLabel: "Direct Import",
 title: "10 Ton Heavy Forklift",
 payload: "10,000 kg",
 lift: "3.0m - 6.5m",
 bestFor: "Dry Ports & Bulk Terminals",
 image: "/images/massive-10-ton-container-handling-forklift-in-port.jpg",
 imageAlt: "Massive 10 Ton container handling forklift in Port Qasim Karachi",
 badge: { text: "Extreme Load", className: "bg-error text-on-error" },
 stockTag: null,
 link: "/products/10-ton-diesel-forklift-cpcd100t",
 secondaryCta: "View Specs",
 },
 {
 type: "lpg",
 fleetLabel: "LPG Gas Series",
 specLabel: "Indoor Compliant",
 title: "3.5 Ton LPG Forklift",
 payload: "3,500 kg",
 lift: "3.0m - 4.8m",
 bestFor: "Dual indoor/outdoor emission standard",
 image: "/images/modern-clean-lpg-powered-forklift-with-cylinder-mo.jpg",
 imageAlt: "Modern clean LPG powered forklift with cylinder mounted on rear",
 badge: { text: "Dual Fuel / Clean", className: "bg-tertiary text-on-tertiary" },
 stockTag: null,
 link: "/products/3-5-ton-lpg-forklift-cpg35",
 secondaryCta: "View Specs",
 },
];

const FILTERS = [
 { key: "all", label: "All Forklifts" },
 { key: "diesel", label: "Diesel Forklifts" },
 { key: "electric", label: "Electric Forklifts" },
 { key: "lpg", label: "LPG Forklifts" },
];

function StandardCard({ item }) {
 return (
 <div className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d tilt-3d flex flex-col justify-between">
 <div>
 <div className="relative bg-surface-container-high h-56 overflow-hidden">
 <img alt={item.imageAlt} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src={item.image} loading="lazy" decoding="async" />
 <div className={`absolute top-3 left-3 ${item.badge.className} text-label-sm font-bold uppercase px-2.5 py-1 rounded`}>
 {item.badge.text}
 </div>
 {item.stockTag && (
 <div className="absolute bottom-3 right-3 bg-on-surface/90 text-surface-container-lowest text-label-sm px-2 py-0.5 rounded">
 {item.stockTag}
 </div>
 )}
 </div>
 <div className="p-space-md">
 <div className="flex items-center justify-between mb-1">
 <span className="text-label-sm uppercase tracking-wider text-secondary">{item.fleetLabel}</span>
 <span className="text-label-sm text-primary font-bold">{item.specLabel}</span>
 </div>
 <h3 className="text-headline-md font-bold text-on-surface mb-2">
 {item.title}
 </h3>
 <ul className="space-y-1.5 text-body-md text-secondary mb-space-md">
 <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
 <span>Rated Payload:</span>
 <strong className="text-spec-numeral text-on-surface">{item.payload}</strong>
 </li>
 <li className="flex items-center justify-between py-1 px-2">
 <span>Lift Height:</span>
 <strong className="text-spec-numeral text-on-surface">{item.lift}</strong>
 </li>
 <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
 <span>Best For:</span>
 <span className="text-body-md text-on-surface">{item.bestFor}</span>
 </li>
 </ul>
 </div>
 </div>
 <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
 <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
 Request Price
 </a>
 <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-semibold text-center rounded-lg transition-colors" href={item.link}>
 {item.secondaryCta}
 </a>
 </div>
 </div>
 );
}

function ElectricCard() {
 return (
 <div className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d tilt-3d flex flex-col justify-between lg:col-span-3">
 <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
 <div className="lg:col-span-5 h-64 bg-surface-container-high overflow-hidden">
 <img alt="Modern electric forklift operating silently inside a high-rack FMCG warehouse in Karachi" className="w-full h-full object-cover object-center" src="/images/modern-electric-lithium-ion-forklift-operating-sil.jpg" loading="lazy" decoding="async" />
 </div>
 <div className="lg:col-span-7 p-space-lg flex flex-col justify-between">
 <div>
 <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-primary-container/20 text-primary-container rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
 Zero Emissions AC Electric Drive
 </div>
 <h3 className="text-headline-md font-bold text-on-surface mb-2">
 Electric Forklifts (1.0 - 5.0 Ton)
 </h3>
 <p className="text-body-md text-secondary mb-space-md max-w-2xl">
 Engineered specifically for pharmaceutical cold chains, food processing facilities, and textile warehouses where clean air standards are non-negotiable. Available in 1.0 – 5.0 ton AC-drive configurations.
 </p>
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-space-md">
 <div className="bg-surface-container-low p-2 rounded">
 <span className="text-label-sm uppercase text-secondary block">Capacity Range</span>
 <strong className="text-spec-numeral">1,000 – 5,000 KG</strong>
 </div>
 <div className="bg-surface-container-low p-2 rounded">
 <span className="text-label-sm uppercase text-secondary block">Drive</span>
 <strong className="text-spec-numeral">AC Motors</strong>
 </div>
 <div className="bg-surface-container-low p-2 rounded">
 <span className="text-label-sm uppercase text-secondary block">Models</span>
 <strong className="text-spec-numeral">8 (CPD10–CPD50)</strong>
 </div>
 </div>
 </div>
 <div className="flex flex-wrap items-center gap-space-sm">
 <a className="py-2.5 px-5 bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
 Request Electric Quote
 </a>
 <a className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold text-center rounded-lg transition-colors flex items-center gap-1.5" href="https://wa.me/923000214188?text=Please%20share%20Electric%20Forklift%20pricing" target="_blank">
 <MessageCircle className="text-[16px]" />
 <span>WhatsApp Electric Specs</span>
 </a>
 </div>
 </div>
 </div>
 </div>
 );
}

export default function ProductRange() {
 const [activeFilter, setActiveFilter] = useState("all");
 const visible = FLEET.filter((item) => activeFilter === "all" || item.type === activeFilter);
 const showElectric = activeFilter === "all" || activeFilter === "electric";
 const count = (key) => (key === "electric" ? 1 : FLEET.filter((item) => key === "all" || item.type === key).length);

 return (
 <section className="py-space-xl bg-surface-container-low" id="forklifts-catalog">
 <div className="wrapper">
 <div className="max-w-3xl mb-space-lg">
 <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-on-surface text-surface-container-lowest rounded text-label-sm uppercase tracking-wider mb-2">
 Fleet Inventory
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
 Forklifts Built Around Your Workload
 </h2>
 <p className="text-body-md text-secondary mt-1">
 Choose the right EIRA forklift by capacity and power type. Directly sourced, fully certified, and field-supported across Pakistan.
 </p>
 <Link href="/products" className="inline-flex items-center gap-1.5 text-label-md font-bold text-primary-container hover:underline mt-2">
 View the full 7-model lineup <span aria-hidden="true">→</span>
 </Link>
 </div>
 <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-md" role="group" aria-label="Filter forklifts by power type">
 {FILTERS.map((filter) => {
 const isActive = activeFilter === filter.key;
 return (
 <button
 key={filter.key}
 type="button"
 aria-pressed={isActive}
 onClick={() => setActiveFilter(filter.key)}
 className={isActive
 ? "px-4 py-2 rounded-lg bg-on-surface text-surface-container-lowest text-label-md font-bold tracking-wide whitespace-nowrap"
 : "px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-semibold transition-colors whitespace-nowrap"}
 >
 {filter.label} ({filter.key === "all" ? FLEET.length + 1 : count(filter.key)})
 </button>
 );
 })}
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
 {visible.map((item) => (
 <StandardCard key={item.title} item={item} />
 ))}
 {showElectric && <ElectricCard />}
 </div>
 </div>
 </section>
 );
}
