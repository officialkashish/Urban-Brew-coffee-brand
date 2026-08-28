'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const pathname = usePathname()
  const { itemCount } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#fbf9f5]/90 backdrop-blur-md shadow-sm'
            : 'bg-[#fbf9f5]/80 backdrop-blur-md'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-16 max-w-[1280px] mx-auto h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-caslon text-[32px] md:text-[48px] leading-none text-[#25160e] hover:opacity-80 transition-opacity tracking-tight"
            style={{ fontFamily: 'Libre Caslon Text, Georgia, serif' }}
          >
            Urban Brew
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-sans-dm text-base transition-colors pb-1 ${
                isActive('/')
                  ? 'text-[#25160e] border-b-2 border-[#25160e]'
                  : 'text-[#6d5b4d] hover:text-[#25160e]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`font-sans-dm text-base transition-colors pb-1 ${
                isActive('/menu')
                  ? 'text-[#25160e] border-b-2 border-[#25160e]'
                  : 'text-[#6d5b4d] hover:text-[#25160e]'
              }`}
            >
              Menu
            </Link>
            <Link
              href="/#story"
              className="font-sans-dm text-base text-[#6d5b4d] hover:text-[#25160e] transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/#specials"
              className="font-sans-dm text-base text-[#6d5b4d] hover:text-[#25160e] transition-colors"
            >
              Specials
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/checkout"
              aria-label="Cart"
              className="relative text-[#25160e] hover:opacity-80 transition-opacity active:scale-95 duration-200 w-10 h-10 flex items-center justify-center rounded-full bg-[#f5f3ef] hover:bg-[#efeeea] roasted-shadow"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>shopping_cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#25160e] text-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#25160e] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f5f3ef] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } bg-[#fbf9f5]/95 backdrop-blur-md border-t border-[#e4e2de]`}
        >
          <nav className="flex flex-col px-5 py-4 gap-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="font-sans-dm text-base text-[#25160e] hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/menu" onClick={() => setMobileOpen(false)} className="font-sans-dm text-base text-[#6d5b4d] hover:text-[#25160e] transition-colors">Menu</Link>
            <Link href="/#story" onClick={() => setMobileOpen(false)} className="font-sans-dm text-base text-[#6d5b4d] hover:text-[#25160e] transition-colors">Our Story</Link>
            <Link href="/#specials" onClick={() => setMobileOpen(false)} className="font-sans-dm text-base text-[#6d5b4d] hover:text-[#25160e] transition-colors">Specials</Link>
          </nav>
        </div>
      </header>
    </>
  )
}
