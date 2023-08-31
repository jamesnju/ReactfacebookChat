import React from 'react'
import './Profile.css';
import Navbar from '../../components/Header/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
      <Navbar/>
      <div className='homeContainer'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">

                    <img className='profileCoverImg' src="assets/iphone.jpg" alt="" />
                    <img className='profileUserImg' src="assets/man.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>James Njuguna</h4>
                    <span className="profileInfoDesc">Error 404</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
      </div> 
    </>  
  )
}
