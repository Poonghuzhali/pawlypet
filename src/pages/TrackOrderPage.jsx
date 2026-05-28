import Header from '../components/Header'
import TrackOrderShippingAddress from '../components/track-order/TrackOrderShippingAddress'
import TrackOrderProgress from '../components/track-order/TrackOrderProgress'
import TrackOrderBasket from '../components/track-order/TrackOrderBasket'
import TrackOrderRewards from '../components/track-order/TrackOrderRewards'
import TrackOrderTrustBadges from '../components/track-order/TrackOrderTrustBadges'
import TrackOrderFooter from '../components/track-order/TrackOrderFooter'

export default function TrackOrderPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2] pb-14">
        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <h1 className="text-3xl font-extrabold text-[#374151] sm:text-4xl">Secure Checkout</h1>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Almost there! Your furry friend is waiting for their treats.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
              <div>
                <TrackOrderShippingAddress />
                <TrackOrderProgress />
                <TrackOrderTrustBadges />
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <TrackOrderBasket />
                <TrackOrderRewards />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <TrackOrderFooter />
    </>
  )
}
