import React from 'react';
import { FaGithub } from 'react-icons/fa';

/* Same tokens as Hero.jsx / Navbar.jsx / About.jsx / Skills.jsx / Experience.jsx / Certifications.jsx */
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

const Projects = () => {
  const projects = [
    {
      title: 'AI Auto Apply Agent',
      description: 'AI-powered automation agent that intelligently applies to LinkedIn job postings based on user profiles and job criteria.',
      tech: ['Java', 'AI', 'Automation', 'SDLC'],
      github: 'https://github.com/AbdulRasheedAbro/AI-Auto-Apply-Agent',
      icon: '🤖',
    },
    {
      title: 'BankForge-Hibernate',
      description: 'Banking management system built with Hibernate ORM and MySQL for managing customers, accounts, deposits, and fund transfers.',
      tech: ['Java', 'Hibernate', 'MySQL', 'ORM'],
      github: 'https://github.com/AbdulRasheedAbro/BankForge-Hibernate',
      icon: '🏦',
    },
    {
      title: 'Banking System JDBC',
      description: 'Console-based Banking Management System with Java and JDBC for MySQL database integration.',
      tech: ['Java', 'JDBC', 'MySQL', 'Console'],
      github: 'https://github.com/AbdulRasheedAbro/Banking-System-JDBC',
      icon: '💳',
    },
    {
      title: 'Unicore University Management',
      description: 'University Management System with Hibernate, JPA, and MySQL for managing faculties, departments, and students.',
      tech: ['Java', 'Hibernate', 'JPA', 'MySQL'],
      github: 'https://github.com/AbdulRasheedAbro/unicore-university-management-system',
      icon: '🎓',
    },
    {
      title: 'Edusync Student Management',
      description: 'Student and course management system with CRUD operations, HQL queries, and many-to-many relationships.',
      tech: ['Java', 'Hibernate', 'MySQL', 'HQL'],
      github: 'https://github.com/AbdulRasheedAbro/edusync-student-course-management',
      icon: '📚',
    },
    {
      title: 'Business Management System',
      description: 'Desktop application for managing customers, products, inventory, and transactions using Java Swing and JDBC.',
      tech: ['Java', 'Swing', 'JDBC', 'Maven'],
      github: 'https://github.com/AbdulRasheedAbro/Business-Management-System',
      icon: '💼',
    },
  ];

  return (
    <section
      id="projects"
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

      {/* Glow effect - Amber */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '820px',
            height: '820px',
            top: '-380px',
            left: '-300px',
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
          maskImage: 'radial-gradient(ellipse at 30% 30%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 30% 30%, black 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight"
            style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span style={{ color: tokens.amber }}>projects</span>
          </h2>
          <p style={{ color: tokens.textSecondary }}>Building solutions, one commit at a time</p>
          <div className="w-12 h-[3px] mx-auto mt-4 rounded-full" style={{ backgroundColor: tokens.amber }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl transition-all flex flex-col"
              style={{
                backgroundColor: tokens.panel,
                border: `1px solid ${tokens.panelBorder}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tokens.amber;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 32px -8px ${tokens.amberSoft}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.panelBorder;
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: tokens.amberSoft }}
              >
                {project.icon}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: tokens.textSecondary }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ color: tokens.amber, backgroundColor: tokens.amberSoft }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: tokens.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = tokens.amber;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = tokens.textSecondary;
                }}
              >
                <FaGithub size={14} /> View code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;