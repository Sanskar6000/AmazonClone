import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="loginLogo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon-logo" />
            </Link>

            <div className="loginData">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />
                    
                    <button type="button" className="loginSigninButton btn btn-warning">Sign in</button>
                    {/* <button className="loginSigninButton">Sign in</button> */}
                </form>

                <p>
                    By continuing, you agree to Amazon's fake clone conditions of Use and Privacy Notice.
                </p>
                
                <h5 className="loginRegisterReminder">New to Amazon?</h5>

                <Link to="/register">
                <button type="button" className="btn btn-light loginRegisterButton">Create your Amazon account</button>
                </Link>
                
                {/* <button className="loginRegisterButton">Create your Amazon account</button> */}
            </div>

        </div>
    );
}

export default Login;
