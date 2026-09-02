import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

/* Same tokens as Hero.jsx / Navbar.jsx / About.jsx / Skills.jsx */
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

const Experience = () => {
  const experiences = [
    {
      company: 'Internee.pk',
      location: 'Remote',
      role: 'Android Mobile Application Developer Intern',
      period: 'Jan 2026 - Feb 2026',
      icon: '📱',
      achievements: [
        'Designed and developed a mobile payment & subscription system, implementing secure transaction flows and subscription lifecycle management',
        'Built a real-time communication platform enabling instant messaging and live notifications between users, with low-latency data synchronization to keep conversations updated in real time',
        'Gained hands-on experience in mobile application development, working across the full app lifecycle from UI design and implementation to testing and deployment',
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            top: '-380px',
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
          maskImage: 'radial-gradient(ellipse at 70% 20%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 20%, black 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header - "Work" in white, "experience" in Amber */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Work <span style={{ color: tokens.amber }}>experience</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>Professional experience that shaped me</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {experiences.length > 1 && (
            <div
              className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: tokens.panelBorder }}
            />
          )}

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-0 md:pl-12 mb-8 last:mb-0">
              <div
                className="absolute left-0 top-2 w-8 h-8 rounded-full items-center justify-center hidden md:flex"
                style={{ backgroundColor: tokens.panel, border: `2px solid ${tokens.amber}` }}
              >
                <span className="text-sm">{exp.icon}</span>
              </div>

              <div
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
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="font-medium" style={{ color: tokens.amber }}>{exp.company}</p>
                    <p className="text-sm flex items-center gap-1.5 mt-1" style={{ color: tokens.textSecondary }}>
                      <FaMapMarkerAlt size={12} style={{ color: tokens.amber }} /> {exp.location}
                    </p>
                  </div>
                  <div
                    className="flex items-center text-sm px-3 py-1.5 rounded-full"
                    style={{ color: tokens.textSecondary, border: `1px solid ${tokens.panelBorder}` }}
                  >
                    <FaCalendarAlt size={12} className="mr-2" style={{ color: tokens.amber }} /> {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: tokens.textSecondary }}
                    >
                      <span style={{ color: tokens.amber }}>▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;