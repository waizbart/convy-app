import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope } from './Envelope';
import { WaxSeal } from './WaxSeal';
import { Confetti } from './Confetti';
import { inviteConfig } from '../../config/invite.config';

interface EnvelopeSceneProps {
  onOpen: () => void;
  onInteract: () => void;
  visible: boolean;
  guestName: string;
}

export function EnvelopeScene({ onOpen, onInteract, visible, guestName }: EnvelopeSceneProps) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'confetti'>('idle');
  const [sealVisible, setSealVisible] = useState(true);

  function handleOpen() {
    if (phase !== 'idle') return;

    // Start music immediately on interaction
    onInteract();

    setSealVisible(false);
    setPhase('opening');

    // 900ms: confetti (card is gone, animate faster)
    setTimeout(() => setPhase('confetti'), 900);

    // 1800ms: scene fades out, main page appears
    setTimeout(() => onOpen(), 1800);
  }

  const displayName = guestName.trim() || `${inviteConfig.person.firstName} ${inviteConfig.person.lastName}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="envelope-scene"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `radial-gradient(ellipse 80% 60% at 20% 20%, rgba(255,63,164,0.15) 0%, transparent 60%),
                         radial-gradient(ellipse 60% 50% at 80% 80%, rgba(130,80,220,0.15) 0%, transparent 60%),
                         ${inviteConfig.theme.colors.background}`,
          }}
        >
          {/* Title above envelope */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Um convite especial para
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                color: 'var(--color-text)',
                textShadow: '0 0 30px var(--glow-soft)',
              }}
            >
              {displayName}
            </h1>
          </motion.div>

          {/* Envelope wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            <Envelope isOpening={phase !== 'idle'} />

            {/* Wax seal */}
            <AnimatePresence>
              {sealVisible && (
                <motion.div
                  key="seal"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, pointerEvents: phase === 'idle' ? 'auto' : 'none' }}
                >
                  <WaxSeal onDismiss={handleOpen} />
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          {/* Confetti — rendered at scene level so it's full-screen */}
          {phase === 'confetti' && <Confetti />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
