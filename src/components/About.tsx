import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { PERSONAL_INFO, INTERESTS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-3 tracking-widest uppercase">
            <UserCheck className="w-4 h-4" />
            Background & Passion
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-cyan-400 font-serif-accent">Me</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Decorative Backdrop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Animated Glow Border Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 blur-lg opacity-40 animate-pulse" />

              <div className="relative rounded-3xl glass-card border border-white/15 p-4 overflow-hidden shadow-2xl">
                <img
                  src="/about-portrait.jpg"
                  alt="KIRUTHIKEYAN S Portrait"
                  className="w-full h-96 object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-cyan-400/40 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">B.Tech AI & Data Science</h4>
                      <p className="text-xs text-slate-300">Velammal Engineering College (2022–2026)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography, Education & Interest Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Building Intelligent AI Solutions & Digital Experiences
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* Education Card */}
            <div className="p-6 rounded-2xl glass-card glass-card-hover border-l-4 border-l-cyan-400 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
                    <Award className="w-4 h-4" />
                    Formal Education
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {PERSONAL_INFO.education.degree} in {PERSONAL_INFO.education.field}
                  </h4>
                  <p className="text-slate-300 text-sm mt-1">{PERSONAL_INFO.education.college}</p>
                </div>
                <span className="px-3 py-1 rounded-full glass-card text-xs font-bold text-amber-400 border border-amber-400/30">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
            </div>

            {/* Animated Interest Cards */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Key Focus & Interests
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {INTERESTS.map((interest, idx) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-xs font-semibold text-slate-200 transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
