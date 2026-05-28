import { assetUrl } from '@/utils/assetUrl'
export const featuredPet = {
  id: 'cooper',
  name: 'Cooper',
  type: 'DOG',
  status: 'ACTIVE',
  breed: 'Golden Retriever',
  age: '3 Years Old',
  image: assetUrl('/images/my-pets/cooper.png'),
}

export const pets = [
  {
    id: 'luna',
    name: 'Luna',
    type: 'CAT',
    breed: 'Domestic Shorthair',
    age: '2y',
    gender: 'female',
    image: assetUrl('/images/my-pets/luna.png'),
  },
  {
    id: 'mochi',
    name: 'Mochi',
    type: 'DOG',
    breed: 'Maltese Terrier',
    age: '5y',
    gender: 'male',
    image: assetUrl('/images/my-pets/mochi.png'),
  },
  {
    id: 'bento',
    name: 'Bento',
    type: 'DOG',
    breed: 'French Bulldog',
    age: '1y',
    gender: 'male',
    image: assetUrl('/images/my-pets/bento.png'),
  },
]
