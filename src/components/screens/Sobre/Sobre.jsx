import React from "react";
import trabalho from '../../../assets/Images/freelasTrabalho.png'
import './Sobre.css'

function Sobre() {
    return (
        <div className="tela">
            <div className="conteudoSobre">
                <div className="sobre">
                    <h4><b>O que é o Freelas.com?</b></h4>
                    <div className="sobreText">
                        <p>
                            Tendo em vista o cenário precário e competitivo do mercado de trabalho atual, é preciso proporcionar aos jovens ferramentas e oportunidades necessárias para se destacarem e prosperarem profissionalmente.
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            É com essa visão que surge o projeto "Frellas.com"!
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            Um projeto dedicado a capacitar jovens de 16 a 24 anos para enfrentarem os desafios do mercado de trabalho com confiança e habilidade.
                            <br />
                            "Frellas.com" reconhece a importância de não apenas de recrutar jovens talentosos, mas também de capacitá-los para as demandas do mercado de trabalho.
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            Através de parcerias com empresas locais, instituições de ensino e especialistas do setor, "Frellas.com" busca criar uma plataforma online de aprendizagem, onde os jovens podem desenvolver habilidades essenciais para o desenvolvimento profissional.
                            <br />
                            Com a identificação das habilidades até a realização de workshops e cursos práticos, este projeto visa proporcionar uma jornada de aprendizagem.
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            Além disso, "Frellas.com" se compromete em tornar o processo de recrutamento mais inclusivo e acessível, garantindo oportunidades para jovens de diversas origens. Nós acreditamos que a diversidade é fundamental para impulsionar a inovação e o crescimento, e estamos focados em criar um ambiente onde todos possam alcançar seu potencial.
                        </p>
                    </div>
                </div>
                <div className="sobreFoto">
                    <img src={trabalho} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sobre