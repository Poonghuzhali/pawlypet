import { useState } from 'react'
import { pairsPerfectlyWith } from '../../data/productDetailData'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons'

export default function PairsPerfectly() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const maxStart = Math.max(0, pairsPerfectlyWith.length - visibleCount)

  const prev = () => setStartIndex((i) => Math.max(0, i - 1))
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1))

  const visible = pairsPerfectlyWith.slice(startIndex, startIndex + visibleCount)

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Pairs Perfectly With
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous products"
              onClick={prev}
              disabled={startIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#64E0D2] hover:text-[#64E0D2] disabled:opacity-40"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next products"
              onClick={next}
              disabled={startIndex >= maxStart}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#64E0D2] hover:text-[#64E0D2] disabled:opacity-40"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.name}
              className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition"
            >
              <div className="bg-[#E1D8D2] p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-52 w-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-lg font-extrabold text-[#64E0D2]">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
