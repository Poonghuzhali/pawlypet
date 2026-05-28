import { features } from '../data/homeData'

export default function Features() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Pet Parents Love Us
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          We go above and beyond to deliver the best experience for you and your pets.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-3xl p-6 ${feature.bg} transition hover:-translate-y-1 hover:shadow-card`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
