import { assetUrl } from '@/utils/assetUrl'
export const freeShippingThreshold = 110
export const shippingProgress = {
  current: 95,
  remaining: 15,
  percent: 86,
}

export const cartItems = [
  {
    id: 1,
    name: 'Salmon & Sweet Potato Kibble',
    details: '12lb Bag • Grain-Free • Organic Ingredients',
    price: 45.0,
    quantity: 1,
    image: assetUrl('/images/cart/kibble.png'),
  },
  {
    id: 2,
    name: 'Velvet Cloud Sleep Bed',
    details: 'Medium • Mist Grey • Orthopedic Foam',
    price: 32.0,
    quantity: 1,
    image: assetUrl('/images/cart/bed.png'),
  },
  {
    id: 3,
    name: 'Indestructible Chew Bone',
    details: 'Large • Cherry Red • Natural Rubber',
    price: 18.0,
    quantity: 1,
    image: assetUrl('/images/cart/chew-bone.png'),
  },
]

export const savedForLater = [
  {
    id: 1,
    name: 'Handcrafted Leather Collar',
    price: 38.0,
    image: assetUrl('/images/cart/collar.png'),
    bg: 'bg-[#64E0D2]',
  },
  {
    id: 2,
    name: 'Bamboo Intelligence Puzzle',
    price: 24.5,
    image: assetUrl('/images/cart/cat-toy.png'),
    bg: 'bg-[#64E0D2]',
  },
]

export const orderSummary = {
  subtotal: 95.0,
  shipping: 10.0,
  tax: 7.6,
  total: 112.6,
  pawPayMonthly: 28,
}

export const cartFooterLinks = {
  petCare: ['Puppy Care', 'Senior Wellness', 'Sustainability', "Adopt Don't Shop"],
  support: ['Shipping', 'Privacy', 'Returns', 'Contact Us'],
}
