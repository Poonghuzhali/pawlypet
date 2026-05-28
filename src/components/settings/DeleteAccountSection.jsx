import { TrashIcon } from '../Icons'

export default function DeleteAccountSection() {
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-500">
        Thinking of leaving? All your pet data, health records, and gallery will be permanently
        removed.
      </p>
      <button
        type="button"
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#D15151]"
      >
        <TrashIcon className="h-4 w-4" />
        Delete Account
      </button>
    </div>
  )
}
