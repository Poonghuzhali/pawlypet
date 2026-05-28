import { useState } from 'react'
import {
  animalTypes,
  smallPetBrands,
  smallPetProducts,
  promoCard,
} from '../../data/smallPetsPageData'
import { PlusIcon, ChevronDownIcon } from '../Icons'

function ProductCard({ product }) {
  const badgeClass =
    product.badgeStyle === 'yellow'
      ? 'bg-[#CFE1E0] text-gray-900'
      : 'bg-[#64E0D2] text-gray-900'

  const badgePosition =
    product.badgePosition === 'right' ? 'right-4 top-4' : 'left-4 top-4'

  return (
    <article className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="relative bg-[#E1D8D2] p-5">
        {product.badge && (
          <span
            className={`absolute z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badgeClass} ${badgePosition}`}
          >
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-48 w-full rounded-2xl object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#64E0D2]">{product.price}</span>
          <button
            type="button"
            aria-label="Add to cart"
            className="btn-zoom-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#64E0D2] text-gray-900 hover:bg-[#52CFC2]"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function SmallPetsProductCatalog() {
  const [animalType, setAnimalType] = useState('Rabbit')
  const [selectedBrands, setSelectedBrands] = useState(['Oxbow'])
  const [priceRange, setPriceRange] = useState(60)

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    )
  }

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing <span className="font-bold text-gray-900">24</span> products
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
          >
            Sort By: Featured
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-8 rounded-3xl bg-[#D9D6CE] p-6 shadow-soft">
              <h3 className="text-lg font-extrabold text-gray-900">Filters</h3>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Animal Type
                </p>
                <ul className="mt-4 space-y-3">
                  {animalTypes.map((type) => (
                    <li key={type}>
                      <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                        <input
                          type="radio"
                          name="animalType"
                          checked={animalType === type}
                          onChange={() => setAnimalType(type)}
                          className="small-pets-radio h-4 w-4 border-gray-300"
                        />
                        {type}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Price Range
                </p>
                <div className="mt-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="small-pets-range w-full"
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$100+</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Brand</p>
                <ul className="mt-4 space-y-3">
                  {smallPetBrands.map((brand) => (
                    <li key={brand}>
                      <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="small-pets-checkbox h-4 w-4 rounded border-gray-300"
                        />
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <article className="overflow-hidden rounded-3xl bg-[#374151] p-5 shadow-soft">
              <div className="flex gap-4">
                <img
                  src={promoCard.image}
                  alt=""
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#CFE1E0]">
                    {promoCard.badge}
                  </span>
                  <h4 className="mt-1 text-sm font-bold leading-snug text-white">
                    {promoCard.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/70">{promoCard.subtitle}</p>
                </div>
              </div>
            </article>
          </aside>

          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {smallPetProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="btn-zoom-hover rounded-full border border-gray-300 bg-[#E1D8D2] px-10 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-[#D9D6CE]"
              >
                Load More Treats
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
