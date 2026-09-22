export const WA_NUMBER = "923000214188";
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const stdDims = (o) => [
  ["Maximum lifting height", o.lift || "3,000 mm"],
  ["Mast lowered height (forks on ground, mast vertical)", o.mastLow],
  ["Maximum fork height (with backrest)", o.forkMax],
  ["Free lifting height", o.free],
  ["Overhead guard height", o.guard],
  ["Minimum ground clearance (at mast)", o.clearance],
  ["Seat surface to overhead guard", "1,000 mm"],
  ["Traction pin height", o.pin],
  ["Shelf height (fork surface of mast)", o.shelf],
  ["Overall length (with / without fork)", o.length],
  ["Wheelbase", o.wheelbase],
  ["Overall width", o.width],
  ["Track (front / rear)", o.track],
  ["Fork spread, outside (max / min)", o.spread],
  ["Minimum turning radius", o.radius],
  ["Mast tilt (forward / back)", "6° / 12°"],
  ["Fork size", o.forkSize],
];

const stdPerf = (o) => [
  ["Travel speed (loaded / unloaded)", o.travel],
  ["Lifting speed (loaded / unloaded)", o.liftSpeed],
  ["Lowering speed (loaded / unloaded)", o.lowerSpeed],
  ["Maximum drawbar pull", o.pull],
  ["Gradeability (loaded / unloaded)", o.grade],
  ["Service weight", o.weight],
  ["Tyres (front / rear)", o.tyres],
  ["Battery (voltage / capacity)", "12 V / 80 Ah"],
];

const stdEngine = (o) => [
  ["Engine make / model", o.engine],
  ["Rated power", o.power],
  ["Rated torque", o.torque],
  ["Cylinders – bore × stroke", o.cyl],
  ["Displacement", o.disp],
  ["Fuel tank capacity", "50 L"],
  ["Emission standard", o.emission],
  ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"],
];

