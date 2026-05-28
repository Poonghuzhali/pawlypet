import Header from '../components/Header'
import DogFoodHero from '../components/dog-food/DogFoodHero'
import DogFoodFilters from '../components/dog-food/DogFoodFilters'
import DogFoodProductGrid from '../components/dog-food/DogFoodProductGrid'
import DogFoodSubscriptionBanner from '../components/dog-food/DogFoodSubscriptionBanner'
import DogFoodFooter from '../components/dog-food/DogFoodFooter'

export default function DogFoodPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#FDF8F3]">
        <DogFoodHero />

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
            <DogFoodFilters />
            <DogFoodProductGrid />
          </div>
        </section>

        <DogFoodSubscriptionBanner />
      </main>
      <DogFoodFooter />
    </>
  )
}
