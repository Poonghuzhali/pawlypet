import AccountLayout from '../components/account/AccountLayout'
import OrderHistoryHeader from '../components/order-history/OrderHistoryHeader'
import OrderHistoryList from '../components/order-history/OrderHistoryList'
import OrderSupportCards from '../components/order-history/OrderSupportCards'
import OrderHistoryFooter from '../components/order-history/OrderHistoryFooter'

export default function OrderHistoryPage() {
  return (
    <AccountLayout activeItem="orders" contentClassName="max-w-6xl" footer={<OrderHistoryFooter />}>
      <OrderHistoryHeader />
      <OrderHistoryList />
      <OrderSupportCards />
    </AccountLayout>
  )
}
