import React from 'react';
import "../../styles/sidebar.css"
const SideBar = () => {
 
    return (
      <div className='sidebarContainer'>
        <ul>
          <li style={{marginTop:"20px",marginBottom:"10px"}}><img width = "130px"src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-icon-white-border-text-black-background.png" alt="" /></li>
          <li>Home</li>
          <li>Search</li>
          <li>Explore</li>
          <li>Reels</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>Create</li>
          <li>Profile</li>
        </ul>
      </div>
    );
  }


export default SideBar