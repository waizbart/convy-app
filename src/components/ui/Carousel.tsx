import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, animate, type PanInfo } from 'framer-motion';

interface CarouselProps {
  images: readonly string[];
  alt: string;
}

const ITEM_W = 150;
const ITEM_H = 230;
const GAP = 10;
const STEP = ITEM_W + GAP;
const AUTOPLAY_MS = 2000;

export function Carousel({ images, alt }: CarouselProps) {
  const N = images.length;

  // Clone last item at start and first item at end for seamless looping
  // Layout: [clone-last, img0, img1, ..., imgN-1, clone-first]
  // Indices:      0         1     2          N       N+1
  const extended = [images[N - 1], ...images, images[0]] as string[];

  // Start at index 1 (first real image)
  const [current, setCurrent] = useState(1);
  const xMV = useMotionValue(-1 * STEP);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
      animate(xMV, -idx * STEP, {
        type: 'tween',
        duration: 0.42,
        ease: [0.25, 0.46, 0.45, 0.94],
        onComplete: () => {
          // Silently jump from clone to real equivalent
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

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => {
      if (!isDragging.current) {
        goTo(current + 1);
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [current, goTo]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    isDragging.current = false;
    const { offset, velocity } = info;
    if (offset.x < -40 || velocity.x < -200) {
      goTo(current + 1);
    } else if (offset.x > 40 || velocity.x > 200) {
      goTo(current - 1);
    } else {
      animate(xMV, -current * STEP, { type: 'tween', duration: 0.3 });
    }
  }

  // Dot indicator maps to real index (0-based)
  const realIndex = ((current - 1) + N) % N;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      {/* Strip — active image is always centered via paddingLeft */}
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          // Shift strip so item at x=0 is centered; each subsequent item
          // is centered by subtracting STEP per index in the motion value
          paddingLeft: `calc(50% - ${ITEM_W / 2}px)`,
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
          dragElastic={0.06}
          whileDrag={{ cursor: 'grabbing' }}
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={handleDragEnd}
        >
          {extended.map((src, i) => {
            const isActive = i === current;
            return (
              <motion.div
                key={`${src}-${i}`}
                animate={{
                  opacity: isActive ? 1 : 0.45,
                  scale: isActive ? 1 : 0.92,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: ITEM_W,
                  height: ITEM_H,
                  flexShrink: 0,
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: isActive
                    ? '1px solid rgba(255,63,164,0.55)'
                    : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: isActive
                    ? '0 0 20px rgba(255,63,164,0.28), 0 8px 24px rgba(0,0,0,0.5)'
                    : '0 4px 12px rgba(0,0,0,0.35)',
                  background: '#0f0920',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <img
                  src={src}
                  alt={`${alt} ${(i % N) + 1}`}
                  loading="lazy"
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'top center',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    display: 'block',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div
        style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}
        role="tablist"
        aria-label="Selecionar imagem"
      >
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === realIndex}
            aria-label={`Imagem ${i + 1}`}
            onClick={() => goTo(i + 1)}
            style={{
              width: i === realIndex ? 20 : 7,
              height: 7,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === realIndex
                ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))'
                : 'rgba(255,255,255,0.2)',
              boxShadow: i === realIndex ? '0 0 8px var(--glow-primary)' : 'none',
              transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
