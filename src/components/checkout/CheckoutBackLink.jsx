import { Link } from 'react-router-dom'

export default function CheckoutBackLink() {
  return (
    <Link
      to="/cart"
      className="inline-block text-sm font-semibold text-[#D15151] transition hover:underline"
    >
      ← Back to Shipping
    </Link>
  )
}
