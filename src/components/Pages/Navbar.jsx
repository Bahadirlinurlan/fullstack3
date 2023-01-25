import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Home = () => {
  return (
    <div>
    <div className='navbar__kavdrat'>
    
    <div className="navbar__header4">
    <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp"></img>
    </div>
    <div className='navbar__header'>
   
   <div className='navbar__header1'>

   <p>COURSE</p>
   </div>
   <div className='navbar__header2'>
   <p><li><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>Home</Link></li></p>
          
   <p><li><Link to="/Add" style={{textDecoration: 'none', color:'inherit'}}>ADD</Link></li></p> 
   <p>COURSES</p>
   <p>ELEMENTS</p>
   <p>NEWS</p>
   <p>CONTACT</p>
   
   </div>

    
    
    </div>
    
    <div className='navbar__right'>

    <div className='navbar__right2'>
    <img src='https://preview.colorlib.com/theme/course/images/phone-call.svg'width={29}></img>
    </div>
    <div className='navbar__right3'>
    +43 4566 7788 2457
    </div>
    </div>
    
    </div>

    <img src='https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp' width={1730} height={880}></img>
    
    </div>
  )
}

export default Home