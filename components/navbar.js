"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {isHomePage && (
            <>
              <Link
                href="/#features"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Features
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
              <Link
                href="/#pricing"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
              <Link
                href="/#testimonials"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Testimonials
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
              <Link
                href="/#faq"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          {isHomePage && (
            <Link href="/auth">
              <Button className="rounded-full bg-gradient-to-r from-blue-400 via-primary to-purple-400 hover:from-blue-500 hover:via-primary hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                Get Started
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-300 hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container py-4 space-y-4">
            {isHomePage && (
              <>
                <Link
                  href="/#features"
                  className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/#testimonials"
                  className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/#faq"
                  className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-400 via-primary to-purple-400 transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

