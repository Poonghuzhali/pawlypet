import { assetUrl } from '@/utils/assetUrl'
import { recommendedFood } from '../../data/shopByBreedData'
import { CheckIcon } from '../Icons'

export default function NutritionHealth() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-hover-lift overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                  Recommended Food
                </h3>
                <ul className="mt-5 space-y-3">
                  {recommendedFood.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn-zoom-hover mt-6 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-light"
                >
                  Shop Nutrition
                </button>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={assetUrl("/images/dog/food-bowl.png")}
                  alt="Dog food bowl"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </article>

          <article className="card-hover-lift flex flex-col justify-between rounded-[2rem] bg-[#F9E870] p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Health Check</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-base">
                Golden Retrievers are prone to hip dysplasia. Ensure your companion gets plenty of
                Omega-3 fatty acids and joint-support supplements for long-term mobility.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-[#F0D860] p-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-800">
                Vet Tip
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-800">
                Regular swimming is the best low-impact exercise for their joints.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
