import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-bold text-blue-400 mb-3 tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" />
            Verified Qualifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry <span className="text-blue-400 font-serif-accent">Certifications</span>
          </h2>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl glass-card glass-card-hover border border-white/10 flex items-start gap-4 text-left"
            >
              <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shrink-0">
                <Award className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono-code text-cyan-400 font-semibold px-2 py-0.5 rounded-md glass-card border border-cyan-500/20">
                    {cert.date}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-medium">{cert.issuer}</p>

                <div className="inline-flex items-center gap-1 mt-3 text-[11px] font-semibold text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
