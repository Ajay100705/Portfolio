import { motion } from 'framer-motion';
import { Terminal, Github, ExternalLink, Check } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  hasLiveDemo: boolean;
  highlights: string[];
}

const projects: Project[] = [
  {
    name: 'School Management System',
    description:
      'A comprehensive school management platform with role-based authentication for students, teachers, and administrators. Features student enrollment, attendance tracking, grade management, and timetable scheduling with a clean, intuitive interface.',
    techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'REST API', 'JWT Auth'],
    githubUrl: 'https://github.com/Ajay100705',
    hasLiveDemo: false,
    highlights: [
      'Role-based Authentication',
      'REST APIs',
      'PostgreSQL',
      'Dashboard',
    ],
  },
  {
    name: 'Note Sharing Platform',
    description:
      'A collaborative note-sharing platform where users can upload, download, and organize study materials. Features PDF management, advanced search and filtering, user authentication, and a responsive design for seamless access across devices.',
    techStack: ['Django REST Framework', 'React', 'SQLite', 'JWT Auth', 'Cloudinary'],
    githubUrl: 'https://github.com/Ajay100705',
    hasLiveDemo: false,
    highlights: [
      'JWT Authentication',
      'PDF Upload System',
      'Search & Filtering',
      'Cloudinary Integration',
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="bg-dark-elevated rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:shadow-card-hover group"
    >
      {/* Screenshot Placeholder */}
      <div
        className="h-[240px] flex items-center justify-center border-b border-white/[0.06] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(212,154,58,0.1), rgba(212,87,58,0.05))',
        }}
      >
        <Terminal
          size={48}
          className="text-amber/30 group-hover:scale-110 transition-transform duration-300"
        />
        {/* Hover overlay glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-white font-display">
          {project.name}
        </h3>
        <p className="mt-3 text-sm text-[#8A8A8A] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Project Highlights */}
        <div className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-emerald-400" />
              </div>
              <span className="text-xs text-[#B0B0B0]">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-[#8A8A8A] bg-white/[0.06] px-3.5 py-1.5 rounded-pill"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/[0.06] rounded-pill px-6 py-2.5 hover:border-amber hover:text-amber transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </motion.a>
          <button
            disabled={!project.hasLiveDemo}
            title={project.hasLiveDemo ? 'View Live Demo' : 'Coming Soon'}
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium rounded-pill px-6 py-2.5 border transition-all duration-200',
              project.hasLiveDemo
                ? 'text-white border-white/[0.06] hover:border-amber hover:text-amber'
                : 'text-white/40 border-white/[0.04] cursor-not-allowed'
            )}
          >
            <ExternalLink size={16} />
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-dark-card py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="PROJECTS"
          heading="Featured Projects"
          subtitle="Production-grade applications built with Django, React, and modern DevOps practices"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
