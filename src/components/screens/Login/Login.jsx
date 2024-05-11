import React from "react";
import persons from "../../../assets/Images/freelasPersons.png"
import Forms from "../../Forms/Forms";
import './Login.css'

function Login() {

    return (
        <div className="loginDiv">
            <div className="loginImg">
                <img src={persons} alt="" />
            </div>
            <div>
                <Forms />
            </div>
        </div>
    )
}

export default Login