import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brands, dogProducts } from '../../data/dogPageData'
import { HeartIcon, StarIcon, CartAddIcon } from '../Icons'

function ProductCard({ product, onToggleFavorite }) {
  const cardInner = (
    <>
      <div className="relative bg-[#FAFAFA] p-6">
        <button
          type="button"
          aria-label="Toggle favorite"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggleFavorite(product.id)
          }}
          className={`absolute right-4 top-4 z-10 rounded-full p-1.5 transition ${
            product.favorited ? 'text-[#B03A3E]' : 'text-gray-300 hover:text-[#B03A3E]'
          }`}
        >
          <HeartIcon className={`h-5 w-5 ${product.favorited ? 'fill-current' : ''}`} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-44 w-full object-contain"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gray-800">
            <StarIcon className="h-4 w-4 text-amber-400" />
            {product.rating}
          </span>
        </div>
        <h3 className="mt-2 font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-gray-900">{product.price}</span>
          <button
            type="button"
            aria-label="Add to cart"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            className="btn-zoom-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#B03A3E] text-white hover:bg-[#9a3236]"
          >
            <CartAddIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  )

  if (product.slug) {
    return (
      <Link
        to={`/dog/product/${product.slug}`}
        className="card-hover-lift block overflow-hidden rounded-3xl bg-white shadow-soft transition no-underline"
      >
        {cardInner}
      </Link>
    )
  }

  return (
    <article className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition">
      {cardInner}
    </article>
  )
}

export default function ProductCatalog() {
  const [selectedBrand, setSelectedBrand] = useState('Royal Canin')
  const [priceRange, setPriceRange] = useState(250)
  const [products, setProducts] = useState(dogProducts)

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, favorited: !p.favorited } : p)),
    )
  }

  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-8 rounded-3xl bg-white p-6 shadow-soft lg:sticky lg:top-24 lg:self-start">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Price Range</h3>
            <div className="mt-4">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="dog-range w-full"
              />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">Popular Brands</h3>
            <ul className="mt-4 space-y-3">
              {brands.map((brand) => (
                <li key={brand}>
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="dog-checkbox h-4 w-4 rounded border-gray-300"
                    />
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">Rating</h3>
            <div className="mt-3 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-5 w-5 ${star <= 4 ? 'text-amber-400' : 'text-gray-200'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">& up</span>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
