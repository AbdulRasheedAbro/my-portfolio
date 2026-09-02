import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

/* Same tokens as Hero.jsx / Navbar.jsx / About.jsx / Skills.jsx / Experience.jsx / Certifications.jsx / Projects.jsx */
const tokens = {
  bg: '#0A0D12',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  amberSoft: 'rgba(232, 163, 61, 0.12)',
};

/* Official Gmail "M" envelope mark in its real 4-color palette
   (red flap, blue right panel, green left panel, yellow bottom) */
const GmailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M44 24.5v14.6c0 1.6-1.3 2.9-2.9 2.9H36V21.9l8-6v8.6z" />
    <path fill="#34A853" d="M4 24.5v14.6C4 40.7 5.3 42 6.9 42H12V21.9l-8-6v8.6z" />
    <path fill="#FBBC04" d="M36 15.9V42H12V15.9l12 9 12-9z" />
    <path fill="#EA4335" d="M4 15.9l20 15 20-15V13.5c0-2.4-2.7-3.8-4.7-2.4L24 21 8.7 11.1C6.7 9.7 4 11.1 4 13.5v2.4z" />
  </svg>
);

/* Same visual language as the iOS Phone app icon: white receiver on green */
const brand = {
  email:    { color: null,     chipBg: '#FFFFFF', hover: '#4285F4' },                     // real logo carries its own color
  phone:    { color: '#FFFFFF', chipBg: '#34C759', hover: '#34C759' },                    // iOS Phone-app green
  location: { color: '#3A3A3C', chipBg: 'linear-gradient(135deg, #E8E8ED 0%, #A9A9B2 55%, #8E8E93 100%)', hover: '#A9A9B2' }, // iOS silver
  github:   { color: '#FFFFFF', chipBg: '#181717', hover: '#181717' },                    // GitHub mark on its own black chip
  linkedin: { color: '#FFFFFF', chipBg: '#0A66C2', hover: '#0A66C2' },                    // LinkedIn blue
};

const contactCards = [
  { key: 'email', label: 'Email', value: 'abdulrasheedabro69@gmail.com', href: 'mailto:abdulrasheedabro69@gmail.com', Icon: GmailIcon, brand: brand.email },
  { key: 'phone', label: 'Phone', value: '+92 334-3544882', href: 'tel:+923343544882', Icon: FaPhone, brand: brand.phone },
  { key: 'location', label: 'Location', value: 'Karachi, Pakistan', href: null, Icon: FaMapMarkerAlt, brand: brand.location },
  { key: 'github', label: 'GitHub', value: '@AbdulRasheedAbro', href: 'https://github.com/AbdulRasheedAbro', Icon: SiGithub, brand: brand.github },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: tokens.bg,
        fontFamily: "'Inter', sans-serif",
        borderTop: `1px solid ${tokens.panelBorder}`
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            top: '-350px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: `radial-gradient(circle, ${tokens.amberSoft} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header - "Let's" in white, "connect" in Amber */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's <span style={{ color: tokens.amber }}>connect</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>I'd love to hear from you</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Personal message */}
          <div
            className="p-6 rounded-xl mb-10 text-center"
            style={{
              backgroundColor: tokens.panel,
              border: `1px solid ${tokens.panelBorder}`,
              borderLeft: `3px solid ${tokens.amber}`,
            }}
          >
            <p style={{ color: tokens.textSecondary }}>
              I'm actively looking for new opportunities — full-time roles, internships, or
              freelance projects. Feel free to reach out if you'd like to connect or collaborate.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map(({ key, label, value, href, Icon, brand: b }) => {
              const content = (
                <>
                  <div
                    className="p-3 rounded-lg transition-all flex items-center justify-center"
                    style={{ background: b.chipBg }}
                  >
                    <Icon style={b.color ? { color: b.color } : undefined} className={b.color ? 'text-xl' : undefined} size={b.color ? undefined : 20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs" style={{ color: tokens.textMuted }}>{label}</p>
                    <p className="text-sm font-medium truncate" style={{ color: tokens.textPrimary }}>{value}</p>
                  </div>
                </>
              );
              const sharedStyle = { backgroundColor: tokens.panel, border: `1px solid ${tokens.panelBorder}` };
              const sharedHover = {
                onMouseEnter: (e) => { e.currentTarget.style.borderColor = b.hover; },
                onMouseLeave: (e) => { e.currentTarget.style.borderColor = tokens.panelBorder; },
              };

              if (!href) {
                return (
                  <div key={key} className="flex items-center gap-4 p-4 rounded-xl" style={sharedStyle}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={key}
                  href={href}
                  target={key === 'github' ? '_blank' : undefined}
                  rel={key === 'github' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style={sharedStyle}
                  {...sharedHover}
                >
                  {content}
                </a>
              );
            })}

            {/* LinkedIn — full width, real LinkedIn blue */}
            <a
              href="https://www.linkedin.com/in/abdul-rasheed-77273727b"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 flex items-center gap-4 p-4 rounded-xl transition-all"
              style={{ backgroundColor: tokens.panel, border: `1px solid ${tokens.panelBorder}` }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = brand.linkedin.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.panelBorder; }}
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: brand.linkedin.chipBg }}>
                <FaLinkedin style={{ color: brand.linkedin.color }} className="text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs" style={{ color: tokens.textMuted }}>LinkedIn</p>
                <p className="text-sm font-medium truncate" style={{ color: tokens.textPrimary }}>
                  linkedin.com/in/abdul-rasheed-77273727b
                </p>
              </div>
            </a>
          </div>

          {/* Social icons row — real brand colors */}
          <div className="flex justify-center gap-4 mt-10">
            <a
              href="https://github.com/AbdulRasheedAbro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full transition-all flex items-center justify-center"
              style={{ backgroundColor: brand.github.chipBg, border: `1px solid ${tokens.panelBorder}`, color: brand.github.color }}
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rasheed-77273727b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full transition-all flex items-center justify-center"
              style={{ backgroundColor: brand.linkedin.chipBg, border: `1px solid ${tokens.panelBorder}`, color: brand.linkedin.color }}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:abdulrasheedabro69@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full transition-all flex items-center justify-center"
              style={{ backgroundColor: brand.email.chipBg, border: `1px solid ${tokens.panelBorder}` }}
            >
              <GmailIcon size={20} />
            </a>
            <a
              href="tel:+923343544882"
              aria-label="Phone"
              className="p-3 rounded-full transition-all flex items-center justify-center"
              style={{ backgroundColor: brand.phone.chipBg, border: `1px solid ${tokens.panelBorder}`, color: brand.phone.color }}
            >
              <FaPhone size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
