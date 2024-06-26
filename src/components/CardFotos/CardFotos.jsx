import React from "react";
import './CardFotos.css'
import instagram from '../../assets/Images/instagram.svg'
import github from '../../assets/Images/github.svg'
import linkedin from '../../assets/Images/linkedin.svg'
import samuel from '../../assets/Images/samuel.jpg'
import fernanda from '../../assets/Images/fernanda.jpg'
import filipe from '../../assets/Images/filipe.jpg'

function CardFotos() {
    return (
        <>
            <div className="tela2">
                <div className="cardFoto">
                    <div className="foto">
                        <img src={samuel} alt="" />
                    </div>
                    <div>
                        <div className="titulo">
                            <h3>Samuel</h3>
                        </div>
                        <div className="descrição">
                            <p>
                                Sou um jovem desenvolvedor apaixonado por aprender novas tecnologias.
                                <br />
                                Compartilho esta paixão por filmar, fotografar e andar de skate.
                                <br />
                                Misturando todos estes hobbies no meu pote de imaginação, dando sempre como resultado um vídeo novo no meu canal do Youtube.
                                <br />
                                Quando me sinto criativo, deixo transbordar o design gráfico.
                            </p>
                        </div>
                        <div className="redes">
                            <a href="https://github.com/Samue1-Martins" target="_blank">
                                <img src={github} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/samuel-martins-560a89266/" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://www.instagram.com/samuel.martins___/" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Fernanda */}
                <div className="cardFoto">
                    <div className="foto">
                        <img src={fernanda} alt="" />
                    </div>
                    <div>
                        <div className="titulo">
                            <h3>Fernanda</h3>
                        </div>
                        <div className="descrição">
                            <p>
                                Me chamo Fernanda Santana e amo aprender coisas novas. Atualmente, estou cursando T.I. e Radiologia.
                                <br />
                                Sou super extrovertida e muito curiosa, então sempre estou aprendendo um pouco de tudo. Música é minha terapia e também adoro jogar jogos no geral
                                <br />
                                Nos meus momentos livres, gosto de malhar e estar com amigos. Estou sempre em busca de novas experiências e desafios.
                            </p>
                        </div>
                        <div className="redes">
                            <a href="https://www.linkedin.com/in/fernanda-santana-7a1342274?trk=contact-info" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://www.instagram.com/feeh_santana1?igsh=cnpjamNydWk0NjAz" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Filipe */}
                <div className="cardFoto">
                    <div className="foto">
                        <img src={filipe} alt="" />
                    </div>
                    <div>
                        <div className="titulo">
                            <h3>Filipe</h3>
                        </div>
                        <div className="descrição">
                            <p>
                            Sou um jovem dedicado, sempre em busca de novos conhecimentos e oportunidades para crescer. 
                                <br />
                                Encaro desafios com determinação, vendo cada obstáculo como uma chance de aprendizado. 
                                <br />
                                Valorizo o desenvolvimento contínuo e me esforço para transformar dificuldades em conquistas, sempre buscando meu aprimoramento pessoal e profissional.
                            </p>
                        </div>
                        <div className="redes">
                            <a href="https://br.linkedin.com/in/filipe-l%C3%BAcio-de-abreu-5875a8267" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://www.instagram.com/filipe_lc29?igsh=MTB5Z2l5ZTJvOXhhMA==" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFotos