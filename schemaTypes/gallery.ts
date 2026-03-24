export default {
  name: 'gallery',
  title: 'Galerija',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Naslov slike (SLO)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
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
    },
  ],
}