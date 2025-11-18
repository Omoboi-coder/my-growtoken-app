"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  
  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden absolute right-7 bottom-[-1] z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Image src="/Images/MENU.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>
      
      {/* Mobile menu dropdown - slides down from navbar */}
      <div className={`fixed top-16 left-0 right-0 w-full bg-white shadow-lg z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}> 
        <div className="flex flex-col space-y-0 py-4 px-6 text-[var(--color-growtoken-dark)] text-base font-medium">
          <Link href="#" className="px-4 py-3 hover:bg-orange-50 rounded transition-colors text-[var(--color-growtoken-orange)]">Home</Link>
          <Link href="#" className="px-4 py-3 hover:bg-orange-50 rounded transition-colors">Impact</Link>
          <Link href="#" className="px-4 py-3 hover:bg-orange-50 rounded transition-colors">Hashgraph</Link>
          <Link href="#" className="px-4 py-3 hover:bg-orange-50 rounded transition-colors">About Us</Link>
        </div>
      </div>
    </>
  )
}
export default HamburgerMenu