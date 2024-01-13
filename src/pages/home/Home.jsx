import React from 'react'

import "./Home.css"

import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

const Home = () => {
  return (
    // <></> Fragmments: to display more than one component
    <>
        <NavBar />
        <div className="homeContainer">
          <SideBar />
          <Feed />
          <RightBar />
        </div>
    </>
  )
}

export default Home