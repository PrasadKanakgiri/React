import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const {setUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName, password})
  };
  return (
    <div>
      <input type="text" 
      value={userName} 
      placeholder="username" 
      onChange={(e) => setUserName(e.target.value)}
      />
      <input type="text" 
      value={password} 
      placeholder="password" 
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
