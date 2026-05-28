import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PaymentMethodForm from '../components/checkout/PaymentMethodForm'
import CheckoutOrderSummary from '../components/checkout/CheckoutOrderSummary'
import CheckoutActions from '../components/checkout/CheckoutActions'
import ShippingAddressSection from '../components/checkout/ShippingAddressSection'
import PaymentFooter from '../components/checkout/PaymentFooter'
import { useCart } from '../context/CartContext'

export default function PaymentPage() {
  const navigate = useNavigate()
  const { items } = useCart()

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart', { replace: true })
    }
  }, [items.length, navigate])

  return (
    <>
      <Header compact />
      <main className="bg-[#FCF8F4] pb-14">
        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
              <div className="space-y-8">
                <PaymentMethodForm />
                <ShippingAddressSection />
                <CheckoutActions />
              </div>
              <CheckoutOrderSummary />
            </div>
          </div>
        </section>
      </main>
      <PaymentFooter />
    </>
  )
}
