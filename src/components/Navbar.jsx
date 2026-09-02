import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFileDownload, FaTimesCircle } from 'react-icons/fa';

/* Same tokens as Hero.jsx — keep both files in sync if you change these. */
const tokens = {
  bg: '#0A0D12',
  bgScrolled: 'rgba(10, 13, 18, 0.92)',
  panel: '#11151C',
  panelBorder: 'rgba(232, 234, 237, 0.08)',
  textPrimary: '#EDEFF2',
  textSecondary: '#8E96A3',
  textMuted: '#5B6270',
  amber: '#E8A33D',
  teal: '#3FBFAD',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [resumeExists, setResumeExists] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((response) => setResumeExists(response.ok))
      .catch(() => setResumeExists(false));
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const openResume = () => setShowResume(true);
  const closeResume = () => setShowResume(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? tokens.bgScrolled : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.panelBorder}` : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-xl font-semibold cursor-pointer tracking-tight"
              style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Abdul <span style={{ color: tokens.amber }}>Rasheed</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className="transition-colors font-medium text-sm"
                  style={{ color: tokens.textSecondary, fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = tokens.amber; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = tokens.textSecondary; }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={openResume}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ backgroundColor: tokens.amber, color: '#1A1206' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F0B75B'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = tokens.amber; }}
              >
                <FaFileDownload size={12} /> Resume
              </button>
            </div>

            <button
              className="md:hidden"
              style={{ color: tokens.textSecondary }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="md:hidden"
            style={{ backgroundColor: tokens.bgScrolled, borderTop: `1px solid ${tokens.panelBorder}` }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className="block px-3 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  style={{ color: tokens.textSecondary }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => { e.currentTarget.style.color = tokens.amber; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = tokens.textSecondary; }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); openResume(); }}
                className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: tokens.amber, color: '#1A1206' }}
              >
                <FaFileDownload size={12} /> View resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Resume modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(4,5,7,0.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
          onClick={closeResume}
        >
          <div
            className="relative rounded-2xl w-full max-w-4xl h-[90vh]"
            style={{ backgroundColor: tokens.panel, border: `1px solid ${tokens.panelBorder}`, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between p-4"
              style={{ borderBottom: `1px solid ${tokens.panelBorder}` }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: tokens.textPrimary, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Resume
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ backgroundColor: tokens.amber, color: '#1A1206' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F0B75B'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = tokens.amber; }}
                >
                  <FaFileDownload size={13} /> Download PDF
                </a>
                <button
                  onClick={closeResume}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: tokens.textSecondary }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = tokens.textPrimary; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = tokens.textSecondary; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  aria-label="Close resume"
                >
                  <FaTimesCircle size={22} />
                </button>
              </div>
            </div>
            <div className="p-4 h-[calc(90vh-72px)]">
              {resumeExists ? (
                <iframe src="/resume.pdf" className="w-full h-full rounded-lg" title="Resume" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(232,163,61,0.1)', border: `1px solid ${tokens.panelBorder}` }}
                  >
                    <FaFileDownload size={22} style={{ color: tokens.amber }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.textPrimary }}>
                    Resume not found
                  </h3>
                  <p className="mb-6" style={{ color: tokens.textSecondary }}>
                    Add your resume as{' '}
                    <code
                      className="px-2 py-1 rounded"
                      style={{ backgroundColor: 'rgba(232,163,61,0.1)', color: tokens.amber }}
                    >
                      resume.pdf
                    </code>{' '}
                    in the public folder.
                  </p>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all"
                    style={{ backgroundColor: tokens.amber, color: '#1A1206' }}
                  >
                    <FaFileDownload size={13} /> Download resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;