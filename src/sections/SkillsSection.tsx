import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Wrench,
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate';
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Django', level: 'Advanced' },
      { name: 'Django REST Framework', level: 'Advanced' },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Linux', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'AWS', level: 'Intermediate' },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'SQLite', level: 'Intermediate' },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    skills: [
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'JSON', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-dark-card rounded-2xl border border-white/[0.06] p-8 transition-all duration-300 hover:border-white/[0.12] hover:shadow-card-hover"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <category.icon
            size={28}
            className="gradient-text"
            style={{ strokeWidth: 1.5 }}
          />
        </div>
        <h3 className="text-xl font-semibold text-white font-display">
          {category.title}
        </h3>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] my-5" />

      {/* Skills List */}
      <div className="space-y-3">
        {category.skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between">
            <span className="text-sm text-white">{skill.name}</span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-pill font-medium ${
                skill.level === 'Advanced'
                  ? 'text-amber bg-amber/15'
                  : 'text-[#8A8A8A] bg-white/[0.04]'
              }`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-[#0A0A0A] py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="SKILLS"
          heading="My Technical Skills"
          subtitle="Technologies and tools I work with to build scalable applications"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
