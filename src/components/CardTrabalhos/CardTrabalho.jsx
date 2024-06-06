import React from "react";
import './CardTrabalho.css'

function cardTrabalho() {
    return (
        <div>
            <div className="card">
                <div className="cardLogo">
                    <h5>logo impresa</h5>
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h1>Itau</h1>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>Você será responsável em executar atividades de desenvolvimento de sistemas para Conta Digital e Meios de Pagamentos.
                            Atuará diretamente com várias áreas de negócios, contribuindo para a análise e implementação de novos produtos e soluções.</p>
                    </div>
                    <div className="cardDescriçãoContato">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardTrabalho