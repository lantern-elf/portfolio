import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'
import "./navbar.css"

const Navbar = ({ home = false, artworks = false, codes = false, about = false}) => {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(false)
    const menuList = [
        {
            name: "Home",
            url: "/home" ,
            state: home
        },
        {
            name: "Artworks",
            url: "/artworks",
            state: artworks
        },
        // {
        //     name: "Codes",
        //     url: "/codes",
        //     state: codes
        // },
        {
            name: "About",
            url: "/about",
            state: about
        },
    ];

    return(
        <>
            <nav className={`${home ? "" : "nav-non-home"} wrapper`}>
                    <ul className="logo">
                        <a href="/">
                            <img src="./Emblem.png"/>
                            <span>lantern elf</span>
                        </a>
                    </ul>
                    <ul className="menu">
                    {
                        menuList.map((item, index) => (
                            <li className="menu-item">
                                <button key={index} className={item.state ? 'active' : ''} onClick={() => navigate(item.url)}>{item.name}</button>
                            </li>
                        ))
                    }
                        <li className='hamburger-icon'>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </li>
                    </ul>
            </nav>
            <div className={`hamburger ${isOpen ? 'open-burger' : ''}`}>
                {
                menuList.map((item, index) => (
                    <li>
                        <button key={index} className={item.state ? 'active' : ''} onClick={() => navigate(item.url)}>{item.name}</button>
                    </li>
                ))
                }
            </div>
        </>
    )
}

export default Navbar