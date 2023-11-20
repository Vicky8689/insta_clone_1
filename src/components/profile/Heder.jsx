import React from 'react';
import "../../styles/heder.css"
import SettingsIcon  from '@mui/icons-material/Settings';
import SavedStatus from './SavedStatus';
const Heder = ({myinfo}) => {
 
    return (


      <div style={{display:'flex',flexDirection:'column', marginTop:"10vh" , width:"100%" , }}>


      <div style={{ border:"1px solid red" ,display:'flex', justifyContent:"center",gap:"10vh"}}>
        
        <img style={{width:'25vh',height:"25vh",borderRadius:"50%", objectFit:"cover"}} src={`${myinfo.profilepic}`} alt="" />
        <div>
          {/* uper div */}

        <div style={{ height:'80px', border:"1px solid gray" ,display:"flex", gap:'20px',alignItems:'center'}}>

              <span style={{fontSize:"20px"}}>{myinfo.username}</span>
              <span className='profile_heder_buttons'>Edit Profile</span>
              <span className='profile_heder_buttons'>View Archive</span>
              <span>{<SettingsIcon />}</span>
        </div>
        <div style={{border:"1px solid gray" ,display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
          
          {/* lower div */}

          <span>{myinfo.post}posts</span>
          <span>{myinfo.followers}followers</span>
          <span>{myinfo.following}following</span>


        </div>
        <div style={{marginTop:"10px",marginLeft:"20px"}}> 
          {/* name div */}
          {myinfo.name}
        </div>
        <p style={{marginLeft:'20px'}}>
          {myinfo.Bio}
        </p>

        </div>

      </div>
      <SavedStatus SavedStatus={myinfo.SavedStatus}/>
      {/* <SavedStatus/> */}
     





      </div>
    );
  }


export default Heder