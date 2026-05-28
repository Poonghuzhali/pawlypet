import Header from '../components/Header'
import PaymentMethodForm from '../components/checkout/PaymentMethodForm'
import CheckoutOrderSummary from '../components/checkout/CheckoutOrderSummary'
import CheckoutActions from '../components/checkout/CheckoutActions'
import ShippingAddressSection from '../components/checkout/ShippingAddressSection'
import PaymentFooter from '../components/checkout/PaymentFooter'

export default function PaymentPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2] pb-14">
        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
              <PaymentMethodForm />
              <CheckoutOrderSummary />
            </div>

            <CheckoutActions />
            <ShippingAddressSection />
          </div>
        </section>
      </main>
      <PaymentFooter />
    </>
  )
}
