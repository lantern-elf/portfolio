import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HamburgerMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-[6vh] right-0 md:w-1/5 w-2/3 h-full 
      shadow-lg transform transition-all duration-300 ease-in-out z-[998]
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      ${isScrolled ? 'bg-opacity-[0] backdrop-blur-md' : 'bg-white'}`}
    >
      <div className="flex flex-col p-6 space-y-4">
        <a
          onClick={() => { navigate('/illustration'); onClose(); }}
          className="text-lg font-medium cursor-pointer hover:underline"
        >
          Illustration
        </a>

        <a
          onClick={() => { navigate('/concept-art'); onClose(); }}
          className="text-lg font-medium cursor-pointer hover:underline"
        >
          Concept Art
        </a>

        <a
          onClick={() => { window.open('https://lantern-elf.itch.io', '_blank'); onClose(); }}
          className="text-lg font-medium cursor-pointer hover:underline"
        >
          Game
        </a>

        <a
          onClick={() => { navigate('/about'); onClose(); }}
          className="text-lg font-medium cursor-pointer hover:underline"
        >
          About
        </a>
      </div>
    </div>
  )
}

export default HamburgerMenu
