import React from 'react'
import './Online.css';

import './Online.css';
export default function Online({user}) {
  return (
    <li className="rightBarFriend">
        <div className="rightBarProfileContainer">
            <img src={user.profilePicture} alt="" className="rightBarProfileImg" />
            <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUserName">{user.username}</span>
    </li>
    )
}
