import { Link } from 'react-router-dom'
import { browseCategories } from '../../data/dogPageData'
import { FoodIcon, ScissorsIcon, MedicalBagIcon, ToyIcon, PawIcon } from '../Icons'

const iconMap = {
  food: FoodIcon,
  grooming: ScissorsIcon,
  health: MedicalBagIcon,
  toys: ToyIcon,
}

export default function BrowseByNeed() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-[#3D2C2C] sm:text-3xl">Browse by Need</h2>
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-teal">
            <PawIcon className="h-3.5 w-3.5" />
            Your pet will love this
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {browseCategories.map((cat) => {
            const Icon = iconMap[cat.icon]
            const className = `card-hover-lift flex flex-col items-center rounded-3xl ${cat.bg} px-4 py-8 shadow-soft transition no-underline`

            if (cat.path) {
              return (
                <Link key={cat.label} to={cat.path} className={className}>
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${cat.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 text-sm font-bold text-gray-800">{cat.label}</span>
                </Link>
              )
            }

            return (
              <button key={cat.label} type="button" className={className}>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${cat.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mt-4 text-sm font-bold text-gray-800">{cat.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
