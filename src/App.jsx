import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <footer className="bg-[#0a0a0f] py-8 text-center border-t border-[#2d2d3f]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abdul Rasheed.
            <span className="text-gray-600"> • </span>
            Built with <span className="text-purple-400">❤️</span> and Spring Boot
          </p>
          <p className="text-gray-600 text-xs mt-1">
            "Always learning, always building."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;