import React from "react";
import './Forms.css'

function Forms() {
    return (
        <div className="mainForm">
            <div className="mainBorder">
                <form className="forms">
                    <div className="formsLoginText">
                        <h4>Login</h4>
                    </div>
                    <div className="formsLogins">
                        <input type="email" name="Email" placeholder="Email" />
                        <input type="password" name="Senha" placeholder="Senha" />
                    </div>
                    <div className="formsButtons">
                        <button className="formsButtonEntrar">
                            Entrar
                        </button>
                        <button className="formsButtonCadastro">
                            Cadastre-se
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forms