import React from "react";
import './CardTrabalho.css'
import logoCurso from '../../assets/Images/logoCurso.png'
import logoPerfume from '../../assets/Images/logoPerfume.png'

function cardTrabalho() {
    return (
        <>
            <div className="card">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h3>Habilidades Técnicas</h3>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>
                            •	Desenvolvimento de Software e Tecnologia da Informação <br />
                            •	Programação (Python, JavaScript, Java) <br />
                            •	Desenvolvimento Web (HTML, CSS, React) <br />
                            •	Data Science e Análise de Dados <br />
                            •	Gestão de Projetos (Scrum, Agile)
                        </p>
                    </div>
                    <div className="cardDescriçãoContato">
                        <h5>(31) xxxxx-xxxx</h5>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="cardLogo">
                    <img src={logoPerfume} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h3>Glamour Avenue</h3>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>
                            Atendente temporaria no Glamour Avenue
                            Horário: 08:00 as 16:00
                            <br></br>
                            Segunda a sábado
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