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
} as const;

export const NAP = {
  name: 'Kanok Miah',
  address: 'Mohammadia Housing Ltd, Road No. 7, Dhaka 1207, Bangladesh',
  phone: '+8801712-883101',
  email: 'info@kanokmiah.com',
  whatsapp: '+8801712-883101',
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
    metrics: { traffic: '+320%', rank: '#1 local map pack' },
  },
  {
    slug: 'landlord-certificates',
    client: 'Landlord Certificates',
    type: 'B2B lead gen',
    market: 'UK',
    metrics: { leads: '+245%', keywords: '+1,200 ranked' },
  },
  {
    slug: 'das-taxis',
    client: 'Das Taxis',
    type: 'Transport, mobile SEO',
    market: 'UK',
    metrics: { mobile: '+180%', bookings: '+410%' },
  },
  {
    slug: 'smmsun',
    client: 'SMMSun',
    type: 'SaaS',
    market: 'Global',
    metrics: { traffic: '+520%', keywords: '+4,500 top-10' },
  },
  {
    slug: 'smmgen',
    client: 'SMMGen',
    type: 'Technical SEO / SaaS',
    market: 'Global',
    metrics: { crawl: '+310%', signups: '+215%' },
  },
  {
    slug: 'morethanpanel',
    client: 'MoreThanPanel',
    type: 'Programmatic SEO / B2B',
    market: 'Global',
    metrics: { mrr: '+640%', keywords: '+8,200' },
  },
  {
    slug: 'mir-cement',
    client: 'Mir Cement',
    type: 'Enterprise / industrial',
    market: 'Bangladesh',
    metrics: { brand: '+140%', impressions: '+3,400/mo' },
  },
  {
    slug: 'dhaka-apparels',
    client: 'Dhaka Apparels',
    type: 'International B2B / export',
    market: 'Bangladesh',
    metrics: { inquiries: '+410%', keywords: '+950 global' },
  },
  {
    slug: 'stealth-windshield',
    client: 'Stealth Windshield',
    type: 'E-commerce / schema',
    market: 'UK',
    metrics: { sales: '+285%', ctr: '+38%' },
  },
  {
    slug: 'iqra-cadet-madrasha',
    client: 'Iqra Cadet Madrasha',
    type: 'Facebook Ads / education',
    market: 'Bangladesh',
    metrics: { roas: '3.5x' },
  },
  {
    slug: 'dohar-malabis',
    client: 'দোহার মালাবিস',
    type: 'Facebook Ads / e-commerce',
    market: 'Bangladesh',
    metrics: { sales: '+280%', roas: '4.2x' },
  },
  {
    slug: 'ansar-vdp-tangail',
    client: 'Ansar VDP Sadar, Tangail',
    type: 'Facebook Ads / govt',
    market: 'Bangladesh',
    metrics: { reach: '120K+', engagement: '+450%' },
  },
  {
    slug: 'fixzoo',
    client: 'Fixzoo',
    type: 'Facebook Ads / retail',
    market: 'UK',
    metrics: { roas: '5.1x retargeting', costPerPurchase: '-35%' },
  },
  {
    slug: 'smmjobz',
    client: 'SMMJobz',
    type: 'Google Ads / SaaS',
    market: 'Global',
    metrics: { signups: '+340%/day', cpl: '$0.12' },
  },
  {
    slug: 'cloudmatrix-technologies',
    client: 'CloudMatrix Technologies',
    type: 'Google Ads / B2B tech',
    market: 'Global',
    metrics: { roi: '6.4x pipeline', leads: '+215% inbound' },
  },
  {
    slug: 'smmrx',
    client: 'SMMRX',
    type: 'Google Ads',
    market: 'Global',
    metrics: { conversions: '18,500+', cpa: '-42%' },
  },
] as const;

export const TESTIMONIALS = [
  {
    author: 'District Ansar VDP Office Tangail',
    text: 'District Ansar VDP Office Tangail — testimonial text pending',
  },
  {
    author: 'Jiaur Rahman',
    role: 'Founder, SMMRX',
    text: 'SMMRX — testimonial text pending',
  },
  {
    author: 'Jubayer Ahmed',
    role: 'Founder, Iqra Cadet Madrasha',
    text: 'Iqra Cadet Madrasha — testimonial text pending',
  },
] as const;
