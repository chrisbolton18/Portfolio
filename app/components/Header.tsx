'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        // User has scrolled to the bottom (or very close to it)
        setActiveSection('contact')
      } else {
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Button
                className={`text-lg bg-transparent relative
                  ${activeSection === item.toLowerCase() 
                    ? 'text-teal-400' 
                    : 'text-gray-300'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                  after:bg-teal-400 after:scale-x-0 after:origin-bottom-right after:transition-transform 
                  after:duration-300 after:ease-out
                  hover:after:scale-x-100 hover:after:origin-bottom-left
                `}
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

