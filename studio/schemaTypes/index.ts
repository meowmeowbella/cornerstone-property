import {defineArrayMember, defineField, defineType} from 'sanity'

const str = (name: string, title: string) =>
  defineField({name, title, type: 'string', validation: (r) => r.required()})
const txt = (name: string, title: string) =>
  defineField({name, title, type: 'text', rows: 3, validation: (r) => r.required()})
const photo = (name: string, title: string) =>
  defineField({
    name, title, type: 'image', options: {hotspot: true},
    fields: [str('alt', 'Describe the photo (for accessibility)')],
    validation: (r) => r.required(),
  })
const order = defineField({
  name: 'order', title: 'Display order (lowest first, e.g. 10, 20, 30)',
  type: 'number', validation: (r) => r.required().integer(),
})

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Contact & company details', type: 'document',
  fields: [
    str('email', 'Email'), str('phone', 'Phone'), str('address', 'Address'),
    str('hours', 'Opening hours'), str('companyNumber', 'Companies House number'), str('vat', 'VAT number'),
  ],
})

export const homePage = defineType({
  name: 'homePage', title: 'Home page copy', type: 'document',
  fields: [
    str('heroHeading', 'Main headline'), txt('heroText', 'Intro under headline'), photo('heroImage', 'Main photo'),
    str('aboutHeading', 'About heading'),
    defineField({
      name: 'aboutParagraphs', title: 'About paragraphs', type: 'array',
      of: [defineArrayMember({type: 'text', rows: 4})], validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'values', title: 'Three key points', type: 'array', validation: (r) => r.required().length(3),
      of: [defineArrayMember({type: 'object', fields: [str('title', 'Title'), str('text', 'Short text')]})],
    }),
    str('servicesHeading', 'Services heading'), str('servicesIntro', 'Services intro'),
    str('accommodationHeading', 'Accommodation heading'), str('accommodationIntro', 'Accommodation intro'),
    str('contactHeading', 'Contact heading'), str('contactIntro', 'Contact intro'),
  ],
})

export const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    str('title', 'Name'), txt('summary', 'Summary'),
    defineField({
      name: 'points', title: 'Bullet points', type: 'array',
      of: [defineArrayMember({type: 'string'})], validation: (r) => r.required().min(1),
    }),
    order,
  ],
})

export const property = defineType({
  name: 'property', title: 'Property', type: 'document',
  fields: [
    str('name', 'Name'), str('propertyType', 'Type (e.g. Two-bedroom apartment)'), str('area', 'Area'),
    txt('description', 'Description'), photo('image', 'Photo'), order,
  ],
})

export const schemaTypes = [siteSettings, homePage, service, property]