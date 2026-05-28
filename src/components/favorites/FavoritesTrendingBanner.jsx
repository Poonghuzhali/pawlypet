import { Link } from 'react-router-dom'
import { trendingBanner } from '../../data/favoritesPageData'
import { ArrowRightIcon } from '../Icons'

export default function FavoritesTrendingBanner() {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] bg-[#F0EBE4] p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-[#2D6A64] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            {trendingBanner.badge}
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
            {trendingBanner.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            {trendingBanner.description}
          </p>
          <Link
            to="/dog"
            className="btn-zoom-hover mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-bold text-white no-underline hover:bg-gray-800"
          >
            {trendingBanner.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={trendingBanner.image}
            alt="Dog ready for travel"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-md"
          />
          <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl bg-[#F2C94C] px-4 py-3 shadow-md sm:bottom-6 sm:left-6">
            <p className="text-sm font-bold italic leading-snug text-gray-900">
              &ldquo;{trendingBanner.testimonial.quote}&rdquo;
            </p>
            <p className="mt-1 text-xs font-semibold text-gray-700">
              — {trendingBanner.testimonial.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
