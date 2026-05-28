import { Link } from 'react-router-dom'
import { orderHistoryFooterLinks } from '../../data/orderHistoryPageData'
import { SendIcon } from '../Icons'

export default function OrderHistoryFooter() {
  return (
    <footer className="bg-[#F5EDE4] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <span className="font-serif text-2xl font-extrabold text-[#8B2E2E]">Pawly.</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Curating the world&apos;s most joyful essentials for your beloved companions.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2.5">
              {orderHistoryFooterLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#A33B3B]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2.5">
              {orderHistoryFooterLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#A33B3B]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Newsletter</h3>
            <p className="mt-3 text-sm text-gray-600">Join our pack for weekly tail-wags and deals.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#A33B3B] focus:ring-1 focus:ring-[#A33B3B]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A33B3B] text-white transition hover:bg-[#8f3232]"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300/50 py-6 text-center">
          <p className="text-xs text-gray-500">© 2024 Pawly Pet Care. Created with love.</p>
        </div>
      </div>
    </footer>
  )
}
