import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Izdelki',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ime izdelka',
      type: 'string',
    }),
    defineField({
      name: 'language',
      title: 'Jezik',
      type: 'string',
      readOnly: true,
      hidden: false, 
    }),
    defineField({
      name: 'isOrganic',
      title: 'Ekološki izdelek (EKO/BIO)',
      type: 'boolean',
      initialValue: true,
      description: 'Vklopi, če želiš na spletni strani prikazati EKO / ORGANIC etiketo.',
    }),
    defineField({
      name: 'slug',
      title: 'URL pot',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Slika izdelka',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Cena',
      type: 'string',
      description: 'Npr. 18,00 €',
    }),
    defineField({
      name: 'volume',
      title: 'Količina',
      description: 'Npr. 500 ml',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Kratek opis',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'details',
      title: 'Podrobnosti o olju (kislost, sorta itd.)',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lang: 'language',
      media: 'mainImage',
      organic: 'isOrganic', // Dodano za predogled
    },
    prepare(selection) {
      const {title, lang, media, organic} = selection
      const langLabel = lang ? lang.toUpperCase() : '??'
      const organicIcon = organic ? '🍃 ' : '' // Pokaže listek v Sanityju, če je eko
      
      return {
        title: `${organicIcon}[${langLabel}] ${title || 'Brez naslova'}`,
        subtitle: lang === 'sl' ? 'Slovenščina' : 'English',
        media: media,
      }
    },
  },
})