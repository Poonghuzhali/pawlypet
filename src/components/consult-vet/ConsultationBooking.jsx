import { useState } from 'react'
import {
  consultationModes,
  sessionIssues,
  timeSlots,
  petProfile,
  consultationPrice,
} from '../../data/consultVetPageData'
import {
  ChatIcon,
  VideoIcon,
  NutritionIcon,
  MedicalBagIcon,
  ScissorsIcon,
  LocationIcon,
  SendIcon,
} from '../Icons'

const modeIcons = { chat: ChatIcon, video: VideoIcon }

const issueIcons = {
  nutrition: NutritionIcon,
  health: MedicalBagIcon,
  grooming: ScissorsIcon,
  behavior: LocationIcon,
}

function StepBadge({ number }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#005F54] text-sm font-bold text-white">
      {number}
    </span>
  )
}

export default function ConsultationBooking() {
  const [mode, setMode] = useState('chat')
  const [issue, setIssue] = useState('health')
  const [timeSlot, setTimeSlot] = useState('1')

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <article className="rounded-3xl bg-[#F7F1EB] p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <StepBadge number="1" />
              <h2 className="text-lg font-extrabold text-gray-900">Choose Mode</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {consultationModes.map((item) => {
                const Icon = modeIcons[item.icon]
                const selected = mode === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id)}
                    className={`flex flex-col items-start rounded-2xl p-5 text-left transition ${
                      selected
                        ? 'bg-[#005F54] text-white shadow-md'
                        : 'bg-white text-gray-900 hover:bg-white/80'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${selected ? 'text-white' : 'text-[#005F54]'}`} />
                    <span className="mt-3 text-base font-bold">{item.label}</span>
                    <span
                      className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${
                        selected ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {item.sublabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </article>

          <article className="flex items-center justify-between gap-4 rounded-3xl bg-[#005F54] p-6 shadow-soft">
            <div>
              <h3 className="text-lg font-extrabold text-white">{petProfile.name} is ready</h3>
              <p className="mt-1 text-sm text-white/80">{petProfile.description}</p>
            </div>
            <img
              src={petProfile.image}
              alt={petProfile.name}
              className="h-16 w-16 shrink-0 rounded-full border-2 border-white/30 object-cover"
            />
          </article>
        </div>

        <div className="space-y-5">
          <article className="rounded-3xl bg-[#F7F1EB] p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <StepBadge number="2" />
              <h2 className="text-lg font-extrabold text-gray-900">Session Details</h2>
            </div>

            <p className="mt-6 text-sm font-bold text-gray-900">Select Issue</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {sessionIssues.map((item) => {
                const Icon = issueIcons[item.icon]
                const selected = issue === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIssue(item.id)}
                    className={`flex flex-col items-center rounded-2xl px-3 py-4 text-center transition ${
                      selected
                        ? 'bg-[#005F54] text-white'
                        : 'bg-white text-gray-800 hover:bg-white/80'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${selected ? 'text-white' : 'text-[#005F54]'}`} />
                    <span className="mt-2 text-xs font-semibold">{item.label}</span>
                  </button>
                )
              })}
            </div>

            <p className="mt-6 text-sm font-bold text-gray-900">Choose Time Slot</p>
            <div className="mt-3 space-y-2">
              {timeSlots.map((slot) => {
                const selected = timeSlot === slot.id
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setTimeSlot(slot.id)}
                    className={`flex w-full items-center justify-between rounded-full px-5 py-3 text-sm font-semibold transition ${
                      selected
                        ? 'border-2 border-[#005F54] bg-white text-gray-900'
                        : 'bg-white text-gray-700 hover:bg-white/80'
                    }`}
                  >
                    <span>{slot.label}</span>
                    {slot.badge && (
                      <span className="rounded-full bg-[#005F54] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        {slot.badge}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </article>

          <article className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#F7F1EB] p-6 shadow-soft">
            <div>
              <p className="text-2xl font-extrabold text-gray-900">{consultationPrice.amount}</p>
              <p className="mt-1 text-xs text-gray-500">{consultationPrice.note}</p>
            </div>
            <button
              type="button"
              className="btn-zoom-hover inline-flex items-center gap-2 rounded-full bg-[#E56B6B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#d55a5a]"
            >
              Start consultation
              <SendIcon className="h-4 w-4" />
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
