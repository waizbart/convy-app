import { inviteConfig } from '../../config/invite.config';
import { DecoLine } from '../layout/DecoLine';

export function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '3rem 1.25rem',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255,63,164,0.1)',
      }}
    >
      <DecoLine variant="triple" />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          marginTop: '1.5rem',
          marginBottom: '0.25rem',
        }}
      >
        {inviteConfig.copy.footerClosing},
      </p>

      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-silver))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
        }}
      >
        {inviteConfig.person.firstName} {inviteConfig.person.lastName}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        {inviteConfig.copy.footerTagline}
      </p>
    </footer>
  );
}
