import post from './post'
import author from './author'
import category from './category'
import page from './page'
import blockContent from './blockContent'
import product from './product'
import siteSettings from './siteSettings'
import videoContent from './videoContent'
import gallery from './gallery' // <-- Dodan uvoz za galerijo

export const schemaTypes = [
  post, 
  author, 
  category, 
  page, 
  blockContent, 
  product,
  siteSettings,
  videoContent,
  gallery // <-- Dodano v seznam, da se galerija spet pojavi v Sanity Studiu
]