import React from 'react';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

/* Same tokens as Hero.jsx / Navbar.jsx / About.jsx / Skills.jsx / Experience.jsx */
const tokens = {
  bg: '#0A0D12',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  amberSoft: 'rgba(232, 163, 61, 0.12)',
  amberHover: '#F0B75B',
};

const Certifications = () => {
  const certifications = [
    {
      title: 'Software Development Job Simulation',
      issuer: 'Forage',
      date: 'August 10th, 2026',
      description: 'Completed practical tasks in software review, identifying root causes, and fixing bugs.',
      link: '#',
      icon: '🏅',
    },
    {
      title: 'Java Programming Language',
      issuer: 'NAVTTC - National Vocational & Technical Training Commission',
      date: 'Apr 2024 - May 2024',
      description: 'Intensive 2-month Java training covering Core Java, OOP, Data Structures & Algorithms, Multi-Threading, and JDBC. Capstone projects: Library Management System & Student Management System.',
      link: '#',
      icon: '☕',
    },
  ];

  return (
    <section
      id="certifications"
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
            width: '760px',
            height: '760px',
            bottom: '-380px',
            right: '-260px',
            background: `radial-gradient(circle, ${tokens.amberSoft} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,234,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,234,237,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 70% 60%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 60%, black 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header - "Certifications" in Amber */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: tokens.amber }}>Certifications</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>Professional development & achievements</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl transition-all"
              style={{ backgroundColor: tokens.panel, border: `1px solid ${tokens.panelBorder}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tokens.amber;
                e.currentTarget.style.boxShadow = `0 8px 32px -8px ${tokens.amberSoft}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.panelBorder;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: tokens.amberSoft }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="font-medium" style={{ color: tokens.amber }}>{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs mt-1.5" style={{ color: tokens.textSecondary }}>
                    <FaCalendarAlt size={11} style={{ color: tokens.amber }} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: tokens.textSecondary }}>
                    {cert.description}
                  </p>
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium mt-3 transition-colors"
                      style={{ color: tokens.amber }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = tokens.amberHover; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = tokens.amber; }}
                    >
                      View certificate <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;