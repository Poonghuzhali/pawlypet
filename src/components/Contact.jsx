import { contactInfo } from '../data/homeData'
import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PawIcon,
} from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Let&apos;s Stay in Touch
        </h2>
        <p className="mt-3 max-w-xl text-gray-600">
          Visit our sanctuary, call us, or drop a line — we&apos;re always here for you and your pets.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <LocationIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{contactInfo.location.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {contactInfo.location.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Phone</p>
                <p className="mt-1 text-sm text-gray-600">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                <MailIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="mt-1 text-sm text-gray-600">{contactInfo.email}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-soft transition hover:border-teal hover:bg-teal hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-soft transition hover:border-teal hover:bg-teal hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-soft transition hover:border-teal hover:bg-teal hover:text-white"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#8B7E9B] shadow-card">
            <img
              src="/images/contact-map.png"
              alt="Pawly Sanctuary location map"
              className="aspect-[4/3] w-full object-cover opacity-90 lg:aspect-auto lg:min-h-[380px] lg:h-full"
            />
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-lg">
                <PawIcon className="h-7 w-7" />
              </div>
              <div className="rounded-full bg-white px-5 py-2.5 text-center shadow-lg">
                <p className="text-sm font-bold text-gray-900">Pawly Sanctuary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
