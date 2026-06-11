import { motion } from 'framer-motion';
import {
  Cloud,
  Container,
  Terminal,
  GitBranch,
  Activity,
  Shield,
  Server,
  Database,
  HardDrive,
  Users,
  Network,
  Layers,
  FileCode,
  Gauge,
  Lock,
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import type { LucideIcon } from 'lucide-react';

interface CloudService {
  name: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

const cloudServices: CloudService[] = [
  {
    icon: Cloud,
    name: 'AWS Cloud',
    color: '#D49A3A',
    items: ['EC2', 'S3', 'IAM', 'RDS', 'VPC'],
  },
  {
    icon: Container,
    name: 'Docker',
    color: '#D4573A',
    items: ['Containers', 'Docker Compose', 'Images'],
  },
  {
    icon: Terminal,
    name: 'Linux',
    color: '#D49A3A',
    items: ['Ubuntu', 'Shell Commands', 'Networking'],
  },
  {
    icon: GitBranch,
    name: 'CI/CD',
    color: '#D4573A',
    items: ['GitHub Actions', 'Deployment Pipelines'],
  },
  {
    icon: Activity,
    name: 'Monitoring',
    color: '#D49A3A',
    items: ['Logs', 'Metrics'],
  },
  {
    icon: Shield,
    name: 'Infrastructure',
    color: '#D4573A',
    items: ['Networking', 'Security', 'Architecture'],
  },
];

const detailedServices = [
  {
    icon: Server,
    title: 'EC2',
    desc: 'Virtual servers',
  },
  {
    icon: HardDrive,
    title: 'S3',
    desc: 'Object storage',
  },
  {
    icon: Users,
    title: 'IAM',
    desc: 'Access management',
  },
  {
    icon: Database,
    title: 'RDS',
    desc: 'Managed databases',
  },
  {
    icon: Network,
    title: 'VPC',
    desc: 'Virtual network',
  },
  {
    icon: Container,
    title: 'Docker',
    desc: 'Containerization',
  },
  {
    icon: Layers,
    title: 'Compose',
    desc: 'Multi-container',
  },
  {
    icon: FileCode,
    title: 'Shell',
    desc: 'Scripting & CLI',
  },
  {
    icon: GitBranch,
    title: 'Actions',
    desc: 'CI/CD automation',
  },
  {
    icon: Gauge,
    title: 'Monitoring',
    desc: 'System metrics',
  },
  {
    icon: Lock,
    title: 'Security',
    desc: 'Best practices',
  },
  {
    icon: Shield,
    title: 'Infra',
    desc: 'Cloud architecture',
  },
];

export function CloudDevopsSection() {
  return (
    <section id="clouddevops" className="w-full bg-[#0A0A0A] py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="CLOUD & DEVOPS"
          heading="Cloud & DevOps Journey"
          subtitle="Building practical expertise in cloud infrastructure and modern DevOps workflows"
          align="center"
        />

        {/* Category Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cloudServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-dark-card rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_rgba(212,154,58,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white font-display">
                  {service.name}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#8A8A8A] bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-pill group-hover:border-amber/20 group-hover:text-amber/80 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {detailedServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-amber/20 hover:bg-amber/[0.04] transition-all duration-300 cursor-default"
            >
              <svc.icon size={22} className="text-amber/70" />
              <span className="mt-2 text-sm font-medium text-white">{svc.title}</span>
              <span className="text-[10px] text-[#8A8A8A] mt-0.5">{svc.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
