export const browseCategories = [
  {
    label: 'Food',
    path: '/dog/food',
    bg: 'bg-[#FDE8E8]',
    iconBg: 'bg-[#B03A3E]',
    icon: 'food',
  },
  {
    label: 'Grooming',
    path: '/dog/grooming',
    bg: 'bg-[#E0F5F3]',
    iconBg: 'bg-[#1B6B6B]',
    icon: 'grooming',
  },
  {
    label: 'Health',
    path: '/dog/health',
    bg: 'bg-[#FFF8E1]',
    iconBg: 'bg-[#E6B800]',
    icon: 'health',
  },
  {
    label: 'Toys',
    path: '/dog/toys',
    bg: 'bg-[#FDE8E8]',
    iconBg: 'bg-[#B03A3E]',
    icon: 'toys',
  },
]

export const brands = ['Royal Canin', 'Blue Buffalo', 'Purina Pro']

export const dogProducts = [
  {
    id: 1,
    slug: 'wilderness-salmon',
    category: 'Nutrition',
    rating: 4.9,
    name: 'Wilderness Salmon & Potato Feast',
    description: 'High protein grain-free formula for active adult dogs.',
    price: '$24.99',
    image: '/images/dog-page/food.png',
    favorited: false,
  },
  {
    id: 2,
    category: 'Toys',
    rating: 4.8,
    name: 'Indestructible Helix Chew',
    description: 'Engineered for the toughest chewers using aerospace rubber.',
    price: '$18.50',
    image: '/images/dog-page/toy.png',
    favorited: false,
  },
  {
    id: 3,
    category: 'Wellness',
    rating: 5.0,
    name: 'DreamCloud Ortho Bed',
    description: 'Pressure-relieving memory foam for ultimate joint support.',
    price: '$89.00',
    image: '/images/dog-page/bed.png',
    favorited: true,
  },
]

export const dogFooterLinks = {
  categories: ['Puppy Care', 'Senior Wellness', "Adopt Don't Shop"],
  company: ['Sustainability', 'Privacy', 'Shipping'],
}
