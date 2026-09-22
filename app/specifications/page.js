"use client";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, FileCheck2 } from "lucide-react";

const WA_LINK = "https://wa.me/923000214188?text=Please%20share%20the%20official%20EIRA%20spec%20sheet";

const MODELS = [
  {
    id: "cpcd30",
    tab: "3.0T Diesel",
    name: "3 Ton K Series Diesel Forklift",
    model: "CPCD30",
    badge: "Most Popular",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPCD30"],
          ["Type", "3 Ton internal combustion counterbalance forklift truck"],
          ["Power type", "Diesel"],
          ["Rated load", "3,000 kg"],
          ["Load center", "500 mm"],
          ["Driving type", "Sit-on type"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Maximum lifting height", "3,000 mm"],
          ["Mast lowered height (forks on ground, mast vertical)", "2,070 mm"],
          ["Maximum fork height (with backrest)", "4,220 mm"],
          ["Free lifting height", "30 mm"],
          ["Overhead guard height", "2,090 mm"],
          ["Minimum ground clearance (at mast)", "135 mm"],
          ["Seat surface to overhead guard", "1,000 mm"],
          ["Traction pin height", "310 mm"],
          ["Shelf height (fork surface of mast)", "1,215 mm"],
          ["Overall length (with / without fork)", "3,913 / 2,693 mm"],
          ["Wheelbase", "1,700 mm"],
          ["Overall width", "1,225 mm"],
          ["Track (front / rear)", "1,000 / 970 mm"],
          ["Fork spread, outside (max / min)", "1,060 / 244 mm"],
          ["Minimum turning radius", "2,390 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
          ["Fork size", "45 × 122 × 1,220 mm"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Travel speed (loaded / unloaded)", "18 / 19 km/h"],
          ["Lifting speed (loaded / unloaded)", "440 / 480 mm/s"],
          ["Lowering speed (loaded / unloaded)", "440 / 430 mm/s"],
          ["Maximum drawbar pull", "19.5 / 15.5 kN"],
          ["Gradeability (loaded / unloaded)", "15 / 20 %"],
          ["Service weight", "4,230 kg"],
          ["Tyres (front / rear)", "28×9-15-14PR / 6.50-10-10PR"],
          ["Battery (voltage / capacity)", "12 V / 80 Ah"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine make / model", "Quanchai V29-50V42"],
          ["Rated power", "36.8 kW @ 2,500 rpm"],
          ["Rated torque", "157 N·m @ 1,800 rpm"],
          ["Cylinders – bore × stroke", "4 – 93 × 105 mm"],
          ["Displacement", "2.85 L"],
          ["Fuel tank capacity", "50 L"],
          ["Emission standard", "China IV"],
          ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
        ],
      },
    ],
  },
  {
    id: "cpc35",
    tab: "3.5T Diesel",
    name: "3.5 Ton K Series Diesel Forklift",
    model: "CPC35",
    badge: "Heavy Duty",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPC35"],
          ["Type", "3.5 Ton internal combustion counterbalance forklift truck"],
          ["Power type", "Diesel"],
          ["Rated load", "3,500 kg"],
          ["Load center", "500 mm"],
          ["Driving type", "Sit-on type"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Maximum lifting height", "3,000 mm"],
          ["Mast lowered height (forks on ground, mast vertical)", "2,070 mm"],
          ["Maximum fork height (with backrest)", "4,220 mm"],
          ["Free lifting height", "30 mm"],
          ["Overhead guard height", "2,090 mm"],
          ["Minimum ground clearance (at mast)", "135 mm"],
          ["Seat surface to overhead guard", "1,000 mm"],
          ["Traction pin height", "310 mm"],
          ["Shelf height (fork surface of mast)", "1,215 mm"],
          ["Overall length (with / without fork)", "3,913 / 2,693 mm"],
          ["Wheelbase", "1,700 mm"],
          ["Overall width", "1,225 mm"],
          ["Track (front / rear)", "1,000 / 970 mm"],
          ["Fork spread, outside (max / min)", "1,060 / 244 mm"],
          ["Minimum turning radius", "2,390 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
          ["Fork size", "45 × 122 × 1,220 mm"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Travel speed (loaded / unloaded)", "18 / 19 km/h"],
          ["Lifting speed (loaded / unloaded)", "440 / 480 mm/s"],
          ["Lowering speed (loaded / unloaded)", "440 / 430 mm/s"],
          ["Maximum drawbar pull", "17.5 / 13.4 kN"],
          ["Gradeability (loaded / unloaded)", "15 / 20 %"],
          ["Service weight", "4,230 kg"],
          ["Tyres (front / rear)", "28×9-15-14PR / 6.50-10-10PR"],
          ["Battery (voltage / capacity)", "12 V / 80 Ah"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine make / model", "Quanchai V29-50V42"],
          ["Rated power", "36.8 kW @ 2,500 rpm"],
          ["Rated torque", "157 N·m @ 1,800 rpm"],
          ["Cylinders – bore × stroke", "4 – 93 × 105 mm"],
          ["Displacement", "2.85 L"],
          ["Fuel tank capacity", "50 L"],
          ["Emission standard", "China IV"],
          ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
        ],
      },
    ],
  },
  {
    id: "cpc40",
    tab: "4.0T Diesel",
    name: "4 Ton K Series Diesel Forklift",
    model: "CPC40",
    badge: "Industrial",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPC40"],
          ["Type", "4 Ton internal combustion counterbalance forklift truck"],
          ["Power type", "Diesel"],
          ["Rated load", "4,000 kg"],
          ["Load center", "500 mm"],
          ["Driving type", "Sit-on type"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Maximum lifting height", "3,000 mm"],
          ["Mast lowered height (forks on ground, mast vertical)", "2,150 mm"],
          ["Maximum fork height (with backrest)", "4,220 mm"],
          ["Free lifting height", "30 mm"],
          ["Overhead guard height", "2,103 mm"],
          ["Minimum ground clearance (at mast)", "148 mm"],
          ["Seat surface to overhead guard", "1,000 mm"],
          ["Traction pin height", "323 mm"],
          ["Shelf height (fork surface of mast)", "1,215 mm"],
          ["Overall length (with / without fork)", "4,063 / 2,843 mm"],
          ["Wheelbase", "1,850 mm"],
          ["Overall width", "1,290 mm"],
          ["Track (front / rear)", "1,000 / 970 mm"],
          ["Fork spread, outside (max / min)", "1,060 / 250 mm"],
          ["Minimum turning radius", "2,550 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
          ["Fork size", "50 × 125 × 1,220 mm"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Travel speed (loaded / unloaded)", "18 / 19 km/h"],
          ["Lifting speed (loaded / unloaded)", "440 / 480 mm/s"],
          ["Lowering speed (loaded / unloaded)", "440 / 430 mm/s"],
          ["Maximum drawbar pull", "18.1 / 13.4 kN"],
          ["Gradeability (loaded / unloaded)", "15 / 20 %"],
          ["Service weight", "4,860 kg"],
          ["Tyres (front / rear)", "250-15-14PR / 6.50-10-10PR"],
          ["Battery (voltage / capacity)", "12 V / 80 Ah"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine make / model", "Quanchai V29-50V42"],
          ["Rated power", "36.8 kW @ 2,500 rpm"],
          ["Rated torque", "157 N·m @ 1,800 rpm"],
          ["Cylinders – bore × stroke", "4 – 93 × 105 mm"],
          ["Displacement", "2.85 L"],
          ["Fuel tank capacity", "50 L"],
          ["Emission standard", "China IV"],
          ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
        ],
      },
    ],
  },
  {
    id: "cpc50",
    tab: "5.0T Diesel",
    name: "5 Ton K Series Diesel Forklift",
    model: "CPC50",
    badge: "Yard Heavy",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPC50"],
          ["Type", "5 Ton internal combustion counterbalance forklift truck"],
          ["Power type", "Diesel"],
          ["Rated load", "5,000 kg"],
          ["Load center", "500 mm"],
          ["Driving type", "Sit-on type"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Maximum lifting height", "3,000 mm"],
          ["Mast lowered height (forks on ground, mast vertical)", "2,205 mm"],
          ["Maximum fork height (with backrest)", "4,225 mm"],
          ["Free lifting height", "50 mm"],
          ["Overhead guard height", "2,215 mm"],
          ["Minimum ground clearance (at mast)", "175 mm"],
          ["Seat surface to overhead guard", "1,000 mm"],
          ["Traction pin height", "390 mm"],
          ["Shelf height (fork surface of mast)", "1,190 mm"],
          ["Overall length (with / without fork)", "4,275 / 3,055 mm"],
          ["Wheelbase", "1,950 mm"],
          ["Overall width", "1,380 mm"],
          ["Track (front / rear)", "1,080 / 982 mm"],
          ["Fork spread, outside (max / min)", "1,260 / 250 mm"],
          ["Minimum turning radius", "3,000 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
          ["Fork size", "50 × 125 × 1,220 mm"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Travel speed", "22 km/h"],
          ["Lifting speed (loaded / unloaded)", "300 / 330 mm/s"],
          ["Lowering speed (loaded / unloaded)", "330 / 300 mm/s"],
          ["Maximum drawbar pull", "19.5 kN"],
          ["Gradeability (loaded / unloaded)", "15 / 15 %"],
          ["Service weight", "5,600 kg"],
          ["Tyres (front / rear)", "300-15-16PR / 7.00-12-12PR"],
          ["Battery (voltage / capacity)", "12 V / 80 Ah"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine make / model", "Quanchai V30-50V42"],
          ["Rated power", "36.8 kW @ 2,500 rpm"],
          ["Rated torque", "150 N·m @ 1,800 rpm"],
          ["Cylinders – bore × stroke", "4 – 98 × 105 mm"],
          ["Displacement", "3.17 L"],
          ["Fuel tank capacity", "50 L"],
          ["Emission standard", "China IV"],
          ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
        ],
      },
    ],
  },
  {
    id: "cpcd100t",
    tab: "10.0T Diesel",
    name: "10 Ton K Series Diesel Forklift",
    model: "CPCD100t",
    badge: "Port Terminal",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPCD100t"],
          ["Type", "10 Ton internal combustion counterbalance forklift truck"],
          ["Power type", "Diesel"],
          ["Rated load", "10,000 kg"],
          ["Load center", "600 mm"],
          ["Service weight", "13,500 kg"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Overall length (with / without fork)", "6,565 / 4,265 mm"],
          ["Overall width / frame width", "2,160 / 2,150 mm"],
          ["Mast lowered height", "2,855 mm"],
          ["Overhead guard height", "2,565 mm"],
          ["Maximum operating height", "4,415 mm"],
          ["Wheelbase", "2,800 mm"],
          ["Track (front / rear)", "1,600 / 1,700 mm"],
          ["Ground clearance – mid frame (unloaded / loaded)", "350 / 320 mm"],
          ["Ground clearance – mast lower end", "250 / 210 mm"],
          ["Overhang (front / rear)", "725 / 740 mm"],
          ["Free lifting height", "150 mm"],
          ["Minimum turning radius", "3,995 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Lifting speed (unloaded / loaded)", "350 / 330 mm/s"],
          ["Lowering speed (unloaded / loaded)", "300 / 600 mm/s"],
          ["Gradeability (full load)", "20 %"],
          ["Tyres (front / rear)", "9.00-20-14PR"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine model", "6J1-115C31"],
          ["Engine type", "Four-stroke inline, water-cooled, turbocharged intercooled"],
          ["Rated power", "85 kW @ 2,200 rpm"],
          ["Maximum torque", "500 N·m @ 1,320 – 1,650 rpm"],
        ],
      },
    ],
  },
  {
    id: "cpg35",
    tab: "3.5T LPG",
    name: "3.5 Ton LPG Dual-Fuel Forklift",
    model: "CPG / CPGD(Y)35",
    badge: "Clean Fuel",
    groups: [
      {
        title: "General",
        rows: [
          ["Model", "CPG / CPGD(Y)35"],
          ["Type", "3.5 Ton internal combustion counterbalanced forklift"],
          ["Power type", "LPG dual-fuel"],
          ["Rated load", "3,500 kg"],
          ["Load center", "500 mm"],
          ["Driving type", "Sit-on type"],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Maximum lifting height", "3,000 mm"],
          ["Mast lowered height (forks on ground, mast vertical)", "2,070 mm"],
          ["Maximum fork height (with backrest)", "4,220 mm"],
          ["Free lifting height", "30 mm"],
          ["Overhead guard height", "2,090 mm"],
          ["Minimum ground clearance (at mast)", "135 mm"],
          ["Seat surface to overhead guard", "1,000 mm"],
          ["Traction pin height", "310 mm"],
          ["Shelf height (fork surface of mast)", "1,215 mm"],
          ["Overall length (with / without fork)", "3,963 / 2,743 mm"],
          ["Wheelbase", "1,760 mm"],
          ["Overall width", "1,225 mm"],
          ["Track (front / rear)", "1,000 / 970 mm"],
          ["Fork spread, outside (max / min)", "1,060 / 244 mm"],
          ["Minimum turning radius", "2,390 mm"],
          ["Mast tilt (forward / back)", "6° / 12°"],
          ["Fork size", "45 × 122 × 1,220 mm"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Travel speed (loaded / unloaded)", "18 / 19 km/h"],
          ["Lifting speed (loaded / unloaded)", "440 / 480 mm/s"],
          ["Lowering speed (loaded / unloaded)", "440 / 430 mm/s"],
          ["Maximum drawbar pull", "18.1 / 13.4 kN"],
          ["Gradeability (loaded / unloaded)", "15 / 20 %"],
          ["Service weight", "4,530 kg"],
          ["Tyres (front / rear)", "28×9-15-14PR / 6.50-10-10PR"],
          ["Battery (voltage / capacity)", "12 V / 80 Ah"],
        ],
      },
      {
        title: "Engine & Powertrain",
        rows: [
          ["Engine make / model", "Nissan K25"],
          ["Rated power", "37.4 kW @ 2,600 rpm"],
          ["Rated torque", "176.5 N·m @ 1,600 rpm"],
          ["Cylinders", "4"],
          ["Displacement", "2.488 L"],
          ["Fuel tank capacity", "50 L"],
          ["Emission standard", "China II"],
          ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
        ],
      },
    ],
  },
];

const ELECTRIC_MODELS = ["CPD10", "CPD15", "CPD20", "CPD25", "CPD30", "CPD35", "CPD40", "CPD50"];
const ELECTRIC_ROWS = [
  ["Rated load (kg)", ["1,000", "1,500", "2,000", "2,500", "3,000", "3,500", "4,000", "5,000"]],
  ["Wheelbase (mm)", ["1,350", "1,400", "1,535", "1,650", "1,755", "1,755", "1,755", "2,100"]],
  ["Service weight incl. battery (kg)", ["2,040", "2,500", "3,030", "3,200", "4,350", "4,600", "5,120", "5,850"]],
  ["Mast static height (mm)", ["2,080", "2,080", "2,000", "2,000", "2,130", "2,130", "2,130", "2,225"]],
  ["Overhead guard height (mm)", ["1,911", "1,911", "2,081", "2,081", "2,107", "2,107", "2,107", "2,215"]],
  ["Overall length excl./incl. fork (mm)", ["2,077/3,047", "2,077/3,047", "2,385/3,383", "2,400/3,497", "2,772/3,992", "2,772/3,992", "2,772/3,992", "3,296/4,516"]],
  ["Overall width (mm)", ["1,195", "1,195", "1,195", "1,195", "1,230", "1,230", "1,230", "1,370"]],
  ["Fork size (mm)", ["32×100×1,070", "32×100×1,070", "40×100×1,070", "40×100×1,070", "45×122×1,070", "45×122×1,070", "45×122×1,070", "45×122×1,070"]],
  ["Min. ground clearance (mm)", ["150", "150", "125", "125", "138", "138", "138", "210"]],
  ["Min. turning radius (mm)", ["1,780", "1,860", "2,010", "2,260", "2,480", "2,480", "2,670", "2,750"]],
  ["Travel speed loaded/unloaded (km/h)", ["10/12", "10/12", "12/15", "12/15", "13/15", "13/15", "13/15", "13/15"]],
  ["Lifting speed loaded/unloaded (mm/s)", ["250/300", "250/300", "250/300", "250/300", "250/300", "250/300", "250/300", "250/300"]],
  ["Lowering speed loaded/unloaded (m/s)", ["0.4/0.36", "0.4/0.36", "0.4/0.36", "0.4/0.36", "0.4/0.36", "0.4/0.36", "0.45/0.4", "0.45/0.4"]],
  ["Gradeability loaded/unloaded (%)", ["10/15", "10/15", "15/20", "15/20", "15/20", "15/20", "15/20", "15/20"]],
  ["Drive motor (kW/rpm)", ["5.5/3,200", "5.5/3,200", "11/4,000", "11/4,000", "10/3,158", "10/3,158", "10/3,158", "18/1,622"]],
  ["Pump motor (kW/rpm)", ["4/2,200", "4/2,200", "10/2,200", "10/2,200", "12/1,900", "12/1,900", "12/1,900", "25/2,280"]],
  ["Drive control", ["AC", "AC", "AC", "AC", "AC", "AC", "AC", "AC"]],
];

function SpecTable({ groups }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
      {groups.map((g) => (
        <div key={g.title} className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d">
          <div className="px-space-md py-3 bg-surface-container border-b border-tertiary/20">
            <h3 className="text-headline-sm font-bold text-on-surface">{g.title}</h3>
          </div>
          <table className="w-full text-body-md">
            <tbody>
              {g.rows.map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-surface-container-low/60" : ""}>
                  <td className="px-space-md py-2.5 text-secondary w-1/2">{label}</td>
                  <td className="px-space-md py-2.5 font-semibold text-on-surface text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

function ElectricTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d">
      <div className="overflow-x-auto">
        <table className="w-full text-body-md min-w-[900px]">
          <thead>
            <tr className="bg-surface-container">
              <th className="px-space-md py-3 text-left text-secondary font-semibold">Specification</th>
              {ELECTRIC_MODELS.map((m) => (
                <th key={m} className="px-3 py-3 text-center text-on-surface font-bold">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ELECTRIC_ROWS.map(([label, vals], i) => (
              <tr key={label} className={i % 2 === 0 ? "bg-surface-container-low/60" : ""}>
                <td className="px-space-md py-2.5 text-secondary font-medium">{label}</td>
                {vals.map((v, j) => (
                  <td key={j} className="px-3 py-2.5 text-center font-semibold text-on-surface whitespace-nowrap">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SpecificationsPage() {
  const [active, setActive] = useState("cpcd30");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const ids = [...MODELS.map((m) => m.id), "electric"];
    if (ids.includes(hash)) setActive(hash);
  }, []);

  const select = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const model = MODELS.find((m) => m.id === active);

  return (
    <main className="pt-28 bg-surface min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg">
        <div className="flex items-center gap-2 text-label-md text-secondary mb-3">
          <FileCheck2 className="text-[16px] text-primary" />
          <span className="uppercase tracking-wider font-semibold">Official Factory Catalogue Data</span>
        </div>
        <h1 className="text-headline-lg font-extrabold text-on-surface tracking-tight mb-3">
          Technical Specifications
        </h1>
        <p className="text-body-lg text-secondary max-w-3xl leading-relaxed">
          Complete factory specifications for the full EIRA K Series lineup — diesel counterbalance
          forklifts from 3 to 10 tons, the 3.5 ton LPG dual-fuel unit, and the electric CPD range
          from 1.0 to 5.0 tons. Data per official catalogue: Shanghai Zhuojing Trading Co., Ltd.
        </p>
      </section>

      {/* Tabs */}
      <div className="sticky top-28 z-30 bg-surface/95 backdrop-blur-md border-y border-tertiary/20">
        <div className="max-w-7xl mx-auto px-gutter py-3 flex gap-2 overflow-x-auto">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => select(m.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-label-md font-bold transition-colors ${
                active === m.id
                  ? "bg-primary-container text-on-primary-container btn-3d"
                  : "bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {m.tab}
            </button>
          ))}
          <button
            onClick={() => select("electric")}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-label-md font-bold transition-colors ${
              active === "electric"
                ? "bg-primary-container text-on-primary-container btn-3d"
                : "bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface"
            }`}
          >
            Electric 1–5T
          </button>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-gutter py-space-xl">
        {active === "electric" ? (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-space-md">
              <h2 className="text-headline-md font-extrabold text-on-surface">
                Electric Counterbalance Forklifts
              </h2>
              <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container text-label-sm font-bold uppercase">
                CPD10 – CPD50 · Zero Emissions
              </span>
            </div>
            <p className="text-body-md text-secondary mb-space-md max-w-3xl">
              Eight-model AC electric range for clean indoor operation — pharmaceuticals, food
              processing, cold storage and textile warehouses.
            </p>
            <ElectricTable />
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-space-md">
              <h2 className="text-headline-md font-extrabold text-on-surface">{model.name}</h2>
              <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container text-label-sm font-bold uppercase">
                Model {model.model}
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-secondary text-label-sm font-bold uppercase">
                {model.badge}
              </span>
            </div>
            <SpecTable groups={model.groups} />
          </div>
        )}

        {/* CTA */}
        <div className="mt-space-xl bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div>
            <h3 className="text-headline-md font-extrabold mb-2">Need the official spec sheet PDF?</h3>
            <p className="text-body-md text-surface-container-high max-w-xl">
              Message us on WhatsApp and we will send the stamped factory datasheet for any model —
              plus Karachi stock availability and a formal quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#quote-module"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors"
            >
              Request a Quote <ArrowRight className="text-[16px]" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors"
            >
              <MessageCircle className="text-[16px]" /> WhatsApp Spec Sheet
            </a>
          </div>
        </div>

        <p className="mt-space-md text-label-md text-secondary text-center">
          All specifications per official factory catalogue — Shanghai Zhuojing Trading Co., Ltd. (EIRA).
          Specifications subject to factory revision without notice.
        </p>
      </section>
    </main>
  );
}
