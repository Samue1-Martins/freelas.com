import React from "react";
import './CardTrabalho.css'
import logoCurso from '../../assets/Images/logoCurso.png'
import logoPerfume from '../../assets/Images/logoPerfume.png'
import logoAcademia from '../../assets/Images/logoAcademia.jpg'

function cardTrabalho() {
    return (
        <>
            <div className="cardTrabalho">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescriçãoTrabalho">
                    <div className="cardDescriçãoEmpresaTrabalho">
                        <h5>Habilidades Técnicas</h5>
                    </div>
                    <div className="cardDescriçãoVagaTrabalho">
                        <p>
                            •	Desenvolvimento de Software e Tecnologia da Informação <br />
                            •	Programação (Python, JavaScript, Java) <br />
                            •	Desenvolvimento Web (HTML, CSS, React) <br />
                            •	Data Science e Análise de Dados <br />
                            •	Gestão de Projetos (Scrum, Agile)
                        </p>
                    </div>
                    <div className="cardDescriçãoContatoTrabalho">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>

            <div className="cardTrabalho">
                <div className="cardLogoTrabalho">
                    <img src={logoPerfume} alt="" />
                </div>
                <div className="cardDescrição">
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
                            <br></br>                            
                            • Horário: 9:00 às 18:00
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
                <div className="cardDescrição">
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
                            • Segunda a Sexta-feira
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