import type { Metadata } from 'next'
import { Libre_Caslon_Text, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'

const libresCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-caslon',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Urban Brew – Crafted for the Urban Professional',
  description: 'Meticulously sourced beans, expertly crafted for the urban professional seeking a moment of calm amidst the noise. Order ahead at Urban Brew.',
  keywords: 'coffee shop, specialty coffee, urban brew, latte, espresso, pour over, cold brew',
  openGraph: {
    title: 'Urban Brew – Crafted for the Urban Professional',
    description: 'Meticulously sourced beans, expertly crafted for the urban professional.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${libresCaslon.variable} ${dmSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fbf9f5] text-[#1b1c1a] antialiased flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
