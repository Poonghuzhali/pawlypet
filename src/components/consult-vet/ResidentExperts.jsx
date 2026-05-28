import { residentExperts } from '../../data/consultVetPageData'
import { StarIcon, DotsIcon } from '../Icons'

export default function ResidentExperts() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Our Resident Experts
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Top-rated veterinarians currently online and available.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#005F54] hover:text-[#005F54]"
          >
            See All Experts
          </button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {residentExperts.map((expert) => (
            <article
              key={expert.name}
              className="card-hover-lift rounded-3xl bg-[#F7F1EB] p-6 shadow-soft transition"
            >
              <div className="relative mx-auto w-fit">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-20 w-20 rounded-full object-cover grayscale"
                />
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#F7F1EB] bg-green-500" />
              </div>
              <h3 className="mt-4 text-center text-sm font-bold text-gray-900">{expert.name}</h3>
              <p className="mt-1 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
                {expert.specialty}
              </p>
              <div className="mt-3 flex items-center justify-center gap-1">
                <StarIcon className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-semibold text-gray-700">
                  {expert.rating} ({expert.reviews})
                </span>
              </div>
            </article>
          ))}

          <article className="flex flex-col items-center justify-center rounded-3xl bg-[#005F54] p-6 text-center shadow-soft">
            <DotsIcon className="h-6 w-6 text-white/80" />
            <p className="mt-4 text-sm font-bold leading-snug text-white">
              And 15 others.
            </p>
            <p className="mt-1 text-xs text-white/75">
              Available right now for immediate chat.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#005F54] hover:bg-white/90"
            >
              Meet Team
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
