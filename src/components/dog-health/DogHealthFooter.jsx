import { Link } from 'react-router-dom'
import { healthFooterLinks } from '../../data/dogHealthPageData'
import Logo from '../Logo'
import { ShareIcon, HeartIcon } from '../Icons'

export default function DogHealthFooter() {
  return (
    <footer className="bg-[#D9D6CE] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <Link to="/" className="inline-flex no-underline">
            <Logo serif />
          </Link>
          <p className="mt-2 text-xs text-gray-500">
            © 2024 Pawly Pet Care. Made with love for furry friends.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {healthFooterLinks.map((link) => (
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
          <button
            type="button"
            aria-label="Share"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
          >
            <ShareIcon className="h-4 w-4" />
          </button>
          <Link
            to="/favorites"
            aria-label="Wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
          >
            <HeartIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
