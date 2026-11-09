import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletons = ['homePage', 'siteSettings']

export default defineConfig({
  name: 'default',
  title: 'Cornerstone',

  projectId: 'bhkl9set',
  dataset: 'production',

  plugins: [structureTool({
      structure: (S) =>
        S.list().title('Website').items([
          S.listItem().title('Home page copy').id('homePage')
            .child(S.document().schemaType('homePage').documentId('homePage')),
          S.listItem().title('Contact & company details').id('siteSettings')
            .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          S.divider(),
          S.documentTypeListItem('service').title('Services'),
          S.documentTypeListItem('property').title('Accommodation'),
        ]),
    }),
  ],
  schema: {types: schemaTypes},
  document: {
    newDocumentOptions: (prev) => prev.filter((i) => !singletons.includes(i.templateId)),
  },
})
