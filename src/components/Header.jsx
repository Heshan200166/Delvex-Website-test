import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const serviceLinks = [
  { name: 'Split AC Installation', id: 'installation' },
  { name: 'AC Maintenance', id: 'maintenance' },
  { name: 'Breakdown & Repairs', id: 'repairs' },
  { name: 'Gas Charging', id: 'gas-charging' },
  { name: 'Design & Supply', id: 'design-supply' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services?tab=${serviceId}`);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Main Header - Pristine White with soft border and subtle shadow */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 shadow-sm transition-all">
        <div className="site-container py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" id="header-logo">
            <img 
              src="/images/logo.jpg" 
              alt="Delvex Engineering Logo" 
              className="h-10 sm:h-11 md:h-12 w-auto object-contain rounded-md" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <div className="services-dropdown">
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
              <div className="services-dropdown-menu">
                {serviceLinks.map((service) => (
                  <a key={service.id} href="#" onClick={(e) => { e.preventDefault(); handleServiceClick(service.id); }}>
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Gallery</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#0c2340] p-2 hover:bg-sky-50 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-backdrop ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        <button
          className="absolute top-4 right-4 text-slate-500 hover:text-[#0c2340] p-2 rounded-lg"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="mb-8">
          <img src="/images/logo.jpg" alt="Delvex Engineering" className="h-12 w-auto object-contain rounded" />
        </div>

        <nav className="flex flex-col gap-1.5">
          <NavLink to="/" className={({ isActive }) => `block py-2.5 px-4 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#0c2340] text-white' : 'text-[#0c2340] hover:bg-sky-50'}`} onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `block py-2.5 px-4 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#0c2340] text-white' : 'text-[#0c2340] hover:bg-sky-50'}`} onClick={() => setMobileOpen(false)}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `block py-2.5 px-4 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#0c2340] text-white' : 'text-[#0c2340] hover:bg-sky-50'}`} onClick={() => setMobileOpen(false)}>About Us</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `block py-2.5 px-4 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#0c2340] text-white' : 'text-[#0c2340] hover:bg-sky-50'}`} onClick={() => setMobileOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `block py-2.5 px-4 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#0c2340] text-white' : 'text-[#0c2340] hover:bg-sky-50'}`} onClick={() => setMobileOpen(false)}>Contact</NavLink>
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <a
              href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/share/14nisH8aAYf/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-sky-50 text-[#1877F2] border border-sky-100 flex items-center justify-center flex-shrink-0 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
          <div className="space-y-2 text-slate-500 text-sm">
            <a href="tel:+94764884688" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              076 488 4688
            </a>
            <a href="tel:+94741625403" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              074 162 5403
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

