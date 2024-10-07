import React,  { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const response = await axios.post('http://localhost:8080/validate',{ email, password });
    console.log(response.data);
    //window.location.href="/"+response.data;
    navigate("/"+response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input type='email'
               name='email' 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
        <br></br>
        <label>Password : </label>
        <input type='password'
               name='password' 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
        <br></br>
        <input type='submit' value='LOGIN' />
      </form>
    </div>
  )
};
export default Login;
