export default function CTABanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal to-teal-light sm:rounded-[2.5rem]">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-4 lg:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Unsure about something?
                <br />
                Talk to a Vet.
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/85 sm:text-base">
                Get expert advice from our certified veterinarians. Book a consultation today and
                give your pet the care they deserve.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Book a Call
              </a>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7caa7879f?w=500&h=500&fit=crop"
                alt="Veterinarian holding a puppy"
                className="relative z-10 h-64 w-64 rounded-3xl object-cover object-top sm:h-72 sm:w-72 lg:-mr-4 lg:h-80 lg:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
