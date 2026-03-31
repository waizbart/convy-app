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
    dateLabel: '19h00',
    venue: 'Império Eventos',
    doorsOpenTime: '19h00',
  },

  // ── FRASES
  copy: {
    heroInvitePrefix: 'Você está cordialmente convidado para',
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

  // ── FOTOS
  // Coloque as fotos em /public/images/ e atualize os caminhos abaixo
  photos: {
    // Foto de fundo do Hero — funciona melhor em retrato (vertical) ou landscape bem centralizado
    hero: '/images/photo-hero.jpg',
    // Galeria — adicione/remova conforme a quantidade de fotos disponíveis
    gallery: [
      '/images/gallery-1.jpg',
      '/images/gallery-2.jpg',
      '/images/gallery-3.jpg',
      '/images/gallery-4.jpg',
      '/images/gallery-5.jpg',
      '/images/gallery-6.jpg',
      '/images/gallery-7.jpg',
      '/images/gallery-8.jpg',
      '/images/gallery-9.jpg',
      '/images/gallery-10.jpg',
      '/images/gallery-11.jpg',
      '/images/gallery-12.jpg',
      '/images/gallery-13.jpg',
      '/images/gallery-14.jpg',
      '/images/gallery-15.jpg'
    ],
  },

  // ── DRESS CODE
  dressCode: {
    title: 'Esporte Fino',
    womenNote: '',
    womenWarning: 'Por favor, evite o rosa — é a cor reservada para a aniversariante.',
    menNote: '',
    forbiddenColor: 'rosa',
    // Imagens em /public/images/ — adicione/remova paths conforme necessário
    womenImages: [
      '/images/dress-women-1.png',
      '/images/dress-women-2.png',
      '/images/dress-women-3.png',
      '/images/dress-women-4.png',
      '/images/dress-women-5.png',
    ],
    menImages: [
      '/images/dress-men-1.png',
      '/images/dress-men-2.png',
      '/images/dress-men-3.png',
      '/images/dress-men-4.png',
      '/images/dress-men-5.png',
    ],
  },

  // ── MANUAL DO CONVIDADO
  guestManual: [
    {
      icon: 'clock',
      title: 'Pontualidade',
      text: 'O salão abre a partir das 18h30. Seja pontual e aproveite cada momento!',
    },
    {
      icon: 'check',
      title: 'Confirmação',
      text: 'Confirme sua presença até 20 de abril pelo formulário de RSVP neste convite.',
    },
    {
      icon: 'camera',
      title: 'Fotos',
      text: 'Tirem bastante foto! Cada clique vira uma lembrança pra vida toda.',
    },
  ],

  // ── LISTA DE PRESENTES
  gifts: [
    {
      category: 'Roupas',
      items: [
        'Camisetas / Blusas – P/M',
        'Shorts / Calças – 38',
        'Pijama',
      ],
    },
    {
      category: 'Calçados & Outros',
      items: [
        'Calçados – nº 37',
        'Bolsa',
        'Mimos decorativos para quarto',
      ],
    },
    {
      category: 'Acessórios (prata)',
      items: [
        'Brinco, pulseira, colar',
        'Anel – nº 16',
      ],
    },
    {
      category: 'Beleza & Cuidados',
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
    src: '/audio/background.mp3',
    volume: 0.32,
    loop: true,
    autoplayOnOpen: true,
  },

} as const;

export type InviteConfig = typeof inviteConfig;
