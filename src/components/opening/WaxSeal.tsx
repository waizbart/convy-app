import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';

interface WaxSealProps {
  onDismiss: () => void;
}

export function WaxSeal({ onDismiss }: WaxSealProps) {
  return (
    // Wrapper div handles positioning — keeps transform(-50%) intact
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        onClick={onDismiss}
        style={{ cursor: 'pointer' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #c0006a 0%, #ff3fa4 45%, #8b0047 100%)',
            boxShadow: '0 0 24px rgba(255,63,164,0.8), 0 0 48px rgba(255,63,164,0.4), inset 0 -3px 8px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            animation: 'heartbeat 2.5s ease-in-out infinite',
          }}
        >
          {/* Inner texture ring */}
          <div
            style={{
              position: 'absolute',
              inset: 6,
              borderRadius: '50%',
              border: '1px solid rgba(255,200,220,0.4)',
            }}
          />
          {/* Letter */}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#fdf6ff',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              userSelect: 'none',
            }}
          >
            {inviteConfig.person.sealLetter}
          </span>
        </div>
      </motion.div>

      {/* Click hint */}
      <p
        style={{
          textAlign: 'center',
          marginTop: '0.75rem',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(253,246,255,0.6)',
          fontFamily: 'var(--font-sans)',
          animation: 'pulseGlow 2s ease-in-out infinite',
          whiteSpace: 'nowrap',
        }}
      >
        Toque para abrir
      </p>
    </div>
  );
}
