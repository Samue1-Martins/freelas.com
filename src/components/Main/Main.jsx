import React from "react";
import './Main.css'
import CardFotos from "../CardFotos/CardFotos";

function Main() {
    return (
        <main className="main">
            <div className="mainDivUm">
                <h1>Bem-vindos!</h1>
                <CardFotos />
            </div>
        </main>
    )
}

export default Main