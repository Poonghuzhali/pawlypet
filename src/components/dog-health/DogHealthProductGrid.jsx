import { healthProducts } from '../../data/dogHealthPageData'
import { StarIcon } from '../Icons'

function ProductCard({ product }) {
  return (
    <article className="card-hover-lift flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="relative p-4 pb-0">
        <span
          className={`absolute left-6 top-6 z-10 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${product.tag.style}`}
        >
          {product.tag.label}
        </span>
        <div className="flex h-44 items-center justify-center rounded-2xl bg-[#E1D8D2] p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-lg font-extrabold text-[#64E0D2]">${product.price.toFixed(2)}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">{product.description}</p>
        <button
          type="button"
          className="btn-zoom-hover mt-5 w-full rounded-full border-2 border-[#64E0D2] bg-white py-3 text-sm font-bold text-[#64E0D2] transition hover:bg-[#CFE1E0]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

function SubscribeCard() {
  return (
    <article className="flex flex-col justify-center rounded-3xl bg-[#64E0D2] p-8 text-white shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        <StarIcon className="h-6 w-6 text-white" />
      </span>
      <h3 className="mt-5 text-xl font-extrabold">Subscribe & Save 15%</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/90">
        Never run out of health essentials. Schedule your deliveries and get exclusive discounts.
      </p>
      <button
        type="button"
        className="btn-zoom-hover mt-6 w-full rounded-full bg-white py-3 text-sm font-bold text-[#64E0D2] hover:bg-gray-50"
      >
        Learn More
      </button>
    </article>
  )
}

export default function DogHealthProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {healthProducts.map((item) =>
        item.type === 'promo' ? (
          <SubscribeCard key={item.id} />
        ) : (
          <ProductCard key={item.id} product={item} />
        ),
      )}
    </div>
  )
}
