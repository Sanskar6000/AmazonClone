import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Register.css";



function Register() {
  // const [register, setRegister] = useState(registerValues);
 
  // const registerUser = async () => {
  //   let response = await authenticateRegister(register);
  //   if(!response) return;
  // }

  // const onInputChange = (event) => {
  //   setRegister({...register, [event.target.name]: event.target.value})
  // }

  return (

    <div className="register">
    <Link to="/">
        <img className="registerLogo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon-logo" />
    </Link>

    <div className="registerData">
        <h1>Create Account</h1>
        <form>
            <h5>Name</h5>
            <input  name="name" type="text" />

            <h5>Email</h5>
            <input  name="email" type="text" />

            <h5>Password</h5>
            <input  name="password" type="password" />
            
            <button type="button" className="registerButton btn btn-warning" >Register</button>
            {/* <button className="loginSigninButton">Sign in</button> */}
        </form>
        
        {/* <button className="loginRegisterButton">Create your Amazon account</button> */}
    </div>

</div>
  );
}

export default Register;
