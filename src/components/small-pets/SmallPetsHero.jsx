import { PawIcon } from '../Icons'

export default function SmallPetsHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
        <img
          src="/images/small-pets/hero.png"
          alt="Rabbit and guinea pig"
          className="aspect-[21/9] min-h-[280px] w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F1A]/90 via-[#3D1F1A]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Little Friends,{' '}
              <span className="inline-flex items-center gap-1.5 text-[#F2C94C]">
                Big Love
                <PawIcon className="h-5 w-5 text-[#F2C94C] sm:h-6 sm:w-6" />
                <PawIcon className="-ml-2 h-4 w-4 text-[#F2C94C]/80 sm:h-5 sm:w-5" />
              </span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              Discover premium nutrition, cozy habitats, and playful essentials designed for your
              smallest companions.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-8 rounded-full bg-[#40E0D0] px-8 py-3.5 text-sm font-bold text-gray-900 shadow-lg hover:bg-[#36c9ba]"
            >
              Shop All Small Pets
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
