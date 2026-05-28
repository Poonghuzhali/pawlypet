import { TrashIcon, PawPrintIcon } from '../Icons'

export default function FavoritesPageHeader({ onClearAll }) {
  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="flex flex-wrap items-center gap-2 font-sans text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Favorites
            <span className="inline-flex gap-1 text-gray-800">
              <PawPrintIcon className="h-5 w-5" />
              <PawPrintIcon className="h-5 w-5" />
            </span>
          </h1>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            These will make their tails wag!
          </p>
        </div>

        <button
          type="button"
          onClick={onClearAll}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#64E0D2] transition hover:underline"
        >
          <TrashIcon className="h-4 w-4" />
          Clear All
        </button>
      </div>
    </section>
  )
}
