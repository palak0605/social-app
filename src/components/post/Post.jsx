import React from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css'

const Post = () => {
  return (
    <div className='postContainer'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/profile_pictures/profile_1.jpg" alt="" />
                    <span className="postUserName">Palak</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post</span>
                <img className='postImg' src="/assets/posts/post_1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.jfif" alt="" />
                    <img className='heartIcon' src="/assets/heart.jfif" alt="" />
                    <span className="postCounter">30 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post