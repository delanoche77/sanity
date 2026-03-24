import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Izdelki',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Jezik',
      type: 'string',
      readOnly: true,
      hidden: false, 
    }),

    defineField({
      name: 'title',
      title: 'Ime izdelka na strani',
      description: 'Ime, ki bo vidno obiskovalcem (npr. Ekstra deviško oljčno olje).',
      type: 'string',
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

    // --- DODANA SEO POLJA ZA GOOGLE ---
    defineField({
      name: 'seoTitle',
      title: 'Google Naslov (SEO Title)',
      description: 'Naslov izdelka v iskalniku (npr. EKO Oljčno olje 500ml | Adelle Sophie).',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'Google Opis (SEO Description)',
      description: 'Kratek prodajni opis za Google rezultate.',
      type: 'text',
      rows: 2,
    }),
    // ------------------------------------

    defineField({
      name: 'isOrganic',
      title: 'Ekološki izdelek (EKO/BIO)',
      type: 'boolean',
      initialValue: true,
      description: 'Vklopi, če želiš na spletni strani prikazati EKO / ORGANIC etiketo.',
    }),

    defineField({
      name: 'mainImage',
      title: 'Slika izdelka',
      type: 'image',
      options: {
        hotspot: true,
      },
      // DODANO: Alt tekst za glavno sliko izdelka
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Opis slike za Google (Alt Text)',
          description: 'Opišite, kaj je na sliki (npr. Steklenica oljčnega olja Adelle Sophie na leseni podlagi).',
        })
      ]
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
    }),
  ],

  preview: {
    select: {
      title: 'title',
      lang: 'language',
      media: 'mainImage',
      organic: 'isOrganic', 
    },
    prepare(selection) {
      const {title, lang, media, organic} = selection
      const langLabel = lang ? lang.toUpperCase() : '??'
      const organicIcon = organic ? '🍃 ' : '' 
      
      return {
        title: `${organicIcon}[${langLabel}] ${title || 'Brez naslova'}`,
        subtitle: lang === 'sl' ? 'Slovenščina' : 'English',
        media: media,
      }
    },
  },
})