import { toyProducts } from '../../data/dogToysPageData'
import { CartAddIcon, ChevronDownIcon } from '../Icons'

function ProductCard({ product }) {
  return (
    <article className="card-hover-lift relative overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="p-4 pb-0">
        {product.tag ? (
          <span
            className={`absolute left-6 top-6 z-10 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${product.tag.style}`}
          >
            {product.tag.label}
          </span>
        ) : null}
        <div className="flex h-44 items-center justify-center rounded-2xl bg-[#E1D8D2] p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      <div className="p-5 pt-4">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#64E0D2]">${product.price.toFixed(2)}</span>
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

export default function DogToysProductGrid() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-extrabold text-[#374151] sm:text-3xl">
          Best Sellers for <span className="text-[#64E0D2]">Active Pups</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
          Showing 24 Toys
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {toyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="btn-zoom-hover inline-flex items-center gap-2 rounded-full border-2 border-[#64E0D2] bg-white px-8 py-3 text-sm font-bold text-[#64E0D2] transition hover:bg-[#CFE1E0]"
        >
          Load More Toys
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
