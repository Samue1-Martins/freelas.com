import React from "react";
import './CardTrabalho.css'
import logoCurso from '../../assets/Images/logoCurso.png'

function cardTrabalho() {
    return (
        <>
        <div className="card">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h3>Itau</h3>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>Você será responsável em executar atividades de desenvolvimento de sistemas para Conta Digital e Meios de Pagamentos.
                            </p>
                    </div>
                    <div className="cardDescriçãoContato">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardTrabalho