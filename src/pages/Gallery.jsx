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
      <section className="py-14 md:py-20 bg-white" id="gallery-content">
        <div className="site-container text-center">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-6 text-sky-600 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl mb-3">Project <span className="text-sky-600">Showcase</span></h2>
          <div className="section-divider"></div>
          <p className="text-slate-600 leading-relaxed mb-8 text-base max-w-xl mx-auto">
            Take a look at our recent split AC installation, maintenance, and repair jobs completed across homes, villas, and commercial properties in Sri Lanka.
          </p>

          {/* Attractive Coming Soon Card */}
          <div className="relative max-w-3xl mx-auto my-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

            {/* Glowing Icon */}
            <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-sky-400/20 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#0c2340] to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <svg className="w-10 h-10 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Gallery In Progress</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0c2340] mb-3">
              Photo Showcase <span className="text-sky-600">Coming Soon</span>
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              We are currently uploading high-resolution captures from our latest completed installations, system repairs, and maintenance projects.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/90 border border-sky-100 shadow-sm text-xs font-semibold text-slate-700">
                <span className="text-sky-500 font-bold">✓</span> Split AC Installs
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/90 border border-sky-100 shadow-sm text-xs font-semibold text-slate-700">
                <span className="text-sky-500 font-bold">✓</span> Before & After
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/90 border border-sky-100 shadow-sm text-xs font-semibold text-slate-700">
                <span className="text-sky-500 font-bold">✓</span> Commercial Sites
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="https://www.facebook.com/share/14nisH8aAYf/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="gallery-facebook-btn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Browse Photos on Facebook</span>
              </a>
              <Link to="/contact" className="btn-navy" id="gallery-contact-btn">
                <span>Book a Service</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

