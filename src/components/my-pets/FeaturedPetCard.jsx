import { featuredPet } from '../../data/myPetsPageData'

export default function FeaturedPetCard() {
  return (
    <article className="mt-8 overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft sm:p-6">
      <div className="grid items-center gap-6 lg:grid-cols-[280px_1fr]">
        <img
          src={featuredPet.image}
          alt={featuredPet.name}
          className="aspect-square w-full rounded-[1.75rem] object-cover"
        />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#2D6A64] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {featuredPet.type}
            </span>
            <span className="rounded-full bg-[#F2C94C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900">
              {featuredPet.status}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">{featuredPet.name}</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-[#F5EDE4] px-5 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Breed</p>
              <p className="mt-1 text-sm font-bold text-[#D15151]">{featuredPet.breed}</p>
            </div>
            <div className="rounded-2xl bg-[#F5EDE4] px-5 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Age</p>
              <p className="mt-1 text-sm font-bold text-[#D15151]">{featuredPet.age}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
