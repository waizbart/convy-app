import { useEffect, useRef, useState } from 'react';

interface FlipUnitProps {
  value: string;
  label: string;
}

export function FlipUnit({ value, label }: FlipUnitProps) {
  const prevValueRef = useRef(value);
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      setIsFlipping(true);

      // Mid-point: swap the value
      const mid = setTimeout(() => {
        setDisplayValue(value);
        prevValueRef.current = value;
      }, 150);

      // End: remove flip class
      const end = setTimeout(() => {
        setIsFlipping(false);
      }, 300);

      return () => {
        clearTimeout(mid);
        clearTimeout(end);
      };
    }
  }, [value]);

  return (
    <div style={{ textAlign: 'center', minWidth: 72 }}>
      {/* Card */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, var(--color-surface-alt) 0%, var(--color-surface) 100%)',
          border: '1px solid rgba(255,63,164,0.2)',
          borderRadius: 10,
          overflow: 'hidden',
          width: 72,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Horizontal separator */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 1,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 2,
          }}
          aria-hidden="true"
        />

        {/* Value */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.2rem',
            fontWeight: 700,
            background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-silver) 50%, var(--color-primary-light) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            transform: isFlipping ? 'rotateX(-90deg)' : 'rotateX(0deg)',
            transition: 'transform 0.15s ease-in',
            display: 'block',
          }}
        >
          {displayValue}
        </span>
      </div>

      {/* Label */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          marginTop: '0.5rem',
        }}
      >
        {label}
      </p>
    </div>
  );
}
