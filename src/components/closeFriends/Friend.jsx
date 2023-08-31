import React from 'react'
import './closeFriend.css';
export default function Friend({user}) {
  return (
<li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="siderbarfriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
</li>   )
}
