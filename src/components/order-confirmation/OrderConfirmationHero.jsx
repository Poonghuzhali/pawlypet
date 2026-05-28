import { assetUrl } from '@/utils/assetUrl'
import { getLastOrder } from '../../utils/lastOrder'
import { orderDetails as fallbackOrderDetails } from '../../data/orderConfirmationData'

export default function OrderConfirmationHero() {
  const order = getLastOrder()
  const orderId = order?.orderId ?? fallbackOrderDetails.orderId
  const estimatedDelivery = order?.estimatedDelivery ?? fallbackOrderDetails.estimatedDelivery

  return (
    <div className="text-center">
      <div className="mx-auto w-fit rounded-[2rem] bg-white p-2 shadow-[0_8px_40px_rgba(209,81,81,0.15)]">
        <img
          src={assetUrl("/images/order-confirmation/hero.png")}
          alt="Happy customer"
          className="h-44 w-44 rounded-[1.75rem] object-cover sm:h-52 sm:w-52"
        />
      </div>

      <h1 className="mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl">Wag-tastic!</h1>
      <p className="mt-3 text-base text-gray-500 sm:text-lg">Your order is on its way!</p>

      <div className="mx-auto mt-8 flex max-w-lg flex-col gap-4 rounded-[2rem] bg-white px-6 py-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
        <div className="sm:flex-1 sm:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            Order ID
          </p>
          <p className="mt-1 text-lg font-extrabold text-[#A33B3B]">{orderId}</p>
        </div>
        <div className="hidden h-10 w-px bg-gray-200 sm:block" />
        <div className="sm:flex-1 sm:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            Estimated Delivery
          </p>
          <p className="mt-1 text-lg font-extrabold text-[#2D6A64]">
            {estimatedDelivery}
          </p>
        </div>
      </div>
    </div>
  )
}
