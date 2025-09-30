import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ home = false, artWorks = false, aboutMe = false }) => {
    const navigate = useNavigate()
    return (
        <nav className="bg-opacity-[0] top-0 sticky z-[999] backdrop-blur-md shadow-sm">
            <div className="flex items-center justify-between px-4 h-[8vh]">
                {/* Logo / Title */}
                <div className="flex-shrink-0">
                    <a href='/' className="place-items-center text-center flex gap-2 cursor-pointer">
                        <img src="/emblem_black_bg.png" alt="" className='w-8' />
                        <span className='text-[20px]'>Lantern Elf</span>
                    </a>
                </div>
                {/* Links */}
                <div className="hidden md:flex items-center space-x-2">
                    <button onClick={() => navigate("/")} className={`cursor-pointer py-1 px-2 rounded ${home ? 'bg-accent shadow' : ''}`}>
                        Home
                    </button>
                    <button onClick={() => navigate("/artworks")} className={`cursor-pointer py-1 px-2 rounded ${artWorks ? 'bg-accent shadow' : ''}`}>
                        Artworks
                    </button>
                    <button onClick={() => navigate("/about")} className={`cursor-pointer py-1 px-2 rounded ${aboutMe ? 'bg-accent shadow' : ''}`}>
                        About
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar