import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const servicesData = [
  {
    id: 'installation',
    title: 'Split AC Installation',
    image: '/images/service-installation.jpg',
    description: 'Our professional split AC installation service ensures your air conditioning system is set up correctly, safely, and efficiently. We handle everything from site assessment to final testing.',
    includes: [
      'Residential AC installation',
      'Office & commercial AC installation',
      'Professional and safe installation practices',
      'Indoor unit wall mounting and setup',
      'Outdoor unit placement and securing',
      'Copper piping and drain line installation',
      'Electrical wiring and connection',
      'Gas charging and system testing',
      'Post-installation quality check',
    ],
  },
  {
    id: 'maintenance',
    title: 'AC Maintenance',
    image: '/images/service-maintenance.jpg',
    description: 'Regular maintenance is key to keeping your AC running efficiently and extending its lifespan. Our comprehensive maintenance service covers every component of your system.',
    includes: [
      'Regular servicing and tune-ups',
      'Deep cleaning of filters and coils',
      'Performance checking and optimization',
      'Preventive maintenance inspections',
      'Thermostat calibration',
      'Drain line cleaning and clearing',
      'Refrigerant level checking',
      'Electrical connection inspection',
      'System efficiency assessment',
    ],
  },
  {
    id: 'repairs',
    title: 'Breakdown & Repairs',
    image: '/images/service-repair.jpg',
    description: 'Experiencing AC problems? Our expert technicians diagnose and fix all types of air conditioner issues quickly and reliably, getting your comfort back on track.',
    includes: [
      'AC not cooling troubleshooting',
      'Water leakage diagnosis and repair',
      'Strange noise identification and fixing',
      'Power issue resolution',
      'Compressor repair and replacement',
      'Fan motor repair',
      'PCB board diagnosis and repair',
      'General AC problem solving',
      'Emergency breakdown service',
    ],
  },
  {
    id: 'gas-charging',
    title: 'Gas Charging',
    image: '/images/service-gas.jpg',
    description: 'Proper refrigerant levels are essential for your AC to cool effectively. Our gas charging service includes thorough leak checking and precise gas filling.',
    includes: [
      'Refrigerant gas level checking',
      'Gas top-up and refilling',
      'Leak detection and repair',
      'System pressure testing',
      'Refrigerant type identification',
      'Environmentally safe gas handling',
      'Post-charging performance testing',
      'Gas line inspection',
    ],
  },
  {
    id: 'design-supply',
    title: 'Design & Supply',
    image: '/images/service-supply.jpg',
    description: 'Not sure which AC system is right for your space? We provide expert consultation, recommend the best air conditioning solutions, and supply quality units for your needs.',
    includes: [
      'AC system consultation',
      'Air conditioner supply',
      'Custom design recommendations',
      'Installation planning and layout',
      'Room size and BTU calculations',
      'Brand and model recommendations',
      'Energy efficiency guidance',
      'Budget-friendly options',
    ],
  },
];

export default function Services() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'installation');
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (tabParam && servicesData.find(s => s.id === tabParam)) {
      setActiveTab(tabParam);
      setAnimKey(prev => prev + 1);
    }
  }, [tabParam]);

  const activeService = servicesData.find(s => s.id === activeTab);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setAnimKey(prev => prev + 1);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/service-repair.jpg" alt="Our Services" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-sky-300 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">Our Services</h1>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* Service Tabs + Content */}
      <section className="py-12 md:py-20 bg-white" id="service-details">
        <div className="site-container">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" id="service-tabs">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => handleTabClick(service.id)}
                id={`tab-${service.id}`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {activeService && (
            <div key={animKey} className="service-content-enter">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Showcase Image - 5 cols on lg */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 lg:sticky lg:top-24 group">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content - 7 cols on lg */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-100">
                    Service Overview
                  </div>
                  <h2 className="section-title text-2xl sm:text-3xl text-[#0c2340] mb-2">{activeService.title}</h2>
                  <div className="section-divider-left"></div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">{activeService.description}</p>

                  <h3 className="font-heading font-bold text-[#0c2340] text-base md:text-lg mb-4">What This Service Includes:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {activeService.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5 p-2 rounded-lg bg-sky-50/50 border border-sky-100/60">
                        <svg className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(activeService.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex"
                    id={`service-cta-${activeService.id}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>Inquire About This Service</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-18 bg-[#0c2340] text-center text-white border-t border-[#15325b]">
        <div className="site-container">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white mb-3">Need Help Choosing the Right AC?</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-md mx-auto font-light">Our expert team is ready to assist you. Get in touch with us today for a free assessment.</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20need%20help%20with%20my%20AC."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+94764884688" className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Call 076 488 4688</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

