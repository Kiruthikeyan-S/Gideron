import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Database, Palette, Users } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Frameworks & Libraries':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Design Skills':
        return <Palette className="w-5 h-5 text-pink-400" />;
      default:
        return <Users className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-bold text-purple-400 mb-3 tracking-widest uppercase">
            <Cpu className="w-4 h-4" />
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-purple-400 font-serif-accent">Capabilities</span>
          </h2>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-3xl glass-card glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-3 rounded-2xl glass-card border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Animated Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-cyan-400 font-mono-code">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
