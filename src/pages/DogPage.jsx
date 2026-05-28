import Header from '../components/Header'
import DogPageHero from '../components/dog-page/DogPageHero'
import BrowseByNeed from '../components/dog-page/BrowseByNeed'
import ProductCatalog from '../components/dog-page/ProductCatalog'
import SubscriptionBanner from '../components/dog-page/SubscriptionBanner'
import DogShopFooter from '../components/dog-page/DogShopFooter'

export default function DogPage() {
  return (
    <>
      <Header compact />
      <main className="bg-cream">
        <DogPageHero />
        <BrowseByNeed />
        <ProductCatalog />
        <SubscriptionBanner />
      </main>
      <DogShopFooter />
    </>
  )
}
