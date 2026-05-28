import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/navData'
import Logo from './Logo'
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
} from './Icons'

function isLinkActive(pathname, link) {
  if (link.label === 'Dog') return pathname === '/dog' || pathname.startsWith('/dog/')
  if (link.label === 'Cat') return pathname === '/cat' || pathname.startsWith('/cat/')
  if (link.label === 'Small Pets') return pathname === '/small-pets' || pathname.startsWith('/small-pets/')
  if (link.label === 'Consult Vet') return pathname === '/consult-vet' || pathname.startsWith('/consult-vet/')
  if (link.label === 'Shop by Breed') return pathname === '/shop-by-breed'
  if (link.label === 'Home') return pathname === '/'
  return false
}

export default function Header({
  compact = false,
  cartActive = false,
  favoritesActive = false,
  profileActive = false,
  hideLogo = false,
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isCartPage = cartActive || pathname === '/cart'
  const isFavoritesPage = favoritesActive || pathname === '/favorites'
  const isProfilePage = profileActive || pathname === '/account'

  const linkClass = (link) => {
    const active = isLinkActive(pathname, link)
    return active
      ? 'text-sm font-semibold text-brand-red border-b-2 border-brand-red pb-0.5'
      : 'text-sm font-medium text-gray-700 transition hover:text-brand-red'
  }

  const renderLink = (link, onClick) => {
    const isHashLink = link.path.includes('#')
    const className = linkClass(link)

    if (isHashLink) {
      return (
        <a key={link.label} href={link.path} className={className} onClick={onClick}>
          {link.label}
        </a>
      )
    }

    return (
      <Link key={link.label} to={link.path} className={className} onClick={onClick}>
        {link.label}
      </Link>
    )
  }

  return (
    <header className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-sm ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex h-16 items-center lg:h-[72px] ${
            hideLogo ? 'relative justify-end' : 'justify-between gap-4'
          }`}
        >
          {!hideLogo && (
            <Link to="/" className="inline-flex shrink-0 no-underline">
              <Logo serif />
            </Link>
          )}

          <nav
            className={`hidden items-center gap-6 xl:flex ${
              hideLogo ? 'absolute left-1/2 -translate-x-1/2' : ''
            }`}
          >
            {navLinks.map((link) => renderLink(link))}
          </nav>

          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            {!compact && (
              <div className="relative">
                <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-36 rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-teal focus:ring-1 focus:ring-teal lg:w-44"
                />
              </div>
            )}
            <Link
              to="/favorites"
              aria-label="Wishlist"
              className={`rounded-full p-2 transition ${
                isFavoritesPage
                  ? 'bg-[#CFE1E0] text-brand-red'
                  : 'text-gray-600 hover:text-brand-red'
              }`}
            >
              <HeartIcon className={`h-5 w-5 ${isFavoritesPage ? 'fill-current' : ''}`} />
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className={`relative rounded-full p-2 transition ${
                isCartPage
                  ? 'bg-[#CFE1E0] text-brand-red'
                  : 'text-gray-600 hover:text-teal'
              }`}
            >
              <CartIcon />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#64E0D2] text-[10px] font-bold text-white">
                3
              </span>
            </Link>
            <Link
              to="/account"
              aria-label="Profile"
              className={`rounded-full p-2 transition ${
                isProfilePage
                  ? 'bg-[#CFE1E0] text-brand-red'
                  : 'text-gray-600 hover:text-teal'
              }`}
            >
              <UserIcon className="h-5 w-5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-700 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-cream px-4 py-4 xl:hidden">
          {!compact && (
            <div className="relative mb-4">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none"
              />
            </div>
          )}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => renderLink(link, () => setMobileOpen(false)))}
            <Link
              to="/favorites"
              className={`py-2 text-sm font-medium ${
                isFavoritesPage ? 'font-semibold text-brand-red' : 'text-gray-700'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Favorites
            </Link>
            <Link
              to="/account"
              className={`py-2 text-sm font-medium ${
                isProfilePage ? 'font-semibold text-brand-red' : 'text-gray-700'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
