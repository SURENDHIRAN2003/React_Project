import React from "react";
import { Link } from "react-router-dom";
export default function Login()
{
    return(
        <div id='Login'>
        <h1>WELCOME TO OUR MEDICAL SHOP</h1>
        <h3>If your are new user,Kindly Click Register to Register your self Otherwise Login with email or Userid </h3>
        <form>
        <input type="text" placeholder="Enter your username or email id"></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Enter your Password"></input>
        <br></br>
        <br></br>
        <button>Login</button>
        <br></br>
        <br></br>
        </form></div>
    )
}