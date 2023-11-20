import React from 'react';
import SideBar from '../common/SideBar';
import Heder from './Heder';
import  myinfo  from '../../data/myinfo';
import MyPost from './MyPost';
const Profile = () => {
 
    return (
      <div style={{display:"flex",gap:"5vw "}}>
           <SideBar/>
           <div>
              <Heder myinfo={myinfo}/>
              <MyPost posts={myinfo.posts}/>

           </div>
           
      </div>
    );
  }


export default Profile