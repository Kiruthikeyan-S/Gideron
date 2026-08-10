import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, BookOpen, X, Search, CheckCircle2, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Computer Vision', 'AI / ML', 'Full-Stack Web', 'Data Analytics'];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-3 tracking-widest uppercase">
            <FolderGit2 className="w-4 h-4" />
            Software Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-cyan-400 font-serif-accent">Projects</span>
          </h2>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl glass-card border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'glass-card text-slate-300 hover:text-white hover:border-cyan-400/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-3xl glass-card glass-card-hover border border-white/15 overflow-hidden flex flex-col justify-between text-left"
            >
              {/* Image Showcase */}
              <div className="relative h-56 overflow-hidden bg-[#090b10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-[11px] font-bold text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md glass-card text-[11px] font-mono-code font-semibold text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl glass-card text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>

                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex-1 py-2 px-3 rounded-xl glass-card text-xs font-bold text-amber-400 border border-amber-400/30 hover:bg-amber-400/10 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card border border-cyan-500/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                Technical Overview
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {selectedCaseStudy.title}
              </h2>

              <img
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 border border-white/10"
              />

              <h4 className="text-lg font-bold text-white mb-2">Architecture & Features</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedCaseStudy.fullDetails || selectedCaseStudy.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={selectedCaseStudy.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-cyan-500 text-black flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Repository
                </a>
              </div>

              <div className="flex justify-end border-t border-white/10 pt-4">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2 rounded-xl glass-card text-xs font-bold text-slate-300 hover:text-white"
                >
                  Close Modal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
