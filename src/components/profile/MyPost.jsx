import React from 'react';
import myinfo from '../../data/myinfo';
const MyPost =() => {
 
    return (
      <div>

      <div style={{display:'flex',flexDirection:'row', marginTop:"10vh" , width:"100%" , gap:"5vh" }}>
        <img style={{width:'50vh',height:"50vh",}} src={`${myinfo.postimg}`} alt="" />
        <img style={{width:'50vh',height:"50vh",}} src={`${myinfo.postimg}`} alt="" />
        
        
      </div>

      <div style={{display:'flex',flexDirection:'row', marginTop:"10vh" , width:"100%" , gap:"5vh" }}>
        <img style={{width:'50vh',height:"50vh",}} src={`${myinfo.postimg}`} alt="" />
        <img style={{width:'50vh',height:"50vh",}} src={`${myinfo.postimg}`} alt="" />
        
        
      </div>
      
      </div>
    );
  }


export default MyPost
