// import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { BsFileSpreadsheetFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FaBug } from "react-icons/fa";
import { FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiAmazonapigateway } from "react-icons/si";


const MyExperience = () => {
    return (
        <div className='services_bg  h-fit w-full bg-[#515152] md:px-10 px-3 pt-1 pb-10' id='myExperience'>
            <div className='flex-col md:px-32 px-5 mt-[75px]'>
                {/* <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'>SERVICE'S</h2> */}
                <p className='text-center text-[#CD5DF3] md:text-4xl text-xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-[#CD5DF3]'>What I Do ?</p>
            </div>
            <div className=' gap-x-5 gap-y-4 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white'>
                <div className='relative pb-8 bg-[#403b3b] px-5 py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><RiComputerLine className=""></RiComputerLine></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">Front-End Development</p>
                    <p>Interactive and visually appealing user interfaces using modern frameworks.</p>
                    <div className="absolute bottom-4 end-8 text-3xl text-[#FF014F]">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='bg-[#403b3b] pb-8 relative px-5 py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><BsFileSpreadsheetFill className=""></BsFileSpreadsheetFill></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">Developing Back-End website</p>
                    <p>Robust and scalable back-end systems with smooth data handling and secure authentication.</p>
                    <div className="absolute bottom-4 end-8 text-3xl text-[#FF014F]">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='bg-[#403b3b] pb-8 px-5 relative py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><FaBug className=""></FaBug></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">Bug's fixing</p>
                    <p>I fix the bug's of website's in less time.</p>
                    <div className="absolute bottom-4 end-8 text-3xl text-[#FF014F]">
                        <FaArrowRight className=""></FaArrowRight>
                    </div>
                </div>
                <div className='bg-[#403b3b] pb-8 relative px-5 py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><FaMobileAlt className=""></FaMobileAlt></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">Responsive Web Design</p>
                    <p>Seamlessly adapt to different screen sizes and devices for optimal user experience.</p>
                    <div className=" absolute bottom-4 end-8 flex justify-end  text-3xl text-[#FF014F]">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='bg-[#403b3b] pb-8 relative px-5 py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><FaDatabase className=""></FaDatabase></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">Database Integration</p>
                    <p>Effective integration of MongoDB for efficient data storage and management.</p>
                    <div className="absolute bottom-4 end-8 text-3xl text-[#FF014F]">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='bg-[#403b3b] pb-8 relative px-5 py-2 space-y-1 shadow-[#000000] shadow-lg rounded-lg'>
                    <p className="text-5xl text-[#72e7d7]"><SiAmazonapigateway className=""></SiAmazonapigateway></p>
                    <p className=" text-2xl font-bold text-[#CD5DF3]">API Development</p>
                    <p>Development of RESTful APIs for seamless communication and enhanced functionality.</p>
                    <div className="absolute bottom-4 end-8 text-3xl text-[#FF014F]">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyExperience;