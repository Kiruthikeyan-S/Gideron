import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/generateResumePDF';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Logo & Intro */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
                <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center font-bold text-cyan-400">
                  KS
                </div>
              </div>
              <span className="font-extrabold text-xl text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={downloadResumePDF}
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#ui-ux" className="hover:text-cyan-400 transition-colors">UI/UX Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Specialization Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Specializations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Deep Learning & Computer Vision (YOLO)</li>
              <li>Full-Stack Frontend React Development</li>
              <li>Power BI Data Analytics & Dashboards</li>
              <li>User Experience & Wireframe Prototyping</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Designed and Developed by <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.name}</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-card border border-white/15 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer flex items-center gap-1.5 font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
