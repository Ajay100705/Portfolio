import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { GradientButton } from '@/components/GradientButton';
import { FloatingParticles } from '@/components/FloatingParticles';


export function HeroSection() {
  const phrases = useMemo(() => [
    'Backend Developer',
    'Django REST Framework Developer',
    'DevOps Enthusiast',
    'AWS Cloud Learner',
  ], [] );

  const { displayText } = useTypingAnimation({
    phrases,
    typeSpeed: 80,
    deleteSpeed: 40,
    holdDuration: 2000,
    pauseDuration: 500,
  });

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Decorative gradient circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(212,154,58,0.15), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(212,87,58,0.12), transparent 70%)',
            animationDelay: '-10s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] mx-auto px-6 pt-20">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div
            className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden"
            style={{
              border: '4px solid transparent',
              background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, #D49A3A, #D4573A) border-box',
              boxShadow: '0 0 60px rgba(212, 154, 58, 0.2)',
            }}
          >
            <img
              src="/assets/profile-photo.jpeg"
              alt="Ajay Pratap Singh Chandel"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-7xl font-bold text-white tracking-tight"
        >
          Ajay Pratap Singh Chandel
        </motion.h1>

        {/* Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-4 flex items-center gap-1"
        >
          <span className="text-lg font-medium text-amber">{displayText}</span>
          <span className="w-0.5 h-5 bg-amber animate-cursor-blink" />
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-emerald-400">
            Available for Internships
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base text-[#8A8A8A] max-w-[600px] leading-relaxed"
        >
          Backend Developer specializing in Python, Django, and REST APIs.
          Currently building hands-on expertise in cloud infrastructure, Docker containerization,
          and DevOps workflows. Focused on writing clean, scalable code and automating deployment pipelines.
        </motion.p>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { icon: Github, href: 'https://github.com/Ajay100705', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/ajaychandel', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:chandelajay2812@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-white/70 hover:text-amber hover:border-amber/40 hover:bg-amber/10 transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <GradientButton
            icon={ChevronDown}
            onClick={() => handleScrollTo('#projects')}
          >
            View Projects
          </GradientButton>
          <GradientButton variant="outline" icon={Download} iconPosition="left">
            Download Resume
          </GradientButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={24}
          className="text-[#8A8A8A] animate-scroll-bounce"
        />
      </motion.div>
    </section>
  );
}
