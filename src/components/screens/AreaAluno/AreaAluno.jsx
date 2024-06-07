import React from "react";
import './AreaAluno.css'
import CardTrabalho from "../../CardTrabalhos/CardTrabalho";


function AreaAluno() {
    return (
        <div className="tela">
            <div className="area1">
                <h3>Área do aluno</h3>
                <div>
                    <p>
                        O Projeto Integrador (PI) está disciplinado no Projeto Pedagógico de cada Curso e
                        caracteriza-se como uma atividade de promoção e desenvolvimento de iniciação científica
                        que visa promover a interdisciplinaridade, ao estabelecer a integração dos conhecimentos
                        desenvolvidos em uma disciplina, de forma articulada com as demais. É uma abordagem que
                        se aproxima, de forma atualizada, dos problemas experienciados pelo mundo do trabalho na
                        área de formação pretendida.
                    </p>
                </div>
            </div>
            <div className="area2">
                <h3>Cursos</h3>
                <div>
                    <CardTrabalho />
                </div>
                <div>
                    <CardTrabalho />
                </div>
                <div>
                    <CardTrabalho />
                </div>
            </div>
        </div>
    )
}

export default AreaAluno