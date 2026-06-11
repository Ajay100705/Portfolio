import { motion } from 'framer-motion';
import { FileText, Download, GraduationCap, FolderGit2, Cpu, Award } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { GradientButton } from '@/components/GradientButton';

const resumeHighlights = [
  { icon: GraduationCap, label: 'Education', value: 'B.Tech Computer Science Engineering' },
  { icon: FolderGit2, label: 'Projects', value: '19+ Repositories' },
  { icon: Cpu, label: 'Technologies', value: '15+ Skills' },
  { icon: Award, label: 'Certifications', value: '4+ Earned' },
];

export function ResumeSection() {
  return (
    <section id="resume" className="w-full bg-[#0A0A0A] py-16 md:py-32">
      <div className="max-w-[700px] mx-auto px-6">
        <SectionHeader
          label="RESUME"
          heading="My Resume"
          subtitle="Download my resume to learn more about my experience and skills"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-dark-card rounded-2xl border border-white/[0.06] p-8 md:p-12 max-w-[600px] mx-auto"
        >
          <FileText
            size={48}
            className="mx-auto text-amber/50"
            style={{ strokeWidth: 1.5 }}
          />
          <h3 className="mt-5 text-xl font-semibold text-white font-display text-center">
            Ajay_Pratap_Singh_Chandel_Resume.pdf
          </h3>
          <p className="mt-2 text-xs text-[#8A8A8A] text-center">PDF &bull; Updated June 2025</p>

          {/* Resume Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resumeHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]"
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-amber" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A]">{item.label}</p>
                  <p className="text-xs text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-px bg-white/[0.06] my-8" />

          <GradientButton icon={Download} iconPosition="left" fullWidth>
            Download Resume
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
