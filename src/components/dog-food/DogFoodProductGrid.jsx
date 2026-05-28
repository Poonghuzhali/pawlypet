import { useState } from 'react'
import { dogFoodProducts, sortOptions } from '../../data/dogFoodPageData'
import { DOG_FOOD_PRODUCT_IDS } from '../../data/products'
import AddToCartButton from '../AddToCartButton'
import { SearchIcon, StarIcon, CartAddIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icons'

function ProductCard({ product }) {
  return (
    <article className="card-hover-lift relative overflow-hidden rounded-3xl bg-white p-4 shadow-soft transition">
      {product.tag ? (
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${product.tag.style}`}
        >
          {product.tag.label}
        </span>
      ) : null}

      <div className="flex h-44 items-center justify-center bg-[#FAFAFA] p-4">
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
      </div>

      <div className="p-3 pt-4">
        <h3 className="min-h-[2.5rem] text-sm font-bold leading-snug text-gray-900">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-3.5 w-3.5 ${star <= product.rating ? 'text-amber-400' : 'text-gray-200'}`}
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#D15151]">${product.price.toFixed(2)}</span>
          <AddToCartButton
            productId={DOG_FOOD_PRODUCT_IDS[product.id]}
            aria-label="Add to cart"
            className="btn-zoom-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#2D6A64] text-white hover:bg-[#245550]"
          >
            <CartAddIcon className="h-4 w-4" />
          </AddToCartButton>
        </div>
      </div>
    </article>
  )
}

export default function DogFoodProductGrid() {
  const [sort, setSort] = useState(sortOptions[0])
  const [currentPage, setCurrentPage] = useState(1)
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-bold text-gray-900">124</span> premium products
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-bold uppercase tracking-wider">Sort by:</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm font-semibold text-gray-900 outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Find food..."
          className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#2D6A64] focus:ring-1 focus:ring-[#2D6A64]"
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dogFoodProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
              currentPage === page
                ? 'bg-[#8B2E2E] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next page"
          onClick={() => setCurrentPage((p) => Math.min(pages.length, p + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
