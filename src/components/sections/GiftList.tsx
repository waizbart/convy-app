import { motion } from 'framer-motion';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { PixBox } from '../ui/PixBox';
import { DecoLine } from '../layout/DecoLine';

export function GiftList() {
  return (
    <SectionWrapper label="Lista de presentes" title="Sugestões de Presentes" id="gifts">
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {inviteConfig.gifts.map((category) => (
          <Card key={category.category}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'var(--color-primary)',
                marginBottom: '0.75rem',
              }}
            >
              {category.category}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {category.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                    padding: '0.3rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      flexShrink: 0,
                      boxShadow: '0 0 4px var(--glow-primary)',
                    }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <PixBox />
      </motion.div>

      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '2rem' }}>
        <DecoLine />
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            color: 'var(--color-text-muted)',
            maxWidth: 420,
            margin: '1.5rem auto 0',
            lineHeight: 1.7,
          }}
        >
          {inviteConfig.copy.giftClosingNote}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
