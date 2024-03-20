// import React from 'react';
import resume_pdf from '../../assets/Swapno_Resume.pdf'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div  className='about-bg h-fit pb-5 md:flex-row justify-center border-t-2 border-t-[#7c7979]' id='aboutMe'>
            <div data-aos="zoom-in-up" className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'> </h2>
                <p className='text-center text-[#CD5DF3] md:text-4xl text-3xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-[#CD5DF3] pt-[110px] font-serif'>More About Me</p>
            </div>

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='md:px-10 px-3 md:mt-20 mt-10 md:flex gap-5'>
                <div  className='text-white md:w-[65%] p-2 mb-5 md:mb-0'>
                    <p className='font-semibold text-2xl tracking-wide'>I'm <span className='font-bold text-2xl text-[#CD5DF3]'>Swapno Dey</span>, a junior MERN stack developer</p>
                    <p className='mt-5 text-justify text-[#a4a2a2] font-semibold'>As a web developer I constantly strive to improve my development skills. Hard work and discovery of new resources to make the website user friendly.</p>
                    <p className='mt-5 text-justify text-[#a4a2a2] font-semibold'>I have a passion for working with Node.js, MongoDB, and modern Javascript libraries and frameworks like React.js . With a solid foundation in front-end and back-end technologies, I specialize in building dynamic and responsive web applications.</p>
                </div>
                <div className='text-white md:w-[35%] border-l-4 border-[#CD5DF3] p-2 space-y-4'>
                    <p className='text-xl text-[#CD5DF3] font-semibold border-b-2 border-b-gray-500 py-2'>Email: <span className='text-white text-lg'>swapnodey23@gmail.com</span></p>
                    <p className='text-xl text-[#CD5DF3] font-semibold border-b-2 border-b-gray-500 py-2'>Age: <span className='text-white text-lg'>21</span></p>
                    <p className='text-xl text-[#CD5DF3] font-semibold border-b-2 border-b-gray-500 py-2'>Study: <span className='text-white text-lg'>Diploma in Computer Engineering at Chittagong Polytechnic Institute</span></p>
                    <p className='text-xl text-[#CD5DF3] font-semibold border-b-2 border-b-gray-500 py-2'>From: <span className='text-white text-lg'>Chittagong, Bangladesh</span></p>
                </div>
            </div>
            <div className='text-center py-10'>
                <a href={resume_pdf} download className='btn bg-transparent hover:bg-[#CD5DF3] text-[#CD5DF3] hover:text-black font-bold border-[#CD5DF3] hover:border-[#CD5DF3] duration-500'>Download Resume</a>
            </div>
        </div>
    );
};

export default AboutMe;



// bg - [#2d4446]