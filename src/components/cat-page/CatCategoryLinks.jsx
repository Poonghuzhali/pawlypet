import { catCategories } from '../../data/catPageData'
import { FoodIcon, ScissorsIcon, BoneIcon, TruckIcon } from '../Icons'

const iconMap = {
  food: FoodIcon,
  grooming: ScissorsIcon,
  litter: BoneIcon,
  toys: TruckIcon,
}

export default function CatCategoryLinks() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {catCategories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <button
              key={cat.label}
              type="button"
              className={`card-hover-lift flex flex-col items-center rounded-3xl ${cat.bg} px-4 py-8 shadow-soft transition`}
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${cat.iconBg}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span className="mt-4 text-center text-sm font-bold text-[#64E0D2]">{cat.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
