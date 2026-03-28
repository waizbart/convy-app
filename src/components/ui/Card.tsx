import type { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function Card({ children, style, className }: CardProps) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,63,164,0.2)',
        borderRadius: 12,
        padding: '1.5rem',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 8px 32px rgba(255,63,164,0.15), 0 0 0 1px rgba(255,63,164,0.3)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </div>
  );
}
