import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, animate, type PanInfo } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';

// ── Gallery Carousel ─────────────────────────────────────────────
// Mostra uma foto por vez em formato grande, com as adjacentes
// levemente visíveis nas bordas. Loop infinito + drag + auto-advance.

const ITEM_W = 280;   // largura de cada foto (px)
const ITEM_H = 380;   // altura
const GAP    = 16;
const STEP   = ITEM_W + GAP;
const AUTOPLAY_MS = 4000;

interface GalleryCarouselProps {
  images: readonly string[];
}

function GalleryCarousel({ images }: GalleryCarouselProps) {
  const N = images.length;
  const extended = [images[N - 1], ...images, images[0]] as string[];

  const [current, setCurrent] = useState(1);
  const xMV = useMotionValue(-1 * STEP);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
      animate(xMV, -idx * STEP, {
        type: 'tween',
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        onComplete: () => {
          if (idx === 0) {
            xMV.set(-N * STEP);
            setCurrent(N);
          } else if (idx === N + 1) {
            xMV.set(-1 * STEP);
            setCurrent(1);
          }
        },
      });
    },
    [N, xMV],
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (!isDragging.current) goTo(current + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [current, goTo]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    isDragging.current = false;
    const { offset, velocity } = info;
    if (offset.x < -50 || velocity.x < -250) {
      goTo(current + 1);
    } else if (offset.x > 50 || velocity.x > 250) {
      goTo(current - 1);
    } else {
      animate(xMV, -current * STEP, { type: 'tween', duration: 0.35 });
    }
  }

  const realIndex = ((current - 1) + N) % N;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
      {/* Strip */}
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          paddingLeft: `calc(50% - ${ITEM_W / 2}px)`,
          paddingTop: '24px',
          paddingBottom: '24px',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: GAP,
            x: xMV,
            cursor: 'grab',
            userSelect: 'none',
          }}
          drag="x"
          dragConstraints={{ left: -(N + 1) * STEP, right: 0 }}
          dragElastic={0.05}
          whileDrag={{ cursor: 'grabbing' }}
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={handleDragEnd}
        >
          {extended.map((src, i) => {
            const isActive = i === current
              || (current === N + 1 && i === 1)
              || (current === 0     && i === N);
            return (
              <motion.div
                key={`${src}-${i}`}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  width: ITEM_W,
                  height: ITEM_H,
                  flexShrink: 0,
                  borderRadius: 14,
                  overflow: 'hidden',
                  position: 'relative',
                  // Moldura elegante na foto ativa
                  boxShadow: isActive
                    ? '0 0 0 1px rgba(255,63,164,0.5), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255,63,164,0.2)'
                    : '0 8px 24px rgba(0,0,0,0.5)',
                  background: '#0f0920',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <img
                  src={src}
                  alt={`Foto ${(i % N) + 1}`}
                  loading="lazy"
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    display: 'block',
                  }}
                />
                {/* Gradiente inferior suave sobre a foto */}
                {isActive && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(8,6,16,0.55) 0%, transparent 45%)',
                      borderRadius: 14,
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }} role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === realIndex}
            aria-label={`Foto ${i + 1}`}
            onClick={() => goTo(i + 1)}
            style={{
              width: i === realIndex ? 22 : 7,
              height: 7,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === realIndex
                ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))'
                : 'rgba(255,255,255,0.2)',
              boxShadow: i === realIndex ? '0 0 10px var(--glow-primary)' : 'none',
              transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────
export function Gallery() {
  const { gallery } = inviteConfig.photos;
  if (!gallery.length) return null;

  return (
    <SectionWrapper label="A aniversariante" title="Momentos" id="gallery">
      <motion.div variants={itemVariants}>
        <GalleryCarousel images={gallery} />
      </motion.div>
    </SectionWrapper>
  );
}
