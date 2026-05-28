import { savedForLater } from '../../data/cartPageData'
import { HeartIcon, CartAddIcon } from '../Icons'

export default function SavedForLater() {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold text-gray-900">Saved for Later</h2>
        <a href="#" className="text-sm font-semibold text-[#A33B3B] hover:underline">
          View All →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {savedForLater.map((item) => (
          <article
            key={item.id}
            className={`card-hover-lift relative overflow-hidden rounded-3xl ${item.bg} p-5 shadow-soft transition`}
          >
            <button
              type="button"
              aria-label="Save item"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-1.5 text-white backdrop-blur-sm"
            >
              <HeartIcon className="h-4 w-4 fill-current" />
            </button>

            <div className="flex h-36 items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-white">{item.name}</h3>
              <p className="mt-1 text-lg font-extrabold text-white">${item.price.toFixed(2)}</p>
              <button
                type="button"
                className="btn-zoom-hover mt-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-gray-900 hover:bg-white"
              >
                <CartAddIcon className="h-4 w-4" />
                Move to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
