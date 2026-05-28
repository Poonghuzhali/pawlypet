import { assetUrl } from '@/utils/assetUrl'
export default function DogGroomingPackBanner() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[#D9D6CE] p-8 sm:p-10 lg:grid-cols-[1fr_280px]">
        <div>
          <h2 className="text-2xl font-extrabold text-[#64E0D2] sm:text-3xl">Join the Pawly Pack</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            Get exclusive grooming tips, early access to new products, and 10% off your first order.
          </p>
          <form
            className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your furry friend's email"
              className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm outline-none focus:border-[#64E0D2] focus:ring-1 focus:ring-[#64E0D2]"
            />
            <button
              type="submit"
              className="btn-zoom-hover shrink-0 rounded-full bg-[#64E0D2] px-8 py-3 text-sm font-bold text-white hover:bg-[#52CFC2]"
            >
              Sign Up Now
            </button>
          </form>
        </div>

        <img
          src={assetUrl("/images/dog-grooming/pack-dogs.png")}
          alt="Two happy dogs"
          className="mx-auto aspect-square w-full max-w-[280px] rounded-[1.75rem] object-cover shadow-md"
        />
      </div>
    </section>
  )
}
