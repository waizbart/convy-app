import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from 'react';

interface CarouselProps {
  images: readonly string[];
  alt: string;
}

const ITEM_W = 150;
const ITEM_H = 230;
const GAP = 10;

export function Carousel({ images, alt }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })],
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      {/* Viewport */}
      <div
        ref={emblaRef}
        style={{ overflow: 'hidden', width: '100%', paddingTop: 16, paddingBottom: 16 }}
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
                    borderRadius: 10,
                    overflow: 'hidden',
                    border: isActive
                      ? '1px solid rgba(255,63,164,0.55)'
                      : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: isActive
                      ? '0 0 10px rgba(255,63,164,0.28), 0 8px 24px rgba(0,0,0,0.5)'
                      : '0 4px 12px rgba(0,0,0,0.35)',
                    background: '#0f0920',
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? 'scale(1)' : 'scale(0.92)',
                    transition: 'opacity 0.3s, transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  <img
                    src={src}
                    alt={`${alt} ${i + 1}`}
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
                </div>
              </div>
            );
          })}
        </div>
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
            aria-selected={i === selectedIndex}
            aria-label={`Imagem ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            style={{
              width: i === selectedIndex ? 20 : 7,
              height: 7,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === selectedIndex
                ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))'
                : 'rgba(255,255,255,0.2)',
              boxShadow: i === selectedIndex ? '0 0 8px var(--glow-primary)' : 'none',
              transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
