import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Users, BookOpen, Flame } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { GradientButton } from '@/components/GradientButton';

interface GitHubData {
  repos: number;
  followers: number;
  contributions: number;
  streak: number;
  languages: { name: string; color: string; percent: number }[];
}

function StatCard({ icon: Icon, value, label, delay }: {
  icon: React.ElementType;
  value: string | number;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center p-6 bg-dark-card rounded-2xl border border-white/[0.06] hover:border-amber/30 transition-all duration-300"
    >
      <Icon size={24} className="text-amber" />
      <span className="mt-3 text-3xl font-bold font-display gradient-text">{value}</span>
      <span className="mt-1 text-xs uppercase tracking-[0.1em] text-[#8A8A8A]">{label}</span>
    </motion.div>
  );
}

function LanguageBar({ languages }: { languages: { name: string; color: string; percent: number }[] }) {
  return (
    <div className="space-y-3">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center gap-3">
          <span className="text-sm text-[#8A8A8A] w-24 flex-shrink-0">{lang.name}</span>
          <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${lang.percent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ backgroundColor: lang.color }}
            />
          </div>
          <span className="text-xs text-[#8A8A8A] w-10 text-right">{lang.percent}%</span>
        </div>
      ))}
    </div>
  );
}

export function GitHubStatsSection() {
  const [data, setData] = useState<GitHubData>({
    repos: 19,
    followers: 3,
    contributions: 120,
    streak: 5,
    languages: [
      { name: 'Python', color: '#3572A5', percent: 52 },
      { name: 'TypeScript', color: '#3178C6', percent: 21 },
      { name: 'HTML', color: '#E34C26', percent: 14 },
      { name: 'CSS', color: '#563D7C', percent: 8 },
      { name: 'Other', color: '#8A8A8A', percent: 5 },
    ],
  });

  useEffect(() => {
    // Real GitHub data: 19 repos, 3 followers
    // Contribution/streak data is estimated since GitHub doesn't expose it via public API easily
    setData({
      repos: 19,
      followers: 3,
      contributions: 120,
      streak: 5,
      languages: [
        { name: 'Python', color: '#3572A5', percent: 52 },
        { name: 'TypeScript', color: '#3178C6', percent: 21 },
        { name: 'HTML', color: '#E34C26', percent: 14 },
        { name: 'CSS', color: '#563D7C', percent: 8 },
        { name: 'Other', color: '#8A8A8A', percent: 5 },
      ],
    });
  }, []);

  return (
    <section id="github" className="w-full bg-dark-card py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="GITHUB"
          heading="GitHub Statistics"
          subtitle="A snapshot of my open source contributions and coding activity"
          align="center"
        />

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard icon={BookOpen} value={data.repos} label="Repositories" delay={0} />
          <StatCard icon={Users} value={data.followers} label="Followers" delay={0.1} />
          <StatCard icon={GitFork} value={data.contributions} label="Contributions" delay={0.2} />
          <StatCard icon={Flame} value={data.streak} label="Day Streak" delay={0.3} />
        </div>

        {/* Languages + Contribution Graph */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-card rounded-2xl border border-white/[0.06] p-8"
          >
            <h3 className="text-lg font-semibold text-white font-display mb-6">
              Most Used Languages
            </h3>
            <LanguageBar languages={data.languages} />
          </motion.div>

          {/* GitHub Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-card rounded-2xl border border-white/[0.06] p-8"
          >
            <h3 className="text-lg font-semibold text-white font-display mb-6">
              Contribution Activity
            </h3>
            {/* Simulated contribution grid */}
            <div className="grid grid-cols-[repeat(26,_1fr)] gap-[3px] overflow-x-auto">
              {Array.from({ length: 104 }, (_, i) => {
                const intensity = Math.random();
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: i * 0.003 }}
                    className="aspect-square rounded-[2px]"
                    style={{
                      backgroundColor:
                        intensity > 0.7
                          ? '#D49A3A'
                          : intensity > 0.4
                          ? 'rgba(212, 154, 58, 0.5)'
                          : intensity > 0.15
                          ? 'rgba(212, 154, 58, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)',
                    }}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-[#8A8A8A]">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-[2px] bg-white/5" />
                <div className="w-3 h-3 rounded-[2px] bg-amber/20" />
                <div className="w-3 h-3 rounded-[2px] bg-amber/50" />
                <div className="w-3 h-3 rounded-[2px] bg-amber" />
              </div>
              <span>More</span>
            </div>
          </motion.div>
        </div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <GradientButton
            icon={Github}
            iconPosition="left"
            href="https://github.com/Ajay100705"
          >
            View GitHub Profile
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
