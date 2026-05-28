import { features } from '../data/homeData'
import {
  VetKitIcon,
  SpeedometerIcon,
  HeadsetIcon,
  ThumbsUpIcon,
} from './Icons'

const iconMap = {
  'vet-kit': VetKitIcon,
  speedometer: SpeedometerIcon,
  headset: HeadsetIcon,
  'thumbs-up': ThumbsUpIcon,
}

const cardStyles = {
  yellow: {
    card: 'bg-[#FFF9EB]',
    iconWrap: 'bg-[#F9E25B] text-[#3D2914] shadow-[0_4px_10px_rgba(249,226,91,0.45)]',
  },
  teal: {
    card: 'bg-[#EAF9F7]',
    iconWrap: 'bg-[#5ED4C8] text-white shadow-[0_4px_10px_rgba(94,212,200,0.45)]',
  },
}

export default function Features() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#48CFCB] sm:text-sm">
            The Pawly Promise
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Why Pet Parents Love Us
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            const styles = cardStyles[feature.variant]

            return (
              <div
                key={feature.title}
                className={`rounded-[1.75rem] p-6 sm:p-7 ${styles.card}`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${styles.iconWrap}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 sm:text-[1.05rem]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
