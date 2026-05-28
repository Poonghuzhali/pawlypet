import orderHistorySeed from './orderHistory.json'

const HISTORY_STORAGE_KEY = 'pawly-order-history'
const LAST_ORDER_STORAGE_KEY = 'pawly-last-order'

function formatEstimatedDelivery() {
  const date = new Date()
  date.setDate(date.getDate() + 5)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function generateOrderId() {
  return `#PWL-${Math.floor(1000000 + Math.random() * 9000000)}`
}

export function formatOrderDate(isoString) {
  const date = new Date(isoString)
  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const startOfOrderDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const diffDays = Math.round((startOfToday - startOfOrderDay) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    return `Today, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`
  }

  if (diffDays === 1) {
    return `Yesterday, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`
  }

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function loadHistoryFromStorage() {
  try {
    const saved = localStorage.getItem(HISTORY_STORAGE_KEY)
    if (!saved) return [...orderHistorySeed]
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : [...orderHistorySeed]
  } catch {
    return [...orderHistorySeed]
  }
}

function saveHistoryToStorage(orders) {
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(orders))
}

function buildOrderRecord({ items, totals }) {
  const orderId = generateOrderId()
  const placedAt = new Date().toISOString()
  const images = items.map((item) => item.image).slice(0, 2)
  const extraItems = Math.max(0, items.length - 2)

  return {
    id: orderId.replace('#', ''),
    orderId,
    status: 'processing',
    statusLabel: 'Processing',
    placedAt,
    date: formatOrderDate(placedAt),
    estimatedDelivery: formatEstimatedDelivery(),
    total: totals.total,
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
    images,
    extraItems,
    currentStep: 1,
    primaryAction: { label: 'Track Order', variant: 'coral', path: '/secure-checkout' },
  }
}

export function getOrderHistory() {
  return loadHistoryFromStorage().sort(
    (a, b) => new Date(b.placedAt).getTime() - new Date(a.placedAt).getTime()
  )
}

export function addOrderToHistory({ items, totals }) {
  const order = buildOrderRecord({ items, totals })
  const history = loadHistoryFromStorage()
  saveHistoryToStorage([order, ...history])
  localStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order))
  return order
}

export function saveLastOrder({ items, totals }) {
  return addOrderToHistory({ items, totals })
}

export function getLastOrder() {
  try {
    const saved = localStorage.getItem(LAST_ORDER_STORAGE_KEY)
    if (!saved) return null
    return JSON.parse(saved)
  } catch {
    return null
  }
}

export function setLastOrder(order) {
  localStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order))
}

export function getOrderById(id) {
  return getOrderHistory().find((order) => order.id === id || order.orderId === id) ?? null
}

export function filterOrderHistory(orders, filter) {
  if (filter === 'All Orders') return orders

  const statusMap = {
    Delivered: 'delivered',
    'In Transit': 'in-transit',
    Processing: 'processing',
  }

  const status = statusMap[filter]
  return status ? orders.filter((order) => order.status === status) : orders
}
