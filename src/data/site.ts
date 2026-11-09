import { getContent, photoProps } from '../lib/content';

const { settings, home, services: serviceDocs, properties } = await getContent();

export const site = {
  name: 'Cornerstone Assets Property Ltd',
  shortName: 'Cornerstone Assets',
  description:
    'Cornerstone Assets Property Ltd builds, manages and furnishes quality property in Worcester and the surrounding area.',
  contact: { email: settings.email, phone: settings.phone, address: settings.address, hours: settings.hours },
  company: { number: settings.companyNumber, registeredIn: 'England and Wales', vat: settings.vat },
} as const;

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Contact', href: '#contact' },
] as const;

export const hero = {
  heading: home.heroHeading,
  text: home.heroText,
  image: photoProps(home.heroImage, 1200, 1500, 'Home page copy'),
  primaryCta: { label: 'Make an enquiry', href: '#contact' },
  secondaryCta: { label: 'Our services', href: '#services' },
} as const;

export const about = { heading: home.aboutHeading, paragraphs: home.aboutParagraphs, values: home.values } as const;

export const services = serviceDocs;
export const servicesCopy = { heading: home.servicesHeading, intro: home.servicesIntro } as const;

export const accommodation = {
  heading: home.accommodationHeading,
  intro: home.accommodationIntro,
  properties: properties.map((p) => ({
    name: p.name, type: p.propertyType, area: p.area, description: p.description,
    image: photoProps(p.image, 800, 600, p.name),
  })),
} as const;

export const contactCopy = { heading: home.contactHeading, intro: home.contactIntro } as const;