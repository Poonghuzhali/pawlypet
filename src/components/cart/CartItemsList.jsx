import { useState } from 'react'
import { cartItems as initialItems } from '../../data/cartPageData'
import { MinusIcon, PlusIcon, HeartIcon, TrashIcon } from '../Icons'

function CartItemRow({ item, onUpdateQty, onRemove }) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-soft sm:flex-row sm:items-center">
      <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#E1D8D2] p-3 sm:h-28 sm:w-28">
        <img src={item.image} alt={item.name} className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.details}</p>
        <p className="mt-2 text-lg font-extrabold text-[#64E0D2]">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center rounded-full border border-gray-200 bg-[#E5E5E5]">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
            className="px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="min-w-[1.5rem] text-center text-sm font-semibold">{item.quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 font-medium text-gray-500 transition hover:text-[#64E0D2]"
          >
            <HeartIcon className="h-4 w-4" />
            Save
          </button>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="inline-flex items-center gap-1.5 font-medium text-gray-500 transition hover:text-[#64E0D2]"
          >
            <TrashIcon className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}

export default function CartItemsList() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id, quantity) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-xl font-extrabold text-gray-900">Current Cart</h2>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
          {items.length} items
        </span>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
        ))}
      </div>
    </div>
  )
}
