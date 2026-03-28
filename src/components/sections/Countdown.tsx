import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { useCountdown } from '../../hooks/useCountdown';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { FlipUnit } from '../ui/FlipUnit';

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(inviteConfig.event.date);

  return (
    <SectionWrapper label="O tempo passa…" title="Contagem Regressiva" id="countdown">
      <motion.div
        variants={itemVariants}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(0.75rem, 3vw, 1.5rem)',
          flexWrap: 'wrap',
        }}
      >
        <FlipUnit value={days}    label="Dias"    />
        <Separator />
        <FlipUnit value={hours}   label="Horas"   />
        <Separator />
        <FlipUnit value={minutes} label="Minutos" />
        <Separator />
        <FlipUnit value={seconds} label="Segundos" />
      </motion.div>
    </SectionWrapper>
  );
}

function Separator() {
  return (
    <span
      aria-hidden="true"
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '2rem',
        fontWeight: 700,
        color: 'var(--color-primary)',
        textShadow: '0 0 12px var(--glow-primary)',
        alignSelf: 'center',
        marginBottom: '1.5rem',
        lineHeight: 1,
      }}
    >
      :
    </span>
  );
}
