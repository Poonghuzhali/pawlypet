import { supportCards } from '../../data/orderHistoryPageData'
import { QuestionMarkCircleIcon, GiftIcon, ArrowRightIcon } from '../Icons'

const cardIcons = {
  question: QuestionMarkCircleIcon,
  gift: GiftIcon,
}

export default function OrderSupportCards() {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {supportCards.map((card) => {
        const Icon = cardIcons[card.icon]

        return (
          <article key={card.id} className={`rounded-[1.75rem] p-6 ${card.bg}`}>
            <Icon className="h-8 w-8 text-gray-700/70" />
            <h3 className="mt-4 text-lg font-extrabold text-gray-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
            <a
              href="#"
              className={`mt-4 inline-flex items-center gap-1 text-sm font-bold ${card.ctaClass} hover:underline`}
            >
              {card.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </article>
        )
      })}
    </div>
  )
}
