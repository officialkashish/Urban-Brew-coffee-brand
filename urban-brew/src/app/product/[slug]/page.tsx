'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const products: Record<string, {
  name: string
  subtitle: string
  price: number
  description: string
  tags: string[]
  images: { main: string; secondary: string }
  roastLabel: string
}> = {
  'oat-milk-latte': {
    name: 'Oat Milk Latte',
    subtitle: 'Espresso & Steamed Oat Milk',
    price: 5.50,
    description: 'Rich espresso balanced with smoothly steamed oat milk and a light layer of foam. A comforting classic, reimagined with a dairy-free twist.',
    tags: ['Hot', 'Dairy-Free'],
    images: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXm0FaGOHhtqqkECGU_xzubu6fymj9NV3D0h9u7w0laRoAx8WoqMEqAve0IR-0ApI_IkMKBsUFcC2iIRs8YhqUPgLZK2x09-VmAinR2D8S6o5y9tnssgcE5VhPpaI5a1yrZq9-lXyKWfYQVxUC_IsdM1lCSViOEkFxa-lzPcysBCuqOZty90obzn3dlFpxbSGHCg7RZ6Do4hl1KjVdxg1LIDyuwaVj86hLr-054W3K5OroQwVWGrrQ',
      secondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-adsuAnP7cCg0A6CGhSCZvpSKyXSJULxJSS7OLK88HkKPYkOb3OfogVkQeM_pMS6QutnRNm2bZzavDqPm911t7ZnlEZ6zWoxxE26GQoGPQfwFlL3YUBF_CgArEf95pyjbNqFQcBUwCC5ohiVJYYRNnuUeNQw12zA4tVhccX0eFcK7CmjRLaPLU2-xiSRUEU2YhXS3Te8NP9Yo8T-NwTY6t-WD7dY4dgXj5fB3Pa5H1Ac0p5z-5RQ1',
    },
    roastLabel: 'House Blend Roast',
  },
  'single-origin-espresso': {
    name: 'Single Origin Espresso',
    subtitle: 'Rotating Single Origin',
    price: 3.50,
    description: 'A bright, rotating selection of single-origin beans pulled short and sweet. Each batch highlights the unique terroir of its origin.',
    tags: ['Hot', 'Light Roast'],
    images: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1RCCmjrTUrAjuYGeO3LuZQUmXke_2c2DT7X_Td7B7ubk_-CSZ9ky4jDws5PV_dprNPTxUZS2W6Es4qAHBPukNeVdr8o_KQ8HiEM8oY3UgzjhfP3WwADfMLp-RpIn6HQ32GkfAOpaPtcfOyNhGm_HXksgPk5L8p8z97CZWvjVL_SeroR7yf0WdY4h64np8f4L_tD6Xu9Ip6ugoACWmTIiB51SOtN_BgHEMqwJLczrCVizEPBPIStx9',
      secondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T',
    },
    roastLabel: 'Single Origin',
  },
  'honeycomb-iced-latte': {
    name: 'Honeycomb Iced Latte',
    subtitle: 'Seasonal Special',
    price: 6.50,
    description: 'Espresso poured over house-made honeycomb infused milk, finished with a dusting of bee pollen. Sweet, floral, and utterly refreshing.',
    tags: ['Iced', 'Seasonal'],
    images: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2wy2BUM10hqVcpzwEnAx0ivNxFaUpFnlkbhVNXQH3DkX-QL7u9JgmL-_PiCeG6GP_OxiWUP2kX01_EjWcvojqOuAHyvBcDD6YPyi-YQ1wCKtASfe72CgmNzDs5K0aMkUYymul5X_l4QZltoo55kw-cON1evnfCBivn0kuAt0qmz7V7Kiniwtv0l-Dj1GcJus_f0d-ZByg0r1M920ID1RXDlywwr4-ucFKoV3SW8szBiv_O1xmnv7',
      secondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T',
    },
    roastLabel: 'Light Roast',
  },
  'valencia-cortado': {
    name: 'Valencia Cortado',
    subtitle: 'Seasonal Special',
    price: 5.00,
    description: 'Equal parts rich espresso and lightly textured steamed milk, infused with natural orange zest oils. A citrus-kissed Spanish classic.',
    tags: ['Hot', 'Citrus'],
    images: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL62j7afF1xY3lJJhwXVhb0LnTdH5IuwMLjjJbfkNzitGoLXcpS8CH58Smq1HU-50USB__JULhNunxagsXRqlNNg0L1Zj5N65IxMbJDNElur2Hh-a5gXh5hGYd0BtTxd1aazs_8U498H09mym5ED60Ob_rSzyj4fx4154ZJOEl_kOT8i-XKYkC6jBcgGWzt0LSvo-eWaSCqLsUrtX87UND3m9DCfnsZDuwPhKXC1tOjnYOjKAEtczK',
      secondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T',
    },
    roastLabel: 'Espresso Blend',
  },
  'ceremonial-matcha': {
    name: 'Ceremonial Matcha',
    subtitle: 'Seasonal Special',
    price: 7.00,
    description: 'Premium grade Uji matcha whisked to perfection, served over creamy oat milk with a hint of vanilla. Earthy, vibrant, and beautifully layered.',
    tags: ['Iced', 'Tea', 'Dairy-Free'],
    images: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnv87bs1pK-UFNF2CnQPm2osfl3PCy7HKbzqDg4a298pkG-ZyWd76n_oOlNJ-Y41z2buxbqSfJbRkHWdSc6MBLpj07JirK0Gop1bHYDC8FO2ZcIjLO9YNJ5XJcNRRbxbcPYrHcOWGmK-1ak2rJJrdbNh_gO_MvMWxwGy7oQwjWqnboZGdATd0iex4My4n67tPmwv0RMwkPHQYz_qilp8aJmNQX0LyktDYLgezbL8V6EEZSt2hbGEeO',
      secondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T',
    },
    roastLabel: 'Premium Matcha',
  },
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { addItem, itemCount } = useCart()
  const product = products[slug] ?? products['oat-milk-latte']

  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [milk, setMilk] = useState('oat')
  const [shots, setShots] = useState(0)
  const [syrups, setSyrups] = useState<string[]>([])
  const [added, setAdded] = useState(false)

  const sizeUpcharge = size === 'large' ? 1.00 : 0
  const shotUpcharge = shots * 1.00
  const syrupUpcharge = syrups.length * 0.75
  const totalPrice = product.price + sizeUpcharge + shotUpcharge + syrupUpcharge

  const toggleSyrup = (syrup: string) => {
    setSyrups(prev => prev.includes(syrup) ? prev.filter(s => s !== syrup) : [...prev, syrup])
  }

  const handleAddToOrder = () => {
    const sizeLabel = size === 'small' ? '8 oz' : size === 'medium' ? '12 oz' : '16 oz'
    const options = [sizeLabel, milk !== 'oat' ? milk.charAt(0).toUpperCase() + milk.slice(1) + ' Milk' : 'Oat Milk', shots > 0 ? `+${shots} shot${shots > 1 ? 's' : ''}` : '', ...syrups].filter(Boolean).join(', ')
    addItem({
      id: `${slug}-${Date.now()}`,
      name: product.name,
      price: totalPrice,
      options,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const sizes = [
    { value: 'small' as const, label: '8 oz', name: 'Small', icon: 20 },
    { value: 'medium' as const, label: '12 oz', name: 'Medium', icon: 24, default: true },
    { value: 'large' as const, label: '16 oz', name: 'Large', icon: 28, extra: '+$1.00' },
  ]

  const milkOptions = ['Oat Milk (Default)', 'Almond Milk', 'Whole Milk', 'Skim Milk']
  const syrupOptions = ['Vanilla', 'Caramel', 'Hazelnut', 'Mocha']

  return (
    <div className="pt-[72px] min-h-screen flex flex-col">
      {/* Top Bar (back + cart) */}
      <div className="fixed top-[72px] left-0 w-full z-40 bg-[#fbf9f5]/80 backdrop-blur-md border-b border-[#e4e2de]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-3 flex items-center justify-between">
          <Link href="/menu" className="text-[#6d5b4d] hover:text-[#25160e] transition-colors flex items-center gap-2 group font-sans-dm text-base">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform" style={{ fontSize: '20px' }}>arrow_back</span>
            <span className="hidden md:inline">Back to Menu</span>
          </Link>
          <Link href="/checkout" className="relative text-[#25160e] hover:opacity-80 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>shopping_cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#25160e] text-white text-[9px] font-bold flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-[116px] pb-32 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">

          {/* Left: Product Images */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-6 md:sticky md:top-[132px]">
            {/* Main image */}
            <div className="w-full aspect-[4/5] md:aspect-square bg-[#efeeea] rounded-xl overflow-hidden relative group">
              <img
                src={product.images.main}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f5]/40 to-transparent pointer-events-none" />
              {/* Floating Tag */}
              <div className="absolute bottom-6 left-6 bg-[#ffffff]/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#8B5A2B] animate-pulse" />
                <span className="font-sans-dm text-[11px] font-bold tracking-[0.1em] uppercase text-[#4f4540]">
                  {product.roastLabel}
                </span>
              </div>
            </div>

            {/* Secondary images */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              <div className="aspect-square bg-[#f7decc] rounded-lg overflow-hidden">
                <img
                  src={product.images.secondary}
                  alt={`${product.name} – detail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#e4e2de] rounded-lg p-6 flex flex-col justify-center">
                <span className="material-symbols-outlined text-[#25160e] mb-4" style={{ fontSize: '32px' }}>eco</span>
                <h4
                  className="text-[20px] leading-7 text-[#1b1c1a] mb-2"
                  style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                >
                  Sustainable Sourcing
                </h4>
                <p className="font-sans-dm text-sm text-[#4f4540]">
                  Our beans are ethically sourced from cooperative farms.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Details + Configurator */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col pt-4 md:pt-8">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {product.tags.map(tag => (
                <span key={tag} className="bg-[#eae8e4] rounded-full px-3 py-1 font-sans-dm text-[11px] font-bold tracking-[0.1em] uppercase text-[#4f4540]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Price */}
            <h1
              className="text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] text-[#1b1c1a] mb-2"
              style={{ fontFamily: 'Libre Caslon Text, Georgia, serif', letterSpacing: '-0.02em' }}
            >
              {product.name}
            </h1>
            <p className="font-sans-dm text-lg text-[#4f4540] mb-6 leading-7">{product.description}</p>

            {/* Price */}
            <div className="text-3xl font-caslon text-[#25160e] mb-8 pb-8 border-b border-[#e4e2de]">
              ${totalPrice.toFixed(2)}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-8">

              {/* Size */}
              <fieldset>
                <legend className="font-caslon text-[24px] leading-8 text-[#1b1c1a] mb-4 flex items-center justify-between w-full">
                  <span style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}>Size</span>
                  <span className="font-sans-dm text-sm text-[#4f4540]">Required</span>
                </legend>
                <div className="grid grid-cols-3 gap-4">
                  {sizes.map(s => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setSize(s.value)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-full ${
                        size === s.value
                          ? 'bg-[#3c2a21] text-white border-[#3c2a21]'
                          : 'bg-[#ffffff] text-[#4f4540] border-[#d3c3bd] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <span className="material-symbols-outlined mb-2" style={{ fontSize: `${s.icon}px` }}>local_cafe</span>
                      <span className="font-sans-dm font-medium text-sm">{s.label}</span>
                      <span className="font-sans-dm text-[10px] mt-1 opacity-70">{s.name}</span>
                      {s.extra && <span className="font-sans-dm text-[10px] mt-1">{s.extra}</span>}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Milk */}
              <fieldset>
                <legend
                  className="text-[24px] leading-8 text-[#1b1c1a] mb-4 block"
                  style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                >
                  Milk Options
                </legend>
                <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
                  {milkOptions.map(opt => {
                    const val = opt.toLowerCase().split(' ')[0]
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setMilk(val)}
                        className={`px-5 py-3 rounded-full border whitespace-nowrap font-sans-dm text-sm transition-all shrink-0 ${
                          milk === val
                            ? 'bg-[#3c2a21] text-white border-[#3c2a21]'
                            : 'bg-[#ffffff] text-[#4f4540] border-[#d3c3bd] hover:bg-[#f5f3ef]'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              {/* Extra Shots */}
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-[24px] leading-8 text-[#1b1c1a]"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    Extra Espresso Shots
                  </h3>
                  <span className="font-sans-dm text-sm text-[#4f4540]">+$1.00 each</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setShots(s => Math.max(0, s - 1))}
                    className="w-10 h-10 rounded-full bg-[#e4e2de] flex items-center justify-center text-[#1b1c1a] hover:bg-[#d3c3bd] transition-colors"
                    aria-label="Decrease shots"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>remove</span>
                  </button>
                  <span className="font-caslon text-[24px] w-8 text-center">{shots}</span>
                  <button
                    type="button"
                    onClick={() => setShots(s => s + 1)}
                    className="w-10 h-10 rounded-full bg-[#e4e2de] flex items-center justify-center text-[#1b1c1a] hover:bg-[#d3c3bd] transition-colors"
                    aria-label="Increase shots"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                  </button>
                </div>
              </div>

              {/* Flavor Syrups */}
              <fieldset>
                <legend className="flex items-center justify-between w-full mb-4">
                  <span
                    className="text-[24px] leading-8 text-[#1b1c1a]"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    Flavor Syrups
                  </span>
                  <span className="font-sans-dm text-sm text-[#4f4540]">+$0.75 each</span>
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {syrupOptions.map(syrup => {
                    const val = syrup.toLowerCase()
                    const isChecked = syrups.includes(val)
                    return (
                      <button
                        key={syrup}
                        type="button"
                        onClick={() => toggleSyrup(val)}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors text-left ${
                          isChecked
                            ? 'bg-[#3c2a21] text-white border-[#3c2a21]'
                            : 'border-[#d3c3bd] hover:bg-[#f5f3ef]'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded border mr-3 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-white border-white' : 'border-[#81756f]'
                        }`}>
                          {isChecked && <span className="material-symbols-outlined text-[#3c2a21]" style={{ fontSize: '16px' }}>check</span>}
                        </span>
                        <span className="font-sans-dm text-sm">{syrup}</span>
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            </div>

            {/* Add to Order – sticky on mobile */}
            <div className="fixed bottom-0 left-0 w-full p-5 bg-[#fbf9f5]/90 backdrop-blur-md border-t border-[#e4e2de] md:static md:p-0 md:bg-transparent md:border-t-0 md:mt-8 z-40">
              <button
                onClick={handleAddToOrder}
                className={`w-full py-4 px-6 rounded-full font-sans-dm font-medium text-lg flex justify-between items-center active:scale-[0.98] duration-200 shadow-md transition-all ${
                  added
                    ? 'bg-[#0b1d11] text-white'
                    : 'bg-[#25160e] text-white hover:bg-[#3c2a21]'
                }`}
              >
                <span>{added ? '✓ Added to Order!' : 'Add to Order'}</span>
                <span className="font-caslon text-[24px]">${totalPrice.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
