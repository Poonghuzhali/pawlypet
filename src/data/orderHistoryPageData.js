import { assetUrl } from '@/utils/assetUrl'
export const orderHistoryFilters = ['All Orders', 'Delivered', 'In Transit', 'Processing']

export const orders = [
  {
    id: 'PWL-12345',
    status: 'delivered',
    statusLabel: 'Delivered',
    date: 'Oct 12, 2024',
    total: 142.5,
    images: [
      assetUrl('/images/order-history/item-1a.png'),
      assetUrl('/images/order-history/item-1b.png'),
    ],
    extraItems: 1,
    primaryAction: { label: 'Buy Again', variant: 'teal' },
  },
  {
    id: 'PWL-12348',
    status: 'in-transit',
    statusLabel: 'In Transit',
    date: 'Oct 24, 2024',
    total: 89.0,
    images: [assetUrl('/images/order-history/item-2.png')],
    primaryAction: { label: 'Track Order', variant: 'coral', path: '/track-order' },
  },
  {
    id: 'PWL-12352',
    status: 'processing',
    statusLabel: 'Processing',
    date: 'Yesterday, 4:32 PM',
    total: 214.2,
    images: [
      assetUrl('/images/order-history/item-3a.png'),
      assetUrl('/images/order-history/item-3b.png'),
    ],
    primaryAction: { label: 'Pending Ship', variant: 'disabled' },
  },
]

export const supportCards = [
  {
    id: 'help',
    title: 'Need help with an order?',
    description: 'Our 24/7 support team is here to help with any questions about your recent purchases.',
    cta: 'Contact Support',
    bg: 'bg-[#D4F5EF]',
    icon: 'question',
    ctaClass: 'text-[#2D6A64]',
  },
  {
    id: 'referral',
    title: 'Refer a Pet Parent',
    description: 'Give $20, get $20 when you refer a friend to Pawly. Share the love!',
    cta: 'Get Referral Link',
    bg: 'bg-[#FDE8E8]',
    icon: 'gift',
    ctaClass: 'text-[#D15151]',
  },
]

export const orderHistoryFooterLinks = {
  shop: ['Best Sellers', 'New Arrivals', 'Pet Wellness', 'Gift Cards'],
  support: ['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Returns'],
}
