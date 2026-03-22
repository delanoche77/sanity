import post from './post'
import author from './author'
import category from './category'
import page from './page'
import blockContent from './blockContent'
import product from './product'
import siteSettings from './siteSettings' // <-- Dodano za nastavitve strani

export const schemaTypes = [
  post, 
  author, 
  category, 
  page, 
  blockContent, 
  product,
  siteSettings // <-- Dodano v seznam, da se pojavi v Sanity Studio
]