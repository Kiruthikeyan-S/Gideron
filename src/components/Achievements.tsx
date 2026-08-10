import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, CheckCircle, Code, GitFork, Layout, Medal, Flame } from 'lucide-react';
import { ACHIEVEMENTS, ACTIVITIES } from '../data/portfolioData';

interface CounterProps {
  target: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono-code">
      {count}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 1:
        return <CheckCircle className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <Code className="w-6 h-6 text-purple-400" />;
      case 3:
        return <GitFork className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layout className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-500/30 text-xs font-bold text-amber-400 mb-3 tracking-widest uppercase">
            <Trophy className="w-4 h-4" />
            Milestones & Hackathons
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-amber-400 font-serif-accent">Activities</span>
          </h2>
        </div>

        {/* Hackathon & Expo Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ACTIVITIES.map((act, idx) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-amber-500/30 text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl glass-card border border-amber-400/40 text-amber-400">
                  {idx === 0 ? <Medal className="w-6 h-6" /> : <Flame className="w-6 h-6" />}
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {act.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {act.title}
              </h3>
              <p className="text-xs font-bold text-cyan-400 mb-3">{act.organization}</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {act.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <div className="p-3 rounded-2xl glass-card border border-white/15 mb-4">
                {getIcon(idx)}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                <Counter target={item.value} suffix={item.suffix} />
              </div>

              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
