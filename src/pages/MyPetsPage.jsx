import AccountLayout from '../components/account/AccountLayout'
import MyPetsHeader from '../components/my-pets/MyPetsHeader'
import FeaturedPetCard from '../components/my-pets/FeaturedPetCard'
import PetCardsGrid from '../components/my-pets/PetCardsGrid'

export default function MyPetsPage() {
  return (
    <AccountLayout activeItem="my-pets">
      <MyPetsHeader />
      <FeaturedPetCard />
      <PetCardsGrid />
    </AccountLayout>
  )
}
