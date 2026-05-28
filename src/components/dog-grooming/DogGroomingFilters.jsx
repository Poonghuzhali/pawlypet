import { assetUrl } from '@/utils/assetUrl'
import { useState } from 'react'
import { scentFilters } from '../../data/dogGroomingPageData'

export default function DogGroomingFilters() {
  const [priceRange, setPriceRange] = useState(50)
  const [selectedScent, setSelectedScent] = useState('Aloe Vera')

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Price Range</h3>
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="dog-range w-full"
          />
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Scent</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {scentFilters.map((scent) => (
            <button
              key={scent}
              type="button"
              onClick={() => setSelectedScent(scent)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                selectedScent === scent
                  ? 'bg-[#F5EDE4] text-[#8B2E2E] ring-1 ring-[#8B2E2E]/30'
                  : 'bg-[#F5F0EB] text-gray-600 hover:bg-[#ebe4dc]'
              }`}
            >
              {scent}
            </button>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl shadow-soft">
        <img
          src={assetUrl("/images/dog-grooming/promo-dog.png")}
          alt="Dog after grooming"
          className="aspect-[4/3] w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/30" />
        <p className="absolute bottom-4 left-4 right-4 text-lg font-extrabold text-white">
          New Arrivals Alert!
        </p>
      </div>
    </aside>
  )
}
