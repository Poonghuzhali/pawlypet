import { PartyIcon } from '../Icons'

export default function SubscriptionBanner() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-full bg-[#D9D6CE] px-8 py-6 sm:flex-row sm:px-12">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-soft">
              <PartyIcon className="h-6 w-6 text-[#64E0D2]" />
            </span>
            <div>
              <p className="font-bold text-gray-900">Join the Pack</p>
              <p className="text-sm text-gray-600">Get 15% off your first dog food subscription.</p>
            </div>
          </div>
          <button
            type="button"
            className="btn-zoom-hover shrink-0 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  )
}
