import { useState } from 'react'
import Header from '../components/Header'
import FavoritesPageHeader from '../components/favorites/FavoritesPageHeader'
import FavoriteProductGrid from '../components/favorites/FavoriteProductGrid'
import FavoritesTrendingBanner from '../components/favorites/FavoritesTrendingBanner'
import FavoritesFooter from '../components/favorites/FavoritesFooter'
import { favoriteProducts as initialProducts } from '../data/favoritesPageData'

export default function FavoritesPage() {
  const [products, setProducts] = useState(initialProducts)

  const handleClearAll = () => setProducts([])
  const handleRemove = (id) => setProducts((prev) => prev.filter((item) => item.id !== id))

  return (
    <>
      <Header compact favoritesActive />
      <main className="bg-[#FFF9F5] pb-14">
        <FavoritesPageHeader onClearAll={handleClearAll} />

        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FavoriteProductGrid products={products} onRemove={handleRemove} />
            <FavoritesTrendingBanner />
          </div>
        </section>
      </main>
      <FavoritesFooter />
    </>
  )
}
