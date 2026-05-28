import { PawIcon, CatFaceIcon } from '../Icons'

export default function DogHero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]">
          Curated for your{' '}
          <span className="text-brand-red">unique</span> companion.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Every breed has a story, a personality, and specific needs. Select your pet type to
          explore tailored essentials.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="card-hover-lift flex flex-1 items-center gap-4 rounded-3xl bg-[#CFE1E0] px-6 py-5 text-left shadow-soft transition sm:max-w-xs"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-red shadow-sm">
              <PawIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-base font-bold text-gray-900">Shop for Dogs</span>
              <span className="mt-0.5 block text-sm text-gray-500">32+ Breeds support</span>
            </span>
          </button>

          <button
            type="button"
            className="card-hover-lift flex flex-1 items-center gap-4 rounded-3xl bg-[#CFE1E0] px-6 py-5 text-left shadow-soft transition sm:max-w-xs"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-sm">
              <CatFaceIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-base font-bold text-gray-900">Shop for Cats</span>
              <span className="mt-0.5 block text-sm text-gray-500">18+ Breeds support</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
