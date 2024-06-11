import React from "react";
import './CardCurso.css'
import logoCurso from '../../assets/Images/logoCurso.png'

function CardCurso() {
    return (
        <>
            <div className="cardCurso">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h4>Marketing Digital e Mídias Sociais</h4>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>
                            •	Gestão de Mídias Sociais <br />
                            •	Criação de Conteúdo <br />
                            •	Design Gráfico (Adobe Photoshop, Illustrator)<br />
                            •	Edição de Vídeo (Adobe Premiere, Final Cut Pro)
                        </p>
                    </div>
                    <div className="cardDescriçãoContato">
                        {/* <h5>(31) xxxxx-xxxx</h5> */}
                    </div>
                </div>
            </div>

            <div className="cardCurso">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h4>Habilidades Técnicas</h4>
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
                        {/* <h5>(31) xxxxx-xxxx</h5> */}
                    </div>
                </div>
            </div>

            <div className="cardCurso">
                <div className="cardLogo">
                    <img src={logoCurso} alt="" />
                </div>
                <div className="cardDescrição">
                    <div className="cardDescriçãoEmpresa">
                        <h4>Habilidades Interpessoais e Profissionais</h4>
                    </div>
                    <div className="cardDescriçãoVaga">
                        <p>
                            •	Comunicação e Apresentação <br />
                            •	Desenvolvimento Pessoal e Liderança <br />
                            •	Empreendedorismo e Inovação <br />
                            •	Preparação para o Mercado de Trabalho
                        </p>
                    </div>
                    <div className="cardDescriçãoContato">
                        {/* <h5>(31) xxxxx-xxxx</h5> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCurso