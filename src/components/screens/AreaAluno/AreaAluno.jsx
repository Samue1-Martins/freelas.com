import React from "react";
import './AreaAluno.css'
import CardCurso from "../../CardCurso/CardCurso";


function AreaAluno() {
    return (
        <div className="tela">
            <div className="area1">
                <h3>Área do aluno</h3>
                <div>
                    <p>
                        Esta área é dedicada àqueles que buscam aprimorar suas habilidades interpessoais e profissionais, bem como suas competências técnicas e desenvolvimento em mídias sociais.
                        <br />
                        <br />
                        A seguir, apresentaremos os cursos disponíveis em NOSSO PROJETO, que abrangem uma ampla gama de tópicos, incluindo comunicação eficaz, liderança, gerenciamento de projetos, marketing digital, design gráfico, e estratégias de mídia social. 
                        <br />
                        <br />
                        Cada curso foi cuidadosamente elaborado por especialistas em suas respectivas áreas, garantindo que você receba um conteúdo de alta qualidade e relevante para o mercado atual.
                        <br />
                        <br />
                        Ao concluir cada curso, forneceremos um certificado de conclusão, que poderá ser utilizado para evidenciar suas habilidades e conquistas às empresas de seu interesse, aumentando suas chances de sucesso em processos seletivos e de desenvolvimento de carreira.
                        <br />
                        <br />
                        E como forma de aumentar seus conhecimentos além da gama de cursos que oferecemos, indicamos também acessar os seguintes sites: 
                        <a href="https://www.ev.org.br/" target="_blank"> Fundação Bradesco</a>,
                        <a href="https://veduca.org/" target="_blank"> VEduca</a>,
                        <a href="https://cresca.withgoogle.com/intl/pt-br/certificates/" target="_blank"> Google Ateliê Digital</a>, 
                        <a href="https://sebrae.com.br/sites/PortalSebrae/cursosonline" target="_blank"> Sebrae</a>,  
                        <a href="https://www.coursera.org/courses" target="_blank"> Coursera</a> e
                        <a href="https://educacao-executiva.fgv.br/cursos/gratuitos" target="_blank"> FGV</a>.
                        <br />
                        <br />
                        Mantenha o foco e bons estudos!!
                        <br />
                        Abraços da Equipe "Freelas".
                    </p>
                </div>
            </div>
            <div className="area2">
                <h3>Cursos</h3>
                <div>
                    <CardCurso />
                </div>
            </div>
        </div>
    )
}

export default AreaAluno