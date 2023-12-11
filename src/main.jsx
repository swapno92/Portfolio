import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import MyExperience from './components/MyExperience/MyExperience';
import MySkils from './components/MySkils/MySkils';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutMe',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/myExperience',
        element: <MyExperience></MyExperience>
      },
      {
        path: '/mySkills',
        element: <MySkils></MySkils>
      },
      {
        path: '/myProjects',
        element: <MyProjects></MyProjects>
      },
      {
        path: '/contactMe',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
