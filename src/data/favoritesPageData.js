import { assetUrl } from '@/utils/assetUrl'
export const favoriteProducts = [
  {
    id: 1,
    name: 'Heritage Leather Collar',
    rating: 4.9,
    reviews: 128,
    price: 45.0,
    image: assetUrl('/images/favorites/collar.png'),
  },
  {
    id: 2,
    name: 'Velvet Cloud Bed',
    rating: 5.0,
    reviews: 84,
    price: 89.0,
    image: assetUrl('/images/favorites/bed.png'),
  },
  {
    id: 3,
    name: 'Nature-Tug Hemp Toy',
    rating: 4.7,
    reviews: 56,
    price: 18.5,
    image: assetUrl('/images/favorites/toy.png'),
  },
  {
    id: 4,
    name: 'SmartFlow Auto Feeder',
    rating: 4.8,
    reviews: 42,
    price: 120.0,
    image: assetUrl('/images/favorites/feeder.png'),
  },
]

export const trendingBanner = {
  badge: 'Trending Now',
  title: "Don't forget the essentials for your weekend adventures!",
  description:
    'Our top-rated travel kit is currently on sale. Keep your furry friend comfortable wherever the trail leads.',
  cta: 'Explore Travel Collection',
  image: assetUrl('/images/favorites/travel-dog.png'),
  testimonial: {
    quote: "The best gear we've ever bought for Luna!",
    author: 'Sarah K.',
  },
}

export const favoritesFooterLinks = {
  column1: ['Nutrition Guide', 'Wellness Tracker', 'Shipping Info'],
  column2: ['Returns', 'Contact Us'],
}
