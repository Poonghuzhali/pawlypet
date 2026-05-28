import { pureIngredients, feedingGuide } from '../../data/productDetailData'
import { LeafIcon } from '../Icons'

const ingredientIcons = {
  fish: '🐟',
  potato: '🥔',
  leaf: '🥬',
  spice: '✨',
}

export default function IngredientsFeeding() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-[2rem] bg-[#D9D6CE] p-8 shadow-soft">
          <LeafIcon className="absolute -bottom-6 -right-6 h-40 w-40 text-[#D9D6CE]/80" />
          <h2 className="relative text-xl font-extrabold text-gray-900 sm:text-2xl">
            Pure Ingredients
          </h2>
          <p className="relative mt-3 text-sm leading-relaxed text-gray-600">
            We believe in transparency. No fillers, no by-products, just wholesome nutrition
            from the earth and sea.
          </p>
          <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
            {pureIngredients.map((item) => (
              <div key={item.name} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                  {ingredientIcons[item.icon]}
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] bg-[#CFE1E0] p-8 shadow-soft">
          <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Feeding Guide</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Adjust portions based on your dog&apos;s activity level and weight goals.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl bg-white/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-teal/20">
                  <th className="px-5 py-3 font-bold text-gray-900">Weight</th>
                  <th className="px-5 py-3 font-bold text-gray-900">Daily Amount</th>
                </tr>
              </thead>
              <tbody>
                {feedingGuide.map((row) => (
                  <tr key={row.weight} className="border-b border-teal/10 last:border-0">
                    <td className="px-5 py-3 text-gray-700">{row.weight}</td>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.cups}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  )
}
