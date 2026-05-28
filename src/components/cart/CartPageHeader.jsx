import { freeShippingThreshold, shippingProgress } from '../../data/cartPageData'
import { ClockIcon, PawIcon } from '../Icons'

export default function CartPageHeader() {
  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Sanctuary Basket</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          A curated collection for your furry companions. Review your choices and proceed to the
          safest paws in town.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A64]">
              Almost there!
            </span>
            <span className="text-sm font-semibold text-gray-700">
              ${shippingProgress.remaining.toFixed(2)} more for free delivery
            </span>
          </div>

          <div className="relative mt-4">
            <div className="h-3 overflow-hidden rounded-full bg-[#E8E8E8]">
              <div
                className="h-full rounded-full bg-[#2D6A64] transition-all"
                style={{ width: `${shippingProgress.percent}%` }}
              />
            </div>
            <span
              className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2D6A64] bg-white shadow-sm"
              style={{ left: `calc(${shippingProgress.percent}% - 14px)` }}
            >
              <PawIcon className="h-3.5 w-3.5 text-[#2D6A64]" />
            </span>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            Free standard shipping on orders over ${freeShippingThreshold.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  )
}
