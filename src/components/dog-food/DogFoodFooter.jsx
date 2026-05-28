import { Link } from 'react-router-dom'
import { dogFoodFooterLinks } from '../../data/dogFoodPageData'
import Logo from '../Logo'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons'

export default function DogFoodFooter() {
  return (
    <footer className="bg-[#F0EBE4] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <Logo serif />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Curating the world&apos;s most joyful essentials for your beloved companions.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-[#D15151]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-[#D15151]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-[#D15151]"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2.5">
              {dogFoodFooterLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#D15151]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2.5">
              {dogFoodFooterLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#D15151]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {dogFoodFooterLinks.explore.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#D15151]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300/50 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2024 Pawly Pet Care. Created with love.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 transition hover:text-[#D15151]">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 transition hover:text-[#D15151]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
