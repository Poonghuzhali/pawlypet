import { useState } from 'react'
import { orderHistoryFilters } from '../../data/orderHistoryPageData'
import { ChevronDownIcon } from '../Icons'

export default function OrderHistoryHeader() {
  const [filter, setFilter] = useState(orderHistoryFilters[0])

  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-[#3D2C2C] sm:text-4xl">Order History</h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Manage your recent orders and tracking status.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Filter:</span>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none rounded-full border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm font-semibold text-gray-900 outline-none focus:border-[#D15151] focus:ring-1 focus:ring-[#D15151]"
          >
            {orderHistoryFilters.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  )
}
