import OrderConfirmationHeader from '../components/order-confirmation/OrderConfirmationHeader'
import OrderConfirmationHero from '../components/order-confirmation/OrderConfirmationHero'
import OrderConfirmationActions from '../components/order-confirmation/OrderConfirmationActions'
import OrderConfirmationFooter from '../components/order-confirmation/OrderConfirmationFooter'

function BackgroundDecor() {
  return (
    <>
      <span className="pointer-events-none absolute left-[8%] top-[28%] h-16 w-16 rounded-full bg-[#FDE8E8]/70 blur-sm" />
      <span className="pointer-events-none absolute right-[12%] top-[22%] h-12 w-12 rounded-full bg-[#D4F5EF]/80 blur-sm" />
      <span className="pointer-events-none absolute left-[15%] top-[55%] h-10 w-10 rounded-full bg-[#FFF3CD]/80 blur-sm" />
      <span className="pointer-events-none absolute right-[18%] top-[48%] h-14 w-14 rounded-full bg-[#E8D5F5]/60 blur-sm" />
    </>
  )
}

export default function OrderConfirmationPage() {
  return (
    <div className="relative min-h-screen bg-[#FCF8F4]">
      <BackgroundDecor />
      <OrderConfirmationHeader />

      <main className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <OrderConfirmationHero />
          <OrderConfirmationActions />
        </div>
      </main>

      <OrderConfirmationFooter />
    </div>
  )
}
