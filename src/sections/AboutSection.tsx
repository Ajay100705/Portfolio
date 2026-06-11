import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { GraduationCap, Target, Cloud, Server, Code2, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, target, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          setDisplay(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <div className="flex flex-col items-center">
      <span ref={ref} className="font-display text-5xl font-bold gradient-text">
        {display}{suffix}
      </span>
      <span className="mt-2 text-xs uppercase tracking-[0.1em] text-[#8A8A8A]">
        {label}
      </span>
    </div>
  );
}

const careerGoals = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Building robust APIs and scalable server-side systems with Django and PostgreSQL',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    desc: 'Deploying and managing applications on AWS with hands-on experience in EC2, S3, and RDS',
  },
  {
    icon: Target,
    title: 'DevOps Engineering',
    desc: 'Automating deployments with Docker, CI/CD pipelines, and infrastructure best practices',
  },
];

const aboutCards = [
  {
    icon: Code2,
    title: 'Backend Development',
    desc: 'Built multiple production-grade Django applications with REST APIs, authentication, and database management.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Actively expanding cloud and DevOps skills through AWS labs, Docker projects, and real-world deployments.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-dark-card py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="ABOUT ME"
          heading="About Me"
          align="center"
        />

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 max-w-[750px] mx-auto"
        >
          <p className="text-lg text-[#8A8A8A] text-center leading-relaxed">
            I am a Computer Science Engineering student with a deep focus on backend development using Python and Django.
            Over the past two years, I've built several full-stack applications — from a school management system
            with role-based authentication to a note-sharing platform with PDF handling and Cloudinary integration.
          </p>
          <p className="mt-4 text-lg text-[#8A8A8A] text-center leading-relaxed">
            Currently, I am expanding into cloud infrastructure and DevOps. I am working with Docker for containerization,
            learning AWS core services (EC2, S3, RDS, IAM), and building CI/CD pipelines with GitHub Actions.
            I care about writing clean, well-tested code and automating repetitive deployment work.
          </p>
        </motion.div>

        {/* About Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto"
        >
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="bg-dark-elevated rounded-2xl border border-white/[0.06] p-6 hover:border-amber/20 transition-all duration-300"
            >
              <card.icon size={22} className="text-amber" />
              <h4 className="mt-3 text-base font-semibold text-white">{card.title}</h4>
              <p className="mt-1 text-xs text-[#8A8A8A] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-dark-elevated rounded-2xl border border-white/[0.06] p-8 max-w-[700px] mx-auto hover:border-amber/20 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber/15 flex-shrink-0">
              <GraduationCap size={20} className="text-amber" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="mt-1 text-[#8A8A8A]">
                Bachelor of Technology (Computer Science Engineering)
              </p>
              <span className="inline-block mt-3 text-xs text-amber bg-amber/15 px-3 py-1 rounded-pill">
                2023 — 2027
              </span>
            </div>
          </div>
        </motion.div>

        {/* Career Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[700px] mx-auto"
        >
          {careerGoals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              className="bg-dark-elevated rounded-2xl border border-white/[0.06] p-6 hover:border-amber/20 transition-all duration-300"
            >
              <goal.icon size={22} className="text-amber" />
              <h4 className="mt-3 text-base font-semibold text-white">{goal.title}</h4>
              <p className="mt-1 text-xs text-[#8A8A8A] leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Statistics */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 md:gap-16">
          <StatCounter target={19} suffix="+" label="Repositories" />
          <StatCounter target={15} suffix="+" label="Technologies" />
          <StatCounter target={4} suffix="+" label="Certifications" />
          <StatCounter target={2} suffix="+" label="Years Coding" />
        </div>
      </div>
    </section>
  );
}
