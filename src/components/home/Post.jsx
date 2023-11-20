import React from 'react';
import "../../styles/post.css"
import {obj as postobj} from "../../data/postData"
const Post = () => {
  
  return (
      <div className='postcontanir'>
        {
        postobj.map(postData=>{
          return <div style={{border:"1px solid gray",padding:"10px 5px", marginBottom:"10px"}}>
            {/* heder div started */}
            <div className='postheder'>
              <img src={`${postData.profilepic}`} width="30px" height="30px" style={{borderRadius:"50%"}} alt="" />
              <span>{postData.username}</span>
              
            </div>
            {/* hedre dive vend */}

            {/* post div start  */}
            <div className='postMain'>
              <img width="100%" src={`${postData.postpic}`} alt="" />
              <span>{postData.likes} Likes</span>
              <span style={{color:"gray",marginBottom:"28px"}}>{postData.aboutpost}</span>
              
            </div>
            {/* for comment div  */}
            
            <div>
              {postData.comments.map(comment => {
               return <div>

                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                  <img style={{borderRadius:"50%"}} width ="20px" height = "20px" src={`${comment.profilepic}`} alt="" />
                  <span>{comment.username}</span>
                  <span>{comment.comment}</span>
                </div>

                <div style={{marginBottom:"12px"}}>
                  <span style={{color:"gray",fontSize:'12px',marginLeft:'10px', marginTop:'10px'}}>{comment.likes} Likes</span>
</div>


                </div>

              }
              )
            }
            </div>
        


            {/* post divend */}



            </div>


        }
          
          
          )
        
        
        
        }
      </div>
    );
  }


export default Post
      