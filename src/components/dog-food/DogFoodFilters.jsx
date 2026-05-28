import { useState } from 'react'
import { lifeStageFilters, foodTypeFilters } from '../../data/dogFoodPageData'

export default function DogFoodFilters() {
  const [lifeStage, setLifeStage] = useState('Adult')
  const [priceRange, setPriceRange] = useState(55)

  return (
    <aside className="space-y-8 rounded-3xl bg-[#D9D6CE] p-6 lg:sticky lg:top-24 lg:self-start">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Life Stage</h3>
        <ul className="mt-4 space-y-3">
          {lifeStageFilters.map((stage) => (
            <li key={stage}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={lifeStage === stage}
                  onChange={() => setLifeStage(stage)}
                  className="dog-checkbox h-4 w-4 rounded border-gray-300"
                />
                {stage}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Food Type</h3>
        <ul className="mt-4 space-y-3">
          {foodTypeFilters.map((type) => (
            <li key={type}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                <input type="checkbox" className="dog-checkbox h-4 w-4 rounded border-gray-300" />
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Price Range</h3>
        <div className="mt-4">
          <input
            type="range"
            min="10"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="dog-range w-full"
          />
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>$10</span>
            <span>$100+</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
