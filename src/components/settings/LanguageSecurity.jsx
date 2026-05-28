import { languageOptions, securityInfo } from '../../data/settingsPageData'
import { GlobeIcon, LockIcon, ArrowRightIcon, ChevronDownIcon } from '../Icons'

export default function LanguageSecurity() {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <article className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-2">
          <GlobeIcon className="h-5 w-5 text-[#64E0D2]" />
          <h2 className="text-lg font-extrabold text-gray-900">Language</h2>
        </div>

        <label className="mt-6 block">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
            Primary Display Language
          </span>
          <div className="relative mt-2">
            <select
              defaultValue={languageOptions[0]}
              className="w-full appearance-none rounded-2xl bg-[#D9D6CE] px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#64E0D2]/30"
            >
              {languageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </label>
      </article>

      <article className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-2">
          <LockIcon className="h-5 w-5 text-[#64E0D2]" />
          <h2 className="text-lg font-extrabold text-gray-900">Security</h2>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-600">{securityInfo.description}</p>

        <button
          type="button"
          className="btn-zoom-hover mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#64E0D2] to-[#64E0D2] px-6 py-3.5 text-sm font-bold text-white hover:from-[#52CFC2] hover:to-[#64E0D2] sm:w-auto"
        >
          Change Password
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </article>
    </div>
  )
}
