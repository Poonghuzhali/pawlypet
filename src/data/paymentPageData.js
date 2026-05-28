export const paymentMethods = [
  { id: 'card', label: 'Card', icon: 'card' },
  { id: 'mobile', label: 'Mobile Banking', icon: 'mobile' },
  { id: 'upi', label: 'UPI', icon: 'upi' },
]

export const checkoutOrderItems = [
  {
    name: 'Vitality Plus - Organic Kibble',
    details: '2 x 5kg Bags',
    price: 84.0,
    image: '/images/checkout/kibble.png',
  },
  {
    name: 'Braided Adventure Leash',
    details: 'Ocean Blue • L',
    price: 32.0,
    image: '/images/checkout/leash.png',
  },
]

export const checkoutSummary = {
  subtotal: 116.0,
  shipping: 'FREE',
  tax: 9.28,
  total: 125.28,
  pawPoints: 125,
}

export const shippingAddress = {
  firstName: 'Jane',
  lastName: 'Doe',
  street: '123 Puppy Lane',
  city: 'Austin',
  zipCode: '78701',
}

export const paymentFooterLinks = [
  'Privacy Policy',
  'Shipping Info',
  'Contact Us',
  'Pet Care Community',
]
