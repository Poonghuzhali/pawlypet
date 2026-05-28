import { Link } from 'react-router-dom'
import { catFooterLinks } from '../../data/catPageData'
import Logo from '../Logo'

export default function CatShopFooter() {
  return (
    <footer className="bg-[#FFF8F1] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <Logo serif />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Making every tail wag and every purr louder with premium care and curated supplies.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2.5">
              {catFooterLinks.shop.map((link) => (
                <li key={link}>
                  {link === 'Cat Collection' ? (
                    <Link
                      to="/cat"
                      className="text-sm font-semibold text-[#A33B3B] transition hover:underline"
                    >
                      {link}
                    </Link>
                  ) : link === 'Dog Collection' ? (
                    <Link
                      to="/dog"
                      className="text-sm text-gray-600 transition hover:text-[#A33B3B]"
                    >
                      {link}
                    </Link>
                  ) : (
                    <Link
                      to="/small-pets"
                      className="text-sm text-gray-600 transition hover:text-[#A33B3B]"
                    >
                      {link}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2.5">
              {catFooterLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#A33B3B]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {catFooterLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#A33B3B]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300/50 py-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            © 2024 Pawly Pet Care. All whiskers reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
