import { Link } from 'react-router-dom'
import { smallPetsFooterLinks } from '../../data/smallPetsPageData'
import Logo from '../Logo'

export default function SmallPetsFooter() {
  return (
    <footer className="bg-[#FFFBF5] px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <Link to="/" className="inline-flex justify-center no-underline">
          <Logo serif />
        </Link>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {smallPetsFooterLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600 transition hover:text-[#A33B3B]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-10 border-t border-gray-300/50 py-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            © 2024 Pawly Pet Care. The Tactile Sanctuary.
          </p>
        </div>
      </div>
    </footer>
  )
}
