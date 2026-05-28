import { useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import { CloseIcon } from '../Icons'

export default function OrderConfirmationHeader() {
  const navigate = useNavigate()

  return (
    <header className="relative z-20 px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <button type="button" onClick={() => navigate('/')} className="inline-flex border-0 bg-transparent p-0">
          <Logo serif />
        </button>
        <button
          type="button"
          onClick={() => navigate('/cart')}
          aria-label="Close"
          className="rounded-full border-0 bg-transparent p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
