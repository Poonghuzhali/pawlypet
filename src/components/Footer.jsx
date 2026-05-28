import { footerLinks } from '../data/homeData'
import { ArrowRightIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export default function Footer() {
  return (
    <footer id="about-us" className="border-t border-gray-200 bg-[#F5EDE4] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="text-2xl font-extrabold text-coral">
              Petify
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Your one-stop destination for premium pet products, expert care, and everything your
              furry friends need to thrive.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-500 transition hover:text-coral">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 transition hover:text-coral">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 transition hover:text-coral">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Information</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.information.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Join Our Newsletter</h3>
            <p className="mt-3 text-sm text-gray-600">
              Subscribe for exclusive deals, pet care tips, and new arrivals.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-coral focus:ring-1 focus:ring-coral"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-white transition hover:bg-red-700"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Petify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
