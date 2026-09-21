"use client";

import { useState } from "react";

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

export default function Home() {
  const [activeCap, setActiveCap] = useState('3t');
  const activeData = capacityData[activeCap];

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-on-surface text-surface-dim font-label-sm text-label-sm border-b border-tertiary/20">
          <div className="max-w-7xl mx-auto px-gutter h-8 flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="tracking-wide uppercase text-surface-container-high">Forklift Solutions for Pakistan — Sourcing &amp; Engineering direct from Karachi &amp; Shanghai</span>
            </div>
            <div className="hidden lg:flex items-center gap-space-md text-surface-variant">
              <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
                <span className="material-symbols-outlined text-[13px]">call</span>Karachi: +92 21 3456 7890
              </span>
              <span className="text-tertiary">|</span>
              <a className="flex items-center gap-space-xs text-primary-fixed hover:text-surface-container-lowest transition-colors" data-path="contact" href="#">
                <span className="material-symbols-outlined text-[13px]">chat</span>WhatsApp Sales
              </a>
              <span className="text-tertiary">|</span>
              <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
                <span className="material-symbols-outlined text-[13px]">mail</span>support@eiraforklifts.com.pk
              </span>
            </div>
          </div>
        </div>
        <div className="h-20 bg-surface/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-gutter h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-lg">
              <a className="flex items-center gap-space-sm focus:outline-none" data-path="home" href="#">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-md text-headline-md font-extrabold tracking-tight text-on-surface">EIRA</span>
                    <span className="px-space-xs py-0.5 bg-on-surface text-primary-container font-label-sm text-[10px] rounded tracking-widest uppercase font-bold">PAKISTAN</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Industrial Material Handling</span>
                </div>
              </a>
              <nav className="hidden xl:flex items-center gap-1" data-active-classes="text-primary font-semibold bg-surface-container-high/50">
                <a aria-current="page" className="px-3 py-2 rounded transition-colors text-primary font-semibold bg-surface-container-high/50" data-path="home" href="#">Home</a>
                <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-md text-body-md flex items-center gap-1" data-path="forklifts-catalog" href="#">Forklifts</a>
                <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-md text-body-md" data-path="about-eira" href="#">About EIRA</a>
                <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-md text-body-md" data-path="industries" href="#">Industries</a>
                <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-md text-body-md" data-path="support-services" href="#">Support</a>
                <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-md text-body-md" data-path="contact" href="#">Contact</a>
              </nav>
            </div>
            <div className="flex items-center gap-space-sm">
              <a className="hidden sm:inline-flex items-center gap-space-xs px-3.5 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md transition-all shadow-sm" data-path="contact" href="#">
                <span className="material-symbols-outlined text-[18px]">chat</span><span>WhatsApp Sales</span>
              </a>
              <a className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold transition-all transform hover:-translate-y-0.5 shadow-sm" data-path="request-a-quote" href="#">
                <span>Request a Quote</span><span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <div className="pl-space-xs border-l border-surface-container-highest flex items-center">
                <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest" src="https://lh3.googleusercontent.com/aida/AEtjO1UFUe3SWBEksfSPNF0m1J28UyqqX0wDY12XjR5P23NWhVwu95zVFC-3loQIXqYBw4FQxzpF89JEXZpFHD5eh5xYi0GMdTlJgrxyIBoMT5hwSCQdpZjIIiXIzH3f59bdPMmQ2HPeH-C52CElRPoUipIl8b12dQfpRRvyZkdUoQw1U6MrsaKE2R1LTYvauaSvXuV0Yg5gxWhApLGk9vaADnoy96fKV78IRGaibSLFm0yl4I6I1q-IGRhvnGXr5DHLk3mft6fVvNBcZyg" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-28 bg-surface min-h-screen">
        <div className="flex flex-col w-full text-on-surface">
          {/* 1. HERO SECTION */}
          <section className="relative overflow-hidden bg-surface-container-low pb-space-xl pt-space-md">
            <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#121c2a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="max-w-7xl mx-auto px-gutter relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-sm">
                <div className="lg:col-span-6 flex flex-col items-start">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-on-surface text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-widest rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                      EIRA FORKLIFTS — PAKISTAN
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">HEAVY EQUIPMENT DIVISION</span>
                  </div>
                  <h1 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight mb-space-xs">
                    Reliable Forklifts for Sale in Pakistan
                  </h1>
                  <h2 className="font-display-hero text-display-hero text-on-surface font-extrabold tracking-tight leading-[1.08] mb-space-md">
                    Reliable Forklifts. <br />
                    <span className="text-primary-container">Practical Prices.</span> <br />
                    Built for Pakistan.
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary mb-space-lg max-w-xl leading-relaxed">
                    Reliable diesel, electric, and LPG forklifts for warehouses, factories, and industrial operations across Pakistan — engineered for demanding material handling without unnecessary brand premiums.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm mb-space-lg w-full sm:w-auto">
                    <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="#forklifts-catalog">
                      <span>Explore Forklifts</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-xl bg-surface-container-highest hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm font-bold transition-colors" href="#quote-module">
                      <span>Get Best Price</span>
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-space-xs px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md transition-all shadow-sm" href="https://wa.me/923003472750" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat on WhatsApp (+92 300 EIRA-PK)</span>
                    </a>
                  </div>
                  <div className="w-full pt-space-md bg-surface-container/50 rounded-xl px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">local_shipping</span>
                      <div>
                        <span className="block font-label-md text-label-md uppercase tracking-wider text-secondary">Powertrains</span>
                        <strong className="font-spec-numeral text-spec-numeral">Diesel • Electric • LPG</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">weight</span>
                      <div>
                        <span className="block font-label-md text-label-md uppercase tracking-wider text-secondary">Payload Range</span>
                        <strong className="font-spec-numeral text-spec-numeral">3T to 10T Heavy Duty</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">verified</span>
                      <div>
                        <span className="block font-label-md text-label-md uppercase tracking-wider text-secondary">Local Network</span>
                        <strong className="font-spec-numeral text-spec-numeral">Karachi &amp; Nationwide</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 relative mt-space-md lg:mt-0">
                  <div className="relative mx-auto max-w-[560px] lg:max-w-none">
                    <div className="relative bg-surface-container rounded-xl p-3 shadow-xl overflow-hidden group">
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg text-surface-container-lowest">
                        <img alt="EIRA Industrial Machinery" className="h-4 w-auto invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEb9lICOWOLWStCNLzFt8mhq6OqlYiH_8mQRqWuPrUTiVlRWQvcYoOn9ODHBB_TP1mv9E1s2o--75jUj1LXVCVITVL3ztrbzsu6CGO36t6ZhjQWpiLK639aeHpSFf9tWJLhtqtDeauGoI82n-GLRwJoIeYrx251f0SFxu4fMkrNeGPYE9v6RQJThzONbvkXCxBQMaI8HqCb8jUNLwkxxHEmmVIG7biHdmoYnjO7qtv-Sr2O5vnlQg5H0n8JlafVZtoa98" />
                        <span className="text-secondary-container font-label-sm text-[10px] tracking-widest uppercase">SERIES-30D SPEC</span>
                      </div>
                      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest">
                        <img alt="EIRA 3 Ton Heavy Duty Diesel Forklift Pakistan" className="w-full h-auto object-cover max-h-[540px] transform group-hover:scale-[1.01] transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjGZdtfLjM-AkN30aYQcZTYviw9PpV8ARILMj-ny2pnZN42DwHfAiEuA4g31W3OT3zJMRx4-7KgM5fWkIu6GyffoPy0Dglo9k6VJz8eEJGfl5lM17nbltWHTq0G81XTamLPmDJgNTsLdM2qXNWca9d1MkHFy_koQMg2lIr4fWtssVSbI7LXdStER-OEe_itSHpyB--4zl-86uCvekeiM82Ye1TAbAcb07KOhuZqzQhvoJSGUkyGiiO3RNPX5EULa1NkhI" />
                      </div>
                      <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                        <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">Rated Payload:</span>
                          <span className="font-spec-numeral text-spec-numeral text-primary-fixed font-bold">3,000 KG</span>
                        </div>
                        <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow hidden sm:flex items-center gap-1.5">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">Powertrain:</span>
                          <span className="font-spec-numeral text-spec-numeral font-bold">Industrial Diesel</span>
                        </div>
                        <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">Chassis:</span>
                          <span className="font-spec-numeral text-spec-numeral font-bold">K-Series Reinforced</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 z-20 bg-primary-container text-on-primary-container px-3 py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider shadow">
                        In Stock Karachi
                      </div>
                    </div>
                    <div className="mt-space-sm flex items-center justify-between px-2 text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">AUTHENTIC BRANDING:</span>
                        <img alt="EIRA Forklifts" className="h-5 w-auto object-contain opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGuLyPLLHi6UBonlc762YhmJYbsPHsXV8Go_AfU708FKIOOwfpdKVUCNXOkdiJmVj8u1WSHUYwCaJT_O1Zw8WW-qrUPZPWn-NlCrsSGpijdKxARqfjzY-so_3jn0oKntIXweOuNaZWivWkX7tpSlEAvr6P6jMOMqWb45kF7QLXUpT0T-GZLlx7rKeau4E9TSkhFGajY2Z4IIVyKHZ1CHgJr4Vw4N4jpRUe7ONGwREAUkJrz9Fc0x3dRa4GclweH6tIcOA" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Shanghai Engineering Link • Karachi Hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTERACTIVE CAPACITY SELECTOR */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                    Capacity Matrix
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    FIND YOUR FORKLIFT
                  </h2>
                  <p className="font-body-md text-body-md text-secondary mt-1">
                    Choose by Load Capacity to configure immediate operational specs.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#quote-module">
                    <span>Not sure what capacity you need? Talk to an EIRA specialist</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="bg-surface-container p-2 rounded-xl flex flex-wrap items-center gap-2 mb-space-md" id="capacity-pills-bar">
                {Object.keys(capacityData).map((cap) => (
                  <button
                    key={cap}
                    className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-headline-sm text-headline-sm font-bold text-center transition-all ${
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
                    <span className="inline-flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold uppercase tracking-wider mb-2">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      Recommended Workhorse
                    </span>
                    <h3 className="font-display-hero-mobile text-display-hero-mobile font-extrabold text-on-surface tracking-tight mb-2">
                      {activeData.title}
                    </h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md leading-relaxed">
                      {activeData.desc}
                    </p>
                    <div className="flex items-center gap-space-sm">
                      <a className="inline-flex items-center gap-space-xs px-5 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold rounded-lg transition-colors" href="#quote-module">
                        <span>Request Quotation</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </a>
                      <a className="inline-flex items-center gap-space-xs px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-label-md text-label-md font-bold rounded-lg transition-colors" href={`https://wa.me/923003472750?text=I%20am%20interested%20in%20${activeData.title}`} target="_blank">
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>WhatsApp Specs</span>
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-1">Rated Load</span>
                      <span className="font-tonnage-stat text-[32px] font-extrabold text-on-surface block">
                        {activeData.load} <span className="text-headline-sm font-normal text-secondary">KG</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-primary block mt-1">500 mm Load Center</span>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-1">Mast Elevation</span>
                      <span className="font-tonnage-stat text-[32px] font-extrabold text-on-surface block">
                        {activeData.lift} <span className="text-headline-sm font-normal text-secondary">M</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary block mt-1">2-Stage / 3-Stage Triplex</span>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-1">Turning Radius</span>
                      <span className="font-tonnage-stat text-[32px] font-extrabold text-on-surface block">
                        {activeData.radius} <span className="text-headline-sm font-normal text-secondary">MM</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary block mt-1">Compact aisle agility</span>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-1">Chassis / Tyres</span>
                      <span className="font-tonnage-stat text-[24px] leading-tight font-extrabold text-on-surface block pt-1">
                        {activeData.chassis} <span className="text-headline-sm font-normal text-secondary">HD</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-primary block mt-1">Solid puncture-proof opt.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          {/* 3. PRODUCT RANGE */}
          <section className="py-space-xl bg-surface-container-low" id="forklifts-catalog">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="max-w-3xl mb-space-lg">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-on-surface text-surface-container-lowest rounded font-label-sm text-label-sm uppercase tracking-wider mb-2">
                  Fleet Inventory
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Forklifts Built Around Your Workload
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Choose the right EIRA forklift by capacity and power type. Directly sourced, fully certified, and field-supported across Pakistan.
                </p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-md">
                <button className="px-4 py-2 rounded-lg bg-on-surface text-surface-container-lowest font-label-md text-label-md font-bold tracking-wide">
                  All Forklifts (7)
                </button>
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors">
                  Diesel Forklifts
                </button>
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors">
                  Electric Forklifts
                </button>
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors">
                  LPG Forklifts
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="EIRA 3 Ton Diesel Forklift" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtH74uwM-S8EHNU1UbybDh3oFbCvWSZQXEWH18QLxhdzECklGp4c3n33KBw1Exh3mJNXrvIbrndDIpluMI0Pb61F_GQuB1Pl7W8y2d3Fk7memGpbPX6rE5ESjEd5BbK1Xsegk84OG4gmgkl96-xdijnM94ikDZ1owDLmVQM5tA_1Ckpq78Mr0fFcUjoy3hWNCuntRivAza6VIJChe7UbXdFwpaeHcWQYJgzqC00YSsG_eaVuNqv75wK9KjWk7OTIZGRBs" />
                      <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Most Popular
                      </div>
                      <div className="absolute bottom-3 right-3 bg-on-surface/90 text-surface-container-lowest font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Karachi Stock
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Diesel Fleet</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Standard Spec</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        3 Ton Diesel Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3,000 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 4.5m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Warehouses &amp; Logistics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#spotlight-section">
                      Specs (PDF)
                    </a>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="EIRA 3.5 Ton Heavy Diesel Forklift" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYGAfAj0fHBOqIEzlX6BRRfFOl9sv7DmCr3o3zh9XcHAaBtRKGJWPqugdipWax9lcmS33KyhUf0BN97ZbLvqSUnnnvOiCzAEIDSo5nSSqYTVNHC7AArJjChUZkq51sbSY0Hi8kjn7vylcD0-ArP4m6gVPMZuBzGvp7YZsdLcaH_V8jSCV4UcW0i2X92OBDRmOeP94Hhbe8pLi76QDHCcXrmQUzRHtvi6i2u1K52MBwXeV1Etz-8xcDg1U2IVmnC-dUDG0" />
                      <div className="absolute top-3 left-3 bg-on-surface text-surface-container-lowest font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Heavy Duty
                      </div>
                      <div className="absolute bottom-3 right-3 bg-on-surface/90 text-surface-container-lowest font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Import Ready
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Diesel Fleet</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Reinforced Mast</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        3.5 Ton Diesel Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3,500 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 5.0m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Port &amp; Cargo Freight</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#quote-module">
                      View Specs
                    </a>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="Heavy 4 Ton industrial diesel forklift operating in a Pakistani cargo yard" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfapHv4qqiAoO0AlGVuFxPrxkZa0dtj_X-yW4042q04F3NzEQQs-vnql0J1jVI4T8_bq-ty3Y77njn4aNCNVR0LdJMshbeZMR-gl_CAY4iM_dQwx6-lZ45MpDQAOQqv13AWKlyvVnGDkOt59w1eE_ZCzYpYR184F7Fv0Ggs9sZ6K2rrQZGf9R67A9gBITq3vuws31V9K6KAhSRe-IoGLSRceeGAbspFBat42BfV52VXYj0GtqY5QM71w" />
                      <div className="absolute top-3 left-3 bg-secondary text-surface-container-lowest font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Industrial Depot
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Diesel Fleet</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">High Torque</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        4 Ton Diesel Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">4,000 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 5.0m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Heavy Engineering &amp; Steel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#quote-module">
                      View Specs
                    </a>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="5 Ton heavy duty industrial forklift handling timber and steel pipes" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyXVfryYy6cy9Q5P1OlHD2Ybb5_Qxq5FT3hv5Euji_IEmLXaT13e_raM4mKcoehSHhoaRc-n8JR1i0XuS-iP_cEtPvdbG-GJFa6Qv51HgXGywXJLMSkgsswab3DBW8gEAEEhksKZynSo0ygyvpH6Yc9y2cGsPRGxKxc5hWCw8Cy3_XaDzGc6xC0eYQe6_J4zGUDgJiPGcp-PM3-NCu_KUbiqY2EjniC3Z_fuuFTp96dTs5Ehu-gVCRfA" />
                      <div className="absolute top-3 left-3 bg-on-surface text-surface-container-lowest font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Heavy Yard
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Diesel Fleet</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Dual Front Tyres</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        5 Ton Diesel Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">5,000 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 6.0m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Steel, Timber &amp; Cement Plants</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#quote-module">
                      View Specs
                    </a>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="Massive 10 Ton container handling forklift in Port Qasim Karachi" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_nOEsWRj1W_n-BL9RGNXT1AEVF27dyKzLahIHSM-h9_cfUQ7H3aONvMqeFl2J8eJTQoWLziZfM2ypivoquTNLl9vgLtHACK1dlSBr1YlzTfd-4ZDkb9M4UvVwhXh4ObcgBfa3bkHMf9KFAVWi9WhDUx6-rTxDSrmqZyXiThkzjXroQHbPrdDbMvGnp5c_5832xJ_8OnbDvrVrvSW7CWiDQ1RW4ZX5fzY_NEKpwYW2Vs9Kr_n4c5lovA" />
                      <div className="absolute top-3 left-3 bg-error text-on-error font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Extreme Load
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Port &amp; Rail Series</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Direct Import</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        10 Ton Heavy Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">10,000 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 6.5m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Dry Ports &amp; Bulk Terminals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#quote-module">
                      View Specs
                    </a>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative bg-surface-container-high h-56 overflow-hidden">
                      <img alt="Modern clean LPG powered forklift with cylinder mounted on rear" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrWurt3ipJplKZt_vsZR4o4ncM0TfP6MX_be1FA7w4JpcC4kCn-svVJlf6pu-N4UjphQ1GusKbASsbe11PD-3GZkUDNoNANuRhBbHexN0CiZdhcFAr-X0dF2zIYmnmqJh5Q0fDqXzJBZqUlSpxD6-B2YW7ylNCSAoaqLrd5ht3H5EfD5dlBQ9oz_nZM6-8x1Ne66i3v7TGZ-5yPkBz8qtGC5xIVBkFAL5lyyg_13eNlwWcLtGchKEUMg" />
                      <div className="absolute top-3 left-3 bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold uppercase px-2.5 py-1 rounded">
                        Dual Fuel / Clean
                      </div>
                    </div>
                    <div className="p-space-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">LPG Gas Series</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Indoor Compliant</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                        3.5 Ton LPG Forklift
                      </h3>
                      <ul className="space-y-1.5 font-body-md text-body-md text-secondary mb-space-md">
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Rated Payload:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3,500 kg</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 px-2">
                          <span>Lift Height:</span>
                          <strong className="font-spec-numeral text-spec-numeral text-on-surface">3.0m - 4.8m</strong>
                        </li>
                        <li className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                          <span>Best For:</span>
                          <span className="font-body-md text-body-md text-on-surface">Dual indoor/outdoor emission standard</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
                    <a className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                      Request Price
                    </a>
                    <a className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center rounded-lg transition-colors" href="#quote-module">
                      View Specs
                    </a>
                  </div>
                </div>
                {/* Card 7 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between lg:col-span-3">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-5 h-64 bg-surface-container-high overflow-hidden">
                      <img alt="Modern electric lithium-ion forklift operating silently inside a high-rack FMCG warehouse in Karachi" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDSeUJREnIGQiSXpa_uO5scFuEdlzA9GzQdWjYfj3H6kb3iEF95Htk82KTJYdvSK6gYkCx6xiMvFnzs6Rodd7-QWcEGHy5Nxan5CYfdwvuht-j1XYTsKRnAQb5UWmmcNh2x76OqMqNFFvAVngBUqbKlCJJ5g3TKkFnFf3ks85cjzcgI_tZ7Ctmjuqwnl7JBpqa-4Bt0KBc1no9HSz28CgSl-ZIK0DXQNi5iOVBSDZfe4RZ7cTw9W4dg" />
                    </div>
                    <div className="lg:col-span-7 p-space-lg flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-primary-container/20 text-primary-container rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          Zero Emissions AC Electric Drive
                        </div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                          Electric Forklifts (1.5 - 3.5 Ton)
                        </h3>
                        <p className="font-body-md text-body-md text-secondary mb-space-md max-w-2xl">
                          Engineered specifically for pharmaceutical cold chains, food processing facilities, and textile warehouses where clean air standards are non-negotiable. Available with fast-charging Lithium-Ion battery configurations.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-space-md">
                          <div className="bg-surface-container-low p-2 rounded">
                            <span className="text-label-sm font-label-sm uppercase text-secondary block">Capacity Range</span>
                            <strong className="font-spec-numeral text-spec-numeral">1,500 – 3,500 KG</strong>
                          </div>
                          <div className="bg-surface-container-low p-2 rounded">
                            <span className="text-label-sm font-label-sm uppercase text-secondary block">Drive</span>
                            <strong className="font-spec-numeral text-spec-numeral">Dual AC Motors</strong>
                          </div>
                          <div className="bg-surface-container-low p-2 rounded">
                            <span className="text-label-sm font-label-sm uppercase text-secondary block">Run Time</span>
                            <strong className="font-spec-numeral text-spec-numeral">8-10h Shift Life</strong>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-space-sm">
                        <a className="py-2.5 px-5 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold text-center rounded-lg transition-colors" href="#quote-module">
                          Request Electric Quote
                        </a>
                        <a className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md font-bold text-center rounded-lg transition-colors flex items-center gap-1.5" href="https://wa.me/923003472750?text=Please%20share%20Electric%20Forklift%20pricing" target="_blank">
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          <span>WhatsApp Electric Specs</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. POWER TYPE SECTION */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                  Powertrain Architecture
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Engineered for Every Pakistani Facility Environment
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Select between heavy outdoor diesel torque, zero-emission indoor electric power, or clean dual-fuel LPG flexibility.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Panel 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-on-surface text-primary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">local_gas_station</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 01</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">DIESEL FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "For demanding industrial and outdoor operations."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>High-output industrial torque for non-stop shift loading.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Rugged all-weather yard performance on rough gravel &amp; concrete.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Straightforward local diesel maintenance accessible across Pakistan.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore Diesel Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
                {/* Panel 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">bolt</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 02</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">ELECTRIC FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "Efficient material handling for warehouses and indoor environments."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>100% zero tailpipe emissions — strictly hygienic.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Ultra-low operating noise for enclosed warehouse comfort.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Ideal for food processing, pharmaceuticals &amp; textile storage.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore Electric Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
                {/* Panel 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">propane_tank</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 03</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">LPG FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "Flexible performance for suitable industrial applications."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Clean combustion exhaust compliant with indoor air ventilation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Rapid 2-minute gas cylinder swaps without charging downtime.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Seamless dual indoor/outdoor working transitions.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore LPG Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 5. 3 TON FEATURE SPOTLIGHT */}
          <section className="py-space-xl bg-on-surface text-surface-container-lowest relative overflow-hidden" id="spotlight-section">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#aff763 1px, transparent 1px), linear-gradient(90deg, #aff763 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="max-w-7xl mx-auto px-gutter relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-space-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase tracking-widest rounded mb-3">
                  Engineering Showcase
                </div>
                <h2 className="font-display-hero-mobile text-display-hero-mobile lg:text-[40px] font-extrabold tracking-tight text-white mb-2">
                  3 Ton EIRA Forklift
                </h2>
                <p className="font-body-lg text-body-lg text-surface-dim">
                  A practical capacity for everyday industrial material handling. Precision engineered chassis with rugged localized components.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-3 space-y-space-sm order-2 lg:order-1">
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 01</span>
                    <span className="font-body-md text-body-md text-surface-dim">Rated Load</span>
                    <strong className="font-spec-numeral text-[22px] text-white block mt-0.5">3,000 kg (3.0 Ton)</strong>
                  </div>
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 02</span>
                    <span className="font-body-md text-body-md text-surface-dim">Power Architecture</span>
                    <strong className="font-spec-numeral text-[22px] text-white block mt-0.5">High-Torque Diesel</strong>
                  </div>
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 03</span>
                    <span className="font-body-md text-body-md text-surface-dim">Standard Lift Height</span>
                    <strong className="font-spec-numeral text-[22px] text-white block mt-0.5">3,000 – 4,500 mm</strong>
                  </div>
                </div>
                <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center">
                  <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-inverse-surface/40 p-2">
                    <img alt="EIRA 3 Ton Detailed Industrial Mast and Cabin View" className="w-full h-auto object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWSCIIuVpW7r2Mge__d3s7Ma4wflRuQ__87N9vIes8hdv6hcNZZwcdadGBdOw3JqVDGTS5fH8F5c_Ts02CuizkUdwuQw0p230c43HmGQTypbvIZK0uOgqJkbMWVTOPpvX1voOfAS1uX5dx2j31au79ZT-4wMBqZhz83-3IZNDsgfcACeyDi4Smtgivc22Sv_i6vWnjsyayblSULnDYyHAfUKoVF9pRg2foF5naegM8uyO8-5gOpmfQzHZhKHPBCVjT78" />
                    <div className="absolute top-8 left-8 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                      <span className="font-label-sm text-label-sm font-semibold text-white uppercase tracking-wider">Reinforced Triplex Mast</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[16px]">tire_repair</span>
                      <span className="font-label-sm text-label-sm font-semibold text-white uppercase tracking-wider">Heavy Deep-Lug Tyres</span>
                    </div>
                  </div>
                  <div className="mt-space-md flex items-center gap-3">
                    <img alt="EIRA" className="h-6 w-auto invert opacity-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDvOgkU0_fQsrw72ToMCkkUEtDcD3NLqhsLG-heE2NxvYnuYBPZaZoPKLBbrLrHnTqq8K3FvWYHwX53WyibyoWr377PQ_hBwIKkR2bCumgOHa-NkTpHm786_ot3ksQXG0md7WIeZL5gLLviS08C8m6KcMH3M8JoeTOEDODCTPbQ4lRK1EdvNpUDCc0Bd_vVwXgNqtm2u40cI63-g5xY2_ILTZdWhGUSUNP00i1HSbtbsEoqCEa50naYwK-mZ3EPhFSQP0" />
                    <span className="font-label-sm text-label-sm text-surface-dim uppercase tracking-widest">SERIES 30 INDUSTRIAL CHASSIS</span>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-space-sm order-3">
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 04</span>
                    <span className="font-body-md text-body-md text-surface-dim">Load Centre</span>
                    <strong className="font-spec-numeral text-[22px] text-white block mt-0.5">500 mm Standard</strong>
                  </div>
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 05</span>
                    <span className="font-body-md text-body-md text-surface-dim">Turning Radius</span>
                    <strong className="font-spec-numeral text-[22px] text-white block mt-0.5">Compact 2,420 mm</strong>
                  </div>
                  <div className="bg-inverse-surface p-space-md rounded-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 06</span>
                    <span className="font-body-md text-body-md text-surface-dim">Fork Dimensions</span>
                    <strong className="font-spec-numeral text-[18px] text-white block mt-0.5">1,070 × 125 × 45 mm</strong>
                  </div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-lg flex flex-wrap items-center justify-center gap-space-md bg-inverse-surface/60 rounded-xl p-space-md">
                <a className="px-6 py-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-headline-sm font-bold rounded-lg transition-colors flex items-center gap-2" href="#quote-module">
                  <span>Request 3 Ton Price</span>
                  <span className="material-symbols-outlined text-[18px]">request_quote</span>
                </a>
                <a className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-headline-sm text-headline-sm font-bold rounded-lg transition-colors flex items-center gap-2" href="https://wa.me/923003472750?text=Please%20send%203%20Ton%20EIRA%20Spec%20Sheet%20PDF" target="_blank">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Consultation</span>
                </a>
                <button className="px-6 py-3 bg-surface-container-high/10 hover:bg-surface-container-high/20 text-white font-headline-sm text-headline-sm font-semibold rounded-lg transition-colors flex items-center gap-2" onClick={() => alert('Downloading 3-Ton EIRA Technical Data Sheet (PDF)...')} type="button">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Download PDF Spec Sheet</span>
                </button>
              </div>
            </div>
          </section>

          {/* 6. WHY EIRA */}
          <section className="py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="max-w-3xl mb-space-lg">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                  The EIRA Advantage
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Industrial Performance Without the Premium Markup
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Eliminating inflated dealer overheads through streamlined engineering sourcing direct from Shanghai into Karachi.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">price_change</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Competitive Direct Pricing</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    By operating direct supply lines between production engineering and local Pakistan distribution, we strip away redundant intermediaries and brand markups.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Reliable Industrial Engineering</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Rigid high-tensile steel masts, reinforced chassis frames, and heavy-duty hydraulic valves proven in extreme heat and dusty industrial environments.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">grid_view</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Multiple Load Capacities</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    From agile 3-ton warehouse units up to massive 10-ton dry port container handlers, plus electric AC and dual-fuel LPG variations tailored to your facility.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">build_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Professional After-Sales Support</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Dedicated service mechanics in Karachi, scheduled preventative maintenance SLAs, and ready stock of critical wear-and-tear spares across Pakistan.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">hub</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Direct Engineering Sourcing</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Directly connected with advanced Shanghai heavy equipment manufacturing clusters, ensuring world-class CE/ISO quality controls on every single unit.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[22px]">speed</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">High Uptime Guarantee</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Designed for low complexity maintenance so your in-house plant mechanics can inspect filters, fluids, and hydraulics without proprietary lockout tools.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. PAKISTANI INDUSTRIAL APPLICATIONS */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                    Target Industries
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    Built for Pakistan's Working Industries
                  </h2>
                  <p className="font-body-md text-body-md text-secondary mt-1">
                    Engineered to thrive in Pakistan's demanding operational climates, ports, and manufacturing zones.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">warehouse</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Warehouses &amp; Logistics Hubs</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    Heavy pallet cycling in Port Qasim, SITE Area Karachi, Sundar Industrial Estate Lahore, and M-3 Industrial City.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 3.0T Diesel &amp; 2.5T Electric</span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">texture</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Textile &amp; Garment Mills</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    Handling yarn bales, fabric rolls, and shipping containers across Faisalabad, Multan, and Karachi textile zones.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 3.0T – 3.5T Diesel &amp; LPG</span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">factory</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Manufacturing &amp; Assembly</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    Automotive part feeding, metal fabrication yards, and heavy assembly line material distribution.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 3.5T – 5.0T Heavy Diesel</span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">restaurant</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Food &amp; Beverage Distribution</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    Zero-emission indoor handling inside FMCG cold storage, confectionery warehouses, and packaging floors.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 1.5T – 3.5T Li-Ion Electric</span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">foundation</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Cement &amp; Construction Depots</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    High-dust, outdoor concrete block handling, palletized cement bags, and structural rebar transportation.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 4.0T – 5.0T High-Torque Diesel</span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined">science</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Chemical &amp; Bulk Storage</h3>
                  </div>
                  <p className="font-body-md text-body-md text-secondary mb-2">
                    Handling IBC totes, fertilizer bags, and chemical drums with optional explosion-proof / spark-resistant options.
                  </p>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Key Match: 3.5T LPG / Clean Electric</span>
                </div>
              </div>
            </div>
          </section>

          {/* 8. SUPPORT BEYOND THE SALE */}
          <section className="py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="max-w-3xl mb-space-lg">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                  Operational Security
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Support Beyond the Sale
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Machinery is only as good as the team behind it. We provide continuous technical infrastructure across Pakistan.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <span className="font-tonnage-stat text-[28px] text-primary-container font-extrabold block mb-2">01</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Product Consultation</h3>
                  <p className="font-body-md text-body-md text-secondary">
                    Accurate tonnage matching, mast collapse height verification, and turning aisle calculations prior to purchase.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <span className="font-tonnage-stat text-[28px] text-primary-container font-extrabold block mb-2">02</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Forklift Maintenance</h3>
                  <p className="font-body-md text-body-md text-secondary">
                    Structured 250-hour and 500-hour preventative inspection contracts to maintain operational uptime and resale value.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <span className="font-tonnage-stat text-[28px] text-primary-container font-extrabold block mb-2">03</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">After-Sales Support</h3>
                  <p className="font-body-md text-body-md text-secondary">
                    Karachi-based support desk with mobile field mechanics ready to travel for diagnostics, repairs, and mast servicing.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <span className="font-tonnage-stat text-[28px] text-primary-container font-extrabold block mb-2">04</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Parts &amp; Assistance</h3>
                  <p className="font-body-md text-body-md text-secondary">
                    Genuine hydraulic seal kits, fuel filters, mast rollers, steer axle pins, and replacement forks warehoused in Karachi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 9. ABOUT EIRA */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="bg-surface-container rounded-2xl p-space-lg lg:p-space-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-space-sm">
                      <img alt="EIRA Logo" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU8DFDCtEhsRjKutOoG7z1dg2tEtWR4QyKybnyajXfqBkCXFOAVJ20fDm-pUyluQ4YPwHe9Fy6JlDWkUyDbm_1onLnAuUvFGoXovGhMAuEQ76t5F2MZN0meU6fxnmCXwn8SDfc1ryqbG5hA_loaeU0JEWqKRbIvET-7M_MyhdkOXfCjGnPg_BUGkBkensyRfp1Lnr8wGUUJ1-jJ1UK1imuQ7HbXR2F56MbONlfN9andFKs6cd3NcHkkwmd4SGzXxLTQro" />
                      <span className="px-2 py-0.5 bg-on-surface text-primary-container font-label-sm text-[10px] rounded tracking-widest uppercase font-bold">ABOUT US</span>
                    </div>
                    <h2 className="font-display-hero-mobile text-display-hero-mobile font-extrabold text-on-surface tracking-tight mb-space-sm">
                      Global Supply. <span className="text-primary">Local Understanding.</span>
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-md">
                      EIRA combines manufacturing and sourcing expertise connected directly with Shanghai industrial hubs with deep operational market understanding in Karachi. We provide heavy-duty forklift solutions designed strictly around practical industrial requirements.
                    </p>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
                      For too long, Pakistani industrial enterprises have faced an impractical binary: exorbitant price tags for legacy Japanese/European brands, or unverified secondary market machinery with zero parts continuity. EIRA delivers the balanced solution: proven industrial-grade engineering, reliable components, and local nationwide backing.
                    </p>
                    <div className="grid grid-cols-3 gap-space-sm border-t border-secondary-container pt-space-md">
                      <div>
                        <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface block">100%</span>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Factory Tested</span>
                      </div>
                      <div>
                        <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface block">Karachi</span>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Parts &amp; Hub</span>
                      </div>
                      <div>
                        <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface block">ISO 9001</span>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">CE Certified</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                      <div className="rounded-lg overflow-hidden mb-space-sm bg-surface-container-highest">
                        <img alt="EIRA Forklift Assembly and Verification" className="w-full h-52 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKhReybMCT8zi8Lai3ACNF2mS_fddOT1xWFxDyzt7saFzrggUMhmatPW_co66kZrmjaXwsrHCqDpHOETp7HkNWhEHHyK0sRd7KyPidVQOj9CY29uDO_dhPDA5OwRBFS9QYm3SZHoy2u5pYaW3iB2RQnVosslBXdiX-kX3-11CLHsOuf30JXUxhxnwUgWgXsoyju5DwWV1eETq9z-vgD2Ir5LNr85IeRYo1bAx7Q-e8gp6Hj9Uh_lqK0HIHzQwsES3sy0" />
                      </div>
                      <div className="p-2">
                        <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary uppercase mb-1">
                          <span>Direct Trade Pipeline</span>
                          <span className="text-primary font-bold">Shanghai ➔ Karachi</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface font-medium">
                          Continuous supply chain integration ensuring timely dispatch, custom mast rigging, and rapid spare parts replenishment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 10. LEAD GENERATION / QUOTATION MODULE */}
          <section className="py-space-xl bg-surface-container-low" id="quote-module">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-2xl shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                    Commercial Quotation Request
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-1">
                    Tell Us What You Need to Lift
                  </h2>
                  <p className="font-body-md text-body-md text-secondary mb-space-lg">
                    Submit your parameters below. Our engineering sales team in Karachi will reply with official formal pricing and technical specifications within 2 business hours.
                  </p>
                  <form className="space-y-space-md" id="eira-quote-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you. Your quotation request has been registered. An EIRA specialist will contact your WhatsApp/Phone shortly.'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="e.g. Tariq Mahmood" required type="text" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                          Company Name <span className="text-primary">*</span>
                        </label>
                        <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="e.g. Indus Packaging Ltd." required type="text" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                          Phone / WhatsApp Number <span className="text-primary">*</span>
                        </label>
                        <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="+92 300 1234567" required type="tel" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                          City Location <span className="text-primary">*</span>
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" required defaultValue="">
                          <option disabled value="">Select Operational City</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Islamabad">Islamabad / Rawalpindi</option>
                          <option value="Multan">Multan</option>
                          <option value="Gujranwala">Gujranwala / Sialkot</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="Hub">Hub / Balochistan</option>
                          <option value="Other">Other City (Nationwide Delivery)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                        Required Capacity / Power Type <span className="text-primary">*</span>
                      </label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" required defaultValue="">
                        <option disabled value="">Select Tonnage Model</option>
                        <option value="3ton-diesel">3.0 Ton Diesel Forklift (Standard Workhorse)</option>
                        <option value="35ton-diesel">3.5 Ton Heavy Diesel Forklift</option>
                        <option value="4ton-diesel">4.0 Ton Industrial Diesel Forklift</option>
                        <option value="5ton-diesel">5.0 Ton High-Torque Diesel Forklift</option>
                        <option value="10ton-diesel">10.0 Ton Heavy Port &amp; Terminal Handler</option>
                        <option value="35ton-lpg">3.5 Ton Clean LPG Dual-Fuel Unit</option>
                        <option value="electric-range">1.5 - 3.5 Ton Li-Ion Electric Forklift</option>
                        <option value="not-sure">Not Sure — Request Technical Load Assessment</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1.5">
                        Application Notes (Optional)
                      </label>
                      <textarea className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="Describe lift height needed (e.g. 4.5m mast), indoor/outdoor surface, shift hours, or pallet dimensions..." rows="3"></textarea>
                    </div>
                    <button className="w-full py-4 px-6 rounded-xl bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-headline-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2" type="submit">
                      <span>Get a Forklift Quote</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </form>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
                  <div className="bg-gradient-to-br from-[#128C7E] to-[#075E54] text-white p-space-lg rounded-2xl shadow-md">
                    <div className="flex items-center gap-2 mb-space-sm">
                      <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping"></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#aff763] font-bold">Fast Direct Response</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold mb-2">Prefer Instant WhatsApp?</h3>
                    <p className="font-body-md text-body-md text-surface-container-high/90 mb-space-md">
                      Speak directly with our commercial sales and machinery dispatch engineers in Karachi. Receive quotes, photos, and spec catalogs in real-time.
                    </p>
                    <div className="bg-black/20 rounded-xl p-3 mb-space-md flex items-center justify-between">
                      <div>
                        <span className="text-label-sm font-label-sm uppercase text-surface-container-high block">Official WhatsApp Line</span>
                        <span className="font-spec-numeral text-spec-numeral font-bold text-white text-[18px]">+92 300 EIRA-PK (3472-750)</span>
                      </div>
                      <span className="material-symbols-outlined text-[32px] text-[#25D366]">chat</span>
                    </div>
                    <a className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-headline-sm text-headline-sm font-bold rounded-xl text-center block transition-colors shadow" href="https://wa.me/923003472750?text=Hello%20EIRA%20Pakistan%20Sales%20Team%2C%20I%20need%20a%20forklift%20quote." target="_blank">
                      Open WhatsApp Sales Chat
                    </a>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                      Karachi Operations Hub
                    </h4>
                    <p className="font-body-md text-body-md text-secondary mb-3">
                      Plots 14-16, Industrial Area Sector 7-A, Korangi / SITE Link, Karachi, Pakistan.
                    </p>
                    <div className="space-y-2 font-body-md text-body-md text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                        <span>Karachi Office: +92 21 3456 7890</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                        <span>Mon – Sat: 8:30 AM – 6:30 PM PKT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                        <span>Nationwide Flatbed Delivery Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img alt="EIRA Brand Mark" className="h-6 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9glH_x49pTRTwnYdSjrFinFY2PTqNNXI18_hzYcpZwNH8fhpIGhxYYgyQgCnzXxUPuK7J14V1JUIetx2Axp9GDgo7OKa4DyxP0KXCBMmF2xL0flsA1ZEF9614ke6v5pb-xHwRQznI2s4VTr8f9SpOD8Z1WnaqsZHrvzNo4LKaRco5aQZnEsPWMAuctCpNqN4EwAr3er2M0WRt1-9G6lMRZIe15FFFwTG8NutccGR4qm9gEM329LRSdZxxRBGgcp8dH8" />
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">EIRA Forklifts Pakistan</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold">Shanghai • Karachi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-[#121417] text-surface-container-highest pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-tertiary/25">
            <div className="lg:col-span-2 pr-0 lg:pr-space-lg">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="font-headline-md text-headline-md font-extrabold text-surface-container-lowest tracking-tight">EIRA</span>
                <span className="px-space-xs py-0.5 bg-primary-container text-on-primary-container font-label-sm text-[10px] rounded tracking-widest uppercase font-bold">HEAVY DUTY</span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-md max-w-md leading-relaxed">
                EIRA supplies heavy-duty, reliable, and practical diesel, electric, and LPG industrial forklifts across Pakistan. Engineering excellence sourced directly from Shanghai with localized assembly, service hubs, and parts warehousing in Karachi, Lahore, Faisalabad, and Islamabad.
              </p>
              <div className="flex items-center gap-space-xs text-label-sm font-label-sm text-surface-dim uppercase tracking-wider">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">verified</span>Certified ISO 9001 / CE Industrial Machinery Export Standard
              </div>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-md font-bold">Forklifts by Capacity</h4>
              <ul className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.0 Ton Diesel Series</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.5 Ton Heavy Diesel</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">4.0 Ton Logistics Spec</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">5.0 Ton Yard Heavy</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">10.0 Ton Port Terminal Unit</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.5 Ton Clean LPG Dual-Fuel</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">1.5 - 5.0 Ton Li-Ion Electric</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-md font-bold">Power Types &amp; Fleet</h4>
              <ul className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Diesel Forklifts</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Electric Li-Ion Forklifts</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">LPG &amp; Dual Fuel Units</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Heavy Container Handlers</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Electric Pallet Stackers</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Narrow Aisle Reach Trucks</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="request-a-quote" href="#">Custom Mast Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-md font-bold">Support &amp; Operations</h4>
              <ul className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Maintenance SLA Contracts</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Genuine Spare Parts Vault</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Operator Safety Training</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Karachi Hub &amp; Port Link</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">Lahore Regional Office</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">Shanghai Engineering Link</a></li>
                <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">24/7 Field Tech Dispatch</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-secondary-fixed-dim">
            <p>© 2025 EIRA Forklifts Pakistan. All rights reserved. Precision Material Handling Equipment.</p>
            <div className="flex items-center gap-space-md">
              <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Commercial Quotation Terms</a>
              <span className="text-tertiary">•</span>
              <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Privacy Policy</a>
              <span className="text-tertiary">•</span>
              <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Port Delivery Protocol</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
