import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Code,
  Brain,
  Cpu,
  BarChart3,
  Database,
  Eye,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-purple-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-yellow-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-rose-400" />;
      default:
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-3 tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            Core Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-emerald-400 font-serif-accent">Services</span>
          </h2>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl glass-card border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-emerald-400">
                <span>Explore Solution</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
