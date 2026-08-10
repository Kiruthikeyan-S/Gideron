import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 bg-[#06070a] flex flex-col items-center justify-center text-center p-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 p-[2px] mb-6 shadow-2xl animate-bounce">
            <div className="w-full h-full bg-[#090b10] rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-cyan-400">
              KS
            </div>
          </div>

          <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-2">
            KIRUTHIKEYAN S
          </h2>
          <p className="text-xs text-slate-400 font-mono-code mb-6">
            Loading Intelligent AI Portfolio...
          </p>

          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 rounded-full transition-all duration-75"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
