// src/config/invite.config.ts
// ─────────────────────────────────────────────────────────────────
// ARQUIVO CENTRAL DE CONFIGURAÇÃO
// Todo texto, dado, link e cor configurável vem deste arquivo.
// ─────────────────────────────────────────────────────────────────

export const inviteConfig = {

  // ── IDENTIDADE
  person: {
    firstName: 'Karol',
    lastName: 'Pedroza',
    age: 15,
    sealLetter: 'K',
  },

  // ── EVENTO
  event: {
    date: new Date('2026-05-09T19:00:00'),
    dateLabel: '9 de maio de 2026',
    dayOfWeek: 'Sábado',
    time: '19h00',
    venue: 'Império Eventos',
    doorsOpenTime: '19h00',
  },

  // ── FRASES
  copy: {
    heroInvitePrefix: 'Você está cordialmente convidada para',
    heroQuote: 'Com muito carinho, te convido para celebrar um dia cheio de sonhos, sorrisos e muita emoção!',
    footerClosing: 'Com carinho',
    footerTagline: '15 anos · 9 de maio de 2026',
    manualClosingQuote: 'Esse dia foi planejado com muito carinho e dedicação, sua presença é muito importante para torná-lo ainda mais especial!',
    giftClosingNote: 'A sua presença já é o maior presente de todos.',
    rsvpClosingQuote: 'Esse dia, que a felicidade seja o principal motivo, com sorrisos e boas lembranças!',
    envelopeCardLabel: 'Você está convidada para',
  },

  // ── LINKS EXTERNOS
  links: {
    googleMaps: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x94c58a0f13093489:0x797dcaf3b0a93a7d',
    googleForms: 'https://docs.google.com/forms/d/e/1FAIpQLSdyfWtLVJ7cElLaIh2wK9HkLUecqkFtMINNZwkM44WUh7AesQ/viewform',
  },

  // ── RSVP
  rsvp: {
    deadline: '20 de abril de 2026',
    deadlineDate: new Date('2026-04-20'),
  },

  // ── PIX
  pix: {
    keyType: 'CPF',
    key: '542.748.318-76',
    keyRaw: '54274831876',
  },

  // ── DRESS CODE
  dressCode: {
    title: 'Esporte Fino',
    womenNote: 'Vestido midi, longo ou conjunto elegante.',
    womenWarning: 'Por favor, evite o rosa — é a cor reservada para a aniversariante.',
    menNote: 'Calça social, camisa ou blazer.',
    menTip: 'Tênis é bem-vindo, desde que o visual seja elegante.',
    forbiddenColor: 'rosa',
  },

  // ── MANUAL DO CONVIDADO
  guestManual: [
    {
      icon: '⏰',
      title: 'Pontualidade',
      text: 'O salão abre a partir das 19h00. Seja pontual e aproveite cada momento!',
    },
    {
      icon: '✅',
      title: 'Confirmação',
      text: 'Confirme sua presença até 20 de abril pelo formulário abaixo.',
    },
    {
      icon: '📸',
      title: 'Fotos',
      text: 'Tirem bastante foto! Cada clique vira uma lembrança pra vida toda.',
    },
  ],

  // ── LISTA DE PRESENTES
  gifts: [
    {
      category: '👗 Roupas',
      items: [
        'Camisetas / Blusas – P/M',
        'Shorts / Calças – 38',
        'Pijama',
      ],
    },
    {
      category: '👟 Calçados & Outros',
      items: [
        'Calçados – nº 37',
        'Bolsa',
        'Mimos decorativos para quarto',
      ],
    },
    {
      category: '✨ Acessórios (prata)',
      items: [
        'Brinco, pulseira, colar',
        'Anel – nº 16',
      ],
    },
    {
      category: '💄 Beleza & Cuidados',
      items: [
        'Perfume / Body Splash (doce ou floral)',
        'Hidratantes',
        'Maquiagem',
        'Kit de skincare',
      ],
    },
  ],

  // ── TEMA / DESIGN TOKENS
  theme: {
    colors: {
      primary: '#ff3fa4',
      primaryLight: '#ff85c8',
      primaryDark: '#c0006a',
      silver: '#e8d0f0',
      silverCold: '#c8c0d8',
      background: '#080610',
      surface: '#0f0920',
      surfaceAlt: '#1e0838',
      text: '#fdf6ff',
      textMuted: 'rgba(253,246,255,0.55)',
      green: '#25d366',
    },
    fonts: {
      display: 'Cinzel',
      serif: 'Cormorant Garamond',
      sans: 'Montserrat',
    },
    glow: {
      primary: 'rgba(255,63,164,0.6)',
      soft: 'rgba(255,63,164,0.2)',
      ultra: 'rgba(255,63,164,0.9)',
    },
    particles: {
      count: 38,
      colors: ['#ff3fa4', '#ff85c8', '#c8c0d8', '#ffffff', '#b4a0e8'],
    },
    confetti: {
      count: 90,
      colors: ['#ff3fa4', '#ff85c8', '#c8c0d8', '#ffffff', '#b4a0e8', '#e8d0f8'],
    },
  },

  // ── ÁUDIO
  audio: {
    src: '/audio/background.ogg',
    volume: 0.32,
    loop: true,
    autoplayOnOpen: true,
  },

} as const;

export type InviteConfig = typeof inviteConfig;
