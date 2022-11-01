import React from 'react';
import Eeyore from '../assets/CardImages/Eeyore.jpg';
import Pooh from '../assets/CardImages/Pooh.jpg';
import Frog from '../assets/CardImages/punk frog.jpg';
import Rabbit from '../assets/CardImages/Rabbit.jpg';
import Winnie from '../assets/CardImages/Winnie.jpg';
import Snow from '../assets/CardImages/Snow White.jpg';



const CardImages = () => {

    const Images = [
        {
            id: 1,
            img: Eeyore,
            style: 'shadow-gray-400'
        },
        {
            id: 2,
            img: Pooh,
            style: 'shadow-gray-400'
        },
        {
            id: 3,
            img: Frog,
            style: 'shadow-gray-400'
        },
        {
            id: 4,
            img: Rabbit,
            style: 'shadow-gray-400'
        },
        {
            id: 5,
            img: Winnie,
            style: 'shadow-gray-400'
        },
        {
            id: 6,
            img: Eeyore,
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            img: Pooh,
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            img: Winnie,
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            img: Rabbit,
            style: 'shadow-gray-400'
        },
        {
            id: 10,
            img: Frog,
            style: 'shadow-gray-400'
        },
        {
            id: 10,
            img: Frog,
            style: 'shadow-gray-400'
        },
        {
            id: 10,
            img: Frog,
            style: 'shadow-gray-400'
        },
    ]


    return (
        <div className='h-[500px] w-[600px] grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-6 text-center py-4 px-2 md:px-8 sm:px-0'>
            {Images.map((items) => {
                return (
                    <div key={items.id} className={`shadow-md hover:scale-105 duration-500 rounded-lg ${items.style}`}>
                        <img src={items.img} alt="" className='w-full h-full object-cover rounded-lg mx-auto' />
                    </div>
                )
            })}
        </div>
    )
}

export default CardImages;