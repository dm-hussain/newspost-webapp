import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Local from './components/Local.jsx';
import Politics from './components/Politics.jsx';
import Sports from './components/Sports.jsx';
import Business from './components/Business.jsx';
import Health from './components/Health.jsx';
import Technology from './components/Technology.jsx';
import Entertainment from './components/Entertainment.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import NewsForm from './components/NewsForm.jsx';
import MyProfile from './components/MyProfile.jsx';
import ShowNews from './components/ShowNews.jsx';
 import { HelmetProvider } from "react-helmet-async";

 
let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
         
      },
       
      {
        path: '/local',
        element: <Local /> ,
         
      },
      {
        path: '/politics',
        element: <Politics /> ,
         
      },
      {
        path: '/sports',
        element: <Sports /> ,
         
      },
      {
        path: '/business',
        element: <Business /> ,
         
      },
      {
        path: '/health',
        element: <Health /> ,
         
      },
      {
        path: '/tech',
        element: <Technology /> ,
         
      },
      {
        path: '/entertainment',
        element: <Entertainment /> ,
         
      },
      
      {
        path: '/about',
        element: <About /> ,
         
      },
      
      {
        path: '/contact',
        element: <Contact />,
         
      },

      {
        path: '/signup',
        element:  <SignUp />,
         
      },
      {
        path: '/login',
        element:  <SignIn />,
         
      },

      {
        path: '/newsform',
        element:  <NewsForm />,
         
      },
      {
        path: '/profile',
        element:  <MyProfile />,
         
      },
      {
        path: '/news/:id',
        element:  <ShowNews/>,
         
      },

    ]
     
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
    <RouterProvider router={router} />
    {/* <App /> */}
    </HelmetProvider > 
  </StrictMode>
);
