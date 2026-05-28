import Header from '../components/Header'
import DogToysHero from '../components/dog-toys/DogToysHero'
import DogToysSearchCategories from '../components/dog-toys/DogToysSearchCategories'
import DogToysFilters from '../components/dog-toys/DogToysFilters'
import DogToysProductGrid from '../components/dog-toys/DogToysProductGrid'
import DogToysChatWidget from '../components/dog-toys/DogToysChatWidget'
import DogShopFooter from '../components/dog-page/DogShopFooter'

export default function DogToysPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#FDF8F3] pb-16">
        <DogToysHero />
        <DogToysSearchCategories />

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
            <DogToysFilters />
            <DogToysProductGrid />
          </div>
        </section>
      </main>
      <DogShopFooter />
      <DogToysChatWidget />
    </>
  )
}
