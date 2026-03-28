import { useState, useEffect } from 'react';

interface CountdownResult {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, '0');
}

function calcDiff(targetDate: Date): CountdownResult {
  const now = Date.now();
  const target = targetDate.getTime();
  const diff = Math.max(0, target - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days    = Math.floor(totalSeconds / 86400);
  const hours   = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days:    pad(days),
    hours:   pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

export function useCountdown(targetDate: Date): CountdownResult {
  const [result, setResult] = useState<CountdownResult>(() => calcDiff(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setResult(calcDiff(targetDate));
    }, 1000);

    return () => clearInterval(id);
  }, [targetDate]);

  return result;
}
