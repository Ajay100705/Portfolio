import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Wrench,
  Container,
  Terminal,
  GitBranch,
  HardDrive,
  Users,
  Network,
  FileCode,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import type { LucideIcon } from "lucide-react";

/* ── Types ─────────────────────────────────── */
interface Skill {
  name: string;
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
  /** optional tags for cloud / devops categories */
  tags?: string[];
  /** optional custom icon color */
  color?: string;
}

interface DetailedService {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/* ── Data ──────────────────────────────────── */
const skillCategories: SkillCategory[] = [
  // ── Classic skills (stars) ──
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [{ name: "Django" }, { name: "Django REST Framework" }, { name: "Authentication & Authorization" }, { name: "REST APIs" }],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQLite" }],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    skills: [
      { name: "REST APIs" },
      { name: "JSON" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },

  // ── Cloud & DevOps categories (tags) ──
  {
    icon: Cloud,
    title: "AWS Cloud",
    skills: [], // no stars, we use tags
    tags: ["EC2", "S3", "IAM", "RDS", "VPC"],
    color: "#D49A3A",
  },
  {
    icon: Container,
    title: "Docker",
    skills: [],
    tags: ["Containers", "Docker Compose", "Volumes"],
    color: "#D4573A",
  },
  {
    icon: Terminal,
    title: "Linux",
    skills: [],
    tags: ["Ubuntu", "Shell", "Networking"],
    color: "#D49A3A",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    skills: [],
    tags: ["GitHub Actions", "Pipelines"],
    color: "#D4573A",
  },
];

/* Detailed services grid (unchanged from original cloud section) */
const detailedServices: DetailedService[] = [
  { icon: Server, title: "EC2", desc: "Virtual servers" },
  { icon: HardDrive, title: "S3", desc: "Object storage" },
  { icon: Users, title: "IAM", desc: "Access management" },
  { icon: Database, title: "RDS", desc: "Managed databases" },
  { icon: Container, title: "Docker", desc: "Containerization" },
  { icon: FileCode, title: "Linux", desc: "Shell & CLI" },
  { icon: GitBranch, title: "GitHub Actions", desc: "CI/CD automation" },
  { icon: Network, title: "VPC", desc: "Cloud networking" },
];

/* ── Sub‑components ────────────────────────── */
function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const hasTags = category.tags && category.tags.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="bg-dark-card rounded-2xl border border-white/[0.06] p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-[0_0_35px_rgba(212,154,58,0.08)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 flex items-center justify-center ${
            category.color ? "" : "gradient-text"
          }`}
          style={category.color ? { color: category.color } : undefined}
        >
          <category.icon
            size={28}
            style={{ strokeWidth: 1.5 }}
            className={category.color ? "" : "gradient-text"}
          />
        </div>
        <h3 className="text-xl font-semibold text-white font-display">
          {category.title}
        </h3>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] my-5" />

      {/* Content: stars or tags */}
      {hasTags ? (
        <>
          <div className="flex flex-wrap gap-2">
            {category.tags!.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#8A8A8A] bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex mt-4 text-[10px] px-3 py-1 rounded-full bg-amber/10 text-amber">
            Learning & Building Projects
          </span>
        </>
      ) : (
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className="text-xs text-[#8A8A8A] bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ── Main Section ──────────────────────────── */
export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-[#0A0A0A] py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="SKILLS"
          heading="Technical Skills & Cloud Journey"
          subtitle="Backend technologies, cloud platforms, and DevOps tools I work with to build scalable applications"
          align="center"
        />

        {/* Core Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Core Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.slice(0, 5).map((category, i) => (
              <SkillCard key={category.title} category={category} index={i} />
            ))}
          </div>
        </div>

        {/* Cloud & DevOps Journey */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white">
            Cloud & DevOps Journey
          </h3>

          <p className="mt-3 text-[#8A8A8A] max-w-2xl mx-auto">
            Building practical expertise in cloud infrastructure, automation,
            containerization, and deployment workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.slice(5).map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* Detailed cloud services & tools grid */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white">
              Cloud & DevOps Toolbox
            </h3>

            <p className="mt-2 text-[#8A8A8A] max-w-2xl mx-auto">
              Technologies and services I am actively learning and using in
              projects.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
                <span className="mt-2 text-sm font-medium text-white">
                  {svc.title}
                </span>
                <span className="text-[10px] text-[#8A8A8A] mt-0.5">
                  {svc.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
