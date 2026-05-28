import { experts } from '../data/homeData'

export default function Experts() {
  return (
    <section id="consult-vet" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Experts</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Our team of certified professionals is dedicated to providing the best care for your pets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="flex flex-col overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-soft"
            >
              <div className={`px-5 pb-0 pt-5 ${expert.bg}`}>
                <div className="overflow-hidden rounded-2xl bg-white/40">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="mx-auto h-52 w-full object-cover object-top sm:h-56"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center">
                <h3 className="text-base font-bold text-gray-900">{expert.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{expert.role}</p>
                <button
                  type="button"
                  className="mt-auto pt-5 w-full rounded-full border border-teal py-2.5 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
                >
                  Book Consultation
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
