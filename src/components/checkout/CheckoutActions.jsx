import { Link, useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from '../Icons'

export default function CheckoutActions() {
  const navigate = useNavigate()

  return (
    <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <Link
        to="/cart"
        className="text-sm font-semibold text-[#64E0D2] transition hover:underline sm:order-1"
      >
        ← Back to Shipping
      </Link>
      <button
        type="button"
        onClick={() => navigate('/order-confirmation')}
        className="btn-zoom-hover order-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#64E0D2] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#52CFC2] sm:order-2 sm:w-auto sm:min-w-[280px]"
      >
        Continue to Review
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
