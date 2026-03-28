import { Music2, VolumeX } from 'lucide-react';

interface MusicButtonProps {
  playing: boolean;
  onToggle: () => void;
}

export function MusicButton({ playing, onToggle }: MusicButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? 'Pausar música' : 'Tocar música'}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid rgba(255,63,164,0.4)',
        background: 'rgba(15,9,32,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: 'var(--color-primary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: playing
          ? '0 0 16px var(--glow-primary), 0 0 32px var(--glow-soft)'
          : '0 0 8px rgba(0,0,0,0.4)',
        transition: 'box-shadow 0.3s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      }}
    >
      {playing
        ? <Music2 size={20} strokeWidth={1.5} />
        : <VolumeX size={20} strokeWidth={1.5} />
      }
    </button>
  );
}
