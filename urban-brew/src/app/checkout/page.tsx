'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { items, updateQuantity, removeItem, total } = useCart()
  const [pickupTime, setPickupTime] = useState('asap')
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [placed, setPlaced] = useState(false)

  const tax = total * 0.087
  const grandTotal = total + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center px-5 bg-[#fbf9f5]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#d3e8d5] flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-[#0b1d11]" style={{ fontSize: '40px' }}>check_circle</span>
          </div>
          <h1
            className="text-[32px] leading-10 text-[#25160e] mb-4"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
          >
            Order Placed!
          </h1>
          <p className="font-sans-dm text-base text-[#4f4540] mb-2">
            Thank you, {name || 'friend'}. Your order will be ready in approximately{' '}
            {pickupTime === 'asap' ? '10–15 minutes' : pickupTime === '30m' ? '30 minutes' : '1 hour'}.
          </p>
          <p className="font-sans-dm text-sm text-[#6d5b4d] mb-8">
            Total charged: <strong>${grandTotal.toFixed(2)}</strong>
          </p>
          <Link
            href="/"
            className="bg-[#25160e] text-white font-sans-dm text-base px-8 py-4 rounded-full hover:bg-[#3c2a21] active:scale-[0.98] transition-all duration-300 inline-block roasted-shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[72px] min-h-screen bg-[#fbf9f5]">
      <main className="flex-grow pt-12 pb-16 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
        {/* Back link */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-[#6d5b4d] hover:text-[#25160e] transition-colors font-sans-dm text-sm mb-8 group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_back</span>
          Continue Shopping
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1
            className="text-[32px] leading-10 text-[#25160e] mb-8 text-center"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
          >
            Secure Checkout
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* ── Form Section ── */}
              <div className="lg:col-span-7 space-y-8">

                {/* Pickup Details */}
                <section className="bg-[#ffffff] p-6 md:p-8 rounded-xl roasted-shadow">
                  <h2
                    className="text-[24px] leading-8 text-[#25160e] mb-6 flex items-center gap-2"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    <span className="material-symbols-outlined text-[#6d5b4d]" style={{ fontSize: '22px' }}>storefront</span>
                    Pickup Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-sans-dm text-sm text-[#4f4540] mb-2" htmlFor="pickup-time">
                        Estimated Pickup Time
                      </label>
                      <select
                        id="pickup-time"
                        value={pickupTime}
                        onChange={e => setPickupTime(e.target.value)}
                        className="w-full bg-[#f5f3ef] border border-[#6d5b4d] rounded px-4 py-3 text-[#1b1c1a] font-sans-dm text-base focus:border-[#25160e] focus:ring-1 focus:ring-[#25160e] outline-none transition-colors appearance-none"
                      >
                        <option value="asap">ASAP (10–15 mins)</option>
                        <option value="30m">In 30 minutes</option>
                        <option value="1h">In 1 hour</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans-dm text-sm text-[#4f4540] mb-2" htmlFor="pickup-name">
                        Name for Order
                      </label>
                      <input
                        id="pickup-name"
                        type="text"
                        placeholder="Alex"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-[#f5f3ef] border border-[#6d5b4d] rounded px-4 py-3 text-[#1b1c1a] font-sans-dm text-base focus:border-[#25160e] focus:ring-1 focus:ring-[#25160e] outline-none transition-colors placeholder-[#4f4540]/50"
                      />
                    </div>
                  </div>
                </section>

                {/* Payment */}
                <section className="bg-[#ffffff] p-6 md:p-8 rounded-xl roasted-shadow">
                  <h2
                    className="text-[24px] leading-8 text-[#25160e] mb-6 flex items-center gap-2"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    <span className="material-symbols-outlined text-[#6d5b4d]" style={{ fontSize: '22px' }}>credit_card</span>
                    Payment
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-sans-dm text-sm text-[#4f4540] mb-2" htmlFor="card-number">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="card-number"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          value={cardNumber}
                          onChange={e => setCardNumber(e.target.value)}
                          maxLength={19}
                          className="w-full bg-[#f5f3ef] border border-[#6d5b4d] rounded px-4 py-3 pr-12 text-[#1b1c1a] font-sans-dm text-base focus:border-[#25160e] focus:ring-1 focus:ring-[#25160e] outline-none transition-colors placeholder-[#4f4540]/50"
                        />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#81756f]" style={{ fontSize: '20px' }}>
                          credit_score
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans-dm text-sm text-[#4f4540] mb-2" htmlFor="expiry">
                          Expiry Date
                        </label>
                        <input
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={e => setExpiry(e.target.value)}
                          maxLength={5}
                          className="w-full bg-[#f5f3ef] border border-[#6d5b4d] rounded px-4 py-3 text-[#1b1c1a] font-sans-dm text-base focus:border-[#25160e] focus:ring-1 focus:ring-[#25160e] outline-none transition-colors placeholder-[#4f4540]/50"
                        />
                      </div>
                      <div>
                        <label className="block font-sans-dm text-sm text-[#4f4540] mb-2" htmlFor="cvv">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={cvv}
                          onChange={e => setCvv(e.target.value)}
                          maxLength={4}
                          className="w-full bg-[#f5f3ef] border border-[#6d5b4d] rounded px-4 py-3 text-[#1b1c1a] font-sans-dm text-base focus:border-[#25160e] focus:ring-1 focus:ring-[#25160e] outline-none transition-colors placeholder-[#4f4540]/50"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* ── Order Summary ── */}
              <div className="lg:col-span-5">
                <section className="bg-[#efeeea] p-6 md:p-8 rounded-xl sticky top-[100px]">
                  <h2
                    className="text-[24px] leading-8 text-[#25160e] mb-6 border-b border-[#d3c3bd] pb-4"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.length === 0 ? (
                      <p className="font-sans-dm text-sm text-[#4f4540] text-center py-4">
                        Your cart is empty.{' '}
                        <Link href="/menu" className="text-[#25160e] underline">Browse the menu →</Link>
                      </p>
                    ) : (
                      items.map(item => (
                        <div key={item.id} className="flex justify-between items-start gap-3">
                          <div className="flex-grow">
                            <div className="flex items-center gap-2">
                              <h3 className="font-sans-dm text-base text-[#1b1c1a] font-medium">{item.name}</h3>
                              <div className="flex items-center gap-1 ml-auto">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-6 h-6 rounded-full bg-[#e4e2de] flex items-center justify-center text-[#1b1c1a] hover:bg-[#d3c3bd] transition-colors"
                                >
                                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>remove</span>
                                </button>
                                <span className="font-sans-dm text-sm w-4 text-center">{item.quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-6 h-6 rounded-full bg-[#e4e2de] flex items-center justify-center text-[#1b1c1a] hover:bg-[#d3c3bd] transition-colors"
                                >
                                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
                                </button>
                              </div>
                            </div>
                            {item.options && (
                              <p className="font-sans-dm text-sm text-[#4f4540]">{item.options}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-sans-dm text-base text-[#25160e]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-[#81756f] hover:text-[#ba1a1a] transition-colors"
                              aria-label="Remove item"
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Totals */}
                  {items.length > 0 && (
                    <>
                      <div className="space-y-2 border-t border-[#d3c3bd] pt-4 mb-6">
                        <div className="flex justify-between font-sans-dm text-base text-[#4f4540]">
                          <span>Subtotal</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-sans-dm text-base text-[#4f4540]">
                          <span>Tax (8.7%)</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span
                            className="text-[24px] leading-8 text-[#25160e]"
                            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                          >
                            Total
                          </span>
                          <span
                            className="text-[24px] leading-8 text-[#25160e]"
                            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                          >
                            ${grandTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#3c2a21] text-white font-sans-dm text-lg py-4 rounded px-6 hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2 roasted-shadow"
                      >
                        <span className="material-symbols-outlined filled" style={{ fontSize: '20px' }}>lock</span>
                        Pay ${grandTotal.toFixed(2)}
                      </button>

                      <p className="text-center font-sans-dm text-sm text-[#4f4540] mt-4 opacity-75 flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>security</span>
                        Payments are secure and encrypted.
                      </p>
                    </>
                  )}
                </section>
              </div>

            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
