import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between'>
      <a href='https://www.aeronitkkr.club/' target='_blank'><h1>Aeromodelling Club</h1></a>
        <ul>
          <Link to="/"><li>Drone</li></Link>
          <Link to="/plane"><li>Rcplane</li></Link>
          <Link to="/hover"><li>Hover</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar