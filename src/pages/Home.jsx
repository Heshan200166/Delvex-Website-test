import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  { image: '/images/hero-family.jpg', alt: 'Family enjoying cool air conditioning' },
  { image: '/images/hero-comfort.jpg', alt: 'Modern air conditioner providing comfort' },
  { image: '/images/hero-relax.jpg', alt: 'Relaxing in air conditioned room' },
  { image: '/images/hero-happy.jpg', alt: 'Happy couple with air conditioning' },
];

const services = [
  {
    id: 'installation',
    title: 'Split AC Installation',
    desc: 'Professional residential and office AC installation with safe indoor & outdoor unit setup.',
    image: '/images/service-installation.jpg',
  },
  {
    id: 'maintenance',
    title: 'AC Maintenance',
    desc: 'Regular servicing, deep cleaning, and preventive maintenance to keep your AC running at peak performance.',
    image: '/images/service-maintenance.jpg',
  },
  {
    id: 'repairs',
    title: 'Breakdown & Repairs',
    desc: 'Fast diagnosis and repair for AC not cooling, water leakage, strange noises, and power issues.',
    image: '/images/service-repair.jpg',
  },
  {
    id: 'gas-charging',
    title: 'Gas Charging',
    desc: 'Professional gas checking, top-up, leak detection, and refrigerant-related services.',
    image: '/images/service-gas.jpg',
  },
  {
    id: 'design-supply',
    title: 'Design & Supply',
    desc: 'Expert AC system consultation, air conditioner supply, and tailored design recommendations.',
    image: '/images/service-supply.jpg',
  },
];

const badges = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Island Wide Coverage',
    desc: 'Serving across Colombo, Matara, Dickwella, Tangalle & Belihattha',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
    title: 'Expert Technicians',
    desc: 'Skilled and certified professionals with years of field experience',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Fast Response',
    desc: 'Quick response times for emergency breakdowns and urgent repairs',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Affordable Pricing',
    desc: 'Competitive and transparent pricing with no hidden surprises',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO SLIDESHOW ===== */}
      <section className="hero-slideshow" id="hero">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-overlay" />
          </div>
        ))}

        <div className="site-container hero-content">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Air Conditioning Specialists
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Delvex <br />
              <span className="text-sky-400">Engineering</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mb-8 max-w-lg leading-relaxed font-light">
              We provide smart, reliable, and efficient air conditioning solutions tailored to your needs. With expert service and a focus on quality, we help you achieve lasting comfort.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="hero-get-in-touch"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Us</span>
              </a>
              <Link to="/services" className="btn-primary" id="hero-our-services">
                <span>Our Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-14 md:py-20 bg-white" id="about-section">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image Frame */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-md border border-sky-100 bg-white">
                <img 
                  src="/images/technician-thumbsup.jpg" 
                  alt="Delvex Engineering technician" 
                  className="w-full h-[320px] sm:h-[380px] object-cover" 
                />
              </div>
              {/* Badge positioned cleanly inside image corner */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-sky-200 rounded-xl px-4 py-2.5 shadow-md hidden sm:block">
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Certified Quality</p>
                <p className="text-sm font-bold text-[#0c2340]">100% Reliable Service</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-100">
                About Delvex
              </div>
              <h2 className="section-title text-2xl sm:text-3xl">
                Your Trusted Air Conditioning <span className="text-sky-600">Partner</span>
              </h2>
              <div className="section-divider-left"></div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                <strong className="text-[#0c2340]">Delvex Engineering</strong> is a premier provider of split-type air conditioner solutions across Sri Lanka. With a firm dedication to quality and precision, we specialize in delivering dependable AC installation, maintenance, and emergency repair services.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Our team brings together certified technical expertise, transparent pricing, and modern diagnostic tools to keep your living and work spaces comfortably cooled all year round.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                From single residential bedrooms to multi-unit commercial offices, we ensure your split AC runs with optimal energy efficiency and maximum reliability.
              </p>
              <Link to="/about" className="btn-primary" id="about-learn-more">
                <span>Learn More About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-14 md:py-20 bg-[#f4f9ff] border-y border-sky-100" id="services-section">
        <div className="site-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Our Capabilities
            </div>
            <h2 className="section-title">
              Our Best <span className="text-sky-600">Services</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive split-type air conditioning solutions from installation to scheduled maintenance, all delivered by certified technicians.
            </p>
          </div>

          {/* Clean 6-Card Uniform Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link 
                to={`/services?tab=${service.id}`} 
                key={service.id} 
                className="service-card group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-sky-300 transition-all flex flex-col h-full" 
                id={`service-card-${service.id}`}
              >
                <div className="overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#0c2340] mb-2 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 text-sky-600 text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Service Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Custom CTA Card filling the 6th slot to keep the grid perfectly framed */}
            <div className="bg-[#0c2340] border border-sky-900/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between text-white shadow-sm">
              <div>
                <span className="text-sky-300 text-xs font-semibold uppercase tracking-wider block mb-2">Need a custom quote?</span>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-3 text-white">Have a specific AC requirement?</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                  Talk directly with our technical advisors to get the right capacity sizing and competitive quotation for your premises.
                </p>
              </div>
              <a
                href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20would%20like%20a%20quote%20for%20AC%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm justify-center w-full"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-navy" id="view-all-services">
              <span>View All Services & Pricing</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-14 md:py-20 bg-white" id="why-choose-us">
        <div className="site-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-sky-100">
              Our Core Strengths
            </div>
            <h2 className="section-title">
              Why Choose <span className="text-sky-600">Us</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Delivering high standards of technical precision, certified workmanship, and customer peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div key={index} className="badge-card bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-sky-300 transition-all flex flex-col items-center">
                <div className="badge-icon">
                  {badge.icon}
                </div>
                <h3 className="font-heading font-bold text-[#0c2340] text-base mb-2">{badge.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-14 md:py-18 bg-[#0c2340] text-white" id="service-areas">
        <div className="site-container text-center">
          <div className="mb-8">
            <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider block mb-2">Service Coverage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-2">
              Our Service <span className="text-sky-400">Areas</span>
            </h2>
            <div className="section-divider"></div>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              We provide professional split-type air conditioner services across these key regions in Sri Lanka.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha'].map((area) => (
              <div 
                key={area} 
                className="flex items-center gap-2.5 bg-[#15325b] border border-sky-400/30 rounded-full px-5 py-2.5 text-slate-100 hover:border-sky-400 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-semibold text-xs sm:text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual transition — gradient bridge between dark and CTA sections */}
      <div className="h-2 bg-gradient-to-r from-[#0c2340] via-sky-800 to-sky-600" aria-hidden="true"></div>

      {/* ===== CTA BANNER ===== */}
      <section className="py-14 md:py-18 bg-gradient-to-r from-sky-600 via-sky-700 to-[#0c2340] relative overflow-hidden text-white" id="cta-banner">
        <div className="site-container text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-3">
            Need AC Service? Contact Us Today!
          </h2>
          <p className="text-sky-100 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto font-light">
            Fast response times, transparent rates, and certified split AC technicians. Reach out now for quick assistance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20need%20AC%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-7 py-3 text-sm font-semibold"
              id="cta-whatsapp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+94764884688"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0c2340] text-white border-2 border-sky-300/50 rounded-lg font-heading font-semibold text-sm hover:bg-[#15325b] transition-all shadow-md"
              id="cta-call"
            >
              <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Call 076 488 4688</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
