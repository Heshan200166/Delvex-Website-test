import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Hello Delvex Engineering,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/94764884688?text=${waMessage}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/technician-thumbsup.jpg" alt="Contact Us" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-sky-300 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">Contact Us</h1>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-22 bg-white" id="contact-info">
        <div className="site-container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-2">
              Fast Communication
            </div>
            <h2 className="section-title">How To <span className="text-sky-600">Reach Us</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">We're always ready to assist you. Reach out via WhatsApp or direct phone call.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {/* WhatsApp 1 */}
            <a href="https://wa.me/94764884688" target="_blank" rel="noopener noreferrer" className="contact-card group p-6 sm:p-8" id="contact-whatsapp-1">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-heading font-bold text-[#0c2340] text-sm md:text-base mb-1.5">WhatsApp Main</h3>
              <p className="text-sky-600 font-semibold text-sm">076 488 4688</p>
            </a>

            {/* WhatsApp 2 */}
            <a href="https://wa.me/94783920262" target="_blank" rel="noopener noreferrer" className="contact-card group p-6 sm:p-8" id="contact-whatsapp-2">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-heading font-bold text-[#0c2340] text-sm md:text-base mb-1.5">WhatsApp Support</h3>
              <p className="text-sky-600 font-semibold text-sm">078 392 0262</p>
            </a>

            {/* Call 1 */}
            <a href="tel:+94764884688" className="contact-card group p-6 sm:p-8" id="contact-call-1">
              <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-[#0c2340] text-sm md:text-base mb-1.5">Call Hotline 1</h3>
              <p className="text-sky-600 font-semibold text-sm">076 488 4688</p>
            </a>

            {/* Call 2 */}
            <a href="tel:+94741625403" className="contact-card group p-6 sm:p-8" id="contact-call-2">
              <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-[#0c2340] text-sm md:text-base mb-1.5">Call Hotline 2</h3>
              <p className="text-sky-600 font-semibold text-sm">074 162 5403</p>
            </a>
          </div>

          {/* Form + Social / Service Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Enquiry Form - 7 cols */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200" id="enquiry-form">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-100">
                Online Inquiry
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#0c2340] mb-2">Send Us A Message</h2>
              <div className="section-divider-left"></div>
              <p className="text-slate-500 text-xs sm:text-sm mb-8">Fill out the form below and your inquiry will be formatted and sent directly via WhatsApp.</p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs sm:text-sm font-medium">
                  Message formatted and opened in WhatsApp! Our team will respond shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-[#0c2340] mb-2">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="e.g. Ruwan Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-[#0c2340] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="e.g. 077 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-[#0c2340] mb-2">Your Message & Location</label>
                  <textarea
                    id="message"
                    className="form-input"
                    placeholder="Describe your AC service needs and location (e.g. Matara, 12,000 BTU installation)..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn-whatsapp w-full justify-center" id="submit-enquiry">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Social + Service Areas - 5 cols — each card is visually distinct */}
            <div className="lg:col-span-5 space-y-8">
              {/* Social Media Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200" id="social-links">
                <h3 className="font-heading font-bold text-lg text-[#0c2340] mb-1">Follow Our Channels</h3>
                <div className="section-divider-left"></div>
                <p className="text-slate-500 text-xs sm:text-sm mb-5">Stay updated with our latest installation photos, AC tips, and seasonal offers.</p>
                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/share/14nisH8aAYf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group"
                    id="social-facebook"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[#0c2340] text-sm group-hover:text-sky-600 transition-colors">Facebook</p>
                      <p className="text-slate-400 text-xs">Delvex Engineering</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 ml-auto group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@delvexengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group"
                    id="social-tiktok"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[#0c2340] text-sm group-hover:text-sky-600 transition-colors">TikTok</p>
                      <p className="text-slate-400 text-xs">Delvex Engineering</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 ml-auto group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>

              {/* Service Areas Card — visually separated */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200" id="contact-service-areas">
                <h3 className="font-heading font-bold text-lg text-[#0c2340] mb-1">Our Service Areas</h3>
                <div className="section-divider-left"></div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha'].map((area) => (
                    <div key={area} className="flex items-center gap-2.5 p-3 rounded-lg bg-sky-50/50 border border-sky-100">
                      <svg className="w-4 h-4 text-sky-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="font-medium text-[#0c2340] text-xs sm:text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
