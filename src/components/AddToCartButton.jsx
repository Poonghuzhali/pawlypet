import { useCart } from '../context/CartContext'

export default function AddToCartButton({
  productId,
  quantity = 1,
  details,
  lineKey,
  className = '',
  children,
  onAdded,
  ...props
}) {
  const { addToCart } = useCart()

  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const added = addToCart(productId, quantity, { details, lineKey })
    if (added && onAdded) onAdded()
  }

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
