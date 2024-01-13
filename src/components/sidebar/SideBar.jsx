import React from 'react'

import "./sidebar.css"

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EventIcon from '@mui/icons-material/Event';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Feed</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <ChatIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Chat</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <VideocamIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Video Call</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <GroupIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Groups</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <BookmarkIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <QuestionAnswerIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">QnA</span>
                </li>
            </ul>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <EventIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show more</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/profile_pictures/profile_3.jpg" alt="" />
                    <span className="sidebarFriendName">Pooja KN</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar