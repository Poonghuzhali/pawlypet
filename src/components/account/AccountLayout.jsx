import Header from '../Header'
import AccountSidebar from './AccountSidebar'
import AccountSettingsFooter from './AccountSettingsFooter'

export default function AccountLayout({
  activeItem,
  children,
  contentClassName = 'max-w-5xl',
  footer,
}) {
  return (
    <div className="min-h-screen bg-[#FAF6F0] lg:grid lg:grid-cols-[280px_1fr]">
      <AccountSidebar activeItem={activeItem} />

      <div className="flex min-h-screen flex-col">
        <Header compact profileActive hideLogo className="bg-[#FAF6F0]/95" />

        <main className="flex-1 pb-10">
          <section className="px-4 pt-6 sm:px-6 lg:px-8">
            <div className={`mx-auto ${contentClassName}`}>{children}</div>
          </section>
        </main>

        {footer ?? <AccountSettingsFooter />}
      </div>
    </div>
  )
}
