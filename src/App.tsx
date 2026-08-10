import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorLens } from './components/CursorLens';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { DesignPortfolio } from './components/DesignPortfolio';
import { Services } from './components/Services';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-black">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Refraction Glass Lens Magnifier */}
      <CursorLens />

      {/* Dynamic AI Neural Network Background Canvas */}
      <ParticleBackground />

      {/* Sticky Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <DesignPortfolio />
        <Services />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
