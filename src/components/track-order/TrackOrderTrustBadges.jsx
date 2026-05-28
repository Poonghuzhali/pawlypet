import { trustBadges } from '../../data/trackOrderPageData'
import { LeafIcon, ShieldIcon, SmileIcon } from '../Icons'

const badgeIcons = {
  shield: ShieldIcon,
  leaf: LeafIcon,
  smile: SmileIcon,
}

export default function TrackOrderTrustBadges() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
      {trustBadges.map((badge) => {
        const Icon = badgeIcons[badge.icon]
        return (
          <div key={badge.id} className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-[#2D6A64]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#2D6A64]">
              {badge.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
