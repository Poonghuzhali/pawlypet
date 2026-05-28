import { useCart } from '../../context/CartContext'
import { TicketIcon } from '../Icons'

export default function CheckoutOrderSummary() {
  const { items, totals } = useCart()

  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
      <article className="rounded-3xl bg-[#F7F1EB] p-6 shadow-soft">
        <h2 className="text-lg font-extrabold text-[#3D2C2C]">Order Summary</h2>

        {items.length === 0 ? (
          <p className="mt-5 text-sm text-gray-500">No items in your cart yet.</p>
        ) : (
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li key={item.lineKey} className="flex gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × ${item.price.toFixed(2)} • {item.details}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#D15151]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-6 space-y-2 border-t border-[#E8DDD0] pt-5 text-sm">
          <div className="flex justify-between text-gray-600">
            <dt>Subtotal</dt>
            <dd className="font-semibold text-gray-900">${totals.subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between text-gray-600">
            <dt>Shipping</dt>
            <dd className="font-bold text-green-600">
              {totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`}
            </dd>
          </div>
          <div className="flex justify-between text-gray-600">
            <dt>Estimated Taxes</dt>
            <dd className="font-semibold text-gray-900">${totals.tax.toFixed(2)}</dd>
          </div>
        </dl>

        <div className="mt-5 border-t border-[#E8DDD0] pt-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Total to pay
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <p className="text-3xl font-extrabold text-[#D15151]">${totals.total.toFixed(2)}</p>
            <span className="rounded-full bg-[#F2C94C] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-900">
              {totals.pawPoints} Paw Points earned
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#FAF6F0] px-4 py-3">
          <TicketIcon className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Promo Code"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          <button type="button" className="text-sm font-bold text-[#D15151] hover:underline">
            Apply
          </button>
        </div>
      </article>
    </aside>
  )
}
