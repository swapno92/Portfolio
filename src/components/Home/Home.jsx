// import React from 'react';
// import AboutMe from '../AboutMe/AboutMe';
import './Home.css'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'

import { FaAngleDoubleDown } from 'react-icons/fa';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <>
            <div className='h-fit bg-fixed w-full flex flex-col justify-center items-center bg-Img p-4 md:pt-0' id='home'>
                <h2 className='font-bold md:text-3xl text-lg text-[#ffffff] mb-5 md:pt-48 pt-10'>Welcome to my portfolio</h2>
                <h3 className='font-serif text-white md:text-[50px] text-2xl md:font-bold'>
                    {'<'} I'm {' '}
                    <span className='text-[#CD5DF3] font-bold'>
                        {/* Style will be inherited from the parent element */}

                        <Typewriter
                            words={["a web developer", "a MERN stack developer", "a full stack developer"]}
                            loop={Infinity}
                            cursor
                            cursorStyle='/'
                            typeSpeed={60}
                            deleteSpeed={60}
                            delaySpeed={3000}
                        />
                    </span>
                    {'>'}
                </h3>
                <p className='font-semibold text-center md:mt-6 mt-3 text-white md:text-2xl text-lg '>I live in Dhaka, Bangladesh</p>
                <Link to="ContactMe" smooth={true} offset={0} duration={400}>
                    <button className='border-2 btn bg-transparent text-[#CD5DF3] p-2 rounded-lg mt-10 font-semibold border-[#CD5DF3] hover:bg-[#CD5DF3] hover:text-black duration-500 hover:font-semibold transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 hover:border-[#CD5DF3] '>Contact Me</button>
                </Link>
                <p className='text-white mt-12 md:pb-32 pb-10'>
                    <FaAngleDoubleDown className='text-[#CD5DF3] w-8 h-7 animate-bounce'></FaAngleDoubleDown>
                </p>
            </div>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;

{/* <h3 className='text-white md:text-[50px] text-xl md:font-bold'>
    {'<'} I'm {' '}
    <span className='text-[#14B8A6] font-bold'> */}
{/* Style will be inherited from the parent element */ }

{/* <Typewriter
            words={["a web developer", "a MERN stack developer", "a full stack developer"]}
            loop={Infinity}
            cursor
            cursorStyle='/'
            typeSpeed={60}
            deleteSpeed={60}
            delaySpeed={3000}
        />
    </span>
    {'>'}
</h3> */}