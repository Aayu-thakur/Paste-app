import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-8 p-4 border-b border-gray-700 mb-6'>
      <NavLink
      to="/"
      className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-400 hover:text-white'}
      >
        Home
      </NavLink>

      <NavLink
      to="/pastes"
      className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-400 hover:text-white'}
      >
        Pastes
      </NavLink> 
    </div>
  )
}

export default Navbar