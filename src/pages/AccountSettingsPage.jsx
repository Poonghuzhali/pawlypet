import AccountLayout from '../components/account/AccountLayout'
import AccountSettingsForm from '../components/account/AccountSettingsForm'

export default function AccountSettingsPage() {
  return (
    <AccountLayout activeItem="personal-info">
      <h1 className="text-3xl font-extrabold text-[#374151] sm:text-4xl">Account Settings</h1>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        Manage your personal details and preferences.
      </p>

      <div className="mt-8">
        <AccountSettingsForm />
      </div>
    </AccountLayout>
  )
}
