"use client";

import { useState } from"react";
import { ArrowRight, MessageCircle } from 'lucide-react';

const capacityData = {
 '3t': {
 title: '3.0 Ton Diesel Series',
 desc: 'The benchmark industrial workhorse for Pakistani factories, textile mills, and warehouse unloading. Built on high-tensile steel mast rails and high-torque diesel performance.',
 load: '3,000',
 lift: '3.0 - 4.5',
 radius: '2,420',
 chassis: 'Pneumatic HD'
 },
 '35t': {
 title: '3.5 Ton Heavy Diesel Forklift',
 desc: 'Reinforced dual-chain carriage designed for container stripping, cross-dock loading, and heavy steel fabrication yards where additional safety margin is mandatory.',
 load: '3,500',
 lift: '3.0 - 5.0',
 radius: '2,480',
 chassis: 'Reinforced HD'
 },
 '4t': {
 title: '4.0 Ton Industrial Diesel Forklift',
 desc: 'High-torque direct fuel injection diesel with dual-speed powershift transmission, engineered for stone yards, marble processing, and heavy mechanical factories.',
 load: '4,000',
 lift: '3.0 - 5.0',
 radius: '2,650',
 chassis: 'Wide Stance'
 },
 '5t': {
 title: '5.0 Ton Heavy Yard Diesel Forklift',
 desc: 'Equipped with dual front drive wheels, oversized counterweight, and rugged steer axle built for continuous shifting of timber logs, structural steel, and precast concrete.',
 load: '5,000',
 lift: '3.0 - 6.0',
 radius: '3,100',
 chassis: 'Dual Front Tyres'
 },
 '10t': {
 title: '10.0 Ton Port & Terminal Handler',
 desc: 'Extreme-capacity industrial unit tailored for dry ports, Karachi Port Trust yards, container freight stations, and heavy project cargo logistics across Pakistan.',
 load: '10,000',
 lift: '3.0 - 6.5',
 radius: '3,950',
 chassis: 'Extreme Yard'
 },
 'ev': {
 title: 'Electric Forklifts (1.5 - 3.5 Ton)',
 desc: 'Zero-emission AC motors paired with industrial Lithium-Ion or lead-acid packs. Essential for clean pharmaceutical facilities, food & beverage plants, and cold storages.',
 load: '1,500 - 3,500',
 lift: '3.0 - 6.0',
 radius: '2,150',
 chassis: 'Non-Marking Tyres'
 },
 'lpg': {
 title: '3.5 Ton Clean LPG Dual-Fuel Forklift',
 desc: 'Clean combustion engineered for both indoor warehouse air safety and outdoor yard agility. Swift 2-minute gas cylinder swaps eliminate recharging downtime.',
 load: '3,500',
 lift: '3.0 - 4.8',
 radius: '2,480',
 chassis: 'Pneumatic / Solid'
 }
};

export default function CapacitySelector() {
 const [activeCap, setActiveCap] = useState('3t');
 const activeData = capacityData[activeCap];

 return (
 <>
 {/* 2. INTERACTIVE CAPACITY SELECTOR */}
 <section className="py-space-xl bg-surface">
 <div className="max-w-7xl mx-auto px-gutter">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
 <div>
 <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 Capacity Matrix
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface">
 FIND YOUR FORKLIFT
 </h2>
 <p className="text-body-md text-secondary mt-1">
 Choose by Load Capacity to configure immediate operational specs.
 </p>
 </div>
 <div className="mt-4 md:mt-0">
 <a className="inline-flex items-center gap-1 text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#quote-module">
 <span>Not sure what capacity you need? Talk to an EIRA specialist</span>
 <ArrowRight className="text-[16px]" />
 </a>
 </div>
 </div>
 <div className="bg-surface-container p-2 rounded-xl flex flex-wrap items-center gap-2 mb-space-md" id="capacity-pills-bar">
 {Object.keys(capacityData).map((cap) => (
 <button
 key={cap}
 className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg text-headline-sm font-bold text-center transition-all ${
 activeCap === cap ? 'bg-primary-container text-on-primary-container shadow-sm' : 'bg-surface hover:bg-surface-container-high text-on-surface'
 }`}
 onClick={() => setActiveCap(cap)}
 type="button"
 >
 {cap === '3t' && '3.0 TON'}
 {cap === '35t' && '3.5 TON'}
 {cap === '4t' && '4.0 TON'}
 {cap === '5t' && '5.0 TON'}
 {cap === '10t' && '10.0 TON'}
 {cap === 'ev' && 'ELECTRIC (1-5T)'}
 {cap === 'lpg' && 'LPG (3.5T)'}
 </button>
 ))}
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="capacity-preview-box">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
 <div className="lg:col-span-4 flex flex-col justify-center">
 <span className="inline-flex items-center gap-1.5 text-primary text-label-md font-bold uppercase tracking-wider mb-2">
 <span className="w-2 h-2 rounded-full bg-primary-container"></span>
 Recommended Workhorse
 </span>
 <h3 className="text-display-hero-mobile font-extrabold text-on-surface tracking-tight mb-2">
 {activeData.title}
 </h3>
 <p className="text-body-md text-secondary mb-space-md leading-relaxed">
 {activeData.desc}
 </p>
 <div className="flex items-center gap-space-sm">
 <a className="inline-flex items-center gap-space-xs px-5 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary-container text-label-md font-bold rounded-lg transition-colors" href="#quote-module">
 <span>Request Quotation</span>
 <ArrowRight className="text-[16px]" />
 </a>
 <a className="inline-flex items-center gap-space-xs px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-label-md font-bold rounded-lg transition-colors" href={`https://wa.me/923003472750?text=I%20am%20interested%20in%20${activeData.title}`} target="_blank">
 <MessageCircle className="text-[18px]" />
 <span>WhatsApp Specs</span>
 </a>
 </div>
 </div>
 <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
 <div className="bg-surface-container-low p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-secondary block mb-1">Rated Load</span>
 <span className="text-[32px] font-extrabold text-on-surface block">
 {activeData.load} <span className="text-headline-sm font-normal text-secondary">KG</span>
 </span>
 <span className="text-label-sm text-primary block mt-1">500 mm Load Center</span>
 </div>
 <div className="bg-surface-container-low p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-secondary block mb-1">Mast Elevation</span>
 <span className="text-[32px] font-extrabold text-on-surface block">
 {activeData.lift} <span className="text-headline-sm font-normal text-secondary">M</span>
 </span>
 <span className="text-label-sm text-secondary block mt-1">2-Stage / 3-Stage Triplex</span>
 </div>
 <div className="bg-surface-container-low p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-secondary block mb-1">Turning Radius</span>
 <span className="text-[32px] font-extrabold text-on-surface block">
 {activeData.radius} <span className="text-headline-sm font-normal text-secondary">MM</span>
 </span>
 <span className="text-label-sm text-secondary block mt-1">Compact aisle agility</span>
 </div>
 <div className="bg-surface-container-low p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-secondary block mb-1">Chassis / Tyres</span>
 <span className="text-[24px] leading-tight font-extrabold text-on-surface block pt-1">
 {activeData.chassis} <span className="text-headline-sm font-normal text-secondary">HD</span>
 </span>
 <span className="text-label-sm text-primary block mt-1">Solid puncture-proof opt.</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
