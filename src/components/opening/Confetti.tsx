import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';

type Shape = 'circle' | 'rect' | 'streamer' | 'star';

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
  shape: Shape;
  opacity: number;
}

// Extra sparkle dots that burst as bright points
interface Sparkle {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  angle: number;
  dist: number;
  duration: number;
  delay: number;
}

const BURST_COLORS = [
  '#ff3fa4', '#ff85c8', '#ffb3d9',
  '#c8c0d8', '#ffffff', '#b4a0e8',
  '#e8d0f8', '#ffd6ec', '#ffe0f5',
];

export function Confetti() {
  const { count } = inviteConfig.theme.confetti;
  const totalCount = count * 2 + 60; // ~240 pieces

  const pieces = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: totalCount }, (_, i) => {
      // Originate from the center of the viewport (envelope location)
      const startLeft = 42 + Math.random() * 16; // 42–58%
      const startTop  = 44 + Math.random() * 12; // 44–56%

      // Burst outward in all directions, heavy variation
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 400;
      const fallX = Math.cos(angle) * speed;
      // Gravity pulls down, so Y goes positive mostly
      const fallY = Math.sin(angle) * speed * 0.6 + (120 + Math.random() * 500);

      const shapes: Shape[] = ['circle', 'rect', 'streamer', 'star'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)] as Shape;

      const color = BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)];

      return {
        id: i,
        left: `${startLeft}%`,
        top: `${startTop}%`,
        color,
        size: shape === 'streamer' ? 3 + Math.random() * 4 : 4 + Math.random() * 10,
        fallX: `${fallX}px`,
        fallY: `${fallY}px`,
        rz: `${Math.random() * 360}deg`,
        rzEnd: `${Math.random() * 1080 - 540}deg`,
        duration: 1.0 + Math.random() * 1.6,
        delay: Math.random() * 0.6,
        shape,
        opacity: 0.7 + Math.random() * 0.3,
      };
    });
  }, [totalCount]);

  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: `${44 + Math.random() * 12}%`,
      y: `${44 + Math.random() * 12}%`,
      size: 2 + Math.random() * 5,
      color: Math.random() > 0.5 ? '#ffffff' : '#ff85c8',
      angle: (i / 40) * 360,
      dist: 60 + Math.random() * 220,
      duration: 0.5 + Math.random() * 0.7,
      delay: Math.random() * 0.25,
    }));
  }, []);

  return (
    <>
      {/* Full-screen flash burst */}
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 18,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,63,164,0.55) 0%, rgba(180,80,220,0.25) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Confetti pieces — full screen */}
      <div
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 20 }}
        aria-hidden="true"
      >
        {pieces.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width:
                p.shape === 'streamer' ? p.size
                : p.shape === 'star'   ? p.size
                : p.shape === 'circle' ? p.size
                : p.size * 0.5,
              height:
                p.shape === 'streamer' ? p.size * 6
                : p.size,
              borderRadius:
                p.shape === 'circle'   ? '50%'
                : p.shape === 'rect'   ? '2px'
                : p.shape === 'streamer' ? '2px'
                : '1px',
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: p.color === '#ffffff' || p.color === '#ffb3d9' || p.color === '#ffe0f5'
                ? `0 0 4px ${p.color}`
                : 'none',
              '--fall-x': p.fallX,
              '--fall-y': p.fallY,
              '--rz': p.rz,
              '--rz-end': p.rzEnd,
              animation: `confettiFall ${p.duration}s ${p.delay}s cubic-bezier(0.25,0.46,0.45,0.94) both`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Sparkle burst — bright radial dots */}
      <div
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 21 }}
        aria-hidden="true"
      >
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{
              left: s.x,
              top: s.y,
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            animate={{
              x: Math.cos((s.angle * Math.PI) / 180) * s.dist,
              y: Math.sin((s.angle * Math.PI) / 180) * s.dist,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: s.duration, delay: s.delay, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            }}
          />
        ))}
      </div>
    </>
  );
}
