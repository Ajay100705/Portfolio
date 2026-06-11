import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Hash } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

interface Certification {
  name: string;
  provider: string;
  year: string;
  credentialId: string;
  completionDate: string;
}

const certifications: Certification[] = [
  {
    name: 'Python Bootcamp',
    provider: 'Udemy',
    year: '2023',
    credentialId: 'UC-ea8e5f2a',
    completionDate: 'August 2023',
  },
  {
    name: '100 Days of Python',
    provider: 'Udemy',
    year: '2023',
    credentialId: 'UC-7b3c1d4e',
    completionDate: 'November 2023',
  },
  {
    name: 'DevOps Fundamentals',
    provider: 'Online Platform',
    year: '2024',
    credentialId: 'DO-4f5a6b7c',
    completionDate: 'March 2024',
  },
  {
    name: 'AWS Cloud Practitioner Prep',
    provider: 'AWS Training',
    year: '2025',
    credentialId: 'AWS-8d9e0f1a',
    completionDate: 'In Progress',
  },
];

function CertificateCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group bg-dark-elevated rounded-2xl border border-white/[0.06] p-7 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_rgba(212,154,58,0.08)]"
    >
      <Award
        size={32}
        className="gradient-text"
        style={{ strokeWidth: 1.5 }}
      />
      <h3 className="mt-4 text-xl font-semibold text-white font-display">
        {cert.name}
      </h3>
      <p className="mt-1 text-sm text-[#8A8A8A]">{cert.provider}</p>

      {/* Credential Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#8A8A8A]">
          <Calendar size={12} className="text-amber/60" />
          <span>{cert.completionDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#8A8A8A]">
          <Hash size={12} className="text-amber/60" />
          <span className="font-mono">{cert.credentialId}</span>
        </div>
      </div>

      {/* Year Badge + Verify Button */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-amber bg-amber/12 px-3 py-1 rounded-pill">
          {cert.year}
        </span>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            alert('Certificate verification link coming soon!');
          }}
          className="inline-flex items-center gap-1 text-xs font-medium text-amber/80 hover:text-amber border border-amber/20 hover:border-amber/50 px-3 py-1.5 rounded-pill transition-all duration-200"
        >
          <ExternalLink size={10} />
          Verify
        </motion.a>
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full bg-dark-card py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="CERTIFICATIONS"
          heading="My Certifications"
          subtitle="Credentials that validate my skills and commitment to continuous learning"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <CertificateCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
