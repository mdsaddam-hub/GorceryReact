// import React, { useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    //   const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="w-full">
            <nav className="mx-auto flex h-[14vh] max-w-350 items-center justify-between px-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <a href="#" className="text-2xl font-bold sm:text-3xl">
                    Gr<span className="text-orange-500 uppercase">o</span>cery
                </a>

                {/* Desktop Menu */}
                <ul className="flex items-center gap-x-15  md:flex lg:gap-10">
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
                    <div className="flex p-1 border-2 border-orange-500 rounded-full">
                        <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off"
                        className="flex-1 px-3 h-[4vh] focus:outline-non"  />
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
                </div>

            </nav>
        </header>
    )
}

export default Navbar