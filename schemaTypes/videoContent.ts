import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoContent',
  title: 'Video vsebine',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov videa (interni)',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube ali Vimeo povezava',
      description: 'Prilepi celoten URL (npr. https://www.youtube.com/watch?v=...)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Vrstni red',
      type: 'number',
      description: 'Manjša številka pomeni, da bo video prikazan prvi.',
    }),
    defineField({
      name: 'language',
      title: 'Jezik',
      type: 'string',
      options: {
        list: [
          {title: 'Slovenščina', value: 'sl'},
          {title: 'English', value: 'en'},
        ],
      },
    }),
  ],
})