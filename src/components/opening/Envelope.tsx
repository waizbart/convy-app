import { motion } from 'framer-motion';

interface EnvelopeProps {
  isOpening: boolean;
}

const ENVELOPE_W = 320;
const ENVELOPE_H = 210;

export function Envelope({ isOpening }: EnvelopeProps) {
  return (
    <div
      style={{
        width: ENVELOPE_W,
        height: ENVELOPE_H,
        position: 'relative',
        perspective: '1200px',
        animation: isOpening ? 'none' : 'gentleFloat 3s ease-in-out infinite',
      }}
    >
      {/* ── Envelope body ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #1e0838 0%, #140626 60%, #0f0920 100%)',
          border: '1px solid rgba(255,63,164,0.25)',
          borderRadius: 8,
          boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(255,63,164,0.1)',
          overflow: 'hidden',
        }}
      >
        {/* Bottom triangle (V-shape) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 0,
            borderLeft: `${ENVELOPE_W / 2}px solid transparent`,
            borderRight: `${ENVELOPE_W / 2}px solid transparent`,
            borderBottom: `${ENVELOPE_H * 0.55}px solid rgba(255,63,164,0.08)`,
          }}
        />
      </div>

      {/* ── Flap (top triangle) ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: ENVELOPE_H * 0.5,
          transformStyle: 'preserve-3d',
          transformOrigin: 'top center',
          perspective: '1200px',
        }}
      >
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpening ? -180 : 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
            position: 'relative',
          }}
        >
          {/* Flap front face */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                borderLeft: `${ENVELOPE_W / 2}px solid transparent`,
                borderRight: `${ENVELOPE_W / 2}px solid transparent`,
                borderTop: `${ENVELOPE_H * 0.5}px solid #1e0838`,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
              }}
            />
          </div>
          {/* Flap back face (visible when flipped) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                borderLeft: `${ENVELOPE_W / 2}px solid transparent`,
                borderRight: `${ENVELOPE_W / 2}px solid transparent`,
                borderTop: `${ENVELOPE_H * 0.5}px solid #0f0920`,
              }}
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
