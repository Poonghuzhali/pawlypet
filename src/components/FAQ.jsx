import { useState } from 'react'
import { faqs } from '../data/homeData'
import { ChevronDownIcon } from './Icons'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Curious Minds Want To Know
          </h2>
          <p className="mt-3 text-gray-600">
            Find answers to the most common questions about our products and services.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-[#F5EDE4]/60"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-200/50 px-5 pb-4 pt-2 sm:px-6 sm:pb-5">
                    <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
