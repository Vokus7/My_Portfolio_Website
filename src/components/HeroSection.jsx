import React from "react";
import HeroImg from "../assets/heroimg.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:pt-44 pt-52 md:flex-row">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, translateX: '-200px' }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ type: 'spring', bounce: 0.3, duration: 3 }}
                        className="flex flex-col justify-center py-0 my-0 h-full">
                        <h2 className="text-4xl sm:text-7xl font-bold text-blue-400">
                            Hi, I'm Ogbutor Endurance,
                        </h2>
                        <h3 className="text-[28px] leading-8 sm:text-5xl font-bold text-white">a Front-End Web Developer</h3>
                        <p className="text-gray-400 py-4 max-w-md font-semibold">
                            I have been building and designing software for a year. I currently utilize popular technologies such as
                            React, Javascript and Tailwind to design and build software.
                        </p>

                        <div>
                            <Link to="portfolio" smooth duration={600} className="group text-white text-[14px] w-fit md:px-6 px-4 py-2 md:py-3 mb-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                                    <BsArrowRight className="ml-2" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, translateY: '200px' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', bounce: 0.3, duration: 3 }}
                        className="flex flex-col justify-center h-80 md:h-[350px] w-80 mt-3">
                        <img src={HeroImg} alt="my self portrait" className="rounded-full md:rounded-2xl mx-10 my-9 md:m-0 w-2/3 h-80 md:w-full" />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
export default HeroSection;