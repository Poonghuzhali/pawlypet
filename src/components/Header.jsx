import { useState } from 'react'
import { navLinks } from '../data/homeData'
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
} from './Icons'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="#" className="shrink-0 text-2xl font-extrabold text-coral lg:text-3xl">
            Petify
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-700 transition hover:text-coral"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-40 rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none transition focus:border-teal focus:ring-1 focus:ring-teal lg:w-52"
              />
            </div>
            <button type="button" aria-label="Profile" className="rounded-full p-2 text-gray-600 transition hover:bg-white hover:text-teal">
              <UserIcon />
            </button>
            <button type="button" aria-label="Wishlist" className="rounded-full p-2 text-gray-600 transition hover:bg-white hover:text-coral">
              <HeartIcon />
            </button>
            <button type="button" aria-label="Cart" className="rounded-full p-2 text-gray-600 transition hover:bg-white hover:text-teal">
              <CartIcon />
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-cream px-4 py-4 lg:hidden">
          <div className="relative mb-4">
            <SearchIcon className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none"
            />
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-2 border-t border-gray-100 pt-4">
            <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-sm font-medium text-gray-700">
              <UserIcon className="w-4 h-4" /> Account
            </button>
            <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-sm font-medium text-gray-700">
              <CartIcon className="w-4 h-4" /> Cart
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
