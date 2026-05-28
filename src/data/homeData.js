import { assetUrl } from '@/utils/assetUrl'
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Dog', href: '#dog' },
  { label: 'Cat', href: '#cat' },
  { label: 'Small Pets', href: '#small-pets' },
  { label: 'Shop by Breed', href: '#shop-by-breed' },
  { label: 'Consult Vet', href: '#consult-vet' },
]

export const features = [
  {
    title: '24/7 Care Support',
    description: 'Round-the-clock assistance whenever your pet needs help.',
    bg: 'bg-pastel-yellow',
    iconBg: 'bg-yellow-300/60',
    icon: 'support',
  },
  {
    title: 'Easy Online Booking',
    description: 'Schedule vet visits and grooming in just a few clicks.',
    bg: 'bg-pastel-teal',
    iconBg: 'bg-teal-200/70',
    icon: 'booking',
  },
  {
    title: 'Professional Groomers',
    description: 'Certified groomers who treat every pet like family.',
    bg: 'bg-pastel-orange',
    iconBg: 'bg-orange-200/70',
    icon: 'grooming',
  },
  {
    title: 'Trusted Veterinarians',
    description: 'Experienced vets dedicated to your pet\'s health and happiness.',
    bg: 'bg-pastel-blue',
    iconBg: 'bg-blue-200/70',
    icon: 'vet',
  },
]

export const dogCategories = ['Food & Treats', 'Toys & Accessories', 'Grooming', 'Health & Wellness']

export const experts = [
  {
    name: 'Dr. Sarah Miller',
    role: 'Senior Veterinarian',
    image: assetUrl('/images/vet-1.png'),
    bg: 'bg-[#E8F5F3]',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Veterinary Surgeon',
    image: assetUrl('/images/vet-2.png'),
    bg: 'bg-[#FFF6E5]',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Pet Nutritionist',
    image: assetUrl('/images/vet-3.png'),
    bg: 'bg-[#FFF0E5]',
  },
  {
    name: 'Dr. Michael Brown',
    role: 'Animal Behaviorist',
    image: assetUrl('/images/vet-4.png'),
    bg: 'bg-[#E8F0FA]',
  },
]

export const breeds = [
  {
    name: 'Golden Retriever',
    description: 'Friendly, intelligent, and devoted family companions loved worldwide.',
    image: assetUrl('/images/breed-golden.png'),
  },
  {
    name: 'Persian Cat',
    description: 'Calm, gentle souls with luxurious coats and sweet personalities.',
    image: assetUrl('/images/breed-persian.png'),
  },
  {
    name: 'French Bulldog',
    description: 'Playful, adaptable, and perfect for apartment living.',
    image: assetUrl('/images/breed-frenchie.png'),
  },
  {
    name: 'Maine Coon',
    description: 'Gentle giants with striking coats and affectionate personalities.',
    image: assetUrl('/images/breed-maine-coon.png'),
  },
]

export const products = [
  {
    name: 'Premium Dog Food',
    price: '$45.00',
    badge: 'Hot',
    badgeColor: 'bg-coral text-white',
    image: assetUrl('/images/product-food.png'),
  },
  {
    name: 'Natural Chew Bone',
    price: '$12.99',
    badge: 'New',
    badgeColor: 'bg-teal text-white',
    image: assetUrl('/images/product-bone.png'),
  },
  {
    name: 'Organic Pet Treats',
    price: '$24.99',
    badge: 'Best Seller',
    badgeColor: 'bg-amber-500 text-white',
    image: assetUrl('/images/product-treats.png'),
  },
]

export const faqs = [
  {
    question: 'What type of pets do you cater to?',
    answer:
      'We cater to dogs, cats, rabbits, hamsters, birds, and many other small pets. Browse our Shop by Category section to find products tailored to your companion.',
  },
  {
    question: 'How do I choose the right food for my pet?',
    answer:
      'Consider your pet\'s age, size, breed, and any health conditions. Our experts can help you find the perfect nutrition plan tailored to your furry friend\'s needs.',
  },
  {
    question: 'Do you offer veterinary consultations?',
    answer:
      'Yes! Book a virtual or in-person consultation with our certified veterinarians anytime through our Consult Vet page.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day hassle-free return policy on most products. If you\'re not satisfied, contact us and we\'ll make it right.',
  },
]

export const footerLinks = {
  company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'],
  services: ['Vet Consultation', 'Pet Grooming', 'Pet Boarding', 'Training', 'Nutrition Plans'],
  support: ['Help Center', 'Shipping Info', 'Returns', 'Privacy Policy', 'Terms of Service'],
}

export const contactInfo = {
  location: {
    title: 'Pawly Sanctuary',
    address: '742 Evergreen Terrace, Springfield, IL 62704',
  },
  phone: '+1 (555) 987-6543',
  email: 'hello@pawly.com',
}
