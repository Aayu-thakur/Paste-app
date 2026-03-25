import { useState } from 'react'
import {createBrowserRouter , RouterProvider}  from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'



const router = createBrowserRouter(
  [
    {
     path: "/",
     element: 
     <div className="content">
      <Navbar/>
      <Home/>
     </div>
    },
    {
     path: "/pastes",
     element: 
     <div className="content">
      <Navbar/>
      <Paste/>
     </div>
    },
    {
     path: "/pastes/:id",
     element: 
     <div className="content">
      <Navbar/>
      <ViewPaste/>
     </div>
    },
  ]
)
function App() {


  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
