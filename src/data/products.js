import productsData from './products.json'
import { assetUrl } from '@/utils/assetUrl'

const catalog = productsData.map((product) => ({
  ...product,
  image: assetUrl(product.image),
}))

export function getAllProducts() {
  return catalog
}

export function getProductById(id) {
  return catalog.find((product) => product.id === id) ?? null
}

export function parsePrice(value) {
  if (typeof value === 'number') return value
  return Number.parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0
}

export const WILDERNESS_SALMON_SIZE_IDS = {
  '5 lb': 'wilderness-salmon',
  '15 lb': 'wilderness-salmon-15lb',
  '30 lb': 'wilderness-salmon-30lb',
}

export const DOG_FOOD_PRODUCT_IDS = {
  1: 'dog-food-1',
  2: 'dog-food-2',
  3: 'dog-food-3',
  4: 'dog-food-4',
  5: 'dog-food-5',
  6: 'dog-food-6',
  7: 'dog-food-7',
  8: 'dog-food-8',
}

export const DOG_TOY_PRODUCT_IDS = {
  1: 'dog-toy-1',
  2: 'dog-toy-2',
  3: 'dog-toy-3',
  4: 'dog-toy-4',
  5: 'dog-toy-5',
  6: 'dog-toy-6',
}

export const DOG_GROOMING_PRODUCT_IDS = {
  1: 'dog-grooming-1',
  2: 'dog-grooming-2',
  3: 'dog-grooming-3',
  4: 'dog-grooming-4',
  5: 'dog-grooming-5',
  6: 'dog-grooming-6',
}

export const DOG_HEALTH_PRODUCT_IDS = {
  1: 'dog-health-1',
  2: 'dog-health-2',
  3: 'dog-health-3',
  4: 'dog-health-4',
}

export const DOG_PAGE_PRODUCT_IDS = {
  1: 'dog-wilderness-salmon-feast',
  2: 'dog-helix-chew',
  3: 'dog-dreamcloud-bed',
}

export const CAT_PRODUCT_IDS = {
  1: 'cat-1',
  2: 'cat-2',
  3: 'cat-3',
  4: 'cat-4',
  5: 'cat-5',
  6: 'cat-6',
}

export const SMALL_PET_PRODUCT_IDS = {
  1: 'small-pet-1',
  2: 'small-pet-2',
  3: 'small-pet-3',
  4: 'small-pet-4',
}

export const HOME_PRODUCT_IDS = {
  'Premium Dog Food': 'home-premium-dog-food',
  'Natural Chew Bone': 'home-chew-bone',
  'Organic Pet Treats': 'home-organic-treats',
}
