import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 pt-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-11 leading-9'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi veniam corporis accusamus! Ullam itaque esse possimus nesciunt quisquam, officiis quam fuga neque quo corporis, voluptatem voluptatibus veniam nisi maxime sunt perferendis voluptatum! Alias officiis quia enim, quis praesentium ipsum natus odit sapiente, debitis, nisi obcaecati magni consectetur iste esse.
            </p>
        </div>
        
    </div>
    
  )
}

export default About;