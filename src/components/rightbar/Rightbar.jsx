import React from 'react'
import './Rightbar.css';
import { Users } from '../../Dammy';
import Online from '../Online/Online';
export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
          <div className="birthDayContainer">
            <img src="/assets/gift1.jpg" alt="" className="birthDayImg" />
            <span className="birthDayText"><b>John</b> and 20 other <b>friends</b> have <b>birthday</b></span>
          </div>
          <img src="/assets/ad.jpg" alt="" className='rightBarAd'/>
          <h4 className="rightBarTitle">Online Friends</h4>
            <ul className="rightBarFriendList">
              {Users.map((u) => (
                <Online key={u.id} user={u}/>
              ))}
            </ul>
      
      </>
    );
  };

  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">user information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoKey">Kenya</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoKey">Kenya</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Marital status:</span>
            <span className="rightBarInfoKey">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">user information</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="assets/woman.jpg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shine</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/woman.jpg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shine</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/woman.jpg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shine</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/woman.jpg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shine</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/woman.jpg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shine</span>
          </div>
        </div>
      </>
    )
  }
  return (
    
    <div className="rightbar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
    
  )
}
