import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { DecoLine } from './DecoLine';

interface SectionWrapperProps {
  children: ReactNode;
  label?: string;
  title?: string;
  id?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function SectionWrapper({ children, label, title, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={containerVariants}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {(label || title) && (
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            {label && (
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {label}
              </p>
            )}
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  letterSpacing: '0.08em',
                  marginBottom: '1.25rem',
                  textShadow: '0 0 30px var(--glow-soft)',
                }}
              >
                {title}
              </h2>
            )}
            <DecoLine variant="triple" />
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
