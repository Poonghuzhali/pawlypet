import { useState } from 'react'
import { notificationPreferences as initialPreferences } from '../../data/settingsPageData'
import { BellIcon } from '../Icons'
import ToggleSwitch from './ToggleSwitch'

export default function NotificationPreferences() {
  const [preferences, setPreferences] = useState(initialPreferences)

  const togglePreference = (id) => {
    setPreferences((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)),
    )
  }

  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center gap-2">
        <BellIcon className="h-5 w-5 text-[#64E0D2]" />
        <h2 className="text-lg font-extrabold text-gray-900">Notification Preferences</h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {preferences.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-[#E1D8D2] px-5 py-4"
          >
            <div>
              <p className="font-bold text-gray-900">{item.label}</p>
              <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
            </div>
            <ToggleSwitch
              enabled={item.enabled}
              onChange={() => togglePreference(item.id)}
            />
          </div>
        ))}
      </div>
    </article>
  )
}
