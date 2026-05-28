import Header from '../components/Header'
import ProductDetailMain from '../components/product-detail/ProductDetailMain'
import IngredientsFeeding from '../components/product-detail/IngredientsFeeding'
import HappyTails from '../components/product-detail/HappyTails'
import PairsPerfectly from '../components/product-detail/PairsPerfectly'
import ProductDetailFooter from '../components/product-detail/ProductDetailFooter'

export default function ProductDetailPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#FAF9F6]">
        <ProductDetailMain />
        <IngredientsFeeding />
        <HappyTails />
        <PairsPerfectly />
      </main>
      <ProductDetailFooter />
    </>
  )
}
