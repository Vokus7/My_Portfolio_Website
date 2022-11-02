import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg px-4 pt-28 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-2'>
          <p className='text-4xl font-lora font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-11 leading-9'>
                  I am a passionate self-taught Front-End Web Developer. I’ve always been drawn to building and designing systems and coupled with my fascination with computers, programming is my ultimate passion. I design beautiful and efficient websites, taking into account clients desires and goals. I also work well with a team in a professional setting. Check out my portfolio below to see some of my works.            </p>
        </div>
        
    </div>
    
  )
}

export default About;