// import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaRegTimesCircle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll'
import img from '../../assets/author.png'
import { useState } from "react";
import './navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div data-aos="fade-right"  className='p-3 md:p-4 md:sticky md:top-0 '>
            <div className='flex justify-between'>
                <div className='md:mx-auto '>
                    <div className="  ">
                        <img className='   md:h-[210px] h-[220px] md:w-[300px] w-[250px]' src={img} title='Swapno Dey' />
                    </div>
                    <p className='text-[#CD5DF3] font-bold md:text-center text-2xl md:text-3xl '>Swapno Dey</p>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
                    <span className='text-white'>
                        {isMenuOpen === true ?
                            <></>
                            :
                            <FaBars className='w-6 h-6 text-teal-500'></FaBars>
                        }
                    </span>
                </div>
            </div>
            <ul className={`lg:static p-2 bg-[#070A29] absolute flex flex-row-reverse justify-between px-5 duration-500 ${isMenuOpen ? 'top-0 right-0 w-full' : '-top-96 right-0 w-full'}`}>
                <div className='relative left-3'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white md:hidden'>
                        <span className='text-white'>
                            {isMenuOpen === true ?
                                <FaRegTimesCircle className='w-8 h-8'></FaRegTimesCircle>
                                :
                                <></>
                            }
                        </span>
                    </button>
                </div>
                <nav className='md:text-center mx-auto space-y-5 mt-4'>
                    <li>
                        <Link to="home" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>Home</Link>
                    </li>
                    <li>
                        <Link to="aboutMe" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:rounded hover:font-semibold duration-500 cursor-pointer hover:text-xl'>About me</Link>
                    </li>
                    <li>
                        <Link to="myExperience" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:rounded hover:font-semibold duration-500 cursor-pointer hover:text-xl'>My experience</Link>
                    </li>
                    <li>
                        <Link to="mySkills" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>My Skill's</Link>
                    </li>
                    <li>
                        <Link to="myProjects" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>My Project's</Link>
                    </li>
                    <li>
                        <Link to="ContactMe" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-[#6fc9db] hover:p-1 hover:text-black hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>Contact Me</Link>
                    </li>
                </nav>
            </ul>
            <div className=' flex md:justify-center md:space-x-5 space-x-3 mt-3'>
                <a href="https://www.facebook.com/swapno923">
                    <FaFacebook className='w-6 h-6 text-rose-100 hover:text-[#CD5DF3] hover:w-7 hover:h-7 duration-200'></FaFacebook>
                </a>
                <a href="https://github.com/swapno92">
                    <FaGithub className='w-6 h-6 text-rose-100 hover:text-[#CD5DF3] hover:w-7 hover:h-7 duration-200'></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/swapno-dey-7135572a5/">
                    <FaLinkedin className='w-6 h-6 text-rose-100 hover:text-[#CD5DF3] hover:w-7 hover:h-7 duration-200'></FaLinkedin>
                </a>
                <a href="https://twitter.com/Swapno23">
                    <FaTwitter className='w-6 h-6 text-rose-100 hover:text-[#CD5DF3] hover:w-7 hover:h-7 duration-200'></FaTwitter>
                </a>
            </div>
        </div>
    );
};

export default Navbar;