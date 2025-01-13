import Link from 'next/link'
import { ReservationModal } from '@/components/reservation-modal'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-2 border-solid border-black m-6 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-sans">
            Osteria Luna
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/menus" className="hover:text-gray-600 font-sans">
              Menu
            </Link>
            <Link href="/about" className="hover:text-gray-600 font-sans">
              About
            </Link>
            <Link href="/gallery" className="hover:text-gray-600 font-sans">
              Gallery
            </Link>
           
            <ReservationModal />
          </div>
        </div>
      </div>
    </nav>
  )
}

