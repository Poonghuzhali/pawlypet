import { shippingAddress } from '../../data/trackOrderPageData'
import { TruckIcon } from '../Icons'

function AddressField({ label, value, className = '' }) {
  return (
    <div className={className}>
      <label className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#374151]">
        {label}
      </label>
      <div className="mt-2 rounded-full bg-[#D9D6CE] px-5 py-3 text-sm font-medium text-gray-800">
        {value}
      </div>
    </div>
  )
}

export default function TrackOrderShippingAddress() {
  return (
    <section className="rounded-3xl bg-[#E1D8D2] p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TruckIcon className="h-5 w-5 text-[#64E0D2]" />
          <h2 className="text-lg font-extrabold text-[#374151]">Shipping Address</h2>
        </div>
        <button
          type="button"
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#64E0D2] hover:underline"
        >
          Edit Addresses
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <AddressField label="First Name" value={shippingAddress.firstName} />
        <AddressField label="Last Name" value={shippingAddress.lastName} />
        <AddressField label="Street Address" value={shippingAddress.street} className="sm:col-span-2" />
        <AddressField label="City" value={shippingAddress.city} />
        <AddressField label="Zip Code" value={shippingAddress.zipCode} />
      </div>
    </section>
  )
}
