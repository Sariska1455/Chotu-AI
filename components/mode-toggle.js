"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    }, 150)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-primary/20">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`relative overflow-hidden rounded-full w-10 h-10 transition-all duration-500 border-primary/20 ${
        theme === "dark" ? "bg-slate-800" : "bg-blue-50"
      }`}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isAnimating ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {theme === "dark" ? (
          <div className="relative">
            {/* Moon with stars */}
            <div className="w-5 h-5 rounded-full bg-blue-300"></div>
            <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-slate-800 transform -translate-x-1/4 -translate-y-1/4"></div>

            {/* Stars */}
            <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-blue-200 animate-pulse-slow"></div>
            <div
              className="absolute bottom-1 left-1 w-0.5 h-0.5 rounded-full bg-blue-200 animate-pulse-slow"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-2 left-0 w-0.75 h-0.75 rounded-full bg-blue-200 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        ) : (
          <div className="relative">
            {/* Sun with rays */}
            <div className="w-5 h-5 rounded-full bg-yellow-400 animate-pulse-slow">
              <div className="absolute inset-0 animate-rays">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-0.5 bg-yellow-400 origin-center"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 45}deg) translateX(0.5rem)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="absolute -bottom-3 -right-3 w-3 h-2 bg-white rounded-full"></div>
            <div className="absolute -bottom-3 -right-1.5 w-2 h-1.5 bg-white rounded-full"></div>
          </div>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

