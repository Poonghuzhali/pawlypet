import { assetUrl } from '@/utils/assetUrl'
export default function DogPageHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
        <img
          src={assetUrl("/images/dog-page/hero.png")}
          alt="Happy golden retriever"
          className="aspect-[21/9] min-h-[280px] w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Happy Tails,
              <br />
              Happy Hearts.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              Discover premium care, nutrition, and joy tailored specifically for your canine
              companion.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-8 rounded-full bg-gradient-to-r from-[#B03A3E] to-[#D14D4D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:from-[#9a3236] hover:to-[#b84242]"
            >
              Explore Dog Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
