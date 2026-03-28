import { motion } from 'framer-motion';
import { CalendarDays, Building2, MapPin } from 'lucide-react';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function EventDetails() {
  return (
    <SectionWrapper label="O grande dia" title="Detalhes do Evento" id="event">
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {/* Date & Time */}
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                color: 'var(--color-primary)',
                filter: 'drop-shadow(0 0 8px var(--glow-primary))',
              }}
              aria-hidden="true"
            >
              <CalendarDays size={36} strokeWidth={1.25} />
            </div>
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
              Data & Horário
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '0.06em',
                marginBottom: '0.25rem',
              }}
            >
              {inviteConfig.event.dayOfWeek}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: 'var(--color-silver)',
                marginBottom: '0.25rem',
              }}
            >
              {inviteConfig.event.dateLabel}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
              }}
            >
              às {inviteConfig.event.time}
            </p>
          </div>
        </Card>

        {/* Venue */}
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                color: 'var(--color-primary)',
                filter: 'drop-shadow(0 0 8px var(--glow-primary))',
              }}
              aria-hidden="true"
            >
              <Building2 size={36} strokeWidth={1.25} />
            </div>
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
              Local
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              {inviteConfig.event.venue}
            </p>
            <Button href={inviteConfig.links.googleMaps} variant="outline">
              <MapPin size={14} strokeWidth={1.5} style={{ marginRight: '0.35rem', flexShrink: 0 }} />
              Ver localização
            </Button>
          </div>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
