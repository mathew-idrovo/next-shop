'use client'
import { useUIStore } from '@/store'
import clsx from 'clsx'
import { LogOut, PersonStanding, Search, Ticket, X } from 'lucide-react'
import Link from 'next/link'

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeMenu = useUIStore((state) => state.closeSideMenu)
  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}
      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        <X
          size={20}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />

        {/* Input */}
        <div className="relative mt-14">
          <Search size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <PersonStanding size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <Ticket size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  )
}
