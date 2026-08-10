import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-500/30 text-xs font-bold text-amber-400 mb-3 tracking-widest uppercase">
            <Briefcase className="w-4 h-4" />
            Industry Internships
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="text-amber-400 font-serif-accent">Experience</span>
          </h2>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Indicator Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-6 h-6 rounded-full bg-[#090b10] border-4 border-amber-400 shadow-lg shadow-amber-500/50 transform -translate-x-1/2 z-20 hidden sm:block" />

                  {/* Card Container */}
                  <div className="w-full sm:w-[46%] p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 text-left">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-bold text-amber-400 border border-amber-400/30">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
                        <Building2 className="w-3.5 h-3.5 text-purple-400" />
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {exp.role}
                    </h3>

                    {/* Description Bullet points */}
                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                      {exp.description.map((item, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {exp.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono-code font-semibold text-cyan-300 border border-white/10"
                        >
                          #{sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
