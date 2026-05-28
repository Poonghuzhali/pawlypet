import { PlusIcon } from '../Icons'

export default function MyPetsHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-[#374151] sm:text-4xl">
          Your Furry <span className="text-[#64E0D2]">Family Members</span>
        </h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
          Manage your pet&apos;s health, schedules, and details all in one warm place.
        </p>
      </div>

      <button
        type="button"
        className="btn-zoom-hover inline-flex items-center gap-2 rounded-full bg-[#64E0D2] px-6 py-3 text-sm font-bold text-white hover:bg-[#52CFC2]"
      >
        <PlusIcon className="h-4 w-4" />
        Add New Pet
      </button>
    </div>
  )
}
