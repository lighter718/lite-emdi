import type { PricingPlan, PainPoint, ValuePillar, WorkflowStep, FAQItem } from '../types/landing';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'cs-ai',
    badge: 'OTOMATISASI CHAT 24/7',
    title: 'CS AI System',
    price: 'Rp 299.000',
    normalPrice: 'Rp 423.000',
    features: [
      'Pemasangan CS / Sales AI 24 Jam',
      'Sudah termasuk Credit AI',
      'Otomatisasi balasan chat & respons toko'
    ],
    buttonText: 'Pilih Paket CS AI',
    waMessage: 'Halo Lite EMDI, saya tertarik Paket CS AI System'
  },
  {
    id: 'digital-marketing',
    badge: 'SPECIAL PROMO — MOST POPULAR',
    isPopular: true,
    title: 'Digital Marketing UMKM',
    price: 'Rp 1.500.000',
    normalPrice: 'Rp 2.000.000',
    features: [
      'Pembuatan Konten (5 Foto + 5 Video)',
      'Market Research, Branding & Selling Strategy',
      'Sudah Termasuk Budget Iklan Rp 300.000'
    ],
    buttonText: 'Pilih Paket Marketing',
    waMessage: 'Halo Lite EMDI, saya tertarik Paket Digital Marketing UMKM'
  },
  {
    id: 'affiliate-mcn',
    badge: 'BOOST SALES',
    title: 'Campaign Affiliate MCN',
    price: 'Rp 1.500.000',
    normalPrice: 'Rp 2.000.000',
    features: [
      'Pencarian & Manajemen 30 Affiliate Creator',
      'Briefing & Penyusunan Arahan Konten',
      'Monitoring, Evaluasi & Laporan Performa'
    ],
    buttonText: 'Pilih Paket Affiliate',
    waMessage: 'Halo Lite EMDI, saya tertarik Paket Campaign Affiliate MCN'
  },
  {
    id: 'marketing-ai',
    badge: 'BEST VALUE',
    title: 'Digital Marketing AI',
    price: 'Rp 1.500.000',
    normalPrice: 'Rp 1.800.000',
    features: [
      'Pembuatan 15 Konten Foto AI',
      'Manajemen 5 Affiliator/Influencer Visit',
      'Strategi Iklan & Budget Iklan Rp 300.000'
    ],
    buttonText: 'Pilih Paket Marketing AI',
    waMessage: 'Halo Lite EMDI, saya tertarik Paket Digital Marketing AI'
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: '1',
    title: 'Toko Sepi & Bingung Bikin Konten',
    description: 'Kehabisan ide dan tak ada waktu urus media sosial secara konsisten.'
  },
  {
    id: '2',
    title: 'Budget Marketing Terbatas',
    description: "Ingin pasang iklan tapi takut rugi, 'bocor', dan harganya kemahalan."
  },
  {
    id: '3',
    title: 'Chat Pembeli Menumpuk',
    description: 'Respon lambat bikin calon pembeli frustrasi dan kabur ke kompetitor.'
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: '1',
    icon: '💰',
    title: 'Harga Transparan & Ramah Kantong',
    description: 'Tanpa hidden fees, sangat ramah untuk menjaga kestabilan cash-flow bisnis yang sedang berkembang.'
  },
  {
    id: '2',
    icon: '⚡',
    title: 'Eksekusi Cepat',
    description: 'Proses kerja simpel, terstruktur, tanpa alur korporat yang rumit dan berbelit-belit.'
  },
  {
    id: '3',
    icon: '🤝',
    title: 'Direct Human Support',
    description: 'Diskusi langsung dengan Sales Executive profesional yang paham dinamika nyata pasar UMKM.'
  },
  {
    id: '4',
    icon: '📈',
    title: 'Backed by LMG Group',
    description: 'Solusi teruji dan terpercaya dengan standar ekosistem media digital terintegrasi.'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Pilih Paket',
    description: 'Tentukan layanan yang paling pas dengan skala usaha dan target bisnismu saat ini.'
  },
  {
    stepNumber: 2,
    title: 'Quick Demo & Diskusi',
    description: 'Hubungi Sales Executive kami via WhatsApp untuk demo singkat & konsultasi gratis.'
  },
  {
    stepNumber: 3,
    title: 'Eksekusi & Cuan!',
    description: 'Tim Lite EMDI langsung bergerak cepat mengeksekusi strategi digital bisnismu.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah ada biaya tersembunyi selain harga paket?',
    answer: 'Tidak ada. Semua harga yang tercantum bersifat transparan dan sudah mencakup inklusi yang tertera pada detail paket.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana jika saya bingung memilih paket yang cocok?',
    answer: 'Anda bisa langsung berkonsultasi gratis dengan Sales Executive kami via WhatsApp untuk menganalisis kebutuhan bisnismu terlebih dahulu.'
  },
  {
    id: 'faq-3',
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Eksekusi dilakukan secara cepat tepat setelah sesi diskusi dan kesepakatan paket selesai.'
  }
];