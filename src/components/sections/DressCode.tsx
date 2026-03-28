import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { inviteConfig } from '../../config/invite.config';
import { SectionWrapper, itemVariants } from '../layout/SectionWrapper';
import { TabSwitcher } from '../ui/TabSwitcher';
import { Carousel } from '../ui/Carousel';

function WomenPanel() {
  const { dressCode } = inviteConfig;
  return (
    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
      <Carousel images={dressCode.womenImages} alt="Look feminino" />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--color-text)',
          marginBottom: '0.75rem',
          marginTop: '1.25rem',
        }}
      >
        {dressCode.womenNote}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'var(--color-primary)',
          background: 'rgba(255,63,164,0.08)',
          border: '1px solid rgba(255,63,164,0.25)',
          borderRadius: 8,
          padding: '0.6rem 1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          maxWidth: 320,
        }}
      >
        {dressCode.womenWarning}
      </p>
    </div>
  );
}

function MenPanel() {
  const { dressCode } = inviteConfig;
  return (
    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
      <Carousel images={dressCode.menImages} alt="Look masculino" />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--color-text)',
          marginBottom: '0.75rem',
          marginTop: '1.25rem',
        }}
      >
        {dressCode.menNote}
      </p>
    </div>
  );
}

export function DressCode() {
  const tabs = [
    { key: 'mulheres', label: 'Mulheres', content: <WomenPanel /> },
    { key: 'homens',   label: 'Homens', content: <MenPanel /> },
  ];

  return (
    <SectionWrapper label="Dress code" title={inviteConfig.dressCode.title} id="dresscode">
      <motion.div variants={itemVariants}>
        <TabSwitcher tabs={tabs} />
      </motion.div>
    </SectionWrapper>
  );
}
