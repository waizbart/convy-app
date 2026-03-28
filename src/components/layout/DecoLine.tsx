interface DecoLineProps {
  variant?: 'single' | 'triple';
}

export function DecoLine({ variant = 'single' }: DecoLineProps) {
  const diamond = (
    <span
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        transform: 'rotate(45deg)',
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-silver))',
        boxShadow: '0 0 8px var(--glow-primary)',
        flexShrink: 0,
        animation: 'diamondSpin 3s ease-in-out infinite',
      }}
      aria-hidden="true"
    />
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        maxWidth: 320,
        margin: '0 auto',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(to right, transparent, var(--color-silver-cold), var(--color-primary), var(--color-silver-cold), transparent)',
        }}
      />
      {variant === 'triple' ? (
        <>
          {diamond}
          <div style={{ width: 4, height: 4, transform: 'rotate(45deg)', background: 'var(--color-silver-cold)', flexShrink: 0 }} />
          {diamond}
          <div style={{ width: 4, height: 4, transform: 'rotate(45deg)', background: 'var(--color-silver-cold)', flexShrink: 0 }} />
          {diamond}
        </>
      ) : (
        diamond
      )}
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(to left, transparent, var(--color-silver-cold), var(--color-primary), var(--color-silver-cold), transparent)',
        }}
      />
    </div>
  );
}
