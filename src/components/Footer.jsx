import { Link } from 'react-router-dom'
import { footerLinks } from '../data/homeData'
import Logo from './Logo'
import { ArrowRightIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-[#F5EDE4] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <Logo serif />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Pawly is your premium pet sanctuary — offering expert care, curated products, and
              a community where every pet thrives.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-coral"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-coral"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-soft transition hover:text-coral"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-bold text-gray-900">Join Our Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get exclusive deals and pet care tips.
            </p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-coral focus:ring-1 focus:ring-coral"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-white transition hover:bg-[#b84242]"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300/60 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2024 Pawly. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 transition hover:text-coral">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 transition hover:text-coral">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
