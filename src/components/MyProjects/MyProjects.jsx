// import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import project1 from '../../assets/Swift Mart.png'
import project2 from '../../assets/bloodDonatin.png'
import project3 from '../../assets/online-group-study.png'
import project4 from '../../assets/automotive-brand.png'



const MyProjects = () => {
    return (
        <div className=' h-fit pb-5 md:flex-row justify-center bg-[#515152] border-t-2 border-t-[#7c7979]' id='myProjects'>
            {/* <div className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'> My Projects </h2>
                <p className='text-center text-[#CD5DF3] md:text-4xl text-xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-[#CD5DF3] pt-[110px] font-serif'>My Projects</p>
            </div> */}
            <div data-aos="zoom-in-up" className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-3 pt-5 md:tracking-wide text-center'>PROJECT'S</h2>
                <p className='text-center text-[#CD5DF3] md:text-4xl text-3xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-[#CD5DF3] font-serif'>My Project's</p>
            </div>
            <div className=" text-white grid lg:grid-cols-2 grid-cols-1 px-8 gap-10 mt-10 ">
                {/* 1 */}
                 <div className=" rounded-lg space-y-5 py-4 bg-[#454242] shadow-md shadow-[#201f1f]">
                    <div className="relative rounded-2xl w-[85%] mx-auto roun2 h-64 overflow-hidden ">
                        <div className="h-max rounded rounded-b-2xl transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                            <img src={project1} alt="" className="w-full object-cover object-top "
                            />
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto flex justify-between'>
                        <h1 className='text-2xl text-[#CD5DF3] font-bold'>Swift Mart</h1>
                        <div className='flex gap-3'>
                            <a target="blank" href="https://github.com/MD-TANVIR7462/Economic-project-client" ><FaGithub className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></FaGithub></a>
                            <a href="https://ecommerce-project-7462.web.app/" target='blank'><TbWorldCode className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></TbWorldCode></a>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto '>
                        <p className="text-gray-200">Swift Mart is a Ecommerce Website where users can Buy Any Product and The admin can add or remove any product. Every user has the facility to select products according to their own preferences, product discounts can be known through the website.
                        {/* Admin Email : testing@gmail.com || Pass: Test@T . */}
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div className=" rounded-lg space-y-5 py-4 bg-[#454242] shadow-md shadow-[#201f1f]">
                    <div className="relative rounded-2xl w-[85%] mx-auto roun2 h-64 overflow-hidden ">
                        <div className="h-max rounded rounded-b-2xl transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                            <img src={project2} alt="" className="w-full object-cover object-top "
                            />
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto flex justify-between'>
                        <h1 className='text-2xl text-[#CD5DF3] font-bold'>Drop Sync</h1>
                        <div className='flex gap-3'>
                            <a target="blank" href="https://github.com/swapno92/blood-donation" ><FaGithub className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></FaGithub></a>
                            <a href="https://blood-donation-binary-avengers.vercel.app/" target='blank'><TbWorldCode className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></TbWorldCode></a>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto '>
                        <p className="text-gray-200">Drop Sync a web base blood donation system website. This website are build with next js which helped fast rendering our website.Through this wave best blood donation project, every user will be helpful in various ways. Such as emergency blood collection, timely blood donation and acquiring various knowledge related to blood donation etc.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className=" rounded-lg space-y-5 py-4 bg-[#454242] shadow-md shadow-[#201f1f]">
                    <div className="relative rounded-2xl w-[85%] mx-auto roun2 h-64 overflow-hidden ">
                        <div className="h-max rounded rounded-b-2xl transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                            <img src={project3} alt="" className="w-full object-cover object-top "
                            />
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto flex justify-between'>
                        <h1 className='text-2xl text-[#CD5DF3] font-bold'>Online Group Study</h1>
                        <div className='flex gap-3'>
                            <a target="blank" href="https://github.com/swapno92/Online-Group-Study" ><FaGithub className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></FaGithub></a>
                            <a href="https://online-study-c6231.web.app/" target='blank'><TbWorldCode className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></TbWorldCode></a>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto '>
                        <p className="text-gray-200">Online study group website is a platform for various courses and student assignments. Here every student can create assignments, read, update and delete unnecessary assignments. The examiner can mark and make comments based on the assignment</p>
                    </div>
                </div>
                {/* 4 */}
                <div className=" rounded-lg space-y-5 py-4 bg-[#454242] shadow-md shadow-[#201f1f]">
                    <div className="relative rounded-2xl w-[85%] mx-auto roun2 h-64 overflow-hidden ">
                        <div className="h-max rounded rounded-b-2xl transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                            <img src={project4} alt="" className="w-full object-cover object-top "
                            />
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto flex justify-between'>
                        <h1 className='text-2xl text-[#CD5DF3] font-bold'>Automotive Brand Based</h1>
                        <div className='flex gap-3'>
                            <a target="blank" href="https://github.com/swapno92/Automotive-Brand-Based" ><FaGithub className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></FaGithub></a>
                            <a href="https://659178d49d7cd11a248d52d2--delightful-sunburst-0de72c.netlify.app/" target='blank'><TbWorldCode className='text-3xl  hover:text-[#77d7f2]  border-[#d23434] rounded-full '></TbWorldCode></a>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto '>
                        <p className="text-gray-200">Automotive brand best website is created with products of different brands. There is an authentication system, there is also the facility to add available products. If the user has login, the product details can be updated and added to cart. Moreover, the website has the facility of using dark theme</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;