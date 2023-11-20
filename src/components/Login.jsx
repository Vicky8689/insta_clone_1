import React from 'react'
import "../styles/login.css"
const Login = () => {
  return (
    <div className='loginCantenar'>
      <h3>Login</h3>
     <div>
        <input type="email" name="email" placeholder='email'/>
     </div>
     <div>
        <input type="password" name="password" id="" placeholder='password' />
     </div>
     <button>Login</button>
     <button className='link'>Want to Register?</button>
    </div>
  )
}

export default Login