import { Link } from 'react-router-dom'
import { orders } from '../../data/orderHistoryPageData'

const statusStyles = {
  delivered: 'bg-[#2D6A64] text-white',
  'in-transit': 'bg-[#F2C94C] text-gray-900',
  processing: 'bg-gray-200 text-gray-600',
}

const actionStyles = {
  teal: 'bg-[#2D6A64] text-white hover:bg-[#245550]',
  coral: 'bg-[#E56B6B] text-white hover:bg-[#d55a5a]',
  disabled: 'cursor-not-allowed bg-gray-200 text-gray-500',
}

function OrderCard({ order }) {
  const primaryClass = actionStyles[order.primaryAction.variant]

  return (
    <article className="rounded-[1.75rem] bg-white p-5 shadow-soft sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span
            className={`w-fit rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider ${statusStyles[order.status]}`}
          >
            {order.statusLabel}
          </span>

          <div>
            <p className="text-sm font-bold text-gray-900">#{order.id}</p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
              <span>
                <span className="font-bold uppercase tracking-wider">Date Placed</span>
                <span className="ml-2 font-medium text-gray-800">{order.date}</span>
              </span>
              <span>
                <span className="font-bold uppercase tracking-wider">Total Price</span>
                <span className="ml-2 font-medium text-gray-800">${order.total.toFixed(2)}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:gap-6">
          <div className="flex items-center gap-2">
            {order.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className="h-14 w-14 rounded-xl border border-gray-100 bg-[#FAFAFA] object-contain p-1"
              />
            ))}
            {order.extraItems ? (
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5EDE4] text-sm font-bold text-gray-600">
                +{order.extraItems}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 sm:min-w-[160px]">
            <button
              type="button"
              className="rounded-full bg-[#F0EBE4] px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#e5ddd4]"
            >
              Order Details
            </button>
            {order.primaryAction.path ? (
              <Link
                to={order.primaryAction.path}
                className={`btn-zoom-hover inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold no-underline ${primaryClass}`}
              >
                {order.primaryAction.label}
              </Link>
            ) : (
              <button
                type="button"
                disabled={order.primaryAction.variant === 'disabled'}
                className={`rounded-full px-5 py-2.5 text-sm font-bold ${primaryClass}`}
              >
                {order.primaryAction.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function OrderHistoryList() {
  return (
    <div className="mt-8 space-y-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
