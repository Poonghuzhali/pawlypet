import { happyTailsReviews } from '../../data/productDetailData'
import { StarIcon, PencilIcon } from '../Icons'

export default function HappyTails() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Happy Tails</h2>
            <p className="mt-2 text-sm text-gray-600">
              Real feedback from our beloved Pawly family.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D14D4D] hover:underline"
          >
            <PencilIcon className="h-4 w-4" />
            Write a Review
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {happyTailsReviews.map((review) => (
            <article
              key={review.name}
              className="card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition"
            >
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{review.name}</p>
                    <div className="mt-0.5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{review.text}</p>
              </div>
              <img
                src={review.photo}
                alt={`${review.name} review`}
                className="h-36 w-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
