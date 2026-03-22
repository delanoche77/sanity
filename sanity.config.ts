import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'AdelleSofie',

  projectId: 'niszf64x',
  dataset: 'blog',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'sl', title: 'Slovenščina'},
        {id: 'en', title: 'English'}
      ],
      schemaTypes: ['post']
    })
  ],

  schema: {
    types: schemaTypes,
  },
})