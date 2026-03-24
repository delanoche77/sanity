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
      title: 'SI/EN - Naslov / Title', // Predpona za naslov
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
      options: {hotspot: true}
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
      title: 'SI/EN - Povzetek / Excerpt', // Predpona za povzetek
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'body',
      title: 'SI/EN - Vsebina / Body', // Predpona za vsebino
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}}
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