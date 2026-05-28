import { StarIcon, BookIcon } from '../Icons'

export default function BreedSpotlight() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#FDEFEF] p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Breed Spotlight
              </span>
              <span className="rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                Dogs
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Golden Standard
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Golden Retrievers are renowned for their luxurious double coats and unwavering loyalty.
              Their high energy levels require a balanced diet rich in Omega-3s and regular grooming
              to maintain that signature shine. Discover essentials tailored for their unique needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-zoom-hover rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-red-dark"
              >
                Explore Shop
              </button>
              <button
                type="button"
                className="btn-zoom-hover inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <BookIcon className="h-4 w-4" />
                Care Guide
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src="/images/dog/golden-spotlight.png"
                alt="Golden Retriever with tennis ball"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card sm:-bottom-5 sm:left-6 sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <StarIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">4.8/5 Rating</p>
                <p className="text-xs text-gray-500">Trusted by over 15,000 Golden owners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
