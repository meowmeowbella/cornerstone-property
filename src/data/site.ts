// TODO: every value in this file is placeholder copy. Edit here only; no layout code needs touching.

export interface Service {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export interface Property {
  name: string;
  type: string;
  area: string;
  description: string;
}

export const site = {
  name: 'Cornerstone Assets Property Ltd',
  shortName: 'Cornerstone Assets',
  description:
    'Cornerstone Assets Property Ltd builds, manages and furnishes quality property in Worcester and the surrounding area.',
  contact: {
    email: 'enquiries@example.co.uk', // TODO: real address
    phone: '01905 000000', // TODO
    address: 'Worcester, Worcestershire', // TODO: full registered address
    hours: 'Monday to Friday, 9am to 5pm', // TODO
  },
  company: {
    number: '00000000', // TODO: Companies House number
    registeredIn: 'England and Wales',
    vat: 'GB 000 0000 00', // TODO
  },
} as const;

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Contact', href: '#contact' },
] as const;

export const hero = {
  heading: 'Property built well and looked after properly.',
  text: 'Cornerstone Assets develops, furnishes and manages property for businesses, contractors and guests who expect a high standard.',
  primaryCta: { label: 'Make an enquiry', href: '#contact' },
  secondaryCta: { label: 'Our services', href: '#services' },
} as const;

export const about = {
  heading: 'A property company with its own hands on the work',
  paragraphs: [
    'Cornerstone Assets Property Ltd is based in Worcester. We build, refurbish and manage property ourselves, so the standard you see on day one is the standard you get throughout.',
    'Our work covers construction and development, corporate accommodation, and homes for contractors and leisure guests. Each part of the business supports the others.',
  ],
  values: [
    { title: 'Built to last', text: 'Sound construction and honest specification.' },
    { title: 'Managed directly', text: 'One team responsible from handover to housekeeping.' },
    { title: 'Simple to deal with', text: 'Clear terms, quick replies, no surprises.' },
  ],
} as const;

export const services: Service[] = [
  {
    id: 'construction',
    title: 'Construction & Development',
    summary: 'New builds, conversions and refurbishments delivered to a high specification.',
    points: ['Residential and mixed-use schemes', 'Refurbishment and conversion', 'Project management'],
  },
  {
    id: 'corporate',
    title: 'Corporate Accommodation',
    summary: 'Furnished, fully serviced homes for staff relocating or working away from home.',
    points: ['Flexible stays from one month', 'Bills and housekeeping included', 'Single point of contact'],
  },
  {
    id: 'contractors',
    title: 'Contractors & Leisure',
    summary: 'Comfortable apartments for project teams, short breaks and longer visits.',
    points: ['Space for teams and shift patterns', 'Parking and workspace', 'Short and long stays'],
  },
];

export const accommodation = {
  heading: 'Our accommodation',
  intro: 'A selection of the apartments we manage across Worcester.',
  properties: [
    { name: 'Property one', type: 'Two-bedroom apartment', area: 'City centre', description: 'Placeholder description.' },
    { name: 'Property two', type: 'One-bedroom apartment', area: 'Riverside', description: 'Placeholder description.' },
    { name: 'Property three', type: 'Three-bedroom house', area: 'Suburbs', description: 'Placeholder description.' },
    { name: 'Property four', type: 'Studio', area: 'City centre', description: 'Placeholder description.' },
    { name: 'Property five', type: 'Two-bedroom apartment', area: 'Near rail station', description: 'Placeholder description.' },
    { name: 'Property six', type: 'Penthouse', area: 'Riverside', description: 'Placeholder description.' },
  ] satisfies Property[],
} as const;

export const contactCopy = {
  heading: 'Get in touch',
  intro: 'Tell us what you need and we will reply within one working day.',
} as const;
