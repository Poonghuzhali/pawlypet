export const FREE_SHIPPING_THRESHOLD = 110
export const SHIPPING_FEE = 10
export const TAX_RATE = 0.08

export function calculateCartTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
  const tax = subtotal * TAX_RATE
  const total = subtotal + shipping + tax
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const shippingProgressPercent =
    subtotal === 0 ? 0 : Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return {
    subtotal,
    shipping,
    tax,
    total,
    itemCount,
    remainingForFreeShipping,
    shippingProgressPercent,
    pawPayMonthly: Math.max(1, Math.ceil(total / 4)),
    pawPoints: Math.floor(total),
  }
}
