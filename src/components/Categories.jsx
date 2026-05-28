import { assetUrl } from '@/utils/assetUrl'
import { Link } from 'react-router-dom'
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
          <div
            id="dog"
            className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#D9D6CE] p-6 sm:p-8 lg:row-span-2"
          >
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
            <Link
              to="/dog"
              className="relative z-10 mt-6 inline-flex rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#52CFC2]"
            >
              Shop Now
            </Link>
            <img
              src={assetUrl("/images/dog-category.png")}
              alt="Happy dog"
              className="absolute bottom-0 right-0 h-52 w-52 rounded-tl-3xl object-cover object-center sm:h-60 sm:w-60 lg:h-72 lg:w-72"
            />
          </div>

          <div id="cat" className="relative min-h-[200px] overflow-hidden rounded-3xl bg-teal p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">Feline Favorites</h3>
            <p className="mt-2 max-w-xs text-sm text-white/80">
              Discover premium food, toys, and accessories for your feline friends.
            </p>
            <Link
              to="/cat"
              className="relative z-10 mt-4 inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              Shop Now
            </Link>
            <img
              src={assetUrl("/images/cat-category.png")}
              alt="Cat"
              className="absolute -bottom-4 -right-4 h-36 w-36 rounded-2xl object-cover sm:h-44 sm:w-44"
            />
          </div>

          <div
            id="small-pets"
            className="relative min-h-[200px] overflow-hidden rounded-3xl bg-[#CFE1E0] p-6 sm:p-8"
          >
            <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Small Pet Kingdom</h3>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
              Rabbits, hamsters, and more — everything for your tiny companions.
            </p>
            <Link
              to="/small-pets"
              className="relative z-10 mt-4 inline-flex rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-light"
            >
              Shop Now
            </Link>
            <img
              src={assetUrl("/images/rabbit-category.png")}
              alt="Rabbit"
              className="absolute -bottom-2 -right-2 h-32 w-32 rounded-2xl object-cover sm:h-40 sm:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
