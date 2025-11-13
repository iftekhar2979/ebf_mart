'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // <-- Import the necessary hook!
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  FaShoppingCart,
  FaUser,
  FaSlidersH,
  FaSearch,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import gsap from 'gsap'
import clsx from 'clsx'
import { NAV_ITEMS } from '../config/navbar.config' // Assuming this file provides { label: string, href: string }

const Navbar = () => {
  const pathname = usePathname() // <-- Get the current path
  const navbarRef = useRef(null)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: 'auto',
        ease: 'power2.out',
      })
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      })
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: 'none',
        ease: 'power2.in',
      })
      gsap.to(sidebarRef.current, {
        x: '-100%',
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [isMobileMenuOpen])
  
  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    // Check if the current pathname exactly matches the link href
    if (href === '/') return pathname === '/'
    // Check if the current pathname starts with the link href (for nested routes like /shop/product)
    return pathname.startsWith(href)
  }


  return (
    <>
      <nav ref={navbarRef} className="w-full bg-gray-100 px-4 md:px-8 py-4 shadow-sm z-20 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-pink-600 font-extrabold text-xl">EBF MART</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-sm text-gray-700 font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  item.underline && 'underline',
                  'hover:text-pink-500 transition-colors',
                  // --- ACTIVE LINK LOGIC ---
                  isActive(item.href) ? 'text-pink-600 font-semibold border-b-2 border-pink-600 pb-1' : 'text-gray-700'
                  // --- END ACTIVE LINK LOGIC ---
                )}
              >
                {item.label} 
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <FaSearch className="text-gray-400 mr-2" />
              <Input
                placeholder="Search for products & supermarket..."
                className="border-none outline-none text-sm w-[220px] bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
                <FaSlidersH />
              </Button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="rounded-full text-pink-600 hover:bg-pink-100">
              <FaShoppingCart />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-pink-600 hover:bg-pink-100">
              <FaUser />
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-600"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <FaBars />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 opacity-0 pointer-events-none z-30"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white z-40 transform -translate-x-full p-6 shadow-lg overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-pink-600">Menu</div>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes className="text-pink-600" />
          </Button>
        </div>

        {/* Mobile Nav Links */}
        <div className="space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={clsx(
                'block text-base px-2 py-2 rounded hover:bg-pink-100 transition-colors',
                item.underline && 'underline',
                // --- ACTIVE LINK LOGIC FOR MOBILE ---
                isActive(item.href) ? 'text-pink-600 font-semibold bg-pink-50' : 'text-gray-700'
                // --- END ACTIVE LINK LOGIC FOR MOBILE ---
              )}
            >
              {item.label} {item.dropdown && <span className="ml-1">▼</span>}
            </Link>
          ))}
        </div>

        {/* Mobile search input */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <FaSearch className="text-gray-400" />
            <Input
              placeholder="Search products..."
              className="text-sm bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button variant="ghost" size="icon" className="text-pink-600">
              <FaSlidersH />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar