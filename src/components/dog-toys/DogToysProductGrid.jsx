import { toyProducts } from '../../data/dogToysPageData'
import { DOG_TOY_PRODUCT_IDS } from '../../data/products'
import AddToCartButton from '../AddToCartButton'
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
        <div className="flex h-44 items-center justify-center rounded-2xl bg-[#FAFAFA] p-4">
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
          <span className="text-lg font-extrabold text-[#D15151]">${product.price.toFixed(2)}</span>
          <AddToCartButton
            productId={DOG_TOY_PRODUCT_IDS[product.id]}
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

export default function DogToysProductGrid() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-extrabold text-[#3D2C2C] sm:text-3xl">
          Best Sellers for <span className="text-[#2D6A64]">Active Pups</span>
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
          className="btn-zoom-hover inline-flex items-center gap-2 rounded-full border-2 border-[#D15151] bg-white px-8 py-3 text-sm font-bold text-[#D15151] transition hover:bg-[#FDE8E8]"
        >
          Load More Toys
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
