export default function AboutSection() {
  return (
    <>
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
    </>
  );
}
