import React, { useState } from 'react'
import Logo from "../../Assets/drip-gym.png"
import Burger from './burger'
import './navbar.css'

const NavBar = () => {
    const [Toggle, setToggle] = useState()
    "load resize".split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            if (window.innerWidth < 768) {
                setToggle(false);
            } else {
                setToggle(true);
            }
        })
    });
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            document.getElementById("Fixed").style.background = "#2c2d43";
        } else {
            document.getElementById("Fixed").style.background = "transparent";
        }
    })
    return (
        <>
            {Toggle
                ?
                <nav id="Fixed" className='bg-transparent flex flex-row justify-between px-14 items-center text-white text-xl py-2 fixed top-0 w-full z-50 transition-all duration-100 ease-in-out'>
                    <div className='w-36 py-1'>
                        <img className='w-full' src={Logo} alt='Logo' />
                    </div>
                    <ul className='flex flex-row justify-between w-2/6 items-center text-lg max-[1708px]:text-sm gap-[40px] font-semibold min-w-[332px]'>
                        <li className='cursor-pointer link link-underline link-underline-black py-1' >
                            <a href="#hero">
                                Home
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black py-1' >
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black py-1' >
                            <a href="#features" >
                                Features
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black py-1' >
                            <a href="#trainers">
                                Trainers
                            </a>
                        </li>
                    </ul>
                    <div className='w-40 max-[1708px]:w-28 flex flex-row justify-center items-center py-1'>
                        <a href='#contact' className='bg-sky w-full font-semibold rounded-lg text-center py-[1px] text-xl transition-all ease-in duration-200 border-4 hover:scale-110  border-sky max-[1708px]:text-sm min-[1708px]:py-[4px]'>Register</a >
                    </div>
                </nav>
                :
                <Burger />

            }
        </>
    )
}

export default NavBar