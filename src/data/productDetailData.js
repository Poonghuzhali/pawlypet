import { assetUrl } from '@/utils/assetUrl'
export const wildernessSalmonProduct = {
  slug: 'wilderness-salmon',
  badge: 'Nutrition Specialist',
  title: 'Grain-Free Salmon & Sweet Potato',
  rating: 5,
  reviewCount: 120,
  price: 42.0,
  originalPrice: 54.0,
  description:
    'Crafted with sustainably sourced Atlantic salmon and organic sweet potatoes. Designed specifically for active dogs with sensitive skin and coat health needs.',
  sizes: ['5 lb', '15 lb', '30 lb'],
  defaultSize: '5 lb',
}

export const pureIngredients = [
  { name: 'Atlantic Salmon', detail: 'Rich in Omega-3 fatty acids', icon: 'fish' },
  { name: 'Fresh Kale', detail: 'Superfood antioxidant boost', icon: 'leaf' },
  { name: 'Sweet Potato', detail: 'High fiber energy source', icon: 'potato' },
  { name: 'Turmeric', detail: 'Natural anti-inflammatory', icon: 'spice' },
]

export const feedingGuide = [
  { weight: '5 – 15 lbs', cups: '1/2 – 1 1/4 cups' },
  { weight: '15 – 30 lbs', cups: '1 1/4 – 2 cups' },
  { weight: '30 – 50 lbs', cups: '2 – 3 cups' },
  { weight: '50+ lbs', cups: '3+ cups' },
]

export const happyTailsReviews = [
  {
    name: 'Cooper & Sarah',
    text: "Cooper's coat has never looked better! He absolutely loves the salmon flavor and we love the clean ingredients list.",
    avatar: assetUrl('/images/product-detail/review-1.png'),
    photo: assetUrl('/images/product-detail/review-1.png'),
  },
  {
    name: 'Bella & Mike',
    text: "Finally found a food that doesn't upset Bella's stomach. The grain-free formula is a game changer for her allergies.",
    avatar: assetUrl('/images/product-detail/review-2.png'),
    photo: assetUrl('/images/product-detail/review-2.png'),
  },
  {
    name: 'Luna & James',
    text: 'Luna has so much more energy on this food. Highly recommend for active breeds who love long hikes!',
    avatar: assetUrl('/images/product-detail/review-3.png'),
    photo: assetUrl('/images/product-detail/review-3.png'),
  },
]

export const pairsPerfectlyWith = [
  {
    name: 'Organic Chicken Jerky',
    price: 15.0,
    image: assetUrl('/images/product-detail/jerky.png'),
  },
  {
    name: 'Cloud Comfort Bed',
    price: 85.0,
    image: assetUrl('/images/product-detail/bed.png'),
  },
  {
    name: 'Sustainable Rubber Bone',
    price: 12.0,
    image: assetUrl('/images/product-detail/toy.png'),
  },
]

export const productDetailFooterLinks = {
  careGuides: ['Puppy Care', 'Senior Wellness', 'Sustainability'],
  company: ["Adopt Don't Shop", 'Shipping', 'Privacy'],
}