export const PRODUCTS = [
  {
    slug: "3-ton-diesel-forklift-cpcd30",
    id: "cpcd30",
    tab: "3.0T Diesel",
    name: "3 Ton Diesel Forklift",
    model: "CPCD30",
    series: "K Series",
    powerType: "Diesel",
    badge: "Most Popular",
    image: "/images/eira-3-ton-diesel-forklift.jpg",
    imageAlt: "EIRA 3 ton diesel forklift CPCD30 K Series in a warehouse",
    seo: {
      title: "3 Ton Diesel Forklift CPCD30 Price in Pakistan | EIRA K Series",
      description:
        "EIRA 3 ton diesel forklift (CPCD30) for sale in Pakistan. Quanchai 36.8 kW engine, 3,000 kg capacity, China IV. Karachi stock, WhatsApp +92 300 0214188.",
      h1: "3 Ton Diesel Forklift (CPCD30) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 3 Ton Diesel Forklift (model CPCD30) is the workhorse of the K Series lineup and the most popular forklift for sale in Pakistan. Built for warehouses, logistics hubs, factories and building-material yards, it lifts a full 3,000 kg load to 3 metres with a rugged Quanchai V29-50V42 diesel engine producing 36.8 kW — tuned for high-ambient heat, dusty yards and continuous multi-shift operation.",
        "With China IV emission compliance, power-shift transmission, pneumatic industrial tyres and a tight 2,390 mm turning radius, the CPCD30 moves easily between racking aisles and loading docks. EIRA keeps Karachi stock with genuine spare parts, factory-trained technicians and on-site after-sales support across Pakistan, so your fleet stays running at maximum uptime.",
      ],
    },
    highlights: [
      ["Rated capacity", "3,000 kg"],
      ["Engine", "Quanchai 36.8 kW"],
      ["Max lift height", "3,000 mm"],
      ["Emission", "China IV"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPCD30"], ["Type", "3 Ton internal combustion counterbalance forklift truck"], ["Power type", "Diesel"], ["Rated load", "3,000 kg"], ["Load center", "500 mm"], ["Driving type", "Sit-on type"]] },
      {
        title: "Dimensions",
        rows: stdDims({ mastLow: "2,070 mm", forkMax: "4,220 mm", free: "30 mm", guard: "2,090 mm", clearance: "135 mm", pin: "310 mm", shelf: "1,215 mm", length: "3,913 / 2,693 mm", wheelbase: "1,700 mm", width: "1,225 mm", track: "1,000 / 970 mm", spread: "1,060 / 244 mm", radius: "2,390 mm", forkSize: "45 × 122 × 1,220 mm" }),
      },
      {
        title: "Performance",
        rows: stdPerf({ travel: "18 / 19 km/h", liftSpeed: "440 / 480 mm/s", lowerSpeed: "440 / 430 mm/s", pull: "19.5 / 15.5 kN", grade: "15 / 20 %", weight: "4,230 kg", tyres: "28×9-15-14PR / 6.50-10-10PR" }),
      },
      {
        title: "Engine & Powertrain",
        rows: stdEngine({ engine: "Quanchai V29-50V42", power: "36.8 kW @ 2,500 rpm", torque: "157 N·m @ 1,800 rpm", cyl: "4 – 93 × 105 mm", disp: "2.85 L", emission: "China IV" }),
      },
    ],
    faqs: [
      ["What is the price of the 3 ton diesel forklift CPCD30 in Pakistan?", "Pricing depends on mast configuration, tyre options and Karachi stock availability. Message EIRA on WhatsApp at +92 300 0214188 for the latest formal quotation with port delivery anywhere in Pakistan."],
      ["What engine does the EIRA CPCD30 use?", "It uses the Quanchai V29-50V42 diesel engine rated at 36.8 kW (2,500 rpm) with 157 N·m torque, meeting the China IV emission standard, paired with a 1-1 power-shift (or 2-2 manual) transmission."],
      ["What is the lifting height and turning radius?", "Maximum lifting height is 3,000 mm (4,220 mm fork height with backrest) and the minimum turning radius is 2,390 mm, making it suitable for standard warehouse aisles."],
      ["Is after-sales service available in Pakistan?", "Yes. EIRA operates from Shanghai and Karachi with genuine spare parts warehousing, factory-trained technicians and on-site maintenance support across Pakistan."],
    ],
  },
  {
    slug: "3-5-ton-diesel-forklift-cpc35",
    id: "cpc35",
    tab: "3.5T Diesel",
    name: "3.5 Ton Diesel Forklift",
    model: "CPC35",
    series: "K Series",
    powerType: "Diesel",
    badge: "Heavy Duty",
    image: "/images/eira-3-5-ton-heavy-diesel-forklift.jpg",
    imageAlt: "EIRA 3.5 ton heavy diesel forklift CPC35 K Series",
    seo: {
      title: "3.5 Ton Diesel Forklift CPC35 Price in Pakistan | EIRA K Series",
      description:
        "EIRA 3.5 ton diesel forklift (CPC35) for sale in Pakistan. Quanchai 36.8 kW engine, 3,500 kg capacity, China IV emission. Karachi stock — WhatsApp +92 300 0214188.",
      h1: "3.5 Ton Diesel Forklift (CPC35) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 3.5 Ton Diesel Forklift (model CPC35) adds half a ton of extra muscle to the proven K Series platform for operations that regularly push past the 3-ton mark — steel stockists, marble and granite yards, beverage distributors and heavy manufacturing. Its 3,500 kg rated capacity at a 500 mm load centre is backed by the same dependable Quanchai V29-50V42 diesel engine (36.8 kW, China IV) found across the K Series, keeping parts common and maintenance simple across a mixed fleet.",
        "Dimensions, mast and drivetrain are shared with the 3-ton unit, so operators and service teams need no retraining — while the reinforced chassis handles heavier pallets day after day. Like every EIRA machine, the CPC35 is supplied in Pakistan with Karachi-based stock, genuine spare parts and factory-trained after-sales engineers.",
      ],
    },
    highlights: [
      ["Rated capacity", "3,500 kg"],
      ["Engine", "Quanchai 36.8 kW"],
      ["Max lift height", "3,000 mm"],
      ["Emission", "China IV"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPC35"], ["Type", "3.5 Ton internal combustion counterbalance forklift truck"], ["Power type", "Diesel"], ["Rated load", "3,500 kg"], ["Load center", "500 mm"], ["Driving type", "Sit-on type"]] },
      {
        title: "Dimensions",
        rows: stdDims({ mastLow: "2,070 mm", forkMax: "4,220 mm", free: "30 mm", guard: "2,090 mm", clearance: "135 mm", pin: "310 mm", shelf: "1,215 mm", length: "3,913 / 2,693 mm", wheelbase: "1,700 mm", width: "1,225 mm", track: "1,000 / 970 mm", spread: "1,060 / 244 mm", radius: "2,390 mm", forkSize: "45 × 122 × 1,220 mm" }),
      },
      {
        title: "Performance",
        rows: stdPerf({ travel: "18 / 19 km/h", liftSpeed: "440 / 480 mm/s", lowerSpeed: "440 / 430 mm/s", pull: "17.5 / 13.4 kN", grade: "15 / 20 %", weight: "4,230 kg", tyres: "28×9-15-14PR / 6.50-10-10PR" }),
      },
      {
        title: "Engine & Powertrain",
        rows: stdEngine({ engine: "Quanchai V29-50V42", power: "36.8 kW @ 2,500 rpm", torque: "157 N·m @ 1,800 rpm", cyl: "4 – 93 × 105 mm", disp: "2.85 L", emission: "China IV" }),
      },
    ],
    faqs: [
      ["What is the price of the 3.5 ton diesel forklift CPC35 in Pakistan?", "Share your mast and tyre requirements on WhatsApp (+92 300 0214188) and EIRA will issue a formal quotation with Karachi stock status and nationwide delivery."],
      ["How is the CPC35 different from the 3 ton CPCD30?", "It uses the same Quanchai engine, chassis dimensions and mast, but is rated for 3,500 kg — ideal if your loads regularly exceed 3 tons. Parts and servicing are interchangeable with the CPCD30."],
      ["What is the fuel tank capacity?", "50 litres, with the efficient 2.85 L Quanchai diesel delivering long shift endurance between refuels."],
      ["Can it work on unpaved yards?", "Yes — 135 mm ground clearance, pneumatic industrial tyres and 15/20% gradeability suit semi-rough factory yards and building-material depots."],
    ],
  },
  {
    slug: "4-ton-diesel-forklift-cpc40",
    id: "cpc40",
    tab: "4.0T Diesel",
    name: "4 Ton Diesel Forklift",
    model: "CPC40",
    series: "K Series",
    powerType: "Diesel",
    badge: "Industrial",
    image: "/images/heavy-4-ton-industrial-diesel-forklift-operating-i.jpg",
    imageAlt: "EIRA 4 ton industrial diesel forklift CPC40 K Series at work",
    seo: {
      title: "4 Ton Diesel Forklift CPC40 Price in Pakistan | EIRA K Series",
      description:
        "EIRA 4 ton diesel forklift (CPC40) for sale in Pakistan. 4,000 kg capacity, Quanchai 36.8 kW engine, reinforced 50×125 forks. WhatsApp +92 300 0214188.",
      h1: "4 Ton Diesel Forklift (CPC40) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 4 Ton Diesel Forklift (model CPC40) steps the K Series into true industrial territory. Rated for 4,000 kg with heavier 50×125×1,220 mm forks, a longer 1,850 mm wheelbase and a 4,860 kg service weight, it is built for foundries, paper mills, cable drum handling, precast concrete and container stuffing operations where 3.5-ton machines run at their limit.",
        "Power comes from the proven Quanchai V29-50V42 (36.8 kW, China IV) driving through a power-shift transmission, with 18/19 km/h travel speed and 440/480 mm/s lift speed keeping cycle times short. A 2,550 mm turning radius keeps it manoeuvrable for its class. EIRA supports the CPC40 across Pakistan with Karachi parts stock and factory-trained service engineers.",
      ],
    },
    highlights: [
      ["Rated capacity", "4,000 kg"],
      ["Engine", "Quanchai 36.8 kW"],
      ["Fork size", "50 × 125 mm"],
      ["Service weight", "4,860 kg"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPC40"], ["Type", "4 Ton internal combustion counterbalance forklift truck"], ["Power type", "Diesel"], ["Rated load", "4,000 kg"], ["Load center", "500 mm"], ["Driving type", "Sit-on type"]] },
      {
        title: "Dimensions",
        rows: stdDims({ mastLow: "2,150 mm", forkMax: "4,220 mm", free: "30 mm", guard: "2,103 mm", clearance: "148 mm", pin: "323 mm", shelf: "1,215 mm", length: "4,063 / 2,843 mm", wheelbase: "1,850 mm", width: "1,290 mm", track: "1,000 / 970 mm", spread: "1,060 / 250 mm", radius: "2,550 mm", forkSize: "50 × 125 × 1,220 mm" }),
      },
      {
        title: "Performance",
        rows: stdPerf({ travel: "18 / 19 km/h", liftSpeed: "440 / 480 mm/s", lowerSpeed: "440 / 430 mm/s", pull: "18.1 / 13.4 kN", grade: "15 / 20 %", weight: "4,860 kg", tyres: "250-15-14PR / 6.50-10-10PR" }),
      },
      {
        title: "Engine & Powertrain",
        rows: stdEngine({ engine: "Quanchai V29-50V42", power: "36.8 kW @ 2,500 rpm", torque: "157 N·m @ 1,800 rpm", cyl: "4 – 93 × 105 mm", disp: "2.85 L", emission: "China IV" }),
      },
    ],
    faqs: [
      ["What is the price of the 4 ton diesel forklift CPC40 in Pakistan?", "Request a formal quote on WhatsApp (+92 300 0214188) — pricing varies with mast height, fork options and current Karachi stock."],
      ["What applications suit the CPC40?", "Paper reels, cable drums, precast concrete, steel profiles, container stuffing and any operation regularly handling 3.5–4 ton loads."],
      ["What are the fork dimensions?", "Heavy-duty 50 × 125 × 1,220 mm forks with 1,060/250 mm adjustable spread."],
      ["Is the engine the same as the 3 ton model?", "Yes — the Quanchai V29-50V42 (36.8 kW, China IV), so fleets running CPCD30/CPC35 share filters, parts and service knowledge."],
    ],
  },
  {
    slug: "5-ton-diesel-forklift-cpc50",
    id: "cpc50",
    tab: "5.0T Diesel",
    name: "5 Ton Diesel Forklift",
    model: "CPC50",
    series: "K Series",
    powerType: "Diesel",
    badge: "Yard Heavy",
    image: "/images/5-ton-heavy-duty-industrial-forklift-handling-timb.jpg",
    imageAlt: "EIRA 5 ton heavy duty diesel forklift CPC50 handling timber",
    seo: {
      title: "5 Ton Diesel Forklift CPC50 Price in Pakistan | EIRA K Series",
      description:
        "EIRA 5 ton diesel forklift (CPC50) for sale in Pakistan. 5,000 kg capacity, Quanchai V30 engine, 22 km/h travel. Heavy yard specialist — WhatsApp +92 300 0214188.",
      h1: "5 Ton Diesel Forklift (CPC50) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 5 Ton Diesel Forklift (model CPC50) is the heavy-yard specialist of the K Series — built for timber logs, structural steel, marble blocks, heavy machinery and port-adjacent cargo where 5,000 kg lifts are routine. A larger Quanchai V30-50V42 engine (36.8 kW, 3.17 L displacement), 5,600 kg service weight, dual front tyres and a 1,950 mm wheelbase deliver the stability and traction that heavy outdoor work demands.",
        "It is also the fastest machine in the diesel range with 22 km/h travel speed, keeping large yards productive. The 3,000 mm turning radius and 6°/12° mast tilt handle long loads with confidence. EIRA supplies the CPC50 across Pakistan with Karachi-based parts, warranty support and operator training.",
      ],
    },
    highlights: [
      ["Rated capacity", "5,000 kg"],
      ["Engine", "Quanchai V30 36.8 kW"],
      ["Travel speed", "22 km/h"],
      ["Service weight", "5,600 kg"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPC50"], ["Type", "5 Ton internal combustion counterbalance forklift truck"], ["Power type", "Diesel"], ["Rated load", "5,000 kg"], ["Load center", "500 mm"], ["Driving type", "Sit-on type"]] },
      {
        title: "Dimensions",
        rows: stdDims({ mastLow: "2,205 mm", forkMax: "4,225 mm", free: "50 mm", guard: "2,215 mm", clearance: "175 mm", pin: "390 mm", shelf: "1,190 mm", length: "4,275 / 3,055 mm", wheelbase: "1,950 mm", width: "1,380 mm", track: "1,080 / 982 mm", spread: "1,260 / 250 mm", radius: "3,000 mm", forkSize: "50 × 125 × 1,220 mm" }),
      },
      {
        title: "Performance",
        rows: [["Travel speed", "22 km/h"], ["Lifting speed (loaded / unloaded)", "300 / 330 mm/s"], ["Lowering speed (loaded / unloaded)", "330 / 300 mm/s"], ["Maximum drawbar pull", "19.5 kN"], ["Gradeability (loaded / unloaded)", "15 / 15 %"], ["Service weight", "5,600 kg"], ["Tyres (front / rear)", "300-15-16PR / 7.00-12-12PR"], ["Battery (voltage / capacity)", "12 V / 80 Ah"]],
      },
      {
        title: "Engine & Powertrain",
        rows: stdEngine({ engine: "Quanchai V30-50V42", power: "36.8 kW @ 2,500 rpm", torque: "150 N·m @ 1,800 rpm", cyl: "4 – 98 × 105 mm", disp: "3.17 L", emission: "China IV" }),
      },
    ],
    faqs: [
      ["What is the price of the 5 ton diesel forklift CPC50 in Pakistan?", "Contact EIRA on WhatsApp (+92 300 0214188) for a formal quotation including mast options, Karachi stock and delivery to your city."],
      ["What makes the CPC50 suited to heavy yards?", "5,600 kg service weight, dual front tyres, 175 mm ground clearance and a long 1,950 mm wheelbase give it stability on rough ground with long or bulky loads."],
      ["What is the top travel speed?", "22 km/h — the fastest in the EIRA diesel range, ideal for covering large timber, steel and stone yards."],
      ["Which engine does it use?", "The Quanchai V30-50V42 (36.8 kW @ 2,500 rpm, 3.17 L, China IV) with power-shift transmission."],
    ],
  },
  {
    slug: "10-ton-diesel-forklift-cpcd100t",
    id: "cpcd100t",
    tab: "10.0T Diesel",
    name: "10 Ton Diesel Forklift",
    model: "CPCD100t",
    series: "K Series",
    powerType: "Diesel",
    badge: "Port Terminal",
    image: "/images/massive-10-ton-container-handling-forklift-in-port.jpg",
    imageAlt: "EIRA 10 ton diesel forklift CPCD100t at a port terminal",
    seo: {
      title: "10 Ton Diesel Forklift CPCD100t Price in Pakistan | EIRA K Series",
      description:
        "EIRA 10 ton diesel forklift (CPCD100t) for sale in Pakistan. 10,000 kg capacity, 85 kW engine for ports & heavy industry. WhatsApp +92 300 0214188.",
      h1: "10 Ton Diesel Forklift (CPCD100t) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 10 Ton Diesel Forklift (model CPCD100t) is the flagship of the K Series — a port- and terminal-grade machine for dry ports, Karachi Port Trust yards, container freight stations, steel service centres and project cargo. With 10,000 kg rated capacity at a 600 mm load centre and a 13,500 kg service weight, it handles loaded containers, heavy coils and machinery that smaller forklifts cannot touch.",
        "Power comes from a turbocharged, intercooled 6J1-115C31 diesel delivering 85 kW at 2,200 rpm and 500 N·m of torque, with 20% full-load gradeability and a 3,995 mm turning radius. EIRA supports this specialist machine in Pakistan with factory-direct parts, trained heavy-equipment technicians and customised maintenance contracts.",
      ],
    },
    highlights: [
      ["Rated capacity", "10,000 kg"],
      ["Engine", "85 kW turbo diesel"],
      ["Load center", "600 mm"],
      ["Service weight", "13,500 kg"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPCD100t"], ["Type", "10 Ton internal combustion counterbalance forklift truck"], ["Power type", "Diesel"], ["Rated load", "10,000 kg"], ["Load center", "600 mm"], ["Service weight", "13,500 kg"]] },
      {
        title: "Dimensions",
        rows: [["Overall length (with / without fork)", "6,565 / 4,265 mm"], ["Overall width / frame width", "2,160 / 2,150 mm"], ["Mast lowered height", "2,855 mm"], ["Overhead guard height", "2,565 mm"], ["Maximum operating height", "4,415 mm"], ["Wheelbase", "2,800 mm"], ["Track (front / rear)", "1,600 / 1,700 mm"], ["Ground clearance – mid frame (unloaded / loaded)", "350 / 320 mm"], ["Ground clearance – mast lower end", "250 / 210 mm"], ["Overhang (front / rear)", "725 / 740 mm"], ["Free lifting height", "150 mm"], ["Minimum turning radius", "3,995 mm"], ["Mast tilt (forward / back)", "6° / 12°"]],
      },
      {
        title: "Performance",
        rows: [["Lifting speed (unloaded / loaded)", "350 / 330 mm/s"], ["Lowering speed (unloaded / loaded)", "300 / 600 mm/s"], ["Gradeability (full load)", "20 %"], ["Tyres (front / rear)", "9.00-20-14PR"]],
      },
      {
        title: "Engine & Powertrain",
        rows: [["Engine model", "6J1-115C31"], ["Engine type", "Four-stroke inline, water-cooled, turbocharged intercooled"], ["Rated power", "85 kW @ 2,200 rpm"], ["Maximum torque", "500 N·m @ 1,320 – 1,650 rpm"]],
      },
    ],
    faqs: [
      ["What is the price of the 10 ton forklift CPCD100t in Pakistan?", "As a specialist port machine it is quoted per project. Share your application on WhatsApp (+92 300 0214188) for a formal technical and commercial proposal."],
      ["Can it handle loaded containers?", "Yes — it is specified for dry ports, container freight stations and heavy project cargo with 10,000 kg capacity at 600 mm load centre."],
      ["What engine powers the CPCD100t?", "A turbocharged, intercooled 6J1-115C31 diesel producing 85 kW at 2,200 rpm with 500 N·m torque."],
      ["Is service available for such a heavy machine?", "Yes — EIRA provides factory-direct parts and trained heavy-equipment technicians with customised maintenance contracts across Pakistan."],
    ],
  },
  {
    slug: "3-5-ton-lpg-forklift-cpg35",
    id: "cpg35",
    tab: "3.5T LPG",
    name: "3.5 Ton LPG Dual-Fuel Forklift",
    model: "CPG / CPGD(Y)35",
    series: "K Series",
    powerType: "LPG",
    badge: "Clean Fuel",
    image: "/images/modern-clean-lpg-powered-forklift-with-cylinder-mo.jpg",
    imageAlt: "EIRA 3.5 ton LPG dual-fuel forklift CPG35",
    seo: {
      title: "3.5 Ton LPG Forklift CPG35 Price in Pakistan | EIRA Dual-Fuel",
      description:
        "EIRA 3.5 ton LPG dual-fuel forklift (CPG35) for sale in Pakistan. Nissan K25 engine, indoor/outdoor use, quick cylinder swaps. WhatsApp +92 300 0214188.",
      h1: "3.5 Ton LPG Dual-Fuel Forklift (CPG35) — Price & Specs in Pakistan",
      intro: [
        "The EIRA 3.5 Ton LPG Forklift (model CPG/CPGD(Y)35) bridges indoor and outdoor operation: clean LPG combustion for warehouses where air quality matters, with the torque and refuelling speed of an internal-combustion engine for yard work. A 2-minute cylinder swap eliminates the charging downtime of electrics, making it ideal for food distribution, beverage plants, retail DCs and mixed indoor/outdoor sites.",
        "It is powered by the Nissan K25 industrial engine (37.4 kW @ 2,600 rpm) on the proven K Series 3.5-ton chassis — 3,500 kg capacity, 3,000 mm lift, 18/19 km/h travel and a 2,390 mm turning radius. EIRA supplies the CPG35 in Pakistan with Karachi stock, LPG system servicing and genuine parts support.",
      ],
    },
    highlights: [
      ["Rated capacity", "3,500 kg"],
      ["Engine", "Nissan K25 37.4 kW"],
      ["Fuel", "LPG dual-fuel"],
      ["Cylinder swap", "~2 minutes"],
    ],
    groups: [
      { title: "General", rows: [["Model", "CPG / CPGD(Y)35"], ["Type", "3.5 Ton internal combustion counterbalanced forklift"], ["Power type", "LPG dual-fuel"], ["Rated load", "3,500 kg"], ["Load center", "500 mm"], ["Driving type", "Sit-on type"]] },
      {
        title: "Dimensions",
        rows: stdDims({ mastLow: "2,070 mm", forkMax: "4,220 mm", free: "30 mm", guard: "2,090 mm", clearance: "135 mm", pin: "310 mm", shelf: "1,215 mm", length: "3,963 / 2,743 mm", wheelbase: "1,760 mm", width: "1,225 mm", track: "1,000 / 970 mm", spread: "1,060 / 244 mm", radius: "2,390 mm", forkSize: "45 × 122 × 1,220 mm" }),
      },
      {
        title: "Performance",
        rows: stdPerf({ travel: "18 / 19 km/h", liftSpeed: "440 / 480 mm/s", lowerSpeed: "440 / 430 mm/s", pull: "18.1 / 13.4 kN", grade: "15 / 20 %", weight: "4,530 kg", tyres: "28×9-15-14PR / 6.50-10-10PR" }),
      },
      {
        title: "Engine & Powertrain",
        rows: [["Engine make / model", "Nissan K25"], ["Rated power", "37.4 kW @ 2,600 rpm"], ["Rated torque", "176.5 N·m @ 1,600 rpm"], ["Cylinders", "4"], ["Displacement", "2.488 L"], ["Fuel tank capacity", "50 L"], ["Emission standard", "China II"], ["Transmission", "1-1 Power Shift / 2-2 Manual Shift"]],
      },
    ],
    faqs: [
      ["What is the price of the 3.5 ton LPG forklift CPG35 in Pakistan?", "WhatsApp EIRA at +92 300 0214188 for a formal quote with current Karachi stock and delivery options."],
      ["Can the CPG35 work indoors?", "Yes — LPG burns far cleaner than diesel, making it suitable for warehouses, food plants and retail distribution centres, while retaining full outdoor capability."],
      ["How long does refuelling take?", "A cylinder swap takes about 2 minutes — no charging downtime compared to electric forklifts."],
      ["Which engine does it use?", "The Nissan K25 industrial engine rated at 37.4 kW (2,600 rpm) with 176.5 N·m torque."],
    ],
  },
  {
    slug: "electric-forklifts-cpd10-cpd50",
    id: "electric",
    tab: "Electric 1–5T",
    name: "Electric Forklifts (1.0 – 5.0 Ton)",
    model: "CPD10 – CPD50",
    series: "Electric Series",
    powerType: "Electric",
    badge: "Zero Emissions",
    image: "/images/modern-electric-lithium-ion-forklift-operating-sil.jpg",
    imageAlt: "EIRA electric counterbalance forklift CPD series in a clean warehouse",
    seo: {
      title: "Electric Forklift Price in Pakistan (1–5 Ton) | EIRA CPD Series",
      description:
        "EIRA electric forklifts CPD10–CPD50 (1–5 ton) for sale in Pakistan. Zero-emission AC drive for pharma, food & cold storage. WhatsApp +92 300 0214188.",
      h1: "Electric Forklifts CPD10–CPD50 (1.0 – 5.0 Ton) — Price & Specs in Pakistan",
      intro: [
        "The EIRA Electric Forklift range (models CPD10 through CPD50) covers 1.0 to 5.0 tons of zero-emission lifting for operations where clean air is non-negotiable — pharmaceutical plants, food processing, cold storage, textiles and modern distribution centres. AC drive motors (5.5–18 kW) with AC control deliver smooth, quiet performance, 10–13 km/h travel speeds and up to 20% gradeability.",
        "Eight models share a common design language with service weights from 2,040 to 5,850 kg and compact turning radii from 1,780 mm, so there is a right-sized electric for narrow aisles and heavy pallets alike. EIRA supports the electric range in Pakistan with application sizing, charging guidance, genuine parts and trained service engineers from Karachi.",
      ],
    },
    highlights: [
      ["Capacity range", "1,000 – 5,000 kg"],
      ["Drive", "AC electric"],
      ["Emissions", "Zero"],
      ["Models", "8 (CPD10–CPD50)"],
    ],
    groups: [],
    faqs: [
      ["What is the price of an EIRA electric forklift in Pakistan?", "Pricing varies by model (1–5 ton) and battery configuration. WhatsApp +92 300 0214188 with your load and shift details for a sized quotation."],
      ["Which industries suit the CPD electric range?", "Pharmaceuticals, food & beverage, cold chain, textiles, electronics and any indoor operation with clean-air requirements."],
      ["What drive system do they use?", "AC drive motors (5.5 to 18 kW depending on model) with AC drive control — quiet, low-maintenance and responsive."],
      ["What is the smallest/largest model?", "CPD10 (1,000 kg, 1,780 mm turning radius) up to CPD50 (5,000 kg) — eight models in total."],
    ],
  },
];

export const ELECTRIC_MODELS = ["CPD10", "CPD15", "CPD20", "CPD25", "CPD30", "CPD35", "CPD40", "CPD50"];
export const ELECTRIC_ROWS = [
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

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const productUrl = (slug) => `/products/${slug}`;
