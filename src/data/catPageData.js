import { assetUrl } from '@/utils/assetUrl'
export const catCategories = [
  {
    label: 'Cat Food',
    bg: 'bg-[#CFE1E0]',
    iconBg: 'bg-[#64E0D2]',
    icon: 'food',
  },
  {
    label: 'Grooming',
    bg: 'bg-[#CFE1E0]',
    iconBg: 'bg-[#64E0D2]',
    icon: 'grooming',
  },
  {
    label: 'Litter & Accessories',
    bg: 'bg-[#CFE1E0]',
    iconBg: 'bg-[#64E0D2]',
    icon: 'litter',
  },
  {
    label: 'Toys',
    bg: 'bg-[#CFE1E0]',
    iconBg: 'bg-[#64E0D2]',
    icon: 'toys',
  },
]

export const catBrands = ['Royal Canin', 'Purina One', 'Meow Mix']

export const catProducts = [
  {
    id: 1,
    name: 'Feather Wand Pro',
    tagline: 'Your kitty will love this!',
    price: '$12.99',
    image: assetUrl('/images/cat-page/feather-wand.png'),
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Cactus Scratch Post',
    tagline: 'Perfect for active claws!',
    price: '$45.00',
    image: assetUrl('/images/cat-page/cactus.png'),
  },
  {
    id: 3,
    name: 'Gourmet Salmon Bites',
    tagline: 'Pure nutrition, zero fillers',
    price: '$28.99',
    image: assetUrl('/images/cat-page/salmon-bites.png'),
  },
  {
    id: 4,
    name: 'Cozy Felt Cave',
    tagline: 'Nap time just got better',
    price: '$59.00',
    image: assetUrl('/images/cat-page/felt-cave.png'),
  },
  {
    id: 5,
    name: 'Smart Feeder v2',
    tagline: 'Meal time, on time!',
    price: '$89.00',
    image: assetUrl('/images/cat-page/smart-feeder.png'),
  },
  {
    id: 6,
    name: 'Velvet Charm Collar',
    tagline: 'A touch of elegance',
    price: '$18.50',
    image: assetUrl('/images/cat-page/collar.png'),
  },
]

export const catFooterLinks = {
  shop: ['Dog Collection', 'Cat Collection', 'Small Pets'],
  support: ['Shipping Policy', 'Return Center', 'Contact Vet'],
  company: ['About Us', 'Privacy'],
}
