import React from 'react';
import myinfo from '../../data/myinfo';

const SavedStatus = () => {
 
    return (
      <div >

      <div style={{border:"1px solid gray",display:'flex',flexDirection:'column' ,gap:'1vh' ,marginTop:'5vh',justifyContent:'space-around' }}>
       
       <div style={{ display:'flex',gap:"20vh",marginLeft:'1vh'}} >
       
       <img src={myinfo.savedStatus[0].status[0]} alt="" style={{width:'10vh',height:"10vh",borderRadius:'50%',}} />
       <img src={myinfo.savedStatus[0].status[0]} alt="" style={{width:'10vh',height:"10vh",borderRadius:'50%',}} />
       <img src={myinfo.savedStatus[0].status[0]} alt="" style={{width:'10vh',height:"10vh",borderRadius:'50%',}} />

       </div>

       <div style={{ display:'flex',gap:"22vh",marginLeft:'4vh'}} >

       <span>{myinfo.savedStatus[0].statusName}</span>
       <span>{myinfo.savedStatus[0].statusName}</span>
       <span>{myinfo.savedStatus[0].statusName}</span>

       </div>
       

      </div>
      </div>
    );
  }


export default SavedStatus;