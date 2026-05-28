import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { saveLastOrder } from '../../utils/lastOrder'
import { ArrowRightIcon } from '../Icons'

export default function CheckoutActions() {
  const navigate = useNavigate()
  const { items, totals } = useCart()

  const handleCompleteOrder = () => {
    if (items.length === 0) return
    saveLastOrder({ items, totals })
    navigate('/order-confirmation', { state: { orderPlaced: true } })
  }

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <Link
        to="/cart"
        className="text-sm font-semibold text-[#D15151] transition hover:underline"
      >
        ← Back to Shipping
      </Link>
      <button
        type="button"
        disabled={items.length === 0}
        onClick={handleCompleteOrder}
        className="btn-zoom-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D15151] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#b84242] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[280px]"
      >
        Continue to Review
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
