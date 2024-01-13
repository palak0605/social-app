import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

import "./navbar.css";


const NavBar = () => {
  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <span className="logo">Social</span>
      </div> 
      <div className="navbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchIcon' />
          <input placeholder='Search for friends, photos or videos' className='searchInput' />
        </div>
      </div> 
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home Page</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <ChatIcon />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <div className="navbarImg">
          <img src="/assets/profile_pictures/profile_1.jpg" alt="" className="navbarImg" />
        </div>
      </div> 



    </div>
  )
}

export default NavBar