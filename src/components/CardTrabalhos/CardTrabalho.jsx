import React from "react";
import './CardTrabalho.css'
import logoSkate from '../../assets/Images/logoSkate.png'
import logoAventura from '../../assets/Images/logoAventura.png'
import logoAcademia from '../../assets/Images/logoAcademia.jpg'

function cardTrabalho() {
    return (
        <>
            <div className="cardTrabalho">
                <div className="cardLogoTrabalho">
                    <img src={logoSkate} alt="" />
                </div>
                <div className="cardDescriçãoTrabalho">
                    <div className="cardDescriçãoEmpresaTrabalho">
                        <h5>Academia do skate</h5>
                    </div>
                    <div className="cardDescriçãoVagaTrabalho">
                        <p>
                            Instrutor skate
                            <br></br>
                            <br></br>
                            • Horário de entrada/saída:
                            <br></br>
                            • Disponível sob demanda, com aulas agendadas
                            <br></br>
                            • Segunda a Sexta-feira
                            <br></br>
                            • Horário: 8:00 às 14:00
                        </p>
                    </div>
                    <div className="cardDescriçãoContatoTrabalho">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>

            <div className="cardTrabalho">
                <div className="cardLogoTrabalho">
                    <img src={logoAventura} alt="" />
                </div>
                <div className="cardDescriçãoTrabalho">
                    <div className="cardDescriçãoEmpresaTrabalho">
                        <h5>Descobertas Culturais Tours</h5>
                    </div>
                    <div className="cardDescriçãoVagaTrabalho">
                        <p>
                            Guia Turístico Freelancer
                            <br></br>
                            <br></br>
                            • Horário de entrada/saída:
                            <br></br>
                            • Disponível sob demanda, com excursões agendadas
                            <br></br>
                            • Segunda a Domingo
                        </p>
                    </div>
                    <div className="cardDescriçãoContatoTrabalho">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>

            <div className="cardTrabalho">
                <div className="cardLogoTrabalho">
                    <img src={logoAcademia} alt="" />
                </div>
                <div className="cardDescriçãoTrabalho">
                    <div className="cardDescriçãoEmpresaTrabalho">
                        <h5>Energia em Movimento Fitness</h5>
                    </div>
                    <div className="cardDescriçãoVagaTrabalho">
                        <p>
                            Instrutor de Fitness Freelancer
                            <br></br>
                            <br></br>
                            • Horário de entrada/saída:
                            <br></br>
                            • Flexível, disponível de segunda a sexta-feira
                            <br></br>
                            • Segunda a sexta-feira
                            <br></br>
                            • Horário: 6:00 às 20:00
                        </p>
                    </div>
                    <div className="cardDescriçãoContatoTrabalho">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardTrabalho