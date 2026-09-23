"use client";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, FileCheck2 } from "lucide-react";
import { PRODUCTS, ELECTRIC_MODELS, ELECTRIC_ROWS, waLink, productUrl } from "../../lib/products";

const WA_LINK = waLink("Please share the official EIRA spec sheet");

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

export default function SpecificationsClient() {
  const [active, setActive] = useState("cpcd30");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const ids = PRODUCTS.map((m) => m.id);
    if (ids.includes(hash)) setActive(hash);
  }, []);

  const select = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const model = PRODUCTS.find((m) => m.id === active);
  const isElectric = active === "electric";

  return (
    <main className="pt-28 bg-surface min-h-screen">
      <section className="wrapper pt-space-xl pb-space-lg">
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

      <div className="sticky top-28 z-30 bg-surface/95 backdrop-blur-md border-y border-tertiary/20">
        <div className="wrapper py-3 flex gap-2 overflow-x-auto">
          {PRODUCTS.map((m) => (
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
        </div>
      </div>

      <section className="wrapper py-space-xl">
        {isElectric ? (
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

        <div className="mt-space-md">
          <a
            href={productUrl(model.slug)}
            className="inline-flex items-center gap-2 text-label-md font-bold text-primary hover:underline"
          >
            Open the detailed {model.name} page <ArrowRight className="text-[16px]" />
          </a>
        </div>

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
