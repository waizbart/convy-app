import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { inviteConfig } from '../../config/invite.config';

export function PixBox() {
  const [copied, setCopied] = useState(false);

  function copyKey() {
    const key = inviteConfig.pix.keyRaw;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(key).then(() => triggerCopied()).catch(() => fallbackCopy(key));
    } else {
      fallbackCopy(key);
    }
  }

  function fallbackCopy(text: string) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      triggerCopied();
    } catch {
      // Silently fail on unsupported browsers
    }
    document.body.removeChild(ta);
  }

  function triggerCopied() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,63,164,0.25)',
        borderRadius: 12,
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: '2rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: '0.5rem',
        }}
      >
        Pix
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          marginBottom: '0.5rem',
        }}
      >
        {inviteConfig.pix.keyType}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--color-text)',
          marginBottom: '1rem',
          letterSpacing: '0.06em',
        }}
      >
        {inviteConfig.pix.key}
      </p>
      <button
        type="button"
        onClick={copyKey}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.6rem 1.5rem',
          borderRadius: 50,
          border: `1px solid ${copied ? 'rgba(100,220,100,0.6)' : 'rgba(255,63,164,0.4)'}`,
          background: copied ? 'rgba(100,220,100,0.1)' : 'transparent',
          color: copied ? '#7dff7d' : 'var(--color-primary)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          minWidth: 160,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {copied
          ? <><Check size={13} strokeWidth={2} style={{ marginRight: '0.35rem' }} />Copiado!</>
          : <><Copy size={13} strokeWidth={1.5} style={{ marginRight: '0.35rem' }} />Copiar chave</>
        }
      </button>
    </div>
  );
}
