import { useNavigate } from 'react-router-dom'
import { HeartIcon, StarIcon, CartAddIcon } from '../Icons'

function FavoriteCard({ product, onRemove }) {
  const navigate = useNavigate()

  return (
    <article className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition">
      <div className="relative bg-[#FAFAFA] p-5">
        <button
          type="button"
          aria-label="Remove from favorites"
          onClick={() => onRemove(product.id)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <HeartIcon className="h-4 w-4 fill-current text-[#D15151]" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-44 w-full rounded-2xl object-cover"
        />
      </div>

      <div className="p-5 pt-4">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1.5 flex items-center gap-1 text-sm text-gray-600">
          <StarIcon className="h-4 w-4 text-amber-400" />
          <span className="font-semibold text-gray-800">{product.rating.toFixed(1)}</span>
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </p>
        <p className="mt-3 text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
        <button
          type="button"
          onClick={() => navigate('/cart')}
          className="btn-zoom-hover mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D15151] px-4 py-3 text-sm font-bold text-white hover:bg-[#b84242]"
        >
          <CartAddIcon className="h-4 w-4" />
          Move to Cart
        </button>
      </div>
    </article>
  )
}

export default function FavoriteProductGrid({ products, onRemove }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-soft">
        <p className="text-lg font-bold text-gray-900">No favorites yet</p>
        <p className="mt-2 text-sm text-gray-500">Save items you love and they&apos;ll show up here.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <FavoriteCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  )
}
