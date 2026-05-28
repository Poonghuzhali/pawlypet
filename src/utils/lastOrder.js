const STORAGE_KEY = 'pawly-last-order'

function formatEstimatedDelivery() {
  const date = new Date()
  date.setDate(date.getDate() + 5)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function generateOrderId() {
  return `#PWL-${Math.floor(1000000 + Math.random() * 9000000)}`
}

export function saveLastOrder({ items, totals }) {
  const order = {
    orderId: generateOrderId(),
    estimatedDelivery: formatEstimatedDelivery(),
    placedAt: new Date().toISOString(),
    items: items.map((item) => ({
      name: item.name,
      details: item.details,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      lineTotal: item.price * item.quantity,
    })),
    totals: {
      subtotal: totals.subtotal,
      shipping: totals.shipping,
      tax: totals.tax,
      total: totals.total,
      pawPoints: totals.pawPoints,
    },
    currentStep: 1,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
  return order
}

export function getLastOrder() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null
    return JSON.parse(saved)
  } catch {
    return null
  }
}
