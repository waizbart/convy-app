import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { Button } from '../ui/Button';
import { DecoLine } from '../layout/DecoLine';

export function RSVP() {
  return (
    <SectionWrapper label="Confirmação" title="Confirme sua Presença" id="rsvp">
      <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
            marginBottom: '0.5rem',
          }}
        >
          Confirme até
        </p>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textShadow: '0 0 16px var(--glow-primary)',
            marginBottom: '2rem',
            letterSpacing: '0.06em',
          }}
        >
          {inviteConfig.rsvp.deadline}
        </p>

        <Button href={inviteConfig.links.googleForms} variant="primary">
          <Send size={15} strokeWidth={1.5} />
          Confirmar presença
        </Button>

        <div style={{ marginTop: '3rem' }}>
          <DecoLine variant="triple" />
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
              color: 'var(--color-text-muted)',
              maxWidth: 460,
              margin: '1.5rem auto 0',
              lineHeight: 1.7,
            }}
          >
            "{inviteConfig.copy.rsvpClosingQuote}"
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
