import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { DecoLine } from '../layout/DecoLine';

export function GuestManual() {
  return (
    <SectionWrapper label="Informações" title="Manual do Convidado" id="manual">
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        {inviteConfig.guestManual.map((item) => (
          <Card key={item.title}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: '0.75rem',
                  filter: 'drop-shadow(0 0 6px var(--glow-soft))',
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--color-text)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
        <DecoLine />
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            color: 'var(--color-text-muted)',
            maxWidth: 500,
            margin: '1.5rem auto 0',
            lineHeight: 1.7,
          }}
        >
          "{inviteConfig.copy.manualClosingQuote}"
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
