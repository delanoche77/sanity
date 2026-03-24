import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',

  fields: [
    defineField({
      name: 'language',
      title: 'Jezik / Language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),

    defineField({
      name: 'title',
      title: 'SI/EN - Naslov na strani / Title on Page',
      description: 'Naslov, ki bo viden obiskovalcem na spletni strani.',
      type: 'string'
    }),

    defineField({
      name: 'slug',
      title: 'URL pot (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),

    // --- DODANA SEO POLJA ---
    defineField({
      name: 'seoTitle',
      title: 'Google Naslov (SEO Title)',
      description: 'Naslov, ki se prikaže v iskalniku. Če pustite prazno, se uporabi zgornji naslov.',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'Google Opis (SEO Description)',
      description: 'Kratek povzetek za Google rezultate (okoli 150 znakov).',
      type: 'text',
      rows: 2,
    }),
    // -------------------------

    defineField({
      name: 'author',
      title: 'Avtor (Author)',
      type: 'reference',
      to: [{type: 'author'}]
    }),

    defineField({
      name: 'mainImage',
      title: 'Glavna slika (Main image)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Opis slike za Google (Alt Text)',
          description: 'Pomembno za SEO. Opišite, kaj je na sliki.',
        })
      ]
    }),

    defineField({
      name: 'categories',
      title: 'Kategorije (Categories)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }),

    defineField({
      name: 'publishedAt',
      title: 'Datum objave (Published at)',
      type: 'datetime'
    }),

    defineField({
      name: 'excerpt',
      title: 'SI/EN - Povzetek / Excerpt',
      description: 'Kratek uvodni tekst, ki se prikaže na seznamu vseh blogov.',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'body',
      title: 'SI/EN - Vsebina / Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Opis slike za Google (Alt Text)',
            })
          ]
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      lang: 'language',
      media: 'mainImage',
      author: 'author.name',
    },
    prepare(selection) {
      const {title, lang, media, author} = selection
      const langLabel = lang ? lang.toUpperCase() : '??'
      
      return {
        title: `[${langLabel}] ${title || 'Brez naslova'}`,
        subtitle: `${lang === 'sl' ? 'Slovenščina' : 'English'} ${author ? '| by ' + author : ''}`,
        media: media,
      }
    }
  }
})