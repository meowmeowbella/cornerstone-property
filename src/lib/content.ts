import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET;
if (!projectId || !dataset) throw new Error('Set SANITY_PROJECT_ID and SANITY_DATASET (see .env.example)');

const client = createClient({projectId, dataset, apiVersion: '2025-01-01', useCdn: false});
const builder = imageUrlBuilder(client);

interface Photo { asset: { _ref: string }; alt: string }
interface Settings { email: string; phone: string; address: string; hours: string; companyNumber: string; vat: string }
interface Home {
  heroHeading: string; heroText: string; heroImage: Photo;
  aboutHeading: string; aboutParagraphs: string[]; values: { title: string; text: string }[];
  servicesHeading: string; servicesIntro: string;
  accommodationHeading: string; accommodationIntro: string;
  contactHeading: string; contactIntro: string;
}
interface ServiceDoc { title: string; summary: string; points: string[] }
interface PropertyDoc { name: string; propertyType: string; area: string; description: string; image: Photo }

export function photoProps(img: Photo | undefined, width: number, height: number, owner: string) {
  if (!img?.asset) throw new Error(`Missing photo on "${owner}". Upload one in the Studio and publish.`);
  const src = builder.image(img).width(width).height(height).fit('crop').auto('format').url();
  return { src, alt: img.alt, width, height };
}

export async function getContent() {
  const [settings, home, services, properties] = await Promise.all([
    client.fetch<Settings | null>(`*[_id == "siteSettings"][0]`),
    client.fetch<Home | null>(`*[_id == "homePage"][0]`),
    client.fetch<ServiceDoc[]>(`*[_type == "service"] | order(order asc)`),
    client.fetch<PropertyDoc[]>(`*[_type == "property"] | order(order asc)`),
  ]);
  if (!settings || !home) {
    throw new Error('Publish "Home page copy" and "Contact & company details" in the Studio first.');
  }
  return { settings, home, services, properties };
}