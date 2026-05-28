import Header from '../components/Header'
import SmallPetsHero from '../components/small-pets/SmallPetsHero'
import SmallPetsCategoryLinks from '../components/small-pets/SmallPetsCategoryLinks'
import SmallPetsProductCatalog from '../components/small-pets/SmallPetsProductCatalog'
import SmallPetsFooter from '../components/small-pets/SmallPetsFooter'

export default function SmallPetsPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2]">
        <SmallPetsHero />
        <SmallPetsCategoryLinks />
        <SmallPetsProductCatalog />
      </main>
      <SmallPetsFooter />
    </>
  )
}
