import { features } from '../data/homeData'
import { SupportIcon, BookingIcon, GroomingIcon, VetIcon } from './Icons'

const iconMap = {
  support: SupportIcon,
  booking: BookingIcon,
  grooming: GroomingIcon,
  vet: VetIcon,
}

export default function Features() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Pawly Promise
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We are committed to delivering exceptional care, quality products, and a sanctuary
            where every pet feels loved.
          </p>
          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            Why Pet Parents Love Us
          </h3>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.title}
                className={`rounded-3xl p-6 ${feature.bg}`}
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full text-teal ${feature.iconBg}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
