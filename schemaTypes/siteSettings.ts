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
        layout: 'radio',
      },
      initialValue: 'classic',
    }),
    // --- MANJKAJOČA POLJA (da izginejo napake) ---
    defineField({
      name: 'address',
      title: 'Naslov podjetja (Address)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Email naslov',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefonska številka',
      type: 'string',
    }),
    // --- PRAVNA OBVESTILA (SLO) ---
    defineField({
      name: 'privacyPolicySlo',
      title: 'Splošni pogoji (SLO)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cookiesPolicySlo',
      title: 'Piškotki (SLO)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    // --- PRAVNA OBVESTILA (EN) ---
    defineField({
      name: 'privacyPolicyEn',
      title: 'Terms & Conditions (EN)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cookiesPolicyEn',
      title: 'Cookies Policy (EN)',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})