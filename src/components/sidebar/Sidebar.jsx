import React from 'react'
import './Sidebar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material';
import { Users } from '../../Dammy';
import Friend from '../closeFriends/Friend';
export default function Sidebar() {
  return (
    <div className="sidebar">
        
        <div className="SidebarWrapper">
            <ul className="siderlist">
                <li className="sidebarlistitem">
                    <RssFeed className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Feed</span>
                </li>
                <li className="sidebarlistitem">
                    <Chat className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Chats</span>
                </li>
                <li className="sidebarlistitem">
                    <PlayCircleFilledOutlined className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Vedio</span>
                </li>
                <li className="sidebarlistitem">
                    <Group className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Groups</span>
                </li>
                <li className="sidebarlistitem">
                    <Bookmark className='sidebaricon'/>
                    <span className="sidebarlistitemtext">BookMarks</span>
                </li>
                <li className="sidebarlistitem">
                    <HelpOutline className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Help</span>
                </li>
                <li className="sidebarlistitem">
                    <WorkOutline className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Jobs</span>
                </li>
                <li className="sidebarlistitem">
                    <Event className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Calendar</span>
                </li>
                <li className="sidebarlistitem">
                    <School className='sidebaricon'/>
                    <span className="sidebarlistitemtext">Courses</span>
                </li>
            </ul>
            <button className="sidebarbutton">Show More</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
                {Users.map((u) => (
                    <Friend key={u.id} user={u} />
                ))}
            </ul>
        </div>
    </div>
  )
}
