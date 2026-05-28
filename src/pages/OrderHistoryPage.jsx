import { useState } from 'react'
import AccountLayout from '../components/account/AccountLayout'
import OrderHistoryHeader from '../components/order-history/OrderHistoryHeader'
import OrderHistoryList from '../components/order-history/OrderHistoryList'
import OrderSupportCards from '../components/order-history/OrderSupportCards'
import OrderHistoryFooter from '../components/order-history/OrderHistoryFooter'
import { orderHistoryFilters } from '../data/orderHistoryPageData'

export default function OrderHistoryPage() {
  const [filter, setFilter] = useState(orderHistoryFilters[0])

  return (
    <AccountLayout activeItem="orders" contentClassName="max-w-6xl" footer={<OrderHistoryFooter />}>
      <OrderHistoryHeader filter={filter} onFilterChange={setFilter} />
      <OrderHistoryList filter={filter} />
      <OrderSupportCards />
    </AccountLayout>
  )
}
