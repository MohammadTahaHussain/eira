export default function ProductRange() {
  return (
    <>
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
    </>
  );
}
