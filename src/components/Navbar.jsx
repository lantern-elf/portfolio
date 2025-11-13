import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HamburgerIcon from './HamburgerIcon'
import HamburgerMenu from './HamburgerMenu'

const Navbar = ({ home = false, illustration = false, aboutMe = false, conceptArt = false, game = false }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = (checked) => {
    setMenuOpen(checked)
  }

  const links = [
    // { name: "Home", path: "/", condition: home },
    { name: "Concept Art", path: "/concept-art", condition: conceptArt },
    { name: "Illustration", path: "/illustration", condition: illustration },
    { name: "Game", url: "lantern-elf.itch.io/", condition: game },
    { name: "About", path: "/about", condition: aboutMe },
  ]

  return (
    <>
      <nav className="bg-opacity-[0] top-0 sticky z-[999] backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-4 h-[6vh]">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <a href='/' className="place-items-center text-center flex gap-2 cursor-pointer">
              <img src="/image/emblem.png" alt="" className='w-8 drop-shadow-2xl' />
              <span className='text-[18px] text-black'>Lantern Elf</span>
            </a>
          </div>

          {/* Links Start */}
          <div className="flex justify-center items-center space-x-5">
            <div className="hidden md:flex items-center space-x-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  onClick={
                    link.url
                      ? () => window.open(`https://${link.url}`, '_blank', 'noopener,noreferrer')
                      : () => navigate(link.path)
                  }
                  className="group relative cursor-pointer text-black transition duration-300"
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-[-5px] w-full h-0.5 bg-black scale-x-0 
                      ${link.condition ? 'scale-x-100' : ''} 
                      group-hover:scale-x-100 transition-transform duration-300 origin-center`}
                  ></span>
                </a>
              ))}
            </div>

            <div>
              <HamburgerIcon onToggle={handleToggle} />
            </div>
          </div>
          {/* Links End */}
        </div>
      </nav>

      <HamburgerMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        conceptArt={conceptArt}
        illustration={illustration}
        about={aboutMe}
      />
    </>
  )
}

export default Navbar
