import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ home = false, artWorks = false, aboutMe = false }) => {
    const navigate = useNavigate()
    return (
        <nav className="bg-white top-0 sticky z-[999] shadow-sm">
            <div className="flex items-center justify-between px-4 h-[8vh]">
                {/* Logo / Title */}
                <div className="flex-shrink-0">
                    <a href='/' className="text-[18px] place-items-center text-center flex gap-1 text-xl tracking-[.01em] cursor-pointer">
                        <img src="public/emblem.png" alt="" className='w-10' />
                        Lantern Elf
                    </a>
                </div>
                {/* Links */}
                <div className="hidden md:flex items-center space-x-2">
                    <button onClick={() => navigate("/")} className={`cursor-pointer p-1 px-2 rounded ${home ? 'bg-accent shadow' : ''}`}>
                        Home
                    </button>
                    <button onClick={() => navigate("/artworks")} className={`cursor-pointer p-1 px-2 rounded ${artWorks ? 'bg-accent shadow' : ''}`}>
                        Artworks
                    </button>
                    <button onClick={() => navigate("/about")} className={`cursor-pointer p-1 px-2 rounded ${aboutMe ? 'bg-accent shadow' : ''}`}>
                        About
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar