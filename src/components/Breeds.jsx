import { breeds } from '../data/homeData'

export default function Breeds() {
  return (
    <section id="shop-by-breed" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the Breeds</h2>
        <p className="mt-3 max-w-xl text-gray-600">
          Explore popular breeds and find the perfect companion for your lifestyle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {breeds.map((breed) => (
            <article
              key={breed.name}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-soft"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-4 px-1">
                <h3 className="text-base font-bold text-gray-900">{breed.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{breed.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
