import { Link } from 'react-router-dom'
import { groomingFooterLinks } from '../../data/dogGroomingPageData'
import Logo from '../Logo'
import { FacebookIcon, InstagramIcon } from '../Icons'

export default function DogGroomingFooter() {
  return (
    <footer className="bg-[#D9D6CE] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <Link to="/" className="inline-flex no-underline">
            <Logo serif />
          </Link>
          <p className="mt-2 text-xs text-gray-500">
            © 2024 Pawly Pet Care. Crafted for happy tails.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {groomingFooterLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-600 transition hover:text-[#64E0D2]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
