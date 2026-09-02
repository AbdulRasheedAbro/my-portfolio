import React, { useState, useEffect, useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
  FaChevronDown,
} from 'react-icons/fa';
import { SiSpring, SiMysql, SiDocker, SiApachemaven, SiPostman, SiGit } from 'react-icons/si';

/* ------------------------------------------------------------------ */
/*  Design tokens                                                      */
/*  A backend/API-flavoured palette instead of the generic indigo/     */
/*  cyan-on-black look: deep charcoal-navy, one warm amber accent      */
/*  (a quiet nod to Java/coffee) and one cool teal accent for data/    */
/*  server cues. Space Grotesk carries the display type, Inter carries */
/*  body copy, JetBrains Mono is reserved for anything "code-like".    */
/* ------------------------------------------------------------------ */

const tokens = {
  bg: '#0A0D12',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  amberSoft: 'rgba(232, 163, 61, 0.12)',
  teal: '#3FBFAD',
  tealSoft: 'rgba(63, 191, 173, 0.12)',
  ok: '#4ADE80',
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function useTypewriter(word, { typeSpeed = 48 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? word : '');
  const [done, setDone] = useState(prefersReducedMotion());
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    cancelledRef.current = false;
    async function run() {
      for (let c = 1; c <= word.length; c++) {
        if (cancelledRef.current) return;
        setText(word.slice(0, c));
        await sleep(typeSpeed);
      }
      if (!cancelledRef.current) setDone(true);
    }
    run();
    return () => {
      cancelledRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { text, done };
}

const socials = [
  { href: 'https://github.com/AbdulRasheedAbro', label: 'GitHub', Icon: FaGithub },
  { href: 'https://linkedin.com/in/AbdulRasheedAbro', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'mailto:abdulrasheedabro69@gmail.com', label: 'Email', Icon: FaEnvelope },
  { href: 'tel:+923343544882', label: 'Phone', Icon: FaPhone },
];

const stack = [
  { label: 'Java', Icon: null, code: '☕', color: '#F89820' },
  { label: 'Spring Boot', Icon: SiSpring, color: '#6DB33F' },
  { label: 'REST APIs', Icon: null, code: '{ }', color: tokens.teal },
  { label: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { label: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { label: 'Maven', Icon: SiApachemaven, color: '#C71A36' },
  { label: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { label: 'Git', Icon: SiGit, color: '#F05032' },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const { text: roleText, done: roleDone } = useTypewriter('Java Backend Developer');

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const fadeStyle = (delayMs) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0px)' : 'translateY(14px)',
    transition: `opacity 650ms ease ${delayMs}ms, transform 650ms ease ${delayMs}ms`,
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: tokens.bg, fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        @keyframes blink { 0%,45% { opacity: 1; } 50%,95% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes marquee { to { transform: translateX(-50%); } }

        .hero-cursor { animation: blink 1s step-end infinite; }
        .hero-float { animation: floatSlow 5s ease-in-out infinite; }
        .hero-pulse { animation: pulseDot 2.2s ease-in-out infinite; }
        .hero-marquee-track { animation: marquee 22s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hero-cursor, .hero-float, .hero-pulse, .hero-marquee-track { animation: none !important; }
        }
      `}</style>

      {/* Single restrained glow, not a cluster of aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            top: '-420px',
            right: '-320px',
            background: `radial-gradient(circle, ${tokens.amberSoft} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Faint schematic grid, referencing "structured system" rather than decoration */}
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

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          {/* Left: identity */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div style={fadeStyle(0)}>
              <span
                className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full mb-7"
                style={{
                  color: tokens.ok,
                  backgroundColor: 'rgba(74,222,128,0.08)',
                  border: '1px solid rgba(74,222,128,0.22)',
                }}
              >
                <span className="hero-pulse w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tokens.ok }} />
                Open to opportunities
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold mb-3 tracking-tight leading-[1.04]"
              style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif", ...fadeStyle(80) }}
            >
              Abdul Rasheed
            </h1>

            <div
              className="text-lg sm:text-xl mb-6 h-7 font-medium flex items-center justify-center lg:justify-start gap-0.5"
              style={{ color: tokens.amber, fontFamily: "'JetBrains Mono', monospace", ...fadeStyle(140) }}
            >
              <span>{roleText}</span>
              <span
                aria-hidden="true"
                className="hero-cursor inline-block w-[2px] h-5 ml-0.5"
                style={{ backgroundColor: tokens.amber, opacity: roleDone ? 0 : 1 }}
              />
            </div>

            <p
              className="max-w-lg mx-auto lg:mx-0 mb-9 text-base sm:text-lg leading-relaxed"
              style={{ color: tokens.textSecondary, ...fadeStyle(200) }}
            >
              Building robust APIs, microservices and scalable backend systems with the
              Spring ecosystem.
            </p>

            {/* Buttons: one clear primary action, two quiet secondary ones */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9"
              style={fadeStyle(280)}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{
                  backgroundColor: tokens.amber,
                  color: '#1A1206',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F0B75B'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = tokens.amber; }}
              >
                View projects
              </a>

              <button
                onClick={openResume}
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{
                  color: tokens.textPrimary,
                  backgroundColor: 'transparent',
                  border: `1px solid ${tokens.panelBorder}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = tokens.teal; e.currentTarget.style.color = tokens.teal; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.panelBorder; e.currentTarget.style.color = tokens.textPrimary; }}
              >
                <FaFileDownload size={13} /> View resume
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{
                  color: tokens.textPrimary,
                  backgroundColor: 'transparent',
                  border: `1px solid ${tokens.panelBorder}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = tokens.teal; e.currentTarget.style.color = tokens.teal; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.panelBorder; e.currentTarget.style.color = tokens.textPrimary; }}
              >
                Contact me
              </a>
            </div>

            {/* Social icons — filled panel background so they read clearly
                against the dark section, not just a faint 8%-opacity outline */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              style={fadeStyle(340)}
            >
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    color: tokens.textPrimary,
                    backgroundColor: tokens.panel,
                    border: `1px solid rgba(232,234,237,0.14)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = tokens.bg;
                    e.currentTarget.style.backgroundColor = tokens.teal;
                    e.currentTarget.style.borderColor = tokens.teal;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = tokens.textPrimary;
                    e.currentTarget.style.backgroundColor = tokens.panel;
                    e.currentTarget.style.borderColor = 'rgba(232,234,237,0.14)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
              <span
                className="flex items-center gap-1.5 text-sm font-medium ml-1 px-3 py-1.5 rounded-full"
                style={{
                  color: tokens.textPrimary,
                  backgroundColor: tokens.panel,
                  border: '1px solid rgba(232,234,237,0.14)',
                }}
              >
                <FaMapMarkerAlt size={12} style={{ color: tokens.amber }} /> Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Right: signature element — a small terminal card standing in for
              the photo's context, built from the subject's own material
              (an API response) instead of a floating badge cluster. */}
          <div className="flex flex-col items-center lg:items-end gap-5 order-1 lg:order-2">
            <div
              className="relative w-56 h-56 sm:w-60 sm:h-60"
              style={fadeStyle(160)}
            >
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${tokens.panelBorder}`, backgroundColor: tokens.panel }}
              >
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Abdul Rasheed"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-semibold text-5xl"
                    style={{ color: tokens.amber, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    AR
                  </div>
                )}
              </div>
              <div
                className="hero-float absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  color: tokens.ok,
                  backgroundColor: tokens.panel,
                  border: `1px solid ${tokens.panelBorder}`,
                }}
              >
                <span className="hero-pulse w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tokens.ok }} />
                Available now
              </div>
            </div>

            {/* Terminal card: the "characteristic thing" for a backend dev */}
            <div
              className="w-full max-w-xs rounded-xl overflow-hidden"
              style={{ border: `1px solid ${tokens.panelBorder}`, backgroundColor: tokens.panel, ...fadeStyle(240) }}
            >
              <div
                className="flex items-center gap-1.5 px-4 py-2.5"
                style={{ borderBottom: `1px solid ${tokens.panelBorder}` }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5B6270' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5B6270' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5B6270' }} />
                <span
                  className="ml-2 text-[11px]"
                  style={{ color: tokens.textMuted, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  api-status.sh
                </span>
              </div>
              <div className="px-4 py-3.5 text-[12.5px] leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <div style={{ color: tokens.textMuted }}>$ curl /api/v1/health</div>
                <div style={{ color: tokens.textSecondary }}>
                  {'{'} <span style={{ color: tokens.teal }}>"status"</span>:{' '}
                  <span style={{ color: tokens.ok }}>"UP"</span>,
                </div>
                <div style={{ color: tokens.textSecondary }}>
                  &nbsp;&nbsp;<span style={{ color: tokens.teal }}>"service"</span>: "spring-boot",
                </div>
                <div style={{ color: tokens.textSecondary }}>
                  &nbsp;&nbsp;<span style={{ color: tokens.teal }}>"latency"</span>:{' '}
                  <span style={{ color: tokens.amber }}>12ms</span> {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div
          className="mt-16 overflow-hidden"
          style={{
            ...fadeStyle(400),
            maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="hero-marquee-track flex items-center gap-3 w-max">
            {[...stack, ...stack].map(({ label, Icon, code, color }, i) => (
              <span
                key={`${label}-${i}`}
                className="inline-flex items-center gap-2 text-xs font-medium pl-2 pr-3.5 py-1.5 rounded-full shrink-0"
                style={{
                  color: tokens.textPrimary,
                  backgroundColor: tokens.panel,
                  border: '1px solid rgba(232,234,237,0.14)',
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[13px]"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  {Icon ? <Icon size={13} /> : code}
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-float hidden lg:flex justify-center mt-12" style={{ color: tokens.textMuted, ...fadeStyle(500) }}>
          <FaChevronDown size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
