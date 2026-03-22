import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Nastavitve strani',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ime strani',
      type: 'string',
      initialValue: 'Adelle Sofia',
    }),
    defineField({
      name: 'navigationStyle',
      title: 'Stil navigacije (Desktop)',
      type: 'string',
      options: {
        list: [
          {title: 'Klasični meni (vse povezave vidne)', value: 'classic'},
          {title: 'Hamburger meni (skrit v ikoni)', value: 'hamburger'},
        ],
        layout: 'radio', // Da lažje izbiraš
      },
      initialValue: 'classic',
    }),
  ],
})