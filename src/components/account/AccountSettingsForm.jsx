import { useState } from 'react'
import { accountUser } from '../../data/accountPageData'
import { CameraIcon, ShieldCheckIcon, ArrowRightIcon } from '../Icons'

function FormField({ label, id, value, onChange, type = 'text', className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl bg-[#D9D6CE] px-4 py-3 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#64E0D2]/30"
      />
    </div>
  )
}

export default function AccountSettingsForm() {
  const [form, setForm] = useState(accountUser)

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <article className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
      <span className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#CFE1E0]/60 blur-sm" />
      <span className="pointer-events-none absolute right-12 top-8 h-24 w-24 rounded-full bg-[#CFE1E0]/80 blur-md" />

      <div className="relative z-10 flex flex-col gap-6 border-b border-gray-100 pb-8 sm:flex-row sm:items-center">
        <div className="relative shrink-0">
          <img
            src={form.profileImage}
            alt="Profile"
            className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28"
          />
          <button
            type="button"
            aria-label="Change profile photo"
            className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#64E0D2] text-gray-900 shadow-md"
          >
            <CameraIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1">
          <p className="font-bold text-gray-900">Profile Photo</p>
          <p className="mt-1 text-sm text-gray-500">Recommended size: 400×400px. JPG or PNG.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-[#D9D6CE] px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#D9D6CE]"
            >
              Change
            </button>
            <button type="button" className="text-sm font-semibold text-[#64E0D2] hover:underline">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-5 sm:grid-cols-2">
        <FormField
          label="Full Name"
          id="fullName"
          value={form.fullName}
          onChange={updateField('fullName')}
        />
        <FormField
          label="Email Address"
          id="email"
          type="email"
          value={form.email}
          onChange={updateField('email')}
        />
        <FormField
          label="Phone Number"
          id="phone"
          value={form.phone}
          onChange={updateField('phone')}
        />
        <FormField
          label="Preferred Name"
          id="preferredName"
          value={form.preferredName}
          onChange={updateField('preferredName')}
        />
        <div className="sm:col-span-2">
          <label htmlFor="bio" className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            value={form.bio}
            onChange={updateField('bio')}
            className="mt-2 w-full resize-none rounded-2xl bg-[#D9D6CE] px-4 py-3 text-sm font-medium leading-relaxed text-gray-800 outline-none focus:ring-2 focus:ring-[#64E0D2]/30"
          />
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-col gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-[#64E0D2]">
          <ShieldCheckIcon className="h-5 w-5 shrink-0" />
          Your data is securely stored and never shared.
        </p>
        <button
          type="button"
          className="btn-zoom-hover inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#64E0D2] to-[#64E0D2] px-8 py-3.5 text-sm font-bold text-white hover:from-[#52CFC2] hover:to-[#64E0D2]"
        >
          Save Changes
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}
