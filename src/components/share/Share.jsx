import React from 'react'
import './Share.css'
import { PermMedia } from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>Share
        <div className="sharewrapper">
            <img src='/assets/man1.jpg' className='shareProfileimg' alt='shareimage'/>
            <input type="text" placeholder='whats in your mind ?' className="shareInput" />
                                                
        </div>
        <hr className="sharehr" />
        <div className="shareoptions">
            <div className="shareoption">
                <PermMedia className='shareicon'/>
                <span className="shareoptiontext">Photo or video</span>
            </div>
        </div>
    </div>
  )
}
