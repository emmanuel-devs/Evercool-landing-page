"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll(".bottle-glow")

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

        if (isVisible) {
          element.classList.add("animate-pulse")
        } else {
          element.classList.remove("animate-pulse")
        }
      })
    }

    // Initial check
    handleScrollAnimations()

    // Add scroll event listener
    window.addEventListener("scroll", handleScrollAnimations)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollAnimations)
    }
  }, [])

  return null
}
