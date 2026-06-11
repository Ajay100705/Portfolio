import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Layers, Container, Cloud, Workflow } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import type { LucideIcon } from 'lucide-react';

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  achievements: string[];
}

const timelineEntries: TimelineEntry[] = [
  {
    year: '2022',
    title: 'Python Development',
    icon: Code2,
    description:
      'Started with Python fundamentals and quickly moved into building real projects.',
    achievements: [
      'Mastered Python OOP and data structures',
      'Built CLI tools and automation scripts',
      'Completed intensive Python bootcamp',
    ],
  },
  {
    year: '2023',
    title: 'Django Development',
    icon: Server,
    description:
      'Transitioned into backend development with Django and Django REST Framework.',
    achievements: [
      'Built REST APIs with Django REST Framework',
      'Implemented JWT authentication systems',
      'Integrated PostgreSQL databases',
    ],
  },
  {
    year: '2023',
    title: 'Full Stack Projects',
    icon: Layers,
    description:
      'Expanded into full-stack development by combining Django backends with React frontends.',
    achievements: [
      'Developed School Management System',
      'Built Note Sharing Platform with Cloudinary',
      'Learned React hooks and component patterns',
    ],
  },
  {
    year: '2024',
    title: 'Docker & Linux',
    icon: Container,
    description:
      'Ventured into DevOps fundamentals with containerization and system administration.',
    achievements: [
      'Containerized Django apps with Docker',
      'Learned Docker Compose for multi-container setups',
      'Gained Linux shell scripting and server management skills',
    ],
  },
  {
    year: '2024',
    title: 'AWS Cloud Learning',
    icon: Cloud,
    description:
      'Started hands-on cloud computing journey with Amazon Web Services.',
    achievements: [
      'Launched EC2 instances and deployed applications',
      'Managed S3 buckets for file storage',
      'Learned IAM roles and VPC networking',
    ],
  },
  {
    year: '2025',
    title: 'DevOps Practices',
    icon: Workflow,
    description:
      'Bringing it all together with CI/CD pipelines and infrastructure automation.',
    achievements: [
      'Set up GitHub Actions for automated deployments',
      'Exploring Infrastructure as Code concepts',
      'Applying monitoring and logging best practices',
    ],
  },
];

function TimelineNode({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-start md:items-center w-full mb-8 last:mb-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Year label - desktop */}
      <div
        className={`hidden md:block w-[calc(50%-40px)] ${
          isLeft ? 'text-right pr-0' : 'text-left pl-0'
        }`}
      >
        <span className="text-xs text-amber font-medium tracking-wide">
          {entry.year}
        </span>
      </div>

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full gradient-bg border-[3px] border-[#0A0A0A] flex items-center justify-center"
        style={{ boxShadow: '0 0 16px rgba(212,154,58,0.35)' }}
      >
        <entry.icon size={16} className="text-white" />
      </motion.div>

      {/* Card */}
      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
          isLeft ? 'md:pl-0 md:ml-auto' : 'md:pr-0 md:mr-auto'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-dark-card rounded-2xl border border-white/[0.06] p-6 md:p-7 hover:border-amber/20 transition-all duration-300"
        >
          <span className="md:hidden text-xs text-amber font-medium tracking-wide">
            {entry.year}
          </span>
          <div className="flex items-center gap-2 mt-1 md:mt-0">
            <h3 className="text-xl font-semibold text-white font-display">
              {entry.title}
            </h3>
          </div>
          <p className="mt-2 text-sm text-[#8A8A8A] leading-relaxed">
            {entry.description}
          </p>
          <ul className="mt-3 space-y-1.5">
            {entry.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                <span className="text-xs text-[#A0A0A0] leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="w-full bg-[#0A0A0A] py-16 md:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <SectionHeader
          label="EXPERIENCE"
          heading="Professional Development Journey"
          subtitle="Key milestones and hands-on achievements in my technical growth"
          align="center"
        />

        {/* Timeline */}
        <div ref={lineRef} className="relative mt-16">
          {/* Central Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full gradient-bg origin-top"
            />
          </div>

          {/* Central Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full gradient-bg origin-top"
            />
          </div>

          {/* Nodes */}
          {timelineEntries.map((entry, i) => (
            <TimelineNode key={entry.title} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
