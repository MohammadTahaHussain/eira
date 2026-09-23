export default function BrandStatement() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl lg:py-28 overflow-hidden">
    <div className="wrapper">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
    {/* Large Statement Typography */}
    <div className="lg:col-span-7 flex flex-col space-y-space-md">
    <div className="flex items-center gap-2">
    <span className="w-3 h-3 bg-primary-container rounded-sm"></span>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface font-bold">The EIRA Mandate</span>
    </div>
    <h2 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-tight">
                EIRA — Engineered for Work. Priced for Business.
              </h2>
    <p className="font-headline-md text-headline-md text-primary font-bold">
                Reliable material handling solutions for modern Pakistani industry.
              </p>
    <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                We are dedicated to removing the opacity from industrial machinery procurement. By providing authentic equipment specs, factory direct manufacturing control, and committed domestic support, we empower Pakistani warehouses, mills, and shipping hubs to operate at full capacity.
              </p>
    {/* Official Logo mark representation */}
    <div className="pt-4 flex items-center gap-4">
    <img alt="Official EIRA Logo Wordmark" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnDQossygoYZG_Tkz5rsebRmbdMeR1CsOHfhLkckoma2chXmBDYZAbMNfOo4GoB-_efAFKVoTLZg35ODC8HRMZLknnw_hbHxObLpfUIefVsCqRDUdSgFl8psRKP0kDI3uZdjidyzp4ypHGnWbLvnOqcDSfNsvvxb9Ohb2kiiWLLsPEDcUFAPLRx18_Gyjl8b1D8B3ySNU3Ic2t_Y8oXKh_bSWwtpTE0T83Jb3GNaA9dCQRP8_8ZLymymdZlvNQl9AWak"/>
    <span className="text-tertiary font-label-sm text-label-sm uppercase">Registered Industrial Machinery Mark</span>
    </div>
    </div>
    {/* Machine Framing */}
    <div className="lg:col-span-5 relative">
    <div className="w-full aspect-square bg-surface-container rounded-2xl overflow-hidden shadow-md relative tilt-3d">
    <img alt="EIRA Green Industrial Forklift 3.0 Ton parked inside modern assembly floor, showing rugged mast details and high visibility paint" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEsIpX-WZjm9GVg0l_ZMhMEJIiFqgbxl7sfwpPuwcYEmTUufW-GV62bxg060X_OPed0Bl1-TCc4N58BHsxK0MIaGh05X9ByQMKa7Y-K8fZDa8-y2yjOfWffZLVPhtYPsIo_Z95aFGjVsDTlJZa5ee1lTNdFmrw9WLd4qK8ZMrZ5NA7AmRVjZe8yYLUQxg7U840-obcnI1JNWAApQBwHxH39WR-dy95J_8e5uSPEOYGODmz3-l8dtgEy1sf8DXfDWMn51A"/>
    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
    <div className="absolute bottom-6 left-6 right-6 text-surface-container-lowest">
    <span className="font-label-sm text-label-sm uppercase text-primary-container font-bold block mb-1">Authentic Quality</span>
    <p className="font-headline-sm text-headline-sm font-extrabold">Tested. Certified. Ready for Duty.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
