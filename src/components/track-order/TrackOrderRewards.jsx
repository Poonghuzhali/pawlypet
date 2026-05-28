import { basketSummary } from '../../data/trackOrderPageData'
import { PawPrintIcon } from '../Icons'

export default function TrackOrderRewards() {
  return (
    <article className="relative mt-5 overflow-hidden rounded-3xl bg-[#CFE1E0] p-6">
      <PawPrintIcon className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-[#64E0D2]/15" />

      <p className="relative z-10 text-base font-bold italic text-[#64E0D2]">
        Did someone say treats?
      </p>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#64E0D2]">
        Join Pawly Rewards to earn {basketSummary.rewardsPoints} points on this order.
      </p>
    </article>
  )
}
