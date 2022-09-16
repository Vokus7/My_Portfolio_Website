import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";



const SocialLinks = () => {
    const links = [
        {
            id: 1, 
            child: (
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md',
        },
        {
            id: 2, 
            child: (
                <>GitHub <FaGithub size={30}/></>
            ),
            href: 'https://github.com/Vokus7',
        },
        {
            id: 3, 
            child: (
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href: 'mailto:eddyfree69@gmail.com',
        },
        {
            id: 4, 
            child: (
                <>Resume <BsPersonLinesFill size={30}/></>
            ),
            href: "/resume.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]


    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, child, style, href, download}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800 + ${style}`  }>
                    <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">
                        {child}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default SocialLinks;