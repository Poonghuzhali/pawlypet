import { useState } from 'react'
import { quickFilters } from '../../data/dogHealthPageData'
import {
  SearchIcon,
  NutritionIcon,
  ToothIcon,
  MedicalBagIcon,
  BugIcon,
} from '../Icons'

const filterIcons = {
  nutrition: NutritionIcon,
  tooth: ToothIcon,
  medical: MedicalBagIcon,
  bug: BugIcon,
}

export default function DogHealthSearchFilters() {
  const [activeFilter, setActiveFilter] = useState(quickFilters[0].id)

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Find Treats..."
            className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-soft outline-none focus:border-[#2D6A64] focus:ring-1 focus:ring-[#2D6A64]"
          />
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {quickFilters.map((filter) => {
            const Icon = filterIcons[filter.icon]
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeFilter === filter.id
                    ? 'bg-[#F5EDE4] text-[#8B2E2E] ring-1 ring-[#8B2E2E]/20'
                    : 'bg-white text-gray-700 shadow-soft hover:bg-[#FAFAFA]'
                }`}
              >
                <Icon className="h-4 w-4 text-[#2D6A64]" />
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
