import { useState, useEffect, useRef, useCallback } from 'react';

interface UseMusicResult {
  playing: boolean;
  toggle: () => void;
  start: () => void;
}

export function useMusic(src: string, volume: number): UseMusicResult {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src, volume]);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || playing) return;

    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // Autoplay policy prevented play — no-op
    });
  }, [playing]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
      }).catch(() => {
        // Blocked by browser policy
      });
    }
  }, [playing]);

  return { playing, toggle, start };
}
