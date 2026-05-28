import { pets } from '../../data/myPetsPageData'
import { PlusIcon } from '../Icons'

const genderSymbols = {
  female: '♀',
  male: '♂',
}

function PetCard({ pet }) {
  return (
    <article className="card-hover-lift overflow-hidden rounded-[1.75rem] bg-white shadow-soft transition">
      <div className="relative p-3 pb-0">
        <span className="absolute left-6 top-6 z-10 rounded-full bg-gray-700/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {pet.type}
        </span>
        <img
          src={pet.image}
          alt={pet.name}
          className="aspect-square w-full rounded-[1.25rem] object-cover"
        />
      </div>

      <div className="p-5 pt-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-extrabold text-gray-900">{pet.name}</h3>
          <span className="text-base font-bold text-[#64E0D2]">{genderSymbols[pet.gender]}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {pet.breed} • {pet.age}
        </p>
      </div>
    </article>
  )
}

function AddPetCard() {
  return (
    <article className="flex min-h-[280px] flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-[#CFE1E0] bg-[#CFE1E0]/40 p-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#64E0D2] text-gray-900 shadow-md">
        <PlusIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-extrabold text-[#64E0D2]">New Arrival?</h3>
      <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-gray-500">
        Expand your digital pack with a few simple taps.
      </p>
    </article>
  )
}

export default function PetCardsGrid() {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
      <AddPetCard />
    </div>
  )
}
