import { experts } from '../data/homeData'

export default function Experts() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Experts</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Our team of certified professionals is dedicated to providing the best care for your pets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className={`relative ${expert.bg} px-4 pt-4`}>
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="mx-auto h-56 w-full rounded-2xl object-cover object-top sm:h-60"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{expert.role}</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-full border-2 border-teal py-2.5 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
                >
                  Read Bio
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
