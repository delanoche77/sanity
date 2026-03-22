import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Strani',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ime strani (npr. Domov)',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'slug',
      title: 'URL pot (npr. domov)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    
    // --- HERO SEKCIJA ---
    defineField({
      name: 'heroTitle',
      title: 'Glavni naslov (Hero)',
      description: 'Naslov, ki se razcepi okoli steklenice.',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Glavna slika (Hero Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Opis slike (za Google)',
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Hero Citat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'author',
      title: 'Avtor citata',
      type: 'string',
    }),

    // --- SEKCIJA O NAS ---
    defineField({
      name: 'aboutTitle',
      title: 'O Nas - Naslov',
      description: 'Npr. "Tradicija, ki se prenaša iz roda v rod"',
      type: 'string',
    }),
    defineField({
      name: 'aboutImage',
      title: 'O Nas - Slika (Grb)',
      description: 'Slika grba ali družinske tradicije na levi strani.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutExcerpt',
      title: 'O Nas - Kratek povzetek',
      description: 'Tekst, ki se vidi na prvi strani poleg grba.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'aboutFullText',
      title: 'O Nas - Celotna zgodba',
      description: 'Tekst, ki se odpre na novi strani, ko klikneš "Več".',
      type: 'array',
      of: [{type: 'block'}]
    }),

    // --- OSTALO ---
    defineField({
      name: 'content',
      title: 'Dodatna vsebina na dnu strani',
      type: 'array',
      of: [{type: 'block'}] 
    }),
  ],
})