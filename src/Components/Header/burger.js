import React, { useEffect, useRef, useState } from 'react'
import Logo from "../../Assets/drip-gym.png"
import "./burger.css"

const Burger = () => {
    const mRef = useRef();
    const linkClass = 'cursor-pointer link-underlined py-4 w-fit h-14';
    const [check, setCheck] = useState(false);
    const mobile_menu = document.querySelector('.mobile-nav');
    const background = document.querySelector('.background_blur')
    function Toggling() {
        mRef.current.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        background.classList.toggle('is-active');
        if (mRef.current.classList.contains('is-active') && background.classList.contains('is-active') && mobile_menu.classList.contains('is-active')) {
            setCheck(true)
        }
    }

    useEffect(() => {
        if (check) {
            mobile_menu.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
            background.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
        }
    }, [check])
    return (
        <>

            <nav className='bg-blue flex flex-row justify-between px-10 items-center text-white text-xl py-2 shift  sticky top-0 w-full indexing '>
                <div className='w-36 py-1'>
                    <img className='w-full' src={Logo} alt='Logo' />
                </div>
                <button id='hamburger1' className="hamburger" ref={mRef} onClick={Toggling}>
                    <div className="bar"></div>
                </button>
            </nav>
            <div className="background_blur bg-blue opacity-40"></div>
            <div className="mobile-nav bg-blue opacity-80">
                <div className='flex flex-col justify-center items-center w-full text-lg max-[1708px]:text-sm gap-[40px] font-semibold'>
                    <ul className='text-center text-white text-xl flex flex-col justify-center items-center'>
                        <li className={linkClass} >
                            <a href="#hero">
                                Home
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#features">
                                Features
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#trainers">
                                Trainers
                            </a>
                        </li>
                        <li className='cursor-pointer flex flex-row justify-center items-center pt-10 pb-4 h-14 w-44' >
                            <a href='#contact' className='bg-sky w-full font-semibold rounded-lg text-center transition-all ease-in duration-200 border-4 hover:scale-110  border-sky h-10'>
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Burger