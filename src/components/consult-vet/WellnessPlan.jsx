import { wellnessAdvice, suggestedProducts } from '../../data/consultVetPageData'
import { ShieldCheckIcon, DownloadIcon } from '../Icons'

export default function WellnessPlan() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#E8F4F8] via-white to-white p-8 shadow-soft sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-[#005F54]">
              <ShieldCheckIcon className="h-5 w-5" />
              <span className="text-sm font-bold">Post-Session Advice</span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Oliver&apos;s Personalized Wellness Plan
            </h2>
            <ul className="mt-6 space-y-4">
              {wellnessAdvice.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#005F54]" />
                  {tip}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E56B6B] hover:underline"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Full Medical Report
            </a>
          </div>

          <div className="rounded-3xl bg-[#F7F1EB] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
              Suggested Products
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {suggestedProducts.map((product) => (
                <div
                  key={product.name}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="bg-[#FAFAFA] p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-24 w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-gray-900">{product.name}</p>
                    <p className="mt-1 text-sm font-extrabold text-[#005F54]">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
