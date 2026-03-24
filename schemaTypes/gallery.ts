import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galerija',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Jezik / Language',
      type: 'string',
      options: {
        list: [
          {title: 'Slovenščina', value: 'sl'},
          {title: 'English', value: 'en'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Naslov slike (Interni)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Opis slike za Google (Alt Text)',
          description: 'Ključno za SEO. Opišite vsebino slike v jeziku objave.',
        })
      ]
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          { title: 'Oljarna', value: 'oljarna' },
          { title: 'Dogodki', value: 'dogodki' },
          { title: 'Izdelki', value: 'izdelki' },
        ],
      },
    }),
  ],
})