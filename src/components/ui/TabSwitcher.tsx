import type { ReactNode } from 'react';
import { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
}

export function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [active, setActive] = useState(tabs[0]?.key ?? '');

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        style={{
          display: 'flex',
          gap: 0,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,63,164,0.2)',
          borderRadius: 50,
          padding: '4px',
          marginBottom: '1.5rem',
          width: 'fit-content',
          margin: '0 auto 1.5rem',
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 500 : 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.5rem',
                borderRadius: 50,
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                background: isActive
                  ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))'
                  : 'transparent',
                color: isActive ? '#fff' : 'var(--color-text-muted)',
                boxShadow: isActive ? '0 2px 12px var(--glow-primary)' : 'none',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {tabs.map((tab) => (
        <div
          key={tab.key}
          role="tabpanel"
          hidden={tab.key !== active}
          style={{
            opacity: tab.key === active ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
