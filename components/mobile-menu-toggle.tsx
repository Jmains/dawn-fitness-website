"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        className="md:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div
          id="mobile-menu"
          className={`fixed inset-y-0 h-[38rem] rounded-md right-0 w-full max-w-[320px] bg-background border-l shadow-xl p-5 z-[101] transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <img src="/logo-white.png" alt="Dawn Fitness Logo" width={100} height={10} />
              </Link>
            </div>
            <button
              className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col bg-black space-y-4">
            <Link
              href="#"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              In-Person Training
            </Link>
            <Link
              href="#"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Virtual Training
            </Link>
            <Link
              href="#"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            {/* <Link
              href="/meet-the-team"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Meet The Team
            </Link> */}
            <Link
              href="#contact"
              className="py-2 text-base font-medium border-b border-border transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-8">
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </div>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
