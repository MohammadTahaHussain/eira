export default function ProductRange() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
    <div className="max-w-7xl mx-auto px-gutter">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
    <div>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Our Equipment</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
                High-Performance Machinery Fleet.
              </h2>
    </div>
    <a className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-on-surface text-surface-container-lowest font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors" href="/specifications">
    <span>Explore All Forklifts</span>
    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
    </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
    {/* Machine 1: Diesel */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img alt="EIRA Diesel Heavy Forklift 3.0 Ton high angle view showing rugged mast system and heavy counterweight in an industrial warehouse setting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2YoPQJjnKdMcWPInb9rhwIQuYaN-qQiJYwx-jxiEvLsN3dxEWI9kCQI73YFCd24oy3QHfgFwLaWh80TioG8jfhiHA5gkiBxTTReLIDkJ9lIgXIDGYU9sTYYBAzx8wrgTTKQBjNI5I9pMy2FZEP6FFrN24w9v3ZqzKXi0H8vIVVFwooiTWcJPWM4ZxaF5xY3mcfNrVAXDf-VJJ8rHDJ9En2pmphT54RioriB6pdRvwEdKNDIcb8AiN84pJM6JrTiJs-yI"/>
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase">
                    Heavy Duty
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Diesel Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">3.0T | 3.5T | 4.0T | 5.0T | 10.0T</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Rugged diesel power plants tailored for high-ambient heat, unpaved factory ground, and continuous 16-hour heavy lifting operations.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Availability</span>
    <span className="font-label-sm text-label-sm font-bold text-primary">In Stock (Karachi Hub)</span>
    </div>
    </div>
    {/* Machine 2: Electric Li-Ion */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img className="w-full h-full object-cover" data-alt="Modern high performance industrial electric forklift with lime green chassis and black mast operating in a clean modern pharmaceutical and FMCG distribution warehouse, bright daylight, high precision steel engineering, crisp photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABXPv84xa5Qo1ZJ9tVCFg99iY7TE9pFbWA12dV-_8JUXLqJ3jkIq4d9FxktHlLnRfAIH-MLP-H7b8YIlBNxzuhEeHxxpAjXtAvqqUKumXqaSELHRoe-Zk1UeBFS-ptFexvmzxkTAaEHybHQHSa3pYYqoDFjfIDIX-lnDue2EuwNPwWZAQSW4IBpzPPGR1QCc17ZS84dDKcCvAQKjV3zNn9Qwcb3eak-a-7fBATIK6ZLcTTqk2zrZ5pEw"/>
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-tint text-on-primary font-label-sm text-label-sm font-bold uppercase">
                    Zero Emissions
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Li-Ion Electric Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">1.0T – 5.0T · 8 Models</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Fast opportunity-charging lithium technology with zero tailpipe emissions, perfect for pharmaceuticals, cold storage, and food processing.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Drive Control</span>
    <span className="font-label-sm text-label-sm font-bold text-on-surface">AC</span>
    </div>
    </div>
    {/* Machine 3: LPG Dual Fuel */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img className="w-full h-full object-cover" data-alt="Heavy duty LPG dual-fuel industrial forklift operating seamlessly between an outdoor dispatch yard and an indoor manufacturing facility, clean green and slate colorway, high clarity industrial photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYu899ryaSVbb_qTlcAK4rqh2dJ1BZXZxqmvKJaqrmRhMiMEWHhsep_tg1RbMMvfn6E3ejcZVAUS7UGkU43ff3jatZQcOlBBVD23pnbTq35tu_Y15GDeCRzIzt153fCCrekKPWalAaU3YVSjI-R0TjHsIy5RChzXp4nnWY2EIElAoQ6CB_XWAg_JAFmXtcULvHWMdo95P18qq1Pl-5KI-B2nGs3yUuv8yHBWmaX_LrcT446o3y7j0Pog"/>
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-label-sm font-bold uppercase">
                    Hybrid Indoor/Outdoor
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">LPG &amp; Dual-Fuel Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">3.5T</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Low-emission operation with the torque of an internal combustion engine. Switch seamlessly between indoor warehouse aisles and container yards.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Engine</span>
    <span className="font-label-sm text-label-sm font-bold text-on-surface">Nissan K25 · 37.4 kW</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
