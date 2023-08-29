import React from 'react'
import Navbar from '../components/Header/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import './Home.css';

export default function Home() {
  return( 
    <>
      <Navbar/>
      <div className='homeContainer'>
        <Sidebar/>
        <Feed />
        <Rightbar/>
      </div>
      
    </>  

  )
}
