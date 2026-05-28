import Header from '../components/Header'
import DogHealthHero from '../components/dog-health/DogHealthHero'
import DogHealthSearchFilters from '../components/dog-health/DogHealthSearchFilters'
import DogHealthFilters from '../components/dog-health/DogHealthFilters'
import DogHealthProductGrid from '../components/dog-health/DogHealthProductGrid'
import DogHealthConsultBanner from '../components/dog-health/DogHealthConsultBanner'
import DogHealthFooter from '../components/dog-health/DogHealthFooter'

export default function DogHealthPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2]">
        <DogHealthHero />
        <DogHealthSearchFilters />

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
            <DogHealthFilters />
            <DogHealthProductGrid />
          </div>
        </section>

        <DogHealthConsultBanner />
      </main>
      <DogHealthFooter />
    </>
  )
}
