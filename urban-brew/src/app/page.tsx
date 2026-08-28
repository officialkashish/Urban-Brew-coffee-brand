import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urban Brew – Find Your Focus in Every Pour',
  description: 'Meticulously sourced beans, expertly crafted for the urban professional seeking a moment of calm amidst the noise.',
}

export default function LandingPage() {
  return (
    <>
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://www.image2url.com/r2/default/videos/1787930699617-f540a7c0-f2af-4d39-aec0-85e61ef776ec.mp4"
              type="video/mp4"
            />
          </video>
          {/* Light overlay — lets the video show through with full color */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] w-full px-5 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-28 md:py-36">
          <div className="md:col-span-7 lg:col-span-6 space-y-7">

            {/* Minimal Tag */}
            <div className="hero-fade-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d3e8d5] animate-pulse" />
              <span className="font-sans-dm text-[11px] font-bold tracking-[0.15em] uppercase text-white/80">
                Now Brewing
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-fade-2 text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white"
              style={{ fontFamily: 'Libre Caslon Text, Georgia, serif', letterSpacing: '-0.02em' }}
            >
              Find your focus<br />
              in every <span className="italic text-[#dec1b3]">pour.</span>
            </h1>

            {/* Subline */}
            <p className="hero-fade-3 font-sans-dm text-base md:text-lg text-white/60 max-w-sm leading-relaxed">
              Meticulously sourced beans, expertly crafted for the urban professional seeking a moment of calm amidst the noise.
            </p>

            {/* CTAs */}
            <div className="hero-fade-4 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/checkout"
                className="bg-[#3c2a21] text-white font-sans-dm text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#25160e] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2 roasted-shadow"
              >
                Order Ahead
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </a>
              <a
                href="/menu"
                className="bg-white/10 border border-white/30 text-white font-sans-dm text-sm px-7 py-3.5 rounded-full hover:bg-white/20 active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
              >
                View Menu
              </a>
            </div>

          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
          <span className="font-sans-dm text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
          <span className="material-symbols-outlined text-white/30" style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
        </div>
      </section>


      {/* ──────────────── OUR STORY SECTION ──────────────── */}
      <div className="h-20 md:h-32 w-full bg-[#fbf9f5]" />
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-16" id="story">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
          <h2
            className="text-[32px] leading-10 text-[#25160e] mb-4"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
          >
            Crafted with Intention
          </h2>
          <p className="font-sans-dm text-base text-[#4f4540]">
            We believe in transparent sourcing, sustainable practices, and the artistry of the perfect roast.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Main Feature – Ethically Sourced */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group roasted-shadow bg-[#f5f3ef]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxxTFji-72UGhdVWwZZvYF2-3iOwEXKlLY4rBdsFB-k5JFZ7OK7efFhjF-xBZJH5QG1WKwP8iNbZq7Ez_xTBYU_7E4S8wfyCLvDy46qX_Td9P7QcTumyAcmyDd4_fL1CfaliqJTSwo8NGhoXjeQNDtzTDr067q9THj4t8pAOjilmkAZ8_0ep2BtHV9mwuUhmmvCXs099It0CSOQVaygEpl_FBNpmkD2FDYDGrfsYbWMQGL6DXrAU_T"
              alt="Barista pouring water over V60 coffee dripper"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25160e]/80 via-[#25160e]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-sans-dm text-[12px] font-bold tracking-[0.1em] uppercase text-[#fbdcce] mb-2 block">
                Direct Trade
              </span>
              <h3
                className="text-[24px] leading-8 text-white mb-2"
                style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
              >
                Ethically Sourced Beans
              </h3>
              <p className="font-sans-dm text-sm text-[#e4e2de] max-w-md">
                We partner directly with farmers in Colombia and Ethiopia to ensure fair wages and exceptional quality in every cup.
              </p>
            </div>
          </div>

          {/* Secondary – Zero Waste */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative roasted-shadow bg-[#f7decc] p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-[#fbf9f5] flex items-center justify-center text-[#25160e] mb-4 shadow-sm">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <div>
              <h3
                className="text-[20px] leading-7 text-[#736153] mb-2"
                style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
              >
                Zero Waste Aim
              </h3>
              <p className="font-sans-dm text-sm text-[#736153]/80">
                Our packaging is 100% compostable, and our spent grounds find new life in local urban gardens.
              </p>
            </div>
          </div>

          {/* Secondary – Artisan Roasting */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative roasted-shadow bg-[#e4e2de] p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-[#fbf9f5] flex items-center justify-center text-[#25160e] mb-4 shadow-sm">
              <span className="material-symbols-outlined">local_cafe</span>
            </div>
            <div>
              <h3
                className="text-[20px] leading-7 text-[#1b1c1a] mb-2"
                style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
              >
                Artisan Roasting
              </h3>
              <p className="font-sans-dm text-sm text-[#4f4540]">
                Roasted in small batches weekly to highlight the unique terroir of each origin.
              </p>
            </div>
          </div>

          {/* Image Feature */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group roasted-shadow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1t8THahgfKsRQu2Xxjvu6BRoLXHn1V-gCpHvMic2HUqz8L3UHOsUt5pfRDEN7--EZVADZ0EM_enTVOYkrVYzi5eeqECG-TgL1fCsWHFGB2VJoNlXkqYPNhxL3_TjQhbA6yctTCqYzUGmepTF8yRFq4dCF9vCfs40PFQ61AZ_O4AuU1mWdHkKlcRf2kthTNM8mIaZlypnWvpSu9xkIexpvf1OquogZzrTB5rdyRmlBQLvWVXFDL2m"
              alt="Freshly roasted coffee beans in a rustic basket"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#25160e]/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* ──────────────── SEASONAL SPECIALS ──────────────── */}
      <div className="h-20 md:h-32 w-full bg-[#fbf9f5]" />
      <section className="bg-[#ffffff] py-20 relative overflow-hidden" id="specials">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#dec1b3]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7decc]/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-sans-dm text-[12px] font-bold tracking-[0.1em] uppercase text-[#6d5b4d] mb-2 block">
                Limited Time
              </span>
              <h2
                className="text-[32px] leading-10 text-[#25160e]"
                style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
              >
                Seasonal Specials
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-[#25160e] font-sans-dm text-sm hover:opacity-80 transition-opacity flex items-center gap-1 group"
            >
              View Full Menu
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Honeycomb Iced Latte',
                price: '$6.50',
                desc: 'Espresso poured over house-made honeycomb infused milk, finished with a dusting of bee pollen.',
                tag: 'Iced',
                chips: [{ label: 'Sweet', bg: 'bg-[#f7decc]', text: 'text-[#736153]' }, { label: 'Light Roast', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2wy2BUM10hqVcpzwEnAx0ivNxFaUpFnlkbhVNXQH3DkX-QL7u9JgmL-_PiCeG6GP_OxiWUP2kX01_EjWcvojqOuAHyvBcDD6YPyi-YQ1wCKtASfe72CgmNzDs5K0aMkUYymul5X_l4QZltoo55kw-cON1evnfCBivn0kuAt0qmz7V7Kiniwtv0l-Dj1GcJus_f0d-ZByg0r1M920ID1RXDlywwr4-ucFKoV3SW8szBiv_O1xmnv7',
                slug: 'honeycomb-iced-latte',
              },
              {
                title: 'Valencia Cortado',
                price: '$5.00',
                desc: 'Equal parts rich espresso and lightly textured steamed milk, infused with natural orange zest oils.',
                tag: 'Hot',
                chips: [{ label: 'Citrus', bg: 'bg-[#fbdcce]', text: 'text-[#281810]' }, { label: 'Espresso Blend', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL62j7afF1xY3lJJhwXVhb0LnTdH5IuwMLjjJbfkNzitGoLXcpS8CH58Smq1HU-50USB__JULhNunxagsXRqlNNg0L1Zj5N65IxMbJDNElur2Hh-a5gXh5hGYd0BtTxd1aazs_8U498H09mym5ED60Ob_rSzyj4fx4154ZJOEl_kOT8i-XKYkC6jBcgGWzt0LSvo-eWaSCqLsUrtX87UND3m9DCfnsZDuwPhKXC1tOjnYOjKAEtczK',
                slug: 'valencia-cortado',
              },
              {
                title: 'Ceremonial Matcha',
                price: '$7.00',
                desc: 'Premium grade Uji matcha whisked to perfection, served over creamy oat milk with a hint of vanilla.',
                tag: 'Iced',
                chips: [{ label: 'Earthy', bg: 'bg-[#d3e8d5]', text: 'text-[#0e1f13]' }, { label: 'Tea', bg: 'bg-[#eae8e4]', text: 'text-[#4f4540]' }],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnv87bs1pK-UFNF2CnQPm2osfl3PCy7HKbzqDg4a298pkG-ZyWd76n_oOlNJ-Y41z2buxbqSfJbRkHWdSc6MBLpj07JirK0Gop1bHYDC8FO2ZcIjLO9YNJ5XJcNRRbxbcPYrHcOWGmK-1ak2rJJrdbNh_gO_MvMWxwGy7oQwjWqnboZGdATd0iex4My4n67tPmwv0RMwkPHQYz_qilp8aJmNQX0LyktDYLgezbL8V6EEZSt2hbGEeO',
                slug: 'ceremonial-matcha',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={`/product/${item.slug}`}
                className="group bg-[#fbf9f5]/60 backdrop-blur-md rounded-xl p-6 border border-white/60 roasted-shadow hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#fbf9f5]/90 backdrop-blur-sm rounded-full px-3 py-1 font-sans-dm text-[10px] font-bold text-[#25160e] shadow-sm">
                    {item.tag}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-[20px] leading-7 text-[#1b1c1a] group-hover:text-[#25160e] transition-colors"
                    style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
                  >
                    {item.title}
                  </h3>
                  <span className="font-sans-dm text-base text-[#6d5b4d]">{item.price}</span>
                </div>
                <p className="font-sans-dm text-sm text-[#4f4540] mb-4">{item.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.chips.map(c => (
                    <span
                      key={c.label}
                      className={`${c.bg} ${c.text} px-3 py-1 rounded-full font-sans-dm text-[10px] font-bold tracking-[0.1em] uppercase`}
                    >
                      {c.label}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── NEWSLETTER / CTA STRIP ──────────────── */}
      <section className="bg-[#25160e] py-16 text-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-[32px] leading-10 text-white mb-2"
              style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
            >
              Ready for your next cup?
            </h2>
            <p className="font-sans-dm text-base text-white/70">
              Skip the queue. Order ahead and pick up in 10 minutes.
            </p>
          </div>
          <Link
            href="/menu"
            className="bg-[#f7decc] text-[#25160e] font-sans-dm text-base font-semibold px-8 py-4 rounded-full hover:bg-[#fbdcce] active:scale-[0.98] transition-all duration-300 whitespace-nowrap roasted-shadow"
          >
            Browse the Menu
          </Link>
        </div>
      </section>
    </>
  )
}
