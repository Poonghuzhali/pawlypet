function ToggleSwitch({ enabled, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition ${
        enabled ? 'bg-[#64E0D2]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
          enabled ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}

export default ToggleSwitch
