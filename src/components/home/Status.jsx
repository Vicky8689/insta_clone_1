import React from 'react';
import {obj as statusobj} from "../../data/statusData"
import "../../styles/status.css"



const Status = () => {
 
    return (
      <div className='ststusContainer'>
        {statusobj.map(obj=> {
          return  <div style={{display:"flex",flexDirection:"column" , gap:"10px",
          alignItems:'center'
          
          }}>
           <img style={{border:"3px solid red",borderRadius:"50%"}} width ="50px" src={`${obj.profilepic}`} alt="profile" />
           <span>{obj.username}</span>
          </div>


        })
      }
      </div>
    );
  }


export default Status