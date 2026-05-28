import { assetUrl } from '@/utils/assetUrl'
import { Link } from 'react-router-dom'
import { accountNavItems, accountUser } from '../../data/accountPageData'
import Logo from '../Logo'
import {
  UserIcon,
  PawPrintIcon,
  CartAddIcon,
  SettingsIcon,
} from '../Icons'

const navIcons = {
  user: UserIcon,
  paw: PawPrintIcon,
  bag: CartAddIcon,
  settings: SettingsIcon,
}

export default function AccountSidebar({ activeItem = 'personal-info' }) {
  return (
    <aside className="bg-[#F5EDE4] p-6 lg:min-h-screen lg:rounded-br-[2rem] lg:p-8">
      <Link to="/" className="inline-flex no-underline">
        <Logo serif />
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <img
          src={assetUrl("/images/account/avatar.png")}
          alt={accountUser.fullName}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900">
            Welcome back, {accountUser.displayName}
          </p>
          <p className="text-sm text-gray-500">{accountUser.membership}</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1">
        {accountNavItems.map((item) => {
          const Icon = navIcons[item.icon]
          const isActive = item.id === activeItem

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold no-underline transition ${
                isActive
                  ? 'bg-white text-[#D15151] shadow-soft'
                  : 'text-gray-600 hover:bg-white/60 hover:text-gray-900'
              }`}
            >
              <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-[#D15151]' : 'text-gray-500'}`} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
