import { Link } from 'react-router-dom'
import { paymentFooterLinks } from '../../data/paymentPageData'
import Logo from '../Logo'

export default function PaymentFooter() {
  return (
    <footer className="bg-[#FCF8F4] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <Link to="/" className="inline-flex justify-center no-underline">
          <Logo serif />
        </Link>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {paymentFooterLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-600 transition hover:text-[#D15151]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-10 border-t border-gray-200/80 py-6">
          <p className="text-xs text-gray-500">
            © 2024 Pawly. Crafted with love for every tail wag.
          </p>
        </div>
      </div>
    </footer>
  )
}
