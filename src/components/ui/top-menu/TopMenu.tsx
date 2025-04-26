'use client'
import { titleFont } from '@/config/font'
import { useUIStore } from '@/store'
import { Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu)

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span>| Shop</span>
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/Kids"
        >
          Kids
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <Search className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white ">
              3
            </span>
            <ShoppingCart className="w-5 h-5" />
          </div>
        </Link>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menu
        </button>
      </div>
    </nav>
  )
}
