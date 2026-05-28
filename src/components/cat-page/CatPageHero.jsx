import { assetUrl } from '@/utils/assetUrl'
export default function CatPageHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
        <img
          src={assetUrl("/images/cat-page/hero.png")}
          alt="Ginger cat with yarn ball"
          className="aspect-[21/9] min-h-[280px] w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <span className="inline-flex rounded-lg bg-[#F2E27E] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900">
              New Collection
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Purr-fect Picks
              <br />
              for Your Cat
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              From gourmet treats to cozy retreats, discover everything your feline friend
              desires.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-8 rounded-full bg-[#E85D5D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#d14f4f]"
            >
              Explore Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
