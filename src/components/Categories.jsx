import { dogCategories } from '../data/homeData'

export default function Categories() {
  return (
    <section id="shop" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shop by Category</h2>
          <a href="#" className="text-sm font-semibold text-coral hover:underline">
            View All →
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
          {/* Dogs - large left card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#F5EDE4] p-6 sm:p-8 lg:row-span-2">
            <span className="text-6xl font-extrabold text-gray-900/10 sm:text-8xl">01</span>
            <h3 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Everything for Dogs
            </h3>
            <ul className="mt-4 space-y-2">
              {dogCategories.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Shop Now
            </a>
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop"
              alt="Happy dog"
              className="absolute bottom-0 right-0 h-48 w-48 object-cover object-top sm:h-56 sm:w-56 lg:h-64 lg:w-64"
            />
          </div>

          {/* Cats - top right */}
          <div className="relative overflow-hidden rounded-3xl bg-teal p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">Follow the Whiskers</h3>
            <p className="mt-2 max-w-xs text-sm text-white/80">
              Discover premium food, toys, and accessories for your feline friends.
            </p>
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop"
              alt="Cat"
              className="absolute -bottom-4 -right-4 h-36 w-36 rounded-2xl object-cover sm:h-44 sm:w-44"
            />
          </div>

          {/* Small pets - bottom right */}
          <div className="relative overflow-hidden rounded-3xl bg-pastel-yellow p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Small Pet Kingdom</h3>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
              Rabbits, hamsters, and more — everything for your tiny companions.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex rounded-full bg-gray-800 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              View Category
            </a>
            <img
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop"
              alt="Rabbit"
              className="absolute -bottom-2 -right-2 h-32 w-32 rounded-2xl object-cover sm:h-40 sm:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
