import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';

const ITEM_W = 280;
const ITEM_H = 380;
const GAP = 16;

function GalleryCarousel({ images }: { images: readonly string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
      {/* Viewport */}
      <div
        ref={emblaRef}
        style={{ overflow: 'hidden', width: '100%', paddingTop: 24, paddingBottom: 24 }}
      >
        {/* Container — sem gap, espaço fica no marginLeft de cada slide */}
        <div style={{ display: 'flex' }}>
          {images.map((src, i) => {
            const isActive = i === selectedIndex;
            return (
              <div
                key={src}
                style={{
                  flex: `0 0 ${ITEM_W}px`,
                  minWidth: 0,
                  marginLeft: GAP,
                }}
              >
                <div
                  style={{
                    width: ITEM_W,
                    height: ITEM_H,
                    borderRadius: 14,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: isActive
                      ? '0 0 0 1px rgba(255,63,164,0.5), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255,63,164,0.2)'
                      : '0 8px 24px rgba(0,0,0,0.5)',
                    background: '#0f0920',
                    opacity: isActive ? 1 : 0.35,
                    transform: isActive ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.4s, transform 0.4s, box-shadow 0.4s',
                  }}
                >
                  <img
                    src={src}
                    alt={`Foto ${i + 1}`}
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
                  {isActive && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(8,6,16,0.55) 0%, transparent 45%)',
                        borderRadius: 14,
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }} role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Foto ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            style={{
              width: i === selectedIndex ? 22 : 7,
              height: 7,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === selectedIndex
                ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))'
                : 'rgba(255,255,255,0.2)',
              boxShadow: i === selectedIndex ? '0 0 10px var(--glow-primary)' : 'none',
              transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

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
