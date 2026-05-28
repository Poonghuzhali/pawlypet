import { Link } from 'react-router-dom'
import { VideoIcon } from '../Icons'

export default function DogHealthConsultBanner() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-[#52CFC2] px-8 py-8 sm:flex-row sm:px-10 sm:py-10">
        <div className="max-w-2xl text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Unsure about your dog&apos;s health?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
            Chat with a licensed veterinarian in minutes. Get personalized advice on nutrition,
            behavior, and care.
          </p>
        </div>

        <Link
          to="/consult-vet"
          className="btn-zoom-hover inline-flex shrink-0 items-center gap-2 rounded-full bg-[#CFE1E0] px-6 py-3.5 text-sm font-bold text-[#52CFC2] no-underline hover:bg-[#CFE1E0]"
        >
          <VideoIcon className="h-5 w-5" />
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}
