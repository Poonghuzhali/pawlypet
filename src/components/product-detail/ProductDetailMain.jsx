import { assetUrl } from '@/utils/assetUrl'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wildernessSalmonProduct } from '../../data/productDetailData'
import { StarIcon, CartAddIcon, MinusIcon, PlusIcon, LeafIcon, TruckIcon } from '../Icons'

export default function ProductDetailMain() {
  const navigate = useNavigate()
  const product = wildernessSalmonProduct
  const [selectedSize, setSelectedSize] = useState(product.defaultSize)
  const [quantity, setQuantity] = useState(1)

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-[2rem] bg-[#E8D5C4] shadow-soft">
          <img
            src={assetUrl("/images/product-detail/main.png")}
            alt={product.title}
            className="aspect-[4/5] w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-lg bg-[#E6C547] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900">
            {product.badge}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            {product.title}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviewCount} Reviews)</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-[#D14D4D]">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Select Size
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    selectedSize === size
                      ? 'bg-[#D14D4D] text-white shadow-sm'
                      : 'bg-[#F0F0F0] text-gray-700 hover:bg-[#E8E8E8]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-gray-200 bg-[#F5F5F5]">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-gray-600 hover:text-gray-900"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="min-w-[2rem] text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-gray-600 hover:text-gray-900"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="btn-zoom-hover flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D14D4D] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#b84242] sm:flex-none sm:min-w-[220px]"
            >
              <CartAddIcon className="h-5 w-5" />
              Add to Cart
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4F5EF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-800">
              <LeafIcon className="h-4 w-4 text-teal" />
              Organic
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4F5EF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-800">
              <TruckIcon className="h-4 w-4 text-teal" />
              Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
