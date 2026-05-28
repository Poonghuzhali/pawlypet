import { breeds } from '../data/homeData'

export default function Breeds() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the Breeds</h2>
        <p className="mt-3 max-w-xl text-gray-600">
          Explore popular breeds and find the perfect companion for your lifestyle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {breeds.map((breed) => (
            <article key={breed.name} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{breed.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{breed.description}</p>
              <a href="#" className="mt-2 inline-block text-sm font-semibold text-coral hover:underline">
                More Info →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
