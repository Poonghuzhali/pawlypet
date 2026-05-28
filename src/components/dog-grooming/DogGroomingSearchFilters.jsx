import { useState } from 'react'
import { categoryTabs } from '../../data/dogGroomingPageData'
import { SearchIcon } from '../Icons'

export default function DogGroomingSearchFilters() {
  const [activeTab, setActiveTab] = useState(categoryTabs[0])

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Find products..."
            className="w-full rounded-full border border-gray-200 bg-[#E1D8D2] py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#64E0D2] focus:ring-1 focus:ring-[#64E0D2]"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'bg-[#4AB8AC] text-white'
                  : 'bg-[#D9D6CE] text-gray-700 hover:bg-[#D9D6CE]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
