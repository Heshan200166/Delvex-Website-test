import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/service-installation-2.jpg" alt="Our Gallery" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-sky-300 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">Gallery</h1>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-14 md:py-22 bg-white" id="gallery-content">
        <div className="site-container text-center">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-6 text-sky-600 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl mb-3">Project <span className="text-sky-600">Showcase</span></h2>
          <div className="section-divider"></div>
          <p className="text-slate-600 leading-relaxed mb-8 text-base max-w-xl mx-auto">
            Take a look at our recent split AC installation, maintenance, and repair jobs completed across homes, villas, and commercial properties in Sri Lanka.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              { img: '/images/service-installation.jpg', title: 'Indoor Wall Installation' },
              { img: '/images/service-maintenance.jpg', title: 'Outdoor Coil Deep Wash' },
              { img: '/images/service-repair.jpg', title: 'Compressor & Leak Diagnosis' },
              { img: '/images/service-supply.jpg', title: 'Multi-Room Split Supply' },
              { img: '/images/ac-wall-unit.jpg', title: 'Modern Inverter Setup' },
              { img: '/images/service-gas.jpg', title: 'Refrigerant Pressure Charging' }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <p className="text-white text-xs font-semibold text-left">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="https://www.facebook.com/share/14nisH8aAYf/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>More Photos on Facebook</span>
            </a>
            <Link to="/contact" className="btn-navy">
              <span>Book An Installation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

