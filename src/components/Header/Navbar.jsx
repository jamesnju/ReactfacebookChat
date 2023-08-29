import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='topbarContainer'>

      <div className="topbarleft">
        <span className='logo'>james</span>
      </div>
      <div className="topbarCenter">
          <div className='searchbar'>
            <Search className='searchicon'/>
            <input type="text" placeholder='Search...' className="searchinput" />
          </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarLink">homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <Notifications/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <div className="profileimg">
          <img src="/assets/woman.jpg" alt="profile" className='profileimg' />

          </div>
      </div>
    
    </div>
  )
}
