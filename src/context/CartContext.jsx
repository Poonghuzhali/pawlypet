import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductById } from '../data/products'
import { calculateCartTotals } from '../utils/cartTotals'

const STORAGE_KEY = 'pawly-cart'

const CartContext = createContext(null)

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveCartToStorage(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadCartFromStorage())

  useEffect(() => {
    saveCartToStorage(items)
  }, [items])

  const totals = useMemo(() => calculateCartTotals(items), [items])

  const addToCart = (productId, quantity = 1, options = {}) => {
    const product = getProductById(productId)
    if (!product || quantity < 1) return false

    const lineKey = options.lineKey ?? productId
    const details = options.details ?? product.details

    setItems((prev) => {
      const existing = prev.find((item) => item.lineKey === lineKey)
      if (existing) {
        return prev.map((item) =>
          item.lineKey === lineKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...prev,
        {
          lineKey,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          details,
          quantity,
        },
      ]
    })

    return true
  }

  const updateQuantity = (lineKey, quantity) => {
    if (quantity < 1) {
      removeFromCart(lineKey)
      return
    }

    setItems((prev) =>
      prev.map((item) => (item.lineKey === lineKey ? { ...item, quantity } : item))
    )
  }

  const removeFromCart = (lineKey) => {
    setItems((prev) => prev.filter((item) => item.lineKey !== lineKey))
  }

  const clearCart = useCallback(() => {
    setItems((prev) => (prev.length === 0 ? prev : []))
  }, [])

  const value = {
    items,
    totals,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
