import { Link } from 'react-router-dom'
import { favoritesFooterLinks } from '../../data/favoritesPageData'
import { InstagramIcon, TwitterIcon } from '../Icons'

export default function FavoritesFooter() {
  return (
    <footer className="bg-[#D9D6CE] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <span className="font-sans text-2xl font-extrabold tracking-wide text-[#4AB8AC]">
                PAWLY
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-600">
              Elevating the lives of pets and their humans through premium essentials and mindful
              care guides.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
              >
                <InstagramIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:text-[#64E0D2]"
              >
                <TwitterIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <ul className="space-y-2.5">
              {favoritesFooterLinks.column1.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#64E0D2]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-2.5">
              {favoritesFooterLinks.column2.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-[#64E0D2]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300/50 py-6 text-center">
          <p className="text-xs text-gray-500">© 2024 Pawly. Crafted for paws and souls.</p>
        </div>
      </div>
    </footer>
  )
}
