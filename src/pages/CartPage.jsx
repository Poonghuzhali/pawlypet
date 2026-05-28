import Header from '../components/Header'
import CartPageHeader from '../components/cart/CartPageHeader'
import CartItemsList from '../components/cart/CartItemsList'
import OrderSummary from '../components/cart/OrderSummary'
import SavedForLater from '../components/cart/SavedForLater'
import CartFooter from '../components/cart/CartFooter'

export default function CartPage() {
  return (
    <>
      <Header compact cartActive />
      <main className="bg-[#E1D8D2] pb-14">
        <CartPageHeader />

        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <CartItemsList />
              <SavedForLater />
            </div>
            <OrderSummary />
          </div>
        </section>
      </main>
      <CartFooter />
    </>
  )
}
