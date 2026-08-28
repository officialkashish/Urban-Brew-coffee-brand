'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuData = {
  espresso: {
    label: 'Espresso Bar',
    items: [
      {
        id: 'single-origin-espresso',
        name: 'Single Origin Espresso',
        price: '$3.50',
        desc: 'A bright, rotating selection of single-origin beans pulled short and sweet.',
        chips: [{ label: 'Light Roast', bg: 'bg-[#f7decc]', text: 'text-[#736153]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1RCCmjrTUrAjuYGeO3LuZQUmXke_2c2DT7X_Td7B7ubk_-CSZ9ky4jDws5PV_dprNPTxUZS2W6Es4qAHBPukNeVdr8o_KQ8HiEM8oY3UgzjhfP3WwADfMLp-RpIn6HQ32GkfAOpaPtcfOyNhGm_HXksgPk5L8p8z97CZWvjVL_SeroR7yf0WdY4h64np8f4L_tD6Xu9Ip6ugoACWmTIiB51SOtN_BgHEMqwJLczrCVizEPBPIStx9',
      },
      {
        id: 'oat-milk-latte',
        name: 'Oat Milk Latte',
        price: '$5.50',
        desc: 'Rich espresso balanced with smoothly steamed oat milk and a light layer of foam.',
        chips: [{ label: 'Dairy-Free', bg: 'bg-[#d3e8d5]', text: 'text-[#0e1f13]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXm0FaGOHhtqqkECGU_xzubu6fymj9NV3D0h9u7w0laRoAx8WoqMEqAve0IR-0ApI_IkMKBsUFcC2iIRs8YhqUPgLZK2x09-VmAinR2D8S6o5y9tnssgcE5VhPpaI5a1yrZq9-lXyKWfYQVxUC_IsdM1lCSViOEkFxa-lzPcysBCuqOZty90obzn3dlFpxbSGHCg7RZ6Do4hl1KjVdxg1LIDyuwaVj86hLr-054W3K5OroQwVWGrrQ',
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        price: '$4.75',
        desc: 'A beautifully poured flat white with intricate latte art and silky micro-foam.',
        chips: [{ label: 'Classic', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAlZAO2aAuaN-SG-hAz3I45kVHY3U6D1BfIvBgDIcXvV9GpREW8VjU5l-M0MaOfo-h9U6yBO1iuKLP8GtH2Jm9ThCxbRXfYiObsPm792U5uKhtJ_RcoGXqtEdj-1t2BbrPVPjj9QTx7-A8EzWSXzGjvT1qPt--OT63gGva9rCNcLIaIy6UUNMQjBYQu57pj3Dssxg3-i3JJyqus0efO5-uQPNLDqzQg5ZBZJQ9JgLm4-wjwB0O5_Qn',
      },
      {
        id: 'cortado',
        name: 'Cortado',
        price: '$4.25',
        desc: 'Equal parts espresso and steamed milk for a perfectly balanced, robust flavor.',
        chips: [{ label: 'Classic', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL62j7afF1xY3lJJhwXVhb0LnTdH5IuwMLjjJbfkNzitGoLXcpS8CH58Smq1HU-50USB__JULhNunxagsXRqlNNg0L1Zj5N65IxMbJDNElur2Hh-a5gXh5hGYd0BtTxd1aazs_8U498H09mym5ED60Ob_rSzyj4fx4154ZJOEl_kOT8i-XKYkC6jBcgGWzt0LSvo-eWaSCqLsUrtX87UND3m9DCfnsZDuwPhKXC1tOjnYOjKAEtczK',
      },
    ],
  },
  pourover: {
    label: 'Pour Over',
    items: [
      {
        id: 'v60-pour-over',
        name: 'V60 Single Origin',
        price: '$6.00',
        desc: 'Bright and clean, highlighting the delicate nuances of our rotating single-origin selection.',
        chips: [{ label: 'Filter', bg: 'bg-[#d3e8d5]', text: 'text-[#0e1f13]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T',
      },
      {
        id: 'aeropress',
        name: 'Aeropress',
        price: '$5.50',
        desc: 'Full-bodied with a rich, espresso-like concentrate. Smooth with a clean finish.',
        chips: [{ label: 'Bold', bg: 'bg-[#f7decc]', text: 'text-[#736153]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2wy2BUM10hqVcpzwEnAx0ivNxFaUpFnlkbhVNXQH3DkX-QL7u9JgmL-_PiCeG6GP_OxiWUP2kX01_EjWcvojqOuAHyvBcDD6YPyi-YQ1wCKtASfe72CgmNzDs5K0aMkUYymul5X_l4QZltoo55kw-cON1evnfCBivn0kuAt0qmz7V7Kiniwtv0l-Dj1GcJus_f0d-ZByg0r1M920ID1RXDlywwr4-ucFKoV3SW8szBiv_O1xmnv7',
      },
    ],
  },
  coldbrew: {
    label: 'Cold Brew',
    items: [
      {
        id: 'classic-cold-brew',
        name: 'Classic Cold Brew',
        price: '$5.00',
        desc: 'Steeped 18 hours for a smooth, low-acid cold brew. Served over ice.',
        chips: [{ label: 'Cold', bg: 'bg-[#d3e8d5]', text: 'text-[#0e1f13]' }, { label: 'Low Acid', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnv87bs1pK-UFNF2CnQPm2osfl3PCy7HKbzqDg4a298pkG-ZyWd76n_oOlNJ-Y41z2buxbqSfJbRkHWdSc6MBLpj07JirK0Gop1bHYDC8FO2ZcIjLO9YNJ5XJcNRRbxbcPYrHcOWGmK-1ak2rJJrdbNh_gO_MvMWxwGy7oQwjWqnboZGdATd0iex4My4n67tPmwv0RMwkPHQYz_qilp8aJmNQX0LyktDYLgezbL8V6EEZSt2hbGEeO',
      },
      {
        id: 'honeycomb-iced-latte',
        name: 'Honeycomb Iced Latte',
        price: '$6.50',
        desc: 'Espresso poured over house-made honeycomb infused milk, finished with a dusting of bee pollen.',
        chips: [{ label: 'Sweet', bg: 'bg-[#f7decc]', text: 'text-[#736153]' }, { label: 'Iced', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2wy2BUM10hqVcpzwEnAx0ivNxFaUpFnlkbhVNXQH3DkX-QL7u9JgmL-_PiCeG6GP_OxiWUP2kX01_EjWcvojqOuAHyvBcDD6YPyi-YQ1wCKtASfe72CgmNzDs5K0aMkUYymul5X_l4QZltoo55kw-cON1evnfCBivn0kuAt0qmz7V7Kiniwtv0l-Dj1GcJus_f0d-ZByg0r1M920ID1RXDlywwr4-ucFKoV3SW8szBiv_O1xmnv7',
      },
    ],
  },
  pastries: {
    label: 'Pastries',
    items: [
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        price: '$4.25',
        desc: 'Flaky, buttery croissant filled with rich almond frangipane and dusted with powdered sugar.',
        chips: [{ label: 'Baked Daily', bg: 'bg-[#fbdcce]', text: 'text-[#281810]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-adsuAnP7cCg0A6CGhSCZvpSKyXSJULxJSS7OLK88HkKPYkOb3OfogVkQeM_pMS6QutnRNm2bZzavDqPm911t7ZnlEZ6zWoxxE26GQoGPQfwFlL3YUBF_CgArEf95pyjbNqFQcBUwCC5ohiVJYYRNnuUeNQw12zA4tVhccX0eFcK7CmjRLaPLU2-xiSRUEU2YhXS3Te8NP9Yo8T-NwTY6t-WD7dY4dgXj5fB3Pa5H1Ac0p5z-5RQ1',
      },
      {
        id: 'cardamom-morning-bun',
        name: 'Cardamom Morning Bun',
        price: '$3.75',
        desc: 'Soft, yeasted dough swirled with orange zest, cardamom, and turbinado sugar.',
        chips: [{ label: 'Seasonal', bg: 'bg-[#d3e8d5]', text: 'text-[#0e1f13]' }],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe1t8THahgfKsRQu2Xxjvu6BRoLXHn1V-gCpHvMic2HUqz8L3UHOsUt5pfRDEN7--EZVADZ0EM_enTVOYkrVYzi5eeqECG-TgL1fCsWHFGB2VJoNlXkqYPNhxL3_TjQhbA6yctTCqYzUGmepTF8yRFq4dCF9vCfs40PFQ61AZ_O4AuU1mWdHkKlcRf2kthTNM8mIaZlypnWvpSu9xkIexpvf1OquogZzrTB5rdyRmlBQLvWVXFDL2m',
      },
    ],
  },
}

type MenuCategory = keyof typeof menuData

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('espresso')

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'espresso', label: 'Espresso' },
    { key: 'pourover', label: 'Pour Over' },
    { key: 'coldbrew', label: 'Cold Brew' },
    { key: 'pastries', label: 'Pastries' },
  ]

  return (
    <div className="pt-[72px]">
      {/* ── Sticky Category Nav ── */}
      <div className="sticky top-[72px] z-40 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e4e2de] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <nav className="flex gap-8 overflow-x-auto hide-scrollbar py-4">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-sans-dm text-base whitespace-nowrap pb-1 transition-colors ${
                  activeCategory === cat.key
                    ? 'text-[#25160e] border-b-2 border-[#25160e]'
                    : 'text-[#6d5b4d] hover:text-[#25160e]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="pb-32 max-w-[1280px] mx-auto px-5 md:px-16">
        {/* Page Header */}
        <div className="mb-16 md:mb-24 max-w-2xl pt-16">
          <h1
            className="text-[36px] md:text-[48px] leading-[42px] md:leading-[56px] text-[#25160e] mb-4"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Our Menu
          </h1>
          <p className="font-sans-dm text-lg text-[#6d5b4d] leading-7">
            Crafted with precision, served with warmth. Explore our selection of ethically sourced coffees and artisanal pastries.
          </p>
        </div>

        {/* Items Grid */}
        <div className="space-y-24 md:space-y-32">
          {categories.map(cat => (
            <section
              key={cat.key}
              id={cat.key}
              className="scroll-mt-[160px]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2
                  className="text-[32px] leading-10 text-[#25160e] whitespace-nowrap"
                  style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                >
                  {menuData[cat.key].label}
                </h2>
                <div className="h-px bg-[#e4e2de] flex-grow" />
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                {menuData[cat.key].items.map(item => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group flex gap-6 p-4 rounded-xl hover:bg-[#f5f3ef] transition-colors duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-[#e4e2de]">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3
                            className="text-[24px] leading-8 text-[#1b1c1a]"
                            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                          >
                            {item.name}
                          </h3>
                          <span className="font-sans-dm text-lg text-[#25160e] ml-4 shrink-0">{item.price}</span>
                        </div>
                        <p className="font-sans-dm text-base text-[#6d5b4d] line-clamp-2">{item.desc}</p>
                      </div>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {item.chips.map(c => (
                          <span
                            key={c.label}
                            className={`font-sans-dm text-[10px] font-bold tracking-[0.1em] uppercase ${c.bg} ${c.text} px-3 py-1 rounded-full`}
                          >
                            {c.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
