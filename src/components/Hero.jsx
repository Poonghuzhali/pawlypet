import { ShieldCheckIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-coral">
            Best Pet Care In Town
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Everything Your
            <br />
            Pet Needs
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            From premium nutrition to expert veterinary care, we provide everything to keep your
            furry friends happy, healthy, and thriving every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
            >
              Shop Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-light"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card sm:rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=700&fit=crop"
              alt="Golden retriever and rabbit together"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card sm:-bottom-6 sm:left-6 sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
              <ShieldCheckIcon />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Certified Professionals</p>
              <p className="text-xs text-gray-500">Trusted by 10k+ pet parents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
