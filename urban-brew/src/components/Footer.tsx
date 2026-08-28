import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#25160e] text-white">
      <div className="flex flex-col md:flex-row justify-between items-start px-5 md:px-16 gap-8 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="space-y-4 max-w-sm">
          <div
            className="text-[32px] md:text-[48px] leading-none text-white mb-4"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Urban Brew
          </div>
          <p className="font-sans-dm text-base text-white/70">
            Elevating the daily ritual for those who demand quality in every detail.
          </p>
          <p className="font-sans-dm text-xs text-white/50 pt-4">
            © 2024 Urban Brew. Crafted for the urban professional.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h4 className="font-sans-dm text-[12px] font-bold tracking-[0.1em] uppercase text-white/50 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Locations', 'Sustainability', 'Careers', 'Brewing Guides'].map(item => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans-dm text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans-dm text-[12px] font-bold tracking-[0.1em] uppercase text-white/50 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Twitter / X', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans-dm text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
