import { useMemo } from 'react';
import { inviteConfig } from '../../config/invite.config';

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
  drift: string;
}

export function ParticleField() {
  const { count, colors } = inviteConfig.theme.particles;

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 15 + 12,
      delay: Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: `${(Math.random() - 0.5) * 80}px`,
    }));
  }, [count, colors]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            opacity: 0,
            '--drift': p.drift,
            animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
