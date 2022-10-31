import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";



const NavBar = () => {
    const [ nav, setNav ] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]


    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <Link to="home" smooth duration={600} className="cursor-pointer">Vokus</Link>
                </h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-lora font-semibold text-gray-500 hover:scale-105 hover:text-blue-400 duration-200">
                    <Link to={link} smooth duration={600}>
                        {link}
                    </Link>
                </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-50 cursor-pointer text-gray-500 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>
            <AnimatePresence>
            {nav && (
                    <motion.ul
                        initial={{ opacity: 0, translateX: '-200px' }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ translateX: '-200px' }}
                        transition={{ type: 'spring', duration: 2 }}
                        className="flex flex-col justify-center items-center absolute top-16 rounded-br-md left-0
                 w-44 h-fit bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link}) => (
                <li key={id} className="px-4 font-lora cursor-pointer capitalize text-2xl py-6">
                     <Link onClick={() => setNav(!nav)} to={link} smooth duration={600}>
                        {link}
                    </Link>
                </li>
                ))}
                    </motion.ul>
            )}
            </AnimatePresence>
        </div>
    );
}
export default NavBar;