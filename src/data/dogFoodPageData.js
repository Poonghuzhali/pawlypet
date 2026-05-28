import { assetUrl } from '@/utils/assetUrl'
export const lifeStageFilters = ['Puppy', 'Adult', 'Senior']

export const foodTypeFilters = ['Dry Food', 'Wet Food', 'Raw Diet']

export const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

export const dogFoodProducts = [
  {
    id: 1,
    name: 'Royal Canin Golden Retriever Adult',
    price: 64.99,
    reviews: 822,
    rating: 5,
    tag: { label: 'Bestseller', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-food/product-1.png'),
  },
  {
    id: 2,
    name: 'Blue Buffalo Wilderness Rocky Mountain',
    price: 58.49,
    reviews: 415,
    rating: 5,
    tag: { label: 'Hot Deal', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-food/product-2.png'),
  },
  {
    id: 3,
    name: 'Purina Pro Plan Sensitive Skin',
    price: 52.99,
    reviews: 128,
    rating: 4,
    image: assetUrl('/images/dog-food/product-3.png'),
  },
  {
    id: 4,
    name: "Hill's Science Diet Adult Sensitive",
    price: 48.0,
    reviews: 902,
    rating: 5,
    tag: { label: 'Vet Recommended', style: 'bg-[#CFE1E0] text-white' },
    image: assetUrl('/images/dog-food/product-4.png'),
  },
  {
    id: 5,
    name: 'ACANA Singles Limited Ingredient',
    price: 59.95,
    reviews: 56,
    rating: 4,
    image: assetUrl('/images/dog-food/product-5.png'),
  },
  {
    id: 6,
    name: 'Nutro Wholesome Essentials',
    price: 44.99,
    reviews: 231,
    rating: 5,
    tag: { label: 'Hot Deal', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-food/product-6.png'),
  },
  {
    id: 7,
    name: 'Wellness CORE Grain-Free',
    price: 62.5,
    reviews: 567,
    rating: 5,
    tag: { label: 'Bestseller', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-food/product-7.png'),
  },
  {
    id: 8,
    name: 'Taste of the Wild High Prairie',
    price: 54.99,
    reviews: 341,
    rating: 4,
    image: assetUrl('/images/dog-food/product-8.png'),
  },
]

export const dogFoodFooterLinks = {
  shop: ['Dog Food', 'Cat Supplies', 'Vet Services', 'Treats & Chews'],
  support: ['Shipping Policy', 'Return Center', 'Contact Us', 'Privacy'],
  explore: ['About Us', 'Pet Care Guides', 'The Sanctuary Blog', 'Ambassador Program'],
}
