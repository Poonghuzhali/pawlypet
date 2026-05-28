import { shippingAddress } from '../../data/paymentPageData'
import { TruckIcon } from '../Icons'

function AddressField({ label, value }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C4033]">
        {label}
      </label>
      <div className="mt-2 rounded-2xl bg-[#EDE6DC] px-4 py-3 text-sm font-medium text-gray-800">
        {value}
      </div>
    </div>
  )
}

export default function ShippingAddressSection() {
  return (
    <section className="rounded-3xl bg-[#F7F1EB] p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TruckIcon className="h-5 w-5 text-[#D15151]" />
          <h2 className="text-lg font-extrabold text-[#3D2C2C]">Shipping Address</h2>
        </div>
        <button
          type="button"
          className="text-xs font-bold uppercase tracking-wider text-[#D15151] hover:underline"
        >
          Edit Addresses
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AddressField label="First Name" value={shippingAddress.firstName} />
        <AddressField label="Last Name" value={shippingAddress.lastName} />
        <AddressField label="Street Address" value={shippingAddress.street} />
        <AddressField label="City" value={shippingAddress.city} />
        <AddressField label="Zip Code" value={shippingAddress.zipCode} />
      </div>
    </section>
  )
}
