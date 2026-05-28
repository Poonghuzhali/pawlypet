import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { CloseIcon } from '../Icons'

export default function OrderConfirmationHeader() {
  return (
    <header className="relative z-10 px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <Link to="/" className="inline-flex no-underline">
          <Logo serif />
        </Link>
        <Link
          to="/cart"
          aria-label="Close"
          className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
        >
          <CloseIcon className="h-6 w-6" />
        </Link>
      </div>
    </header>
  )
}
