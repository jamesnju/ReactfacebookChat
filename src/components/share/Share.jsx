import React from 'react'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
      <div className="sharewrapper">
          <div className="sharetop">
            <img src='/assets/man1.jpg' className='shareProfileimg' alt='shareimage'/>
            <input type="text" placeholder='whats in your mind ?' className="shareInput" />                           
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareoptions">
              <div className="shareoption">
                  <PermMedia htmlColor='tomato' className='shareicon'/>
                  <span className="shareoptiontext">Photo or video</span>
              </div>
              <div className="shareoption">
                  <Label htmlColor='purple' className='shareicon'/>
                  <span className="shareoptiontext">Tag</span>
              </div>
              <div className="shareoption">
                  <Room htmlColor='green' className='shareicon'/>
                  <span className="shareoptiontext">Location</span>
              </div>
              <div className="shareoption">
                  <EmojiEmotions htmlColor='yellow' className='shareicon'/>
                  <span className="shareoptiontext">Feelings</span>
              </div>
              <button className="sharebutton">Share</button>
          </div>
        </div>  
      </div> 
    </div>
  )
}
