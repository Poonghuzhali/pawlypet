import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { ArrowRightIcon, ShieldCheckIcon, TruckIcon, CheckIcon } from '../Icons'

export default function OrderSummary() {
  const navigate = useNavigate()
  const { items, totals } = useCart()

  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
      <article className="rounded-3xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-extrabold text-gray-900">Order Summary</h2>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <dt>Subtotal</dt>
            <dd className="font-semibold text-gray-900">${totals.subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between text-gray-600">
            <dt>Shipping</dt>
            <dd className="font-semibold text-[#2D6A64]">
              {totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`}
            </dd>
          </div>
          <div className="flex justify-between text-gray-600">
            <dt>Est. Tax</dt>
            <dd className="font-semibold text-gray-900">${totals.tax.toFixed(2)}</dd>
          </div>
        </dl>

        <div className="mt-5 border-t border-gray-100 pt-5">
          <p className="text-3xl font-extrabold text-[#A33B3B]">${totals.total.toFixed(2)}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Or ${totals.pawPayMonthly}/mo with Paw Pay
          </p>
        </div>

        <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            defaultValue="PAWLOVER20"
            className="min-w-0 flex-1 rounded-full border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 text-sm uppercase outline-none focus:border-[#A33B3B] focus:ring-1 focus:ring-[#A33B3B]"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-gray-800"
          >
            Apply
          </button>
        </form>

        <button
          type="button"
          disabled={items.length === 0}
          onClick={() => navigate('/checkout')}
          className="btn-zoom-hover mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#A33B3B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#8f3232] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Proceed to Checkout
          <ArrowRightIcon className="h-4 w-4" />
        </button>

        <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-gray-100 pt-5">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
            <ShieldCheckIcon className="h-4 w-4 text-[#2D6A64]" />
            Secure
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
            <TruckIcon className="h-4 w-4 text-[#2D6A64]" />
            Fast Ship
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
            <CheckIcon className="h-4 w-4 text-[#2D6A64]" />
            30-Day Return
          </span>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4FD1C5] to-[#2D6A64] p-6 shadow-soft">
        <div className="relative z-10 max-w-[85%]">
          <p className="text-sm font-bold leading-snug text-white">
            Join Pawly Premium. Get 5% back on every order and free vet consults.
          </p>
          <button
            type="button"
            className="btn-zoom-hover mt-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2D6A64] hover:bg-white/90"
          >
            Learn More
          </button>
        </div>
        <span className="absolute -bottom-2 -right-2 flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
          <span className="text-3xl text-white/40">★</span>
        </span>
      </article>
    </aside>
  )
}
