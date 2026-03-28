import type { InviteConfig } from '../config/invite.config';

export function applyTheme(theme: InviteConfig['theme']): void {
  const root = document.documentElement;

  // Colors
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-light', theme.colors.primaryLight);
  root.style.setProperty('--color-primary-dark', theme.colors.primaryDark);
  root.style.setProperty('--color-silver', theme.colors.silver);
  root.style.setProperty('--color-silver-cold', theme.colors.silverCold);
  root.style.setProperty('--color-bg', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-surface-alt', theme.colors.surfaceAlt);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-muted', theme.colors.textMuted);

  // Fonts
  root.style.setProperty('--font-display', theme.fonts.display);
  root.style.setProperty('--font-serif', theme.fonts.serif);
  root.style.setProperty('--font-sans', theme.fonts.sans);

  // Glow
  root.style.setProperty('--glow-primary', theme.glow.primary);
  root.style.setProperty('--glow-soft', theme.glow.soft);
  root.style.setProperty('--glow-ultra', theme.glow.ultra);
}
