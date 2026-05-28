import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Let&apos;s Stay in Touch
            </h2>
            <p className="mt-3 text-gray-600">
              Have questions? We&apos;d love to hear from you. Reach out anytime.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <LocationIcon />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="mt-1 text-sm text-gray-600">
                    123 Pet Care Avenue, San Francisco, CA 94102
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="mt-1 text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="mt-1 text-sm text-gray-600">hello@petify.com</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-soft transition hover:bg-teal hover:text-white"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-soft transition hover:bg-teal hover:text-white"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-soft transition hover:bg-teal hover:text-white"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
              alt="Map showing store location"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
