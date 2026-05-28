import { Link } from 'react-router-dom'
import { PawIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-cream via-cream to-teal-pale/40 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-coral">
            Premium Care Sanctuary
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Everything Your
            <br />
            Pet Needs
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
            From premium nutrition to expert veterinary care, we provide everything to keep your
            furry friends happy, healthy, and thriving every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="btn-zoom-hover inline-flex items-center justify-center rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#b84242]"
            >
              Shop Now
            </a>
            <Link
              to="/shop-by-breed"
              className="btn-zoom-hover inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-teal-light"
            >
              Explore Categories
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-4xl shadow-card">
            <img
              src="/images/hero.png"
              alt="Golden retriever and rabbit together"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card sm:-bottom-5 sm:left-6 sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
              <PawIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Trusted by 10k+ Pet Parents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
