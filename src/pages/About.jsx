import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/technician-safety.jpg" alt="About Delvex Engineering" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-sky-300 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">Who We Are</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">About Us</h1>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* About Content — two-column layout */}
      <section className="py-16 md:py-24 bg-white" id="about-content">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column — text */}
            <div>
              {/* Icon with proper container styling */}
              <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 text-sky-600 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>

              <h2 className="section-title text-2xl sm:text-3xl mb-2">About <span className="text-sky-600">Delvex Engineering</span></h2>
              <div className="section-divider-left"></div>

              {/* Left-aligned, consistent text sizing */}
              <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base text-left">
                <strong className="text-[#0c2340]">Delvex Engineering</strong> is an island-wide engineering service provider in Sri Lanka specializing in split-type air conditioners. We handle complete lifecycle HVAC needs from initial sizing and sales supply to precision installation, routine scheduled maintenance, and 24/7 breakdown repair.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base text-left">
                Our mission is simple: to make modern, energy-efficient air conditioning accessible and worry-free. With certified technicians stationed in Colombo, Matara, Dickwella, Tangalle, and Belihattha, we deliver fast turnaround and lasting cooling satisfaction.
              </p>

              {/* Tagline quote */}
              <div className="bg-[#f0f7ff] border border-sky-200/70 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
                <p className="text-sky-800 font-heading font-bold text-lg sm:text-xl italic">"Your Comfort, Our Priority"</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3.5">
                <Link to="/services" className="btn-primary">
                  <span>View Our Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/contact" className="btn-navy">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right column — image + stats to fill the space */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-sky-100">
                <img 
                  src="/images/technician-thumbsup.jpg" 
                  alt="Delvex Engineering professional technician" 
                  className="w-full h-[320px] sm:h-[380px] object-cover" 
                />
              </div>

              {/* Stats grid to fill the remaining space */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-heading font-black text-[#0c2340]">5+</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">Service Areas</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-heading font-black text-[#0c2340]">24/7</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">Breakdown Support</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-heading font-black text-sky-600">100%</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">Certified Technicians</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-heading font-black text-sky-600">✓</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">Island Wide Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
