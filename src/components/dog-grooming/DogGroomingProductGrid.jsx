import { useState } from 'react'
import { groomingProducts } from '../../data/dogGroomingPageData'
import { DOG_GROOMING_PRODUCT_IDS } from '../../data/products'
import AddToCartButton from '../AddToCartButton'
import { CartAddIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icons'

function ProductCard({ product }) {
  return (
    <article className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="relative p-4 pb-0">
        {product.tag ? (
          <span
            className={`absolute left-6 top-6 z-10 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${product.tag.style}`}
          >
            {product.tag.label}
          </span>
        ) : null}
        <div className="overflow-hidden rounded-2xl bg-[#FAFAFA] p-4">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-40 w-full object-contain"
          />
        </div>
      </div>

      <div className="p-5 pt-4">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#D15151]">${product.price.toFixed(2)}</span>
          <AddToCartButton
            productId={DOG_GROOMING_PRODUCT_IDS[product.id]}
            aria-label="Add to cart"
            className="btn-zoom-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#D15151] text-white hover:bg-[#b84242]"
          >
            <CartAddIcon className="h-4 w-4" />
          </AddToCartButton>
        </div>
      </div>
    </article>
  )
}

export default function DogGroomingProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const pages = [1, 2, 3]

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {groomingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2">
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
