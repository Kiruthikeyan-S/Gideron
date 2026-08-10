import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Brain, Cpu, Eye, Code, Terminal } from 'lucide-react';
import { PERSONAL_INFO, ROTATING_TITLES } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/generateResumePDF';

export const Hero: React.FC = () => {
  // Typing animation state
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax tilt state for avatar
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROTATING_TITLES[titleIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 90);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setParallax({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-noise"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-ambient-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-ambient-2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-slate-400 font-medium tracking-wide">
            Hello, I'm
          </p>

          {/* Large Name */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mt-1 mb-3 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Typing Text */}
          <div className="h-12 sm:h-14 flex items-center mb-8">
            <span className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-amber-400 to-purple-400">
              {currentText}
            </span>
            <span className="inline-block w-1 h-7 sm:h-8 ml-1 bg-cyan-400 animate-pulse" />
          </div>

          {/* Three Modern Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* 1. View My Projects */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-black shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* 2. Download Resume */}
            <button
              onClick={downloadResumePDF}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm glass-card text-white border border-white/20 hover:border-cyan-400 hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>

            {/* 3. Contact Me */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm glass-card text-slate-300 hover:text-amber-400 border border-white/10 hover:border-amber-400/50 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Visual & Parallax Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div
            style={{
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
            }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center transition-transform duration-100 ease-out"
          >
            {/* Animated Gradient Outer Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 blur-md animate-spin duration-[20s] opacity-70" />
            <div className="absolute -inset-4 rounded-full border border-cyan-500/30 animate-ping opacity-20 pointer-events-none" />

            {/* Glowing Photo Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-[#090b10] border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 overflow-hidden group">
              <img
                src="/profile.jpg"
                alt="KIRUTHIKEYAN S"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback styled avatar if image loading issue
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#090b10]/60 via-transparent to-transparent" />
            </div>

            {/* Floating AI Icons & Tech Badges */}
            <div className="absolute -top-4 -left-4 p-3 rounded-2xl glass-card border border-cyan-500/40 text-cyan-400 shadow-xl animate-bounce">
              <Brain className="w-6 h-6" />
            </div>

            <div className="absolute top-1/4 -right-6 p-3 rounded-2xl glass-card border border-purple-500/40 text-purple-400 shadow-xl animate-pulse">
              <Cpu className="w-6 h-6" />
            </div>

            <div className="absolute -bottom-4 left-10 p-3 rounded-2xl glass-card border border-amber-500/40 text-amber-400 shadow-xl">
              <Eye className="w-6 h-6" />
            </div>

            <div className="absolute bottom-12 -right-4 p-3 rounded-2xl glass-card border border-emerald-500/40 text-emerald-400 shadow-xl">
              <Code className="w-6 h-6" />
            </div>

            {/* Floating Code Pills */}
            <div className="absolute top-6 left-12 px-3 py-1 rounded-full glass-card text-xs font-mono-code text-cyan-300 border border-cyan-500/30">
              &lt;AI / ML&gt;
            </div>
            <div className="absolute bottom-6 right-16 px-3 py-1 rounded-full glass-card text-xs font-mono-code text-purple-300 border border-purple-500/30">
              &#123; UI / UX &#125;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
