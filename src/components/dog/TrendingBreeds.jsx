import { trendingBreeds } from '../../data/shopByBreedData'

export default function TrendingBreeds() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Trending Dog Breeds
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Personalized kits based on genetic health and behavior.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-brand-red hover:underline">
            View All Breeds →
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trendingBreeds.map((breed) => (
            <article
              key={breed.name}
              className="group card-hover-lift overflow-hidden rounded-3xl bg-white shadow-soft transition"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{breed.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                  {breed.traits}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
