import { useState } from 'react'
import { paymentMethods } from '../../data/paymentPageData'
import {
  CreditCardIcon,
  MobileBankIcon,
  UpiIcon,
  LockIcon,
  CheckIcon,
} from '../Icons'

const methodIcons = {
  card: CreditCardIcon,
  mobile: MobileBankIcon,
  upi: UpiIcon,
}

function Field({ label, id, placeholder, type = 'text', className = '', trailing }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-[11px] font-bold uppercase tracking-wider text-[#5C4033]">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-transparent bg-[#F7F1EB] px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#D15151] focus:ring-1 focus:ring-[#D15151]"
        />
        {trailing}
      </div>
    </div>
  )
}

export default function PaymentMethodForm() {
  const [method, setMethod] = useState('card')

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-[#3D2C2C] sm:text-4xl">Payment Method</h1>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        Choose how you&apos;d like to fuel your pet&apos;s happiness.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {paymentMethods.map((item) => {
          const Icon = methodIcons[item.icon]
          const selected = method === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setMethod(item.id)}
              className={`flex flex-col items-center rounded-2xl px-3 py-5 transition ${
                selected
                  ? 'border-2 border-[#D15151] bg-[#FDE8E8]'
                  : 'border border-transparent bg-[#F7F1EB] hover:bg-[#efe8e0]'
              }`}
            >
              <Icon className={`h-6 w-6 ${selected ? 'text-[#D15151]' : 'text-gray-500'}`} />
              <span
                className={`mt-2 text-xs font-bold sm:text-sm ${
                  selected ? 'text-[#D15151]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {method === 'card' && (
        <article className="mt-6 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          <Field label="Cardholder Name" id="cardholder" placeholder="e.g. Alex Barker" />

          <Field
            label="Card Number"
            id="cardNumber"
            placeholder="0000 0000 0000 0000"
            className="mt-5"
            trailing={
              <span className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-green-500">
                <CheckIcon className="h-3.5 w-3.5 text-white" />
              </span>
            }
          />

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Expiry Date" id="expiry" placeholder="MM / YY" />
            <Field label="CVV" id="cvv" placeholder="***" type="password" />
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-2xl bg-[#D4F5EF] px-4 py-3">
            <LockIcon className="h-4 w-4 shrink-0 text-[#2D6A64]" />
            <p className="text-xs text-[#2D6A64] sm:text-sm">
              Your payment details are encrypted and securely stored.
            </p>
          </div>
        </article>
      )}
    </div>
  )
}
