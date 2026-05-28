import { PlusIcon } from '../Icons'

export default function MyPetsHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-[#3D2C2C] sm:text-4xl">
          Your Furry <span className="text-[#D15151]">Family Members</span>
        </h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
          Manage your pet&apos;s health, schedules, and details all in one warm place.
        </p>
      </div>

      <button
        type="button"
        className="btn-zoom-hover inline-flex items-center gap-2 rounded-full bg-[#D15151] px-6 py-3 text-sm font-bold text-white hover:bg-[#b84242]"
      >
        <PlusIcon className="h-4 w-4" />
        Add New Pet
      </button>
    </div>
  )
}
