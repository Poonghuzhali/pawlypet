import { LeafIcon } from '../Icons'

export default function SettingsHelpBanner() {
  return (
    <article className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#CFE1E0] p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
      <LeafIcon className="pointer-events-none absolute -bottom-4 right-4 h-32 w-32 text-[#64E0D2]/10 sm:right-8" />

      <div className="relative z-10 max-w-xl">
        <h3 className="text-lg font-extrabold text-[#64E0D2]">Need help with your settings?</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64E0D2]/90">
          Our dedicated support team is here to help you configure your Pawly account just the way
          you like it.
        </p>
      </div>

      <button
        type="button"
        className="relative z-10 mt-4 shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-800 shadow-sm transition hover:bg-gray-50 sm:mt-0"
      >
        Help Center
      </button>
    </article>
  )
}
