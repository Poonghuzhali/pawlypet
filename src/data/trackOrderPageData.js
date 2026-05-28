import { assetUrl } from '@/utils/assetUrl'
export const shippingAddress = {
  firstName: 'Jane',
  lastName: 'Doe',
  street: '123 Puppy Lane',
  city: 'Austin',
  zipCode: '78701',
}

export const trackingInfo = {
  orderNumber: '#PW-98421',
  estimatedDelivery: 'June 24',
  currentStep: 2,
}

export const trackingSteps = ['Ordered', 'Packed', 'Shipped', 'Delivered']

export const basketItems = [
  {
    name: 'Gourmet Duck Bites (Organic)',
    details: 'Qty: 2 • 500g',
    price: 24.9,
    image: assetUrl('/images/track-order/duck-bites.png'),
  },
  {
    name: 'Indestructible Tug Knot',
    details: 'Qty: 1 • Large',
    price: 18.0,
    image: assetUrl('/images/track-order/tug-knot.png'),
  },
]

export const basketSummary = {
  subtotal: 42.9,
  delivery: 'FREE',
  total: 42.9,
  rewardsPoints: 42,
}

export const trustBadges = [
  { id: 'secure', label: 'Secure Checkout', icon: 'shield' },
  { id: 'eco', label: 'Eco-Packaging', icon: 'leaf' },
  { id: 'wag', label: '100% Wag Guarantee', icon: 'smile' },
]

export const footerLinks = {
  resources: ['Puppy Care', 'Senior Wellness', 'Sustainability'],
  help: ["Adopt Don't Shop", 'Shipping', 'Privacy'],
}
