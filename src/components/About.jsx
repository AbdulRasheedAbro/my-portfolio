import React from 'react';

/* Same tokens as Projects.jsx */
const tokens = {
  bg: '#0A0D12',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  panelBorderStrong: 'rgba(232, 234, 237, 0.14)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  amberSoft: 'rgba(232, 163, 61, 0.12)',
  teal: '#3FBFAD',
  tealSoft: 'rgba(63, 191, 173, 0.12)',
};

const About = () => {
  const stats = [
    {
      icon: '📂',
      number: '10+',
      label: 'Projects',
      color: tokens.amber,
    },
    {
      icon: '🤝',
      number: '2',
      label: 'Internships',
      color: tokens.amber,
    },
    {
      icon: '⚙️',
      number: '8+',
      label: 'Technologies',
      color: tokens.amber,
    },
    {
      icon: '🎓',
      number: '2025',
      label: 'Graduate',
      color: tokens.amber,
    },
    {
      icon: '🏅',
      number: '2',
      label: 'Certifications',
      color: tokens.amber,
    },
  ];

  return (
    <section
      id="about"
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

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,234,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,234,237,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 30% 70%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 30% 70%, black 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About <span style={{ color: tokens.amber }}>me</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>Get to know me better</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="text-lg leading-relaxed" style={{ color: tokens.textSecondary }}>
              My journey into backend development started with a curiosity for{' '}
              <span className="font-semibold" style={{ color: tokens.amber }}>
                how things work under the hood
              </span>
              . Today, I build robust APIs and microservices that power real-world applications.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: tokens.textSecondary }}>
              Proficient in designing secure RESTful APIs, managing relational databases, and
              translating complex business requirements into efficient, maintainable code.
              Experienced with modern tools like Docker and Firebase.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: tokens.textSecondary }}>
              I thrive in collaborative team environments and am passionate about clean
              architecture, microservices patterns, and continuous learning.
            </p>

            {/* Quote box */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{
                backgroundColor: tokens.panel,
                border: `1px solid ${tokens.panelBorder}`,
                borderLeft: `3px solid ${tokens.amber}`,
              }}
            >
              <p className="italic" style={{ color: tokens.textSecondary }}>
                "I believe great software is built on clean architecture and a passion for
                solving real problems."
              </p>
            </div>
          </div>

          {/* Stats - WHITE NUMBERS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center transition-all"
                style={{
                  backgroundColor: tokens.panel,
                  border: `1px solid ${tokens.panelBorder}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.panelBorder;
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: tokens.amberSoft }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-2xl font-semibold"
                  style={{
                    color: tokens.textPrimary,  // WHITE NUMBERS
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm mt-0.5" style={{ color: tokens.textSecondary }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;