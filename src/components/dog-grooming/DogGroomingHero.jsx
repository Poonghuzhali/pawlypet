import { assetUrl } from '@/utils/assetUrl'
export default function DogGroomingHero() {
  return (
    <section className="bg-gradient-to-br from-[#CFE1E0] via-[#E1D8D2] to-[#E1D8D2] px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12 lg:pb-4">
        <div>
          <span className="inline-block rounded-full bg-[#64E0D2] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            Grooming Specials
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#374151] sm:text-5xl">
            Freshness for Every Furry Friend
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            Discover premium grooming essentials crafted with natural ingredients to keep your
            pup looking and feeling their absolute best.
          </p>
          <button
            type="button"
            className="btn-zoom-hover mt-8 rounded-full bg-gradient-to-r from-[#64E0D2] to-[#64E0D2] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:from-[#52CFC2] hover:to-[#64E0D2]"
          >
            Shop Best Sellers
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-card">
          <img
            src={assetUrl("/images/dog-grooming/hero.png")}
            alt="Golden retriever being groomed"
            className="aspect-[4/3] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
