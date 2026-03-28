import { useState, useEffect } from 'react';
import { inviteConfig } from './config/invite.config';
import { applyTheme } from './utils/applyTheme';
import { useMusic } from './hooks/useMusic';

import { EnvelopeScene } from './components/opening/EnvelopeScene';
import { ParticleField } from './components/layout/ParticleField';
import { MusicButton } from './components/layout/MusicButton';

import { Hero } from './components/sections/Hero';
import { EventDetails } from './components/sections/EventDetails';
import { Countdown } from './components/sections/Countdown';
import { DressCode } from './components/sections/DressCode';
import { GuestManual } from './components/sections/GuestManual';
import { GiftList } from './components/sections/GiftList';
import { RSVP } from './components/sections/RSVP';
import { Footer } from './components/sections/Footer';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const music = useMusic(inviteConfig.audio.src, inviteConfig.audio.volume);

  // Inject CSS theme tokens on mount
  useEffect(() => {
    applyTheme(inviteConfig.theme);
  }, []);

  function handleOpen() {
    setEnvelopeOpened(true);
    if (inviteConfig.audio.autoplayOnOpen) {
      music.start();
    }
  }

  return (
    <>
      {/* Opening sequence */}
      <EnvelopeScene onOpen={handleOpen} visible={!envelopeOpened} />

      {/* Persistent elements */}
      <ParticleField />
      <MusicButton playing={music.playing} onToggle={music.toggle} />

      {/* Main content */}
      <main
        style={{
          opacity: envelopeOpened ? 1 : 0,
          transition: 'opacity 0.8s ease',
          position: 'relative',
          zIndex: 1,
          pointerEvents: envelopeOpened ? 'auto' : 'none',
        }}
        aria-hidden={!envelopeOpened}
      >
        <Hero />
        <EventDetails />
        <Countdown />
        <DressCode />
        <GuestManual />
        <GiftList />
        <RSVP />
        <Footer />
      </main>
    </>
  );
}
