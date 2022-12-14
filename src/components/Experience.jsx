import React from 'react';
import html from '../assets/html.png';
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import tailwindcss from '../assets/tailwind.png';
import css from '../assets/css.png';
import { motion } from "framer-motion";

const Experience = () => {

    const techs = [
      {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
      },
      {
        id: 2,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400'
      },
      {
        id: 3,
        src: javascript,
        title: 'Javascript',
        style: 'shadow-yellow-500'
      },
      {
        id: 4,
        src: reactimg,
        title: 'React',
        style: 'shadow-blue-600'
      },
      {
        id: 5,
        src: tailwindcss,
        title: 'Tailwind',
        style: 'shadow-sky-400'
      },
      {
        id: 6,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
      }
  ];
  const CardAnimate = {
    offscreen: {
      translateY: "100px", opacity: 0
    },
    onscreen: {
      translateY: 0, opacity: 1,
      transition: {
        type: 'spring', bounce: 0.3, duration: 1
      }
    }
  }

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
      <div className='max-w-screen-lg pt-24 p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-lora font-bold inline border-b-4 border-gray-500 p-2'>
            Experience
          </p>
          <p className='py-6 mt-4'>
            These are the technologies i've worked with
          </p>
        </div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({id, src, title, style}) => (
            <motion.div
              variants={CardAnimate}
              key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>
              {title}
            </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experience;