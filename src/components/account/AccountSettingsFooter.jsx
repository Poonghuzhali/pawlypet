import { accountFooterLinks } from '../../data/accountPageData'

export default function AccountSettingsFooter() {
  return (
    <footer className="mt-10 bg-[#D9D6CE] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {accountFooterLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-600 transition hover:text-[#64E0D2]"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="mt-6 font-sans text-lg font-extrabold text-[#4AB8AC]">Pawly Pet Care</p>
        <p className="mt-2 text-xs text-gray-500">
          ❤️ © 2024 Pawly Pet Care. Made with love for your furry friends.
        </p>
      </div>
    </footer>
  )
}
