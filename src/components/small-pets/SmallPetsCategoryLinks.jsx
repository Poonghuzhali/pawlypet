import { smallPetCategories } from '../../data/smallPetsPageData'
import { FoodIcon, LocationIcon, ToyCarIcon, BedIcon } from '../Icons'

const iconMap = {
  food: FoodIcon,
  habitats: LocationIcon,
  toys: ToyCarIcon,
  bedding: BedIcon,
}

export default function SmallPetsCategoryLinks() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
        {smallPetCategories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <button
              key={cat.label}
              type="button"
              className="card-hover-lift flex flex-col items-center transition"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDE4] text-[#3D5A4A] shadow-soft">
                <Icon className="h-6 w-6" />
              </span>
              <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600">
                {cat.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
