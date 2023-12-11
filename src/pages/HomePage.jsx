// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';
import MyServices from '../components/MyServices/MyServices';
// import Contact from '../Component\'s/ContactMe/Contact';
// import MyServices from '../Component\'s/MyService\'s/MyServices';
// import MySkills from '../Component\'s/MySkills/MySkills';
// import MyProjects from '../Component\'s/MyProjects/MyProjects';
// import Footer from '../Component\'s/Footer/Footer';

const HomePage = () => {
    return (
        <div className='md:flex w-[100%]'>
            <div className='bg-[#070A29] md:w-[20%]'>
               <Navbar></Navbar>
            </div>
            <div className='md:col-span-3 md:w-[80%]'>
                <Outlet></Outlet>
                 <MyServices></MyServices>
                {/*  <MySkills></MySkills>
                <MyProjects></MyProjects>
                <Contact></Contact>
                <Footer></Footer> */}
            </div>
        </div>
    );
};

export default HomePage;