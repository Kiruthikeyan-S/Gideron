import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, BookOpen, ExternalLink, Code2, Activity } from 'lucide-react';

interface GitHubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/Kiruthikeyan-S'),
          fetch('https://api.github.com/users/Kiruthikeyan-S/repos?sort=updated&per_page=6'),
        ]);

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-bold text-purple-400 mb-3 tracking-widest uppercase">
            <Github className="w-4 h-4" />
            Live GitHub Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Open Source & <span className="text-purple-400 font-serif-accent">Contributions</span>
          </h2>
        </div>

        {/* Profile Card & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Live GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-8 rounded-3xl glass-card border border-white/15 text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profile?.avatar_url || '/profile.jpg'}
                  alt="Kiruthikeyan S GitHub Avatar"
                  className="w-16 h-16 rounded-2xl border-2 border-purple-400/50 shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{profile?.name || 'KIRUTHIKEYAN S'}</h3>
                  <a
                    href={profile?.html_url || 'https://github.com/Kiruthikeyan-S'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-purple-400 hover:underline font-mono-code inline-flex items-center gap-1"
                  >
                    @{profile?.login || 'Kiruthikeyan-S'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {profile?.bio || 'Building Intelligent AI Solutions and Modern Digital Experiences.'}
              </p>

              {/* GitHub Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center pt-4 border-t border-white/10">
                <div className="p-3 rounded-2xl glass-card">
                  <div className="text-lg font-bold text-white font-mono-code">
                    {profile?.public_repos || '25+'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Repos</div>
                </div>
                <div className="p-3 rounded-2xl glass-card">
                  <div className="text-lg font-bold text-cyan-400 font-mono-code">
                    {profile?.followers || '15+'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Followers</div>
                </div>
                <div className="p-3 rounded-2xl glass-card">
                  <div className="text-lg font-bold text-amber-400 font-mono-code">
                    {profile?.following || '10+'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Following</div>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Kiruthikeyan-S"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 transition-all"
            >
              <Github className="w-4 h-4" />
              Visit Full GitHub Profile
            </a>
          </motion.div>

          {/* Right Column: Live Contribution Activity Visual Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 p-8 rounded-3xl glass-card border border-white/15 text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
                  <Activity className="w-4 h-4" />
                  GitHub Contribution Activity Graph
                </div>
                <span className="px-3 py-1 rounded-full glass-card text-[11px] font-mono-code text-emerald-400 border border-emerald-400/30">
                  ● Live Data
                </span>
              </div>

              {/* GitHub Activity Embed Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#090b10] p-4 flex items-center justify-center">
                <img
                  src="https://ghchart.rshah.org/06b6d4/Kiruthikeyan-S"
                  alt="Kiruthikeyan S GitHub Contributions Heatmap"
                  className="w-full h-auto filter invert-0 contrast-125"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-2xl glass-card border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Primary Tech</div>
                  <div className="text-sm font-bold text-cyan-400 mt-1 flex items-center gap-1">
                    <Code2 className="w-4 h-4" /> Python / JS
                  </div>
                </div>
                <div className="p-4 rounded-2xl glass-card border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Commit Frequency</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Daily Active</div>
                </div>
                <div className="p-4 rounded-2xl glass-card border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">AI & ML Repos</div>
                  <div className="text-sm font-bold text-amber-400 mt-1">12+ Projects</div>
                </div>
                <div className="p-4 rounded-2xl glass-card border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">License</div>
                  <div className="text-sm font-bold text-purple-400 mt-1">MIT Open Source</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Top Repositories Grid */}
        <h3 className="text-xl font-bold text-white text-left mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-400" />
          Featured Open Source Repositories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 rounded-3xl glass-card animate-pulse" />
            ))
          ) : (
            repos.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl glass-card glass-card-hover border border-white/10 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white truncate group-hover:text-purple-300">
                      {repo.name}
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg glass-card text-slate-400 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-4">
                    {repo.description || 'Public GitHub repository built by Kiruthikeyan S.'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pt-4 border-t border-white/10">
                  <span className="text-cyan-400 font-mono-code">
                    {repo.language || 'Python'}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
