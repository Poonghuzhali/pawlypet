import { Link } from 'react-router-dom'
import { consultVetFooterLinks } from '../../data/consultVetPageData'
import Logo from '../Logo'
import { GlobeIcon, InstagramIcon } from '../Icons'

export default function ConsultVetFooter() {
  return (
    <footer className="bg-[#F7F1EB] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <Logo serif />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Creating the world&apos;s most joyful and healthy ecosystem for pets and their
              humans.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#005F54]"
              >
                <GlobeIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#005F54]"
              >
                <InstagramIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Expertise</h3>
            <ul className="mt-4 space-y-2.5">
              {consultVetFooterLinks.expertise.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#005F54]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Our Brand</h3>
            <ul className="mt-4 space-y-2.5">
              {consultVetFooterLinks.brand.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#005F54]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Join the Sanctuary
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Get the latest pet wellness tips in your inbox weekly.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#005F54] focus:ring-1 focus:ring-[#005F54]"
              />
              <button
                type="submit"
                className="btn-zoom-hover shrink-0 rounded-full bg-[#005F54] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#004a42]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300/50 py-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            © 2024 Pawly Sanctuary. Made with love and treats.
          </p>
        </div>
      </div>
    </footer>
  )
}
