import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, Briefcase, Cloud } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ajay100705', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ajaychandel', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:chandelajay2812@gmail.com', label: 'Email' },
];

const contactInfo = [
  { icon: MapPin, label: 'Jaipur, Rajasthan' },
  { icon: Mail, label: 'chandelajay2812@gmail.com', href: 'mailto:chandelajay2812@gmail.com' },
  { icon: Briefcase, label: 'Backend Developer' },
  { icon: Cloud, label: 'AWS Cloud Learner' },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      if (formRef.current) formRef.current.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="w-full bg-dark-card py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="CONTACT"
          heading="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-[900px] mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-dark-elevated rounded-2xl border border-white/[0.06] p-8 h-fit"
          >
            <h3 className="text-lg font-semibold text-white font-display mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={14} className="text-amber" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-[#B0B0B0] hover:text-amber transition-colors duration-200"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className="text-sm text-[#B0B0B0]">{info.label}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-[#8A8A8A] mb-4">Follow me</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] text-white/60 hover:text-amber hover:bg-amber/10 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-dark-elevated rounded-2xl border border-white/[0.06] p-8"
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-[#8A8A8A]/40 focus:border-amber focus:shadow-[0_0_0_3px_rgba(212,154,58,0.1)] outline-none transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-[#8A8A8A]/40 focus:border-amber focus:shadow-[0_0_0_3px_rgba(212,154,58,0.1)] outline-none transition-all duration-200"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full bg-transparent border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-[#8A8A8A]/40 focus:border-amber focus:shadow-[0_0_0_3px_rgba(212,154,58,0.1)] outline-none transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="w-full bg-transparent border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-[#8A8A8A]/40 focus:border-amber focus:shadow-[0_0_0_3px_rgba(212,154,58,0.1)] outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full gradient-bg text-white font-semibold py-3.5 rounded-pill flex items-center justify-center gap-2 transition-all duration-200 ${
                  submitted ? '!bg-emerald-600' : ''
                }`}
              >
                {submitted ? 'Message Sent ✓' : <><>Send Message</><Send size={16} /></>}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
