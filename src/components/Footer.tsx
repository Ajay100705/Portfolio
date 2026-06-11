import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Check, Code2, Container, Cloud } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ajay100705', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ajaychandel', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:chandelajay2812@gmail.com', label: 'Email' },
];

const opportunities = [
  { icon: Code2, label: 'Backend Developer Internship' },
  { icon: Code2, label: 'Django Developer Internship' },
  { icon: Container, label: 'DevOps Internship' },
  { icon: Cloud, label: 'AWS Cloud Internship' },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A]">
      {/* Recruiter CTA Section */}
      <div className="w-full border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[600px] mx-auto text-center"
          >
            <h3 className="text-2xl font-bold font-display text-white">
              Open To Opportunities
            </h3>
            <p className="mt-3 text-sm text-[#8A8A8A]">
              Actively seeking internships and entry-level roles where I can contribute and grow.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={opp.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-400" />
                  </div>
                  <span className="text-sm text-[#B0B0B0]">{opp.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="mailto:chandelajay2812@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 gradient-bg text-white font-semibold px-8 py-3.5 rounded-pill hover:shadow-glow transition-all duration-200"
            >
              <Mail size={16} />
              Hire Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white">
                Ajay Pratap Singh Chandel
              </p>
              <p className="mt-1 text-xs text-[#8A8A8A]">
                Software Engineer & DevOps Enthusiast
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] text-white/60 hover:bg-white/[0.12] hover:text-white hover:scale-105 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/[0.06] my-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
            <p className="text-xs text-[#8A8A8A]">
              &copy; {new Date().getFullYear()} Ajay Pratap Singh Chandel. All rights reserved.
            </p>
            <p className="text-xs text-[#8A8A8A]">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
