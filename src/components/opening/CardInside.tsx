import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';

export function CardInside() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-112%' }}
      transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        zIndex: 3,
      }}
    >
      <div
        style={{
          background: 'linear-gradient(160deg, #1e0838 0%, #0f0920 60%, #1a0530 100%)',
          border: '1px solid rgba(255,63,164,0.3)',
          borderRadius: '8px 8px 0 0',
          padding: '1.5rem 1.25rem',
          textAlign: 'center',
          boxShadow: '0 -8px 32px rgba(255,63,164,0.2)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {inviteConfig.copy.envelopeCardLabel}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: 'var(--color-text)',
            lineHeight: 1.3,
            marginBottom: '0.5rem',
          }}
        >
          os{' '}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-silver), var(--color-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            15 anos
          </span>
        </p>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-silver)',
            marginBottom: '0.25rem',
          }}
        >
          {inviteConfig.person.firstName} {inviteConfig.person.lastName}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.08em',
          }}
        >
          {inviteConfig.event.dayOfWeek}, {inviteConfig.event.dateLabel} · {inviteConfig.event.time}
        </p>
      </div>
    </motion.div>
  );
}
