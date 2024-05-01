
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [name,setName]=useState("")
  const relate=(e)=>{
setName(e.target.value)
  }
  return (
    <div>
        <div>
        <p>Enter Your name:</p>
        <input value={name}  onChange={relate}/>
        {name && <h2>Hello ! {name}</h2>}
    </div>
    </div>
  )
}

export default App
