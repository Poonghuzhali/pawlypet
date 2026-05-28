import { useState } from 'react'
import { catBrands, catProducts } from '../../data/catPageData'
import { StarIcon, CartAddIcon, ChevronDownIcon, PawIcon } from '../Icons'

function ProductCard({ product }) {
  return (
    <article className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="relative bg-[#E1D8D2] p-5">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#64E0D2] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-44 w-full rounded-2xl object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#64E0D2]">{product.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
          {product.tagline}
          <PawIcon className="h-3.5 w-3.5 text-teal" />
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#64E0D2]">{product.price}</span>
          <button
            type="button"
            aria-label="Add to cart"
            className="btn-zoom-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#64E0D2] text-gray-900 hover:bg-[#52CFC2]"
          >
            <CartAddIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function CatProductCatalog() {
  const [selectedBrands, setSelectedBrands] = useState(['Royal Canin'])
  const [priceRange, setPriceRange] = useState(120)

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    )
  }

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-[#64E0D2] sm:text-3xl">All Cat Goodies</h2>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
          >
            Sort by: Popularity
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-8 rounded-3xl bg-white p-6 shadow-soft lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-lg font-extrabold text-[#64E0D2]">Filters</h3>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                Price Range
              </p>
              <div className="mt-4">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="cat-range w-full"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$200+</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Brands</p>
              <ul className="mt-4 space-y-3">
                {catBrands.map((brand) => (
                  <li key={brand}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="cat-checkbox h-4 w-4 rounded border-gray-300"
                      />
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Rating</p>
              <div className="mt-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'text-amber-400' : 'text-gray-200'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">4 Up</span>
              </div>
            </div>
          </aside>

          <div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="btn-zoom-hover rounded-full bg-[#D9D6CE] px-10 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-[#D9D6CE]"
              >
                Load More Treasures
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
