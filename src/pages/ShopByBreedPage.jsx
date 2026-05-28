import Header from '../components/Header'
import DogHero from '../components/dog/DogHero'
import TrendingBreeds from '../components/dog/TrendingBreeds'
import BreedSpotlight from '../components/dog/BreedSpotlight'
import NutritionHealth from '../components/dog/NutritionHealth'
import GroomingTraining from '../components/dog/GroomingTraining'
import DogShopFooter from '../components/dog-page/DogShopFooter'

export default function ShopByBreedPage() {
  return (
    <>
      <Header compact />
      <main className="bg-cream">
        <DogHero />
        <TrendingBreeds />
        <BreedSpotlight />
        <NutritionHealth />
        <GroomingTraining />
      </main>
      <DogShopFooter />
    </>
  )
}
