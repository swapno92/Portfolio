// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';
import MyServices from '../components/MyExperience/MyExperience';
import MySkils from '../components/MySkils/MySkils';
import MyProjects from '../components/MyProjects/MyProjects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div className='md:flex w-[100%]'>
            <div className='bg-[#070A29] md:w-[20%]'>
               <Navbar></Navbar>
            </div>
            <div className='md:col-span-3 md:w-[80%]'>
                <Outlet></Outlet>
                 <MyServices></MyServices>
                 <MySkils></MySkils>
                 <MyProjects></MyProjects>
                  <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomePage;