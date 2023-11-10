import React from 'react';
import Image from"../assets/img.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Computer Science Engineer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Hello Everyone, I am currently pursuing my 3rd year B.tech at Vellore Institute Of Technology,Ap.Diligent computer science engineering student dedicated to improving skills through hands on learning and development word. Adept at using java,oython to produce clean code.
                    </p>

                    <div>
                        <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-black-500' >
                            Portfolio <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
                        </Link>
                    </div>
                </div>

                <div >
                    <img src={Image} alt="my profile" className='rounded-2xl mx-auto w-3/3 md:w-6/4'/>
                </div>
            </div>
        </div>
    )
}

export default Home
