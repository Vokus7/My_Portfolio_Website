import React from "react";
import HeroImg from "../assets/heroimg.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 pt-44 md:flex-row">
                <div className="flex flex-col justify-center py-0 my-0 h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-blue-400">
                        Hi, I'm Ogbutor Endurance, 
                    </h2>
                    <h3 className="text-3xl sm:text-5xl font-bold text-white">a Front-End Web Developer</h3>
                    <p className="text-gray-500 py-4 max-w-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quis non mollitia quaerat eum iusto facere architecto dolorum veritatis possimus, ullam explicabo veniam laboriosam. At impedit ducimus optio quae. Ipsam?
                </p>
                
                <div>
                    <Link to="portfolio" smooth duration={600} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                        Porfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <BsArrowRight className="ml-2" />
                        </span> 
                    </Link>
                </div>
                </div>  
                <div className="flex flex-col justify-center h-80">
                    <img src={HeroImg} alt="my self portrait" className="rounded-2xl mx-10 my-9 w-2/3 h-80 md:w-full"/>
                </div>
            </div>
        </div>
    )
}
export default Home;