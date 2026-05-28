import { assetUrl } from '@/utils/assetUrl'
import { PawPrintIcon } from '../Icons'

export default function DogToysHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[#D9D6CE] p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
        <div>
          <span className="inline-block rounded-full bg-[#CFE1E0] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-900">
            New Arrivals
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#374151] sm:text-5xl">
            Playtime is the{' '}
            <span className="inline-flex flex-wrap items-center gap-2 text-[#64E0D2]">
              Best Time
              <span className="inline-flex gap-1 text-[#374151]">
                <PawPrintIcon className="h-5 w-5" />
                <PawPrintIcon className="h-5 w-5" />
              </span>
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            Discover a curated world of durable, safe, and wildly fun toys designed to keep your
            pup&apos;s tail wagging all day.
          </p>
          <button
            type="button"
            className="btn-zoom-hover mt-8 rounded-full bg-[#64E0D2] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#64E0D2]"
          >
            Shop All Toys
          </button>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-[#374151] shadow-lg">
          <img
            src={assetUrl("/images/dog-toys/hero.png")}
            alt="Golden retriever ready to play"
            className="aspect-square w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
