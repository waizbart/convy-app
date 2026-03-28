import { motion, type Variants } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { DecoLine } from '../layout/DecoLine';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero() {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={container}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.25rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Invite prefix */}
      <motion.p
        variants={item}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.68rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: '1.5rem',
        }}
      >
        {inviteConfig.copy.heroInvitePrefix}
      </motion.p>

      {/* Age number */}
      <motion.div variants={item} style={{ marginBottom: '1rem', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(7rem, 22vw, 14rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-silver) 50%, var(--color-primary) 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(255,63,164,0.6)) drop-shadow(0 0 60px rgba(255,63,164,0.3))',
            animation: 'numberShine 4s ease-in-out infinite',
            display: 'inline-block',
          }}
        >
          {inviteConfig.person.age}
        </span>
      </motion.div>

      {/* Name */}
      <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.06em',
            marginBottom: '0.25rem',
          }}
        >
          anos de
        </p>
        <h1>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: 'var(--color-text)',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            {inviteConfig.person.firstName}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
              letterSpacing: '0.15em',
              color: 'var(--color-silver)',
              textShadow: '0 0 20px var(--glow-soft)',
              display: 'block',
            }}
          >
            {inviteConfig.person.lastName.toUpperCase()}
          </span>
        </h1>
      </motion.div>

      {/* Deco line */}
      <motion.div variants={item} style={{ width: '100%', marginBottom: '1.5rem' }}>
        <DecoLine variant="triple" />
      </motion.div>

      {/* Quote */}
      <motion.p
        variants={item}
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          color: 'var(--color-text-muted)',
          maxWidth: 420,
          lineHeight: 1.7,
          marginBottom: '3rem',
        }}
      >
        {inviteConfig.copy.heroQuote}
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        variants={item}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
            animation: 'scrollHint 2s ease-in-out infinite',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            animation: 'pulseGlow 2s ease-in-out infinite',
          }}
        >
          Rolar
        </p>
      </motion.div>
    </motion.section>
  );
}
