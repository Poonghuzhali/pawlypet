import { products } from '../data/homeData'
import { PlusIcon } from './Icons'

export default function Products() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Curated For Excellence
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Hand-picked products that meet our highest standards of quality and care.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative overflow-hidden rounded-3xl bg-[#F5EDE4] p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <span
                className={`absolute right-5 top-5 z-10 rounded-full px-3 py-1 text-xs font-bold ${product.badgeColor}`}
              >
                {product.badge}
              </span>
              <div className="overflow-hidden rounded-2xl bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-lg font-bold text-coral">{product.price}</p>
                </div>
                <button
                  type="button"
                  aria-label={`Add ${product.name} to cart`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white transition hover:bg-teal-light"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
