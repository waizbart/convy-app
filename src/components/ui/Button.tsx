import type { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  style?: CSSProperties;
}

export function Button({ children, href, onClick, variant = 'primary', style }: ButtonProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '0.75rem 2rem',
    borderRadius: 50,
    cursor: 'pointer',
    border: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease',
    ...style,
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
      color: '#fff',
      boxShadow: '0 4px 20px var(--glow-primary)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
      boxShadow: '0 0 12px var(--glow-soft)',
    },
  };

  const props = {
    style: { ...base, ...variants[variant] },
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = 'translateY(-2px) scale(1.02)';
      el.style.boxShadow = variant === 'primary'
        ? '0 8px 30px var(--glow-primary)'
        : '0 0 20px var(--glow-soft)';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = 'translateY(0) scale(1)';
      el.style.boxShadow = variants[variant].boxShadow as string;
    },
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}
