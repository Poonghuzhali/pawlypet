import { useState } from 'react'
import { healthConcerns, ageGroups } from '../../data/dogHealthPageData'
import { CheckIcon } from '../Icons'

export default function DogHealthFilters() {
  const [concern, setConcern] = useState('Anxiety')
  const [ageGroup, setAgeGroup] = useState('Adult')

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Health Concern</h3>
        <ul className="mt-4 space-y-3">
          {healthConcerns.map((item) => {
            const selected = concern === item
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setConcern(item)}
                  className="flex w-full items-center gap-3 text-left text-sm text-gray-700"
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      selected
                        ? 'border-[#D15151] bg-[#D15151] text-white'
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
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Age Group</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {ageGroups.map((age) => (
            <button
              key={age}
              type="button"
              onClick={() => setAgeGroup(age)}
              className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition ${
                ageGroup === age
                  ? 'bg-[#8B2E2E] text-white'
                  : 'bg-[#F5F0EB] text-gray-600 hover:bg-[#ebe4dc]'
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
