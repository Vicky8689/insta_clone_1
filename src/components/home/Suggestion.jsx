import React from 'react';
import SuggestionData from "../../data/suggestionData"
import "../../styles/suggestion.css"
const Suggestion = () => {
 
    return (
      <div style={{width:"25vh",marginTop:"5vh",marginRight:"5vh"}}>
        {SuggestionData.map(user =>{
          return <div style={{ paddingLeft:"1vh", marginTop:"1vh", border: "1px solid pink" , height:"100px", display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
              <div style={{height:"100px" , display:"flex" , flexDirection:"column",
              justifyContent:"center",
            }}>
                 <span>{user.username}</span>
                <img  width="40px" height="40px" style={{borderRadius:'50%'}} src={`${user.profilepic}`} alt="" />
              </div>
              <span className='followlink'>Follow</span>
              


          </div>






        }




        )}
      </div>
    );
  }


export default Suggestion