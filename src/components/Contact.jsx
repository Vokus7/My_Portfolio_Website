import React from 'react'

const Contact = () => {
  return (
      <div name="contact" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
        <div className='max-w-screen-lg pt-24 md:pt-32 p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                  <p className='text-4xl font-lora font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/f594b118-e93e-434b-8217-b67a8eb10028" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-5 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Get in touch</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;