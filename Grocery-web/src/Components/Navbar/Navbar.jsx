// import React, { useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
const Navbar = () => {
    //   const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="w-full bg-white fixed top-0 left-0 right-0">
            <nav className="mx-auto flex md:h-[14vh] h-[12vh] max-w-350 items-center justify-between px-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <a href="#" className="text-2xl font-bold sm:text-3xl">
                    Gr<span className="text-orange-500 uppercase">o</span>cery
                </a>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-x-15  hidden">
                    <li>
                        <a
                            href="#"
                            className="tracking-wider font-semibold text-orange-500"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="tracking-wider font-semibold text-zinc-800 hover:text-orange-500"
                        >
                            About Us
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="tracking-wider font-semibold text-zinc-800 hover:text-orange-500"
                        >
                            Process
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="tracking-wider font-semibold text-zinc-800 hover:text-orange-500"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="flex gap-x-5 items-center">
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off"
                        className="flex-1 px-3 h-[4vh] focus:outline-none"  />
                        <button className="text-xl bg-orange-600 flex justify-center items-center text-white w-10 h-10 rounded-full">
                            <IoSearchOutline />
                        </button>
                    </div>

                    <a href="#" className="text-zinc-800 text-3xl">
                        <IoHeartSharp />
                    </a>
                    <a href="#" className="text-zinc-800 text-3xl">
                        <BiSolidShoppingBag />
                    </a>
                    {/* Hamburger */}
                    <a href="#" className="text-zinc-800 text-3xl md:hidden">
                       <TbMenu2 />
                    </a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar