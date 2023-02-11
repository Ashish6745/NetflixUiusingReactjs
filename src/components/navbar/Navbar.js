import React, { useState } from 'react'
import  './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    window.onscroll= () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled)
  return (
    <div className={isScrolled ? 'navbar scrolled':'navbar'}>
       <div className='container'>
        <div className='left'>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' alt='netflix' />
            <span>Homepage</span>
            <span>Movies</span>
            <span>New and Popular </span>
            <span>My List</span>

        </div>
        <div className='right'>
          <SearchIcon className='icon'/>
          <span>KID </span>
          <NotificationsIcon className='icon'/>
          
          <img src="https://images.unsplash.com/photo-1642456074142-92f75cb84533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" alt='image' />
            
            <div className='profile'>
            <ArrowDropDownIcon className='icon'/>
            <div className='options'>
                <span>settings</span>
                <span>logout</span>
            </div>
            </div>
           
            
        </div>
       </div>
    </div>
  )
}

export default Navbar
