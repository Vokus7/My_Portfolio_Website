import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            alt: 'arrayDestruct',
        },
        {
            id: 2,
            src: installNode,
            alt: 'installNode',
        },
        {
            id: 3,
            src: navbar,
            alt: 'navbar',
        },
        {
            id: 4,
            src: reactParallax,
            alt: 'reactParallax',
        },
        {
            id: 5,
            src: reactSmooth,
            alt: 'reactSmooth',
        },
        {
            id: 6,
            src: reactWeather,
            alt: 'reactWeather',
        }
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 pt-28 md:pt-48 mx-auto flex flex-col justify-around w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work below
                </p>
            </div>
               <div  className='grid sm:grid-cols-2 sm:p-0 md:grid-cols-3 gap-8 px-12'>
                {portfolios.map(({id, src, alt}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt={alt} className="rounded-md hover:scale-105 duration-200" />
                    <div className='flex first-letter:items-center justify-center'>
                        <button className='w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105'>Code</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio;