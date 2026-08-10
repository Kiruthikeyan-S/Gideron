import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ExternalLink, Eye, X, Figma, Sparkles } from 'lucide-react';
import { UI_UX_PROJECTS } from '../data/portfolioData';
import type { UIDesign } from '../data/portfolioData';

export const DesignPortfolio: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<UIDesign | null>(null);

  return (
    <section id="ui-ux" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-pink-500/30 text-xs font-bold text-pink-400 mb-3 tracking-widest uppercase">
            <Palette className="w-4 h-4" />
            Product Design Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            UI/UX Design <span className="text-pink-400 font-serif-accent">Portfolio</span>
          </h2>
        </div>

        {/* Gallery Grid Layout (9 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UI_UX_PROJECTS.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl glass-card glass-card-hover border border-white/10 overflow-hidden flex flex-col justify-between text-left"
            >
              {/* Thumbnail with Hover Zoom */}
              <div className="relative h-56 overflow-hidden bg-[#090b10]">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-xs font-bold text-pink-300 border border-pink-500/30 backdrop-blur-md">
                  {design.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {design.description}
                  </p>
                </div>

                {/* Buttons: View Prototype & Figma */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedDesign(design)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-md shadow-pink-500/20 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Prototype
                  </button>

                  <a
                    href={design.figmaUrl || 'https://figma.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl glass-card text-xs font-bold text-slate-200 hover:text-white hover:border-pink-400/40 transition-all cursor-pointer"
                  >
                    <Figma className="w-3.5 h-3.5 text-pink-400" />
                    Figma
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Prototype Viewer Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl glass-card border border-pink-500/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Figma Prototype Preview
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {selectedDesign.title}
              </h2>
              <p className="text-slate-300 text-sm mb-6">{selectedDesign.description}</p>

              <div className="relative rounded-2xl overflow-hidden border border-white/15 h-[60vh] bg-[#090b10] flex items-center justify-center">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <a
                    href="https://figma.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl font-bold bg-pink-500 text-white flex items-center gap-2 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform"
                  >
                    <Figma className="w-5 h-5" />
                    Open Interactive Prototype in Figma
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex justify-end pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="px-6 py-2 rounded-xl glass-card text-xs font-bold text-slate-300 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
