// =============================================================================
// Kanok Miah — Verified Facts & Constants
// =============================================================================

export const SITE = {
  name: 'Kanok Miah',
  tagline: 'Digital Growth & AI SEO Consultant',
  domain: 'https://kanokmiah.com',
  foundedYear: 2019,
  yearsExperience: 6,
  seoProjects: 210,
  totalProjects: 350,
  clientRetention: 98,
  countriesServed: 5,
} as const;

export const NAP = {
  name: 'Kanok Miah',
  address: 'Mohammadia Housing Ltd, Road No. 7, Dhaka 1207, Bangladesh',
  phone: '+8****12-883101',
  email: 'info@kanokmiah.com',
  whatsapp: '+8****12-883101',
} as const;

export const SOCIAL = {
  facebook: 'https://facebook.com/kanokmiahseo',
  linkedin: 'https://linkedin.com/in/kanok-miah',
  instagram: 'https://instagram.com/kanokmiahbd',
  pinterest: 'https://pinterest.com/mdkanokmiah',
  youtube: 'https://youtube.com/@kanokmiah',
  googleMaps: 'https://maps.app.goo.gl/dPonZJXCNG2BLa1f9',
} as const;

export const PACKAGES = [
  {
    name: 'Standard',
    price: 25000,
    currency: 'BDT',
    features: [
      'SEO',
      'Facebook Ads',
      'Instagram Ads',
      'GBP Management',
      'Analytics & Reporting',
      'Consultant Support',
    ],
  },
  {
    name: 'Professional',
    price: 35000,
    currency: 'BDT',
    features: [
      'Everything in Standard',
      'YouTube SEO',
      'Google Ads',
    ],
  },
  {
    name: 'Premium',
    price: 55000,
    currency: 'BDT',
    features: [
      'Everything in Professional',
      'YouTube Ads',
      'Social Media Management',
      'Branding',
      'Website Maintenance',
      '6 YouTube videos',
      '6 Shorts',
    ],
  },
] as const;

export const PAYMENT_METHODS = [
  'bKash',
  'Nagad',
  'Rocket',
  'Bank Transfer',
  'Visa/Mastercard',
  'PayPal',
  'Wise',
] as const;

export const CASE_STUDIES = [
  {
    slug: 'locksmith-dundee',
    client: 'Locksmith Dundee',
    type: 'Local SEO',
    market: 'UK',
    metrics: { traffic: '+320% organic traffic', rank: '#1 local map pack' },
  },
  {
    slug: 'landlord-certificates',
    client: 'Landlord Certificates',
    type: 'B2B lead gen',
    market: 'UK',
    metrics: { leads: '+245% lead growth', keywords: '+1,200 ranked keywords' },
  },
  {
    slug: 'das-taxis',
    client: 'Das Taxis',
    type: 'Transport, mobile SEO',
    market: 'UK',
    metrics: { mobile: '+180% mobile traffic', bookings: '+410% direct bookings' },
  },
  {
    slug: 'smmsun',
    client: 'SMMSun',
    type: 'SaaS',
    market: 'Global',
    metrics: { traffic: '+520% organic traffic', keywords: '+4,500 top-10 keywords' },
  },
  {
    slug: 'smmgen',
    client: 'SMMGen',
    type: 'Technical SEO / SaaS',
    market: 'Global',
    metrics: { crawl: '+310% crawl efficiency', signups: '+215% sign-up growth' },
  },
  {
    slug: 'morethanpanel',
    client: 'MoreThanPanel',
    type: 'Programmatic SEO / B2B',
    market: 'Global',
    metrics: { mrr: '+640% MRR', keywords: '+8,200 keywords' },
  },
  {
    slug: 'mir-cement',
    client: 'Mir Cement',
    type: 'Enterprise / industrial',
    market: 'Bangladesh',
    metrics: { brand: '+140% brand search volume', impressions: '+3,400 monthly impressions' },
  },
  {
    slug: 'dhaka-apparels',
    client: 'Dhaka Apparels',
    type: 'International B2B / export',
    market: 'Bangladesh',
    metrics: { inquiries: '+410% B2B inquiries', keywords: '+950 global keywords' },
  },
  {
    slug: 'stealth-windshield',
    client: 'Stealth Windshield',
    type: 'E-commerce / schema',
    market: 'UK',
    metrics: { sales: '+285% organic sales', ctr: '+38% SERP CTR' },
  },
  {
    slug: 'iqra-cadet-madrasha',
    client: 'Iqra Cadet Madrasha',
    type: 'Facebook Ads / education',
    market: 'Bangladesh',
    metrics: { roas: '3.5x ROAS' },
  },
  {
    slug: 'dohar-malabis',
    client: 'দোহার মালাবিস',
    type: 'Facebook Ads / e-commerce',
    market: 'Bangladesh',
    metrics: { sales: '+280% monthly sales', roas: '4.2x ROAS' },
  },
  {
    slug: 'ansar-vdp-tangail',
    client: 'Ansar VDP Sadar, Tangail',
    type: 'Facebook Ads / govt',
    market: 'Bangladesh',
    metrics: { reach: '120K+ reached', engagement: '+450% engagement' },
  },
  {
    slug: 'fixzoo',
    client: 'Fixzoo',
    type: 'Facebook Ads / retail',
    market: 'UK',
    metrics: { roas: '5.1x retargeting ROAS', costPerPurchase: '-35% cost per purchase' },
  },
  {
    slug: 'smmjobz',
    client: 'SMMJobz',
    type: 'Google Ads / SaaS',
    market: 'Global',
    metrics: { signups: '+340% daily sign-ups', cpl: '$0.12 avg CPL' },
  },
  {
    slug: 'cloudmatrix-technologies',
    client: 'CloudMatrix Technologies',
    type: 'Google Ads / B2B tech',
    market: 'Global',
    metrics: { roi: '6.4x pipeline ROI', leads: '+215% inbound B2B leads' },
  },
  {
    slug: 'smmrx',
    client: 'SMMRX',
    type: 'Google Ads',
    market: 'Global',
    metrics: { conversions: '18,500+ conversions', cpa: '-42% CPA' },
  },
] as const;

export const TESTIMONIALS = [
  {
    author: 'Jubayer Ahmed',
    role: 'Founder, Iqra Cadet Madrasha',
    text: 'Kanok Miah is an excellent SEO specialist. We hired him, and our main keywords started ranking quickly. Organic traffic and engagement increased significantly. He is responsible, provides regular reports, and focuses on real results. Highly recommended!',
  },
  {
    author: 'Jiaur Rahman',
    role: 'Founder, SMMRX',
    text: 'SMMRX — Kanok Miah helped us scale our Google Ads campaigns. Conversions increased dramatically while cost per acquisition dropped. His data-driven approach delivers real ROI.',
  },
  {
    author: 'District Ansar VDP Office Tangail',
    role: 'Government Office',
    text: 'District Ansar VDP Office Tangail — Kanok Miah managed our Facebook campaign professionally. We reached 120K+ people with 450% engagement increase. His work helped us connect with the community effectively.',
  },
] as const;
