import React from 'react'

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import "./share.css"

const Share = () => {
  return (
    <div className='shareContainer'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/profile_pictures/profile_1.jpg" alt="" />
                <input className='shareInput' placeholder="What's on your mind Palak?"/>
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue'  className='shareIcon' />
                        <span className="shareOptionText">Tag friends</span>
                    </div>
                    <div className="shareOption">
                        <PlaceIcon htmlColor='green'  className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod'  className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share