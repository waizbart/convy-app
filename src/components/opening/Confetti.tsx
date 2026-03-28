import { useMemo } from 'react';
import { inviteConfig } from '../../config/invite.config';

interface ConfettiPiece {
  id: number;
  left: string;
  top: string;
  color: string;
  size: number;
  fallX: string;
  fallY: string;
  rz: string;
  rzEnd: string;
  duration: number;
  delay: number;
  shape: 'circle' | 'rect';
}

export function Confetti() {
  const { count, colors } = inviteConfig.theme.confetti;

  const pieces = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${30 + Math.random() * 40}%`,
      top: `${20 + Math.random() * 30}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 5,
      fallX: `${(Math.random() - 0.5) * 300}px`,
      fallY: `${200 + Math.random() * 300}px`,
      rz: `${Math.random() * 360}deg`,
      rzEnd: `${Math.random() * 720}deg`,
      duration: 1.2 + Math.random() * 1.2,
      delay: Math.random() * 0.5,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }));
  }, [count, colors]);

  return (
    <div
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20, overflow: 'hidden' }}
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.shape === 'circle' ? p.size : p.size * 0.6,
            height: p.size,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            backgroundColor: p.color,
            '--fall-x': p.fallX,
            '--fall-y': p.fallY,
            '--rz': p.rz,
            '--rz-end': p.rzEnd,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-out forwards`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
