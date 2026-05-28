export const quickFilters = [
  { id: 'supplements', label: 'Supplements', icon: 'nutrition' },
  { id: 'dental', label: 'Dental Care', icon: 'tooth' },
  { id: 'first-aid', label: 'First Aid', icon: 'medical' },
  { id: 'flea', label: 'Flea & Tick', icon: 'bug' },
]

export const healthConcerns = ['Joint Support', 'Anxiety', 'Digestion', 'Skin & Coat']

export const ageGroups = ['Puppy', 'Adult', 'Senior']

export const healthProducts = [
  {
    id: 1,
    name: 'Multi-Vitamin Chews',
    price: 24.99,
    description: '8-in-1 formula for immune, joint, and heart health. Made with real salmon.',
    tag: { label: 'Expert Pick', style: 'bg-[#F2C94C] text-gray-900' },
    image: '/images/dog-health/product-1.png',
    type: 'product',
  },
  {
    id: 2,
    name: 'Calming Treats',
    price: 19.5,
    description: 'Hemp and Chamomile blend to reduce anxiety during storms or travel.',
    tag: { label: 'Vet Approved', style: 'bg-[#2D6A64] text-white' },
    image: '/images/dog-health/product-2.png',
    type: 'product',
  },
  {
    id: 3,
    name: 'Plaque Remover',
    price: 32.0,
    description: 'Advanced enzymatic formula for fresh breath and healthy gums.',
    tag: { label: 'Expert Pick', style: 'bg-[#F2C94C] text-gray-900' },
    image: '/images/dog-health/product-3.png',
    type: 'product',
  },
  {
    id: 4,
    name: 'First Aid Kit',
    price: 45.0,
    description: '50-piece medical grade kit specifically designed for canine emergencies.',
    tag: { label: 'Essential', style: 'bg-[#2D6A64] text-white' },
    image: '/images/dog-health/product-4.png',
    type: 'product',
  },
  {
    id: 5,
    type: 'promo',
  },
]

export const healthFooterLinks = [
  'About us',
  'Shipping Policy',
  'Health Guides',
  'Contact Support',
  'Privacy',
]
