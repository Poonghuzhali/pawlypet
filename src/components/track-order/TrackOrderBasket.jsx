import { basketItems, basketSummary } from '../../data/trackOrderPageData'

export default function TrackOrderBasket() {
  return (
    <article className="rounded-3xl bg-[#F7F1EB] p-6 shadow-soft">
      <h2 className="text-lg font-extrabold text-[#3D2C2C]">Your Basket</h2>

      <ul className="mt-5 space-y-4">
        {basketItems.map((item) => (
          <li key={item.name} className="flex gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-900">{item.name}</p>
              <p className="text-xs text-gray-500">{item.details}</p>
              <p className="mt-1 text-sm font-extrabold text-[#D15151]">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-2 border-t border-[#E8DDD0] pt-5 text-sm">
        <div className="flex justify-between text-gray-600">
          <dt>Subtotal</dt>
          <dd className="font-semibold text-gray-900">${basketSummary.subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between text-gray-600">
          <dt>Pawly Delivery</dt>
          <dd className="font-bold text-[#2D6A64]">{basketSummary.delivery}</dd>
        </div>
      </dl>

      <div className="mt-5 border-t border-[#E8DDD0] pt-5">
        <div className="flex items-baseline justify-between">
          <span className="text-base font-extrabold text-[#3D2C2C]">Total:</span>
          <span className="text-2xl font-extrabold text-[#D15151]">
            ${basketSummary.total.toFixed(2)}
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
        30-Day Easy Returns for All Pets
      </p>
    </article>
  )
}
