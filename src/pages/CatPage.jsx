import Header from '../components/Header'
import CatPageHero from '../components/cat-page/CatPageHero'
import CatCategoryLinks from '../components/cat-page/CatCategoryLinks'
import CatProductCatalog from '../components/cat-page/CatProductCatalog'
import CatShopFooter from '../components/cat-page/CatShopFooter'

export default function CatPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#FFF8F1]">
        <CatPageHero />
        <CatCategoryLinks />
        <CatProductCatalog />
      </main>
      <CatShopFooter />
    </>
  )
}
