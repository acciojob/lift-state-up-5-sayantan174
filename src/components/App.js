
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";
const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const changeState = ()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        { !isLoggedIn && <Form func={changeState}/>}
        {isLoggedIn && <p>You are logged in!</p>}
    </div>
  )
}

export default App
