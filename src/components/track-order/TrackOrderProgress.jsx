import { trackingInfo, trackingSteps } from '../../data/trackOrderPageData'
import { BoxIcon, TruckIcon } from '../Icons'

export default function TrackOrderProgress() {
  const { currentStep } = trackingInfo
  const progressPercent = (currentStep / (trackingSteps.length - 1)) * 100

  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <BoxIcon className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-gray-200/80 sm:h-20 sm:w-20" />

      <h2 className="text-lg font-extrabold text-[#374151]">Track Recent Treats</h2>
      <p className="mt-1 text-sm text-gray-500">
        Order {trackingInfo.orderNumber} • Est. Delivery {trackingInfo.estimatedDelivery}
      </p>

      <div className="relative mt-10 px-2 sm:px-4">
        <div className="absolute left-8 right-8 top-[18px] h-1 rounded-full bg-gray-200 sm:left-10 sm:right-10">
          <div
            className="h-full rounded-full bg-[#64E0D2] transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <ol className="relative flex justify-between">
          {trackingSteps.map((step, index) => {
            const isComplete = index <= currentStep
            const isCurrent = index === currentStep

            return (
              <li key={step} className="flex flex-col items-center">
                {isCurrent && (
                  <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#64E0D2] shadow-md">
                    <TruckIcon className="h-4 w-4 text-white" />
                  </span>
                )}
                {!isCurrent && <span className="mb-2 h-9" />}

                <span
                  className={`relative z-10 h-4 w-4 rounded-full border-2 ${
                    isComplete
                      ? 'border-[#64E0D2] bg-[#64E0D2]'
                      : 'border-gray-300 bg-white'
                  }`}
                />

                <span
                  className={`mt-3 text-[10px] font-bold uppercase tracking-[0.1em] ${
                    isComplete ? 'text-[#64E0D2]' : 'text-gray-400'
                  }`}
                >
                  {step}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
