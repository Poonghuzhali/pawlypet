import Header from '../components/Header'
import DogGroomingHero from '../components/dog-grooming/DogGroomingHero'
import DogGroomingSearchFilters from '../components/dog-grooming/DogGroomingSearchFilters'
import DogGroomingFilters from '../components/dog-grooming/DogGroomingFilters'
import DogGroomingProductGrid from '../components/dog-grooming/DogGroomingProductGrid'
import DogGroomingPackBanner from '../components/dog-grooming/DogGroomingPackBanner'
import DogGroomingFooter from '../components/dog-grooming/DogGroomingFooter'

export default function DogGroomingPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2]">
        <DogGroomingHero />
        <DogGroomingSearchFilters />

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
            <DogGroomingFilters />
            <DogGroomingProductGrid />
          </div>
        </section>

        <DogGroomingPackBanner />
      </main>
      <DogGroomingFooter />
    </>
  )
}
