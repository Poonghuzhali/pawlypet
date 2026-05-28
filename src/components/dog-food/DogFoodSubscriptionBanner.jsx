import { PawPrintIcon } from '../Icons'

export default function DogFoodSubscriptionBanner() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#48CFCB] p-8 sm:p-10 lg:p-12">
        <PawPrintIcon className="pointer-events-none absolute -bottom-6 right-24 h-40 w-40 text-white/20" />
        <PawPrintIcon className="pointer-events-none absolute right-8 top-8 h-24 w-24 text-white/15" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-2xl font-extrabold text-[#005F54] sm:text-3xl">
              Never run out of their favorites.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#005F54]/90 sm:text-base">
              Save 15% on your first auto-ship order. Customize your delivery schedule and keep those
              tails wagging.
            </p>
            <form
              className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border-0 bg-white px-5 py-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="btn-zoom-hover shrink-0 rounded-full bg-[#005F54] px-8 py-3 text-sm font-bold text-white hover:bg-[#004a44]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <img
            src="/images/dog-food/subscribe-puppy.png"
            alt="Happy puppy"
            className="mx-auto aspect-square w-full max-w-[280px] rounded-[1.75rem] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
