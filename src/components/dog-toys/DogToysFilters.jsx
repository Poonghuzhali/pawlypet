import { useState } from 'react'
import { dogSizes, materials } from '../../data/dogToysPageData'
import { CheckIcon } from '../Icons'

export default function DogToysFilters() {
  const [size, setSize] = useState('Medium (21-50 lbs)')
  const [material, setMaterial] = useState('Rubber')
  const [priceRange, setPriceRange] = useState(45)

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Dog Size</h3>
        <ul className="mt-4 space-y-3">
          {dogSizes.map((item) => {
            const selected = size === item
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setSize(item)}
                  className="flex w-full items-center gap-3 text-left text-sm text-gray-700"
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      selected
                        ? 'border-[#2D6A64] bg-[#2D6A64] text-white'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {selected ? <CheckIcon className="h-3 w-3" /> : null}
                  </span>
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Material</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {materials.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMaterial(item)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                material === item
                  ? 'bg-[#D15151] text-white'
                  : 'bg-[#F5F0EB] text-gray-600 hover:bg-[#ebe4dc]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Price Range</h3>
        <div className="mt-4">
          <input
            type="range"
            min="5"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="dog-range w-full"
          />
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>$5</span>
            <span>$100+</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-[#D4F5EF] p-5">
        <p className="text-sm leading-relaxed text-[#2D6A64]">
          <span className="font-bold">Expert Tip:</span> Rubber toys are best for aggressive
          chewers, while plushies are perfect for snugglers!
        </p>
      </div>
    </aside>
  )
}
