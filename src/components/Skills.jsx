import React from 'react';

/* Same tokens as Hero.jsx / Navbar.jsx / About.jsx — keep in sync if you change these. */
const tokens = {
  bg: '#0A0D12',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  panelBorderStrong: 'rgba(232, 234, 237, 0.14)',
  track: 'rgba(232, 234, 237, 0.07)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  amberSoft: 'rgba(232, 163, 61, 0.12)',
  amberHover: '#F0B75B',
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Java',
      color: tokens.amber,
      skills: [
        { name: 'Java (Core / J2SE / J2EE)', level: 90 },
        { name: 'OOP Principles', level: 90 },
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'Exception Handling', level: 85 },
        { name: 'Collections Framework', level: 85 },
        { name: 'Multi-Threading', level: 80 },
      ],
    },
    {
      title: 'Hibernate ORM',
      color: tokens.amber,
      skills: [
        { name: 'Hibernate Core', level: 85 },
        { name: 'Hibernate Mapping (XML & Annotations)', level: 80 },
        { name: 'Hibernate Query Language (HQL)', level: 80 },
        { name: 'Hibernate Transaction Management', level: 75 },
      ],
    },
    {
      title: 'Databases',
      color: tokens.amber,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'JDBC', level: 85 },
        { name: 'DBMS (Database Management Systems)', level: 80 },
      ],
    },
    {
      title: 'Spring Framework',
      color: tokens.amber,
      skills: [
        { name: 'Spring Boot & MVC', level: 85 },
        { name: 'Spring Data JPA', level: 80 },
        { name: 'Spring JDBC', level: 80 },
        { name: 'Spring Security & JWT', level: 75 },
        { name: 'Spring Cloud (Microservices)', level: 70 },
      ],
    },
    {
      title: 'Java EE',
      color: tokens.amber,
      skills: [
        { name: 'Servlet', level: 80 },
        { name: 'Apache Tomcat Server', level: 80 },
        { name: 'JSP (JavaServer Pages)', level: 75 },
        { name: 'JPA (Java Persistence API)', level: 75 },
      ],
    },
    {
      title: 'Web & APIs',
      color: tokens.amber,
      skills: [
        { name: 'RESTful API Design', level: 85 },
        { name: 'HTML / CSS', level: 70 },
        { name: 'JavaScript', level: 65 },
        { name: 'React.js', level: 55 },
      ],
    },
    {
      title: 'Version Control & Tools',
      color: tokens.amber,
      skills: [
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'Eclipse IDE', level: 80 },
        { name: 'NetBeans', level: 75 },
        { name: 'Docker', level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            width: '820px',
            height: '820px',
            top: '-400px',
            right: '-300px',
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
          maskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header - "My toolbox" in Amber */}
        <div className="text-center mb-6">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span style={{ color: tokens.amber }}>toolbox</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>Technologies I'm passionate about</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <p className="text-center max-w-2xl mx-auto mb-14" style={{ color: tokens.textSecondary }}>
          Here are the tools and technologies I work with daily to build production-ready
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl transition-all"
              style={{
                backgroundColor: tokens.panel,
                border: `1px solid ${tokens.panelBorder}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tokens.amber;
                e.currentTarget.style.boxShadow = `0 8px 32px -8px ${tokens.amberSoft}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.panelBorder;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                className="text-lg font-semibold mb-4 flex items-center gap-2.5"
                style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tokens.amber }} />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span style={{ color: tokens.textSecondary }}>{skill.name}</span>
                      <span style={{ color: tokens.amber, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full rounded-full h-1.5" style={{ backgroundColor: tokens.track }}>
                      <div
                        className="h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, backgroundColor: tokens.amber }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;