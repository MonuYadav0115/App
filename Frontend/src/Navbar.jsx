import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to="/">Display</Link>
      <Link to="/add">Add-Data</Link>
      <Link to="/search">Search</Link>
    </div>
  )
}

export default Navbar