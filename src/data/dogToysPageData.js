import { assetUrl } from '@/utils/assetUrl'
export const toyCategories = [
  { id: 'chew', label: 'Chew Toys', icon: 'paw' },
  { id: 'fetch', label: 'Fetch', icon: 'ball' },
  { id: 'puzzles', label: 'Puzzles', icon: 'puzzle' },
  { id: 'plushies', label: 'Plushies', icon: 'plush' },
  { id: 'tug', label: 'Tug', icon: 'tug' },
]

export const dogSizes = [
  'Small (0-20 lbs)',
  'Medium (21-50 lbs)',
  'Large (50+ lbs)',
]

export const materials = ['Rubber', 'Rope', 'Plush', 'Latex']

export const toyProducts = [
  {
    id: 1,
    name: 'Tough Chew Bone',
    description: 'Heavy-duty rubber bone built for power chewers.',
    price: 18.5,
    tag: { label: 'Super Durable', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-toys/product-1.png'),
  },
  {
    id: 2,
    name: 'Brainy Treat Slider',
    description: 'Interactive puzzle that rewards curious pups.',
    price: 24.99,
    tag: { label: "Pup's Favorite", style: 'bg-[#CFE1E0] text-gray-900' },
    image: assetUrl('/images/dog-toys/product-2.png'),
  },
  {
    id: 3,
    name: 'Triple-Knot Tug Rope',
    description: 'Extra-thick cotton rope for tug-of-war fun.',
    price: 12.0,
    tag: { label: 'Best Seller', style: 'bg-[#64E0D2] text-gray-900' },
    image: assetUrl('/images/dog-toys/product-3.png'),
  },
  {
    id: 4,
    name: 'Squeaky Squirrel',
    description: 'Soft plush with a playful squeaker inside.',
    price: 9.5,
    tag: { label: 'Eco-Friendly', style: 'bg-[#CFE1E0] text-gray-900' },
    image: assetUrl('/images/dog-toys/product-4.png'),
  },
  {
    id: 5,
    name: 'Pro Ball Launcher',
    description: 'Extend your throw and maximize outdoor playtime.',
    price: 32.0,
    image: assetUrl('/images/dog-toys/product-5.png'),
  },
  {
    id: 6,
    name: 'Majestic Mallard',
    description: 'Classic plush duck for fetch and cuddle sessions.',
    price: 15.99,
    image: assetUrl('/images/dog-toys/product-6.png'),
  },
]
