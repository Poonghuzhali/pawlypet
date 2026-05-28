import { ChatIcon } from '../Icons'

export default function DogToysChatWidget() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#64E0D2] text-gray-900 shadow-lg transition hover:bg-[#52CFC2]"
    >
      <ChatIcon className="h-6 w-6" />
    </button>
  )
}
