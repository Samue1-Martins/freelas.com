import React from "react";
import persons from '../../assets/Images/freelasPersons.png'
import Forms from "../Forms/Forms";
import './Main.css'

function Main(){
    return(
        <main className="main">
            <div className="mainDivUm">
                <div className="mainImg">
                <img src={persons} alt="" />
                </div>
                <div>
                    <Forms />
                </div>
            </div>
            <div className="mainDivDois">
                teste
            </div>
        </main>
    )
}

export default Main