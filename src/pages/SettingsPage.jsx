import AccountLayout from '../components/account/AccountLayout'
import NotificationPreferences from '../components/settings/NotificationPreferences'
import LanguageSecurity from '../components/settings/LanguageSecurity'
import SettingsHelpBanner from '../components/settings/SettingsHelpBanner'
import DeleteAccountSection from '../components/settings/DeleteAccountSection'

export default function SettingsPage() {
  return (
    <AccountLayout activeItem="settings" contentClassName="max-w-5xl">
      <h1 className="text-3xl font-extrabold text-[#374151] sm:text-4xl">Settings</h1>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        Manage your account preferences and security.
      </p>

      <div className="mt-8">
        <NotificationPreferences />
        <LanguageSecurity />
        <SettingsHelpBanner />
        <DeleteAccountSection />
      </div>
    </AccountLayout>
  )
}
