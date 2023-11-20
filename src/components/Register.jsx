import React from 'react'
import "../styles/register.css"
const Register = () => {
  return (
    <div className='registerCantenar'>
      <h3>Register</h3>
    <div>
       <input type="email" name="email" placeholder='Enter email'/>
    </div>
    <div>
       <input type="password" name="password" id="" placeholder=' Enter password' />
    </div>
    <button>Registration</button>
    <button className='link'>Want toLogin</button>
   </div>
  )
}

export default Register