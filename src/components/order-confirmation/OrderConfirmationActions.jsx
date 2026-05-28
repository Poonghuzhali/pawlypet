import { Link } from 'react-router-dom'
import { orderDetails } from '../../data/orderConfirmationData'
import { TruckIcon, GiftIcon } from '../Icons'

export default function OrderConfirmationActions() {
  return (
    <div className="mx-auto mt-8 max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          to="/track-order"
          className="btn-zoom-hover inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#E56B6B] px-6 py-3.5 text-sm font-bold text-white no-underline hover:bg-[#d55a5a]"
        >
          <TruckIcon className="h-5 w-5" />
          Track My Treats
        </Link>
        <Link
          to="/dog"
          className="btn-zoom-hover inline-flex flex-1 items-center justify-center rounded-full bg-[#F7F1EB] px-6 py-3.5 text-sm font-bold text-gray-700 no-underline transition hover:bg-[#efe8e0]"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-full bg-[#FFF3CD] px-5 py-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2C94C]/40">
          <GiftIcon className="h-5 w-5 text-[#B8860B]" />
        </span>
        <p className="text-left text-sm text-gray-800">
          <span className="font-bold">{orderDetails.pawPointsEarned} Paw Points Earned!</span>
          <span className="mt-0.5 block text-xs text-gray-600 sm:inline sm:ml-1 sm:mt-0">
            You&apos;re getting closer to a free treat!
          </span>
        </p>
      </div>
    </div>
  )
}
