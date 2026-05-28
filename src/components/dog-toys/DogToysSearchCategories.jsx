import { toyCategories } from '../../data/dogToysPageData'
import {
  SearchIcon,
  PawPrintIcon,
  TennisBallIcon,
  PuzzleIcon,
  ToyCarIcon,
  TugIcon,
} from '../Icons'

const categoryIcons = {
  paw: PawPrintIcon,
  ball: TennisBallIcon,
  puzzle: PuzzleIcon,
  plush: ToyCarIcon,
  tug: TugIcon,
}

export default function DogToysSearchCategories() {
  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Find treats..."
            className="w-full rounded-full border border-gray-200 bg-[#F0EBE4] py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#2D6A64] focus:ring-1 focus:ring-[#2D6A64]"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
          {toyCategories.map((category) => {
            const Icon = categoryIcons[category.icon]
            return (
              <button
                key={category.id}
                type="button"
                className="card-hover-lift flex flex-col items-center rounded-2xl bg-white px-3 py-5 shadow-soft transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4F5EF] text-[#2D6A64]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-3 text-xs font-bold text-gray-800 sm:text-sm">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
