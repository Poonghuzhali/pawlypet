import { BrushIcon, BottleIcon, ArrowRightIcon } from '../Icons'

export default function GroomingTraining() {
  return (
    <section className="px-4 py-10 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-hover-lift flex flex-col justify-between rounded-[2rem] bg-[#F88E86] p-6 text-white sm:p-8">
            <div>
              <h3 className="text-xl font-extrabold sm:text-2xl">Grooming Essentials</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                Their double coat sheds seasonally. Invest in a high-quality de-shedding brush and
                gentle oatmeal conditioner to keep their fur healthy and your home fur-free.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-zoom-hover inline-flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 text-sm font-semibold backdrop-blur-sm hover:bg-white/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/30">
                  <BrushIcon className="h-4 w-4" />
                </span>
                Brushes
              </button>
              <button
                type="button"
                className="btn-zoom-hover inline-flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 text-sm font-semibold backdrop-blur-sm hover:bg-white/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/30">
                  <BottleIcon className="h-4 w-4" />
                </span>
                Conditioner
              </button>
            </div>
          </article>

          <article className="card-hover-lift flex items-center gap-5 rounded-[2rem] bg-[#EFEBE6] p-6 sm:gap-6 sm:p-8">
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
              <img
                src="/images/dog/treats.png"
                alt="Pet training treats"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Master the Mind</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Goldens are eager to please. Use positive reinforcement with high-value treats to
                master recall and leash training early.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
              >
                Free Training Guide
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
