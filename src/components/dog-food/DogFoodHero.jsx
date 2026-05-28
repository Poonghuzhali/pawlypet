import { PawIcon } from '../Icons'

export default function DogFoodHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
        <img
          src="/images/dog-food/hero.png"
          alt="Happy dog"
          className="aspect-[21/9] min-h-[280px] w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <h1 className="flex flex-wrap items-center gap-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Fuel Their Play
              <PawIcon className="h-8 w-8 text-white/90 sm:h-10 sm:w-10" />
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              Nutrition tailored for every tail wag. Explore our premium selection of
              science-backed formulas.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-8 rounded-full bg-[#E56B6B] px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#d55a5a]"
            >
              Shop Bestsellers
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
