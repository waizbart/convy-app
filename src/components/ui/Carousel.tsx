import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CarouselProps {
  images: readonly string[];
  alt: string;
}

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const TRANSITION = { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function Carousel({ images, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    const clamped = (next + images.length) % images.length;
    setDirection(next > index ? 1 : -1);
    setIndex(clamped);
  }, [index, images.length]);

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  const single = images.length === 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      {/* Image stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 300,
          height: 360,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            loading="lazy"
            custom={direction}
            variants={SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={TRANSITION}
            style={{
              position: 'absolute',
              bottom: 0,
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              filter: 'drop-shadow(0 0 18px rgba(255,63,164,0.25)) drop-shadow(0 16px 32px rgba(0,0,0,0.5))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </AnimatePresence>

        {/* Prev / Next buttons */}
        {!single && (
          <>
            <NavButton direction="prev" onClick={prev} />
            <NavButton direction="next" onClick={next} />
          </>
        )}
      </div>

      {/* Dot indicators */}
      {!single && (
        <div
          style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}
          role="tablist"
          aria-label="Selecionar imagem"
        >
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Imagem ${i + 1}`}
              onClick={() => go(i)}
              style={{
                width: i === index ? 20 : 7,
                height: 7,
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === index
                  ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))'
                  : 'rgba(255,255,255,0.2)',
                boxShadow: i === index ? '0 0 8px var(--glow-primary)' : 'none',
                transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
              }}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {!single && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            color: 'var(--color-text-muted)',
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}

// ── Nav arrow button ────────────────────────────────────────────
interface NavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

function NavButton({ direction, onClick }: NavButtonProps) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'Imagem anterior' : 'Próxima imagem'}
      style={{
        position: 'absolute',
        top: '50%',
        [isPrev ? 'left' : 'right']: 0,
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '1px solid rgba(255,63,164,0.35)',
        background: 'rgba(8,6,16,0.75)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        color: 'var(--color-primary)',
        fontSize: '1rem',
        lineHeight: 1,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = 'rgba(255,63,164,0.2)';
        el.style.boxShadow = '0 0 12px var(--glow-primary)';
        el.style.transform = `translateY(-50%) scale(1.1)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = 'rgba(8,6,16,0.75)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(-50%) scale(1)';
      }}
    >
      {isPrev ? '‹' : '›'}
    </button>
  );
}
