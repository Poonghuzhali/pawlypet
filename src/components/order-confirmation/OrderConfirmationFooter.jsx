import { Link } from 'react-router-dom'
import { orderConfirmationFooterLinks } from '../../data/orderConfirmationData'
import Logo from '../Logo'

export default function OrderConfirmationFooter() {
  return (
    <footer className="relative z-10 mt-16 bg-[#D9D6CE] px-4 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pb-8 text-center">
        <Link to="/" className="inline-flex justify-center no-underline opacity-70">
          <Logo serif />
        </Link>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {orderConfirmationFooterLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs font-medium text-gray-500 transition hover:text-[#64E0D2]"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-xs text-gray-400">
          © 2024 Pawly. Crafted with love for every tail wag.
        </p>
      </div>
    </footer>
  )
}
