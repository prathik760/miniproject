 import React from 'react'
 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './assets/Components/Home';
import Navbar from './assets/Components/Navbar';
import About from './assets/Components/About';
import Contact from './assets/Components/Contact';

const router = createBrowserRouter([
   {
      path: '/',
      element : 
       <div>
      <Home />
      <Navbar />
      </div>
   },
   {
      path: '/about',
      element : 
       <div>
       <Home />
      <About />
 
      
      </div>
   },
   {
      path: '/contact',
      element : 
       <div>
       <Home />
      <Contact />
 
      
      </div>
   },

])
  
 const App = () => {
  
   return (
      <>
         <RouterProvider  router={router}/>
          
      </>
   )
 }
 
 export default App
 