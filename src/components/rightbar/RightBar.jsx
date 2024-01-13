import React from 'react'

import "./rightbar.css"

const RightBar = () => {
  return (
    <div className='rightbarContainer'> 
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className='birthdayImg' src="/assets/birthday.jpg" alt="" />
            <span className="birthdayText">
              <b>Vamshi</b> and <b>2 other friends</b> have birthday today
            </span>
          </div>
          <img className='rightbarAd' src="/assets/ad.jpg" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src="/assets/profile_pictures/profile_6.jfif" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src="/assets/profile_pictures/profile_6.jfif" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src="/assets/profile_pictures/profile_6.jfif" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src="/assets/profile_pictures/profile_6.jfif" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default RightBar