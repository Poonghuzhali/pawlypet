import { assetUrl } from '@/utils/assetUrl'
export default function DogHealthHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
        <img
          src={assetUrl("/images/dog-health/hero.png")}
          alt="Happy dog with veterinarian"
          className="aspect-[21/9] min-h-[280px] w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#64E0D2] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              Premium Wellness
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Vibrant Health for Every <span className="text-[#64E0D2]">Wag</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              Science-backed supplements and care essentials curated by experts to keep your best
              friend thriving at every life stage.
            </p>
            <button
              type="button"
              className="btn-zoom-hover mt-8 rounded-full bg-[#64E0D2] px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#64E0D2]"
            >
              Shop Wellness Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
