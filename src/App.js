import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

import "./styles/app.css"
function App() {
  return (
    <div className="App">
          <Profile/>
          {/* <Login/> */}
          {/* <Home/> */}
          {/* <div style={{height: '100vh', display:'flex',alignItem:'center'}}>
          <Register/>
          </div> */}
     </div>
);
}

export default App;
