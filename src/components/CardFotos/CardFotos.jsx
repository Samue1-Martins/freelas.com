import React from "react";
import './CardFotos.css'
import instagram from '../../assets/Images/instagram.svg'
import github from '../../assets/Images/github.svg'
import linkedin from '../../assets/Images/linkedin.svg'
import samuel from '../../assets/Images/samuel.jpg'

function CardFotos() {
    return (
        <>
            <div className="tela">
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
                                A young developer avid to learn new technologies.
                                <br />
                                I share this passion with filming, photography and skateboarding. Mixing all those hobbies in my pot of imagination, giving always as result a new video on my Youtube channel.
                                <br />
                                When I feel creative, I let it overflow with graphic design.
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
                        <img src={samuel} alt="" />
                    </div>
                    <div>
                        <div className="titulo">
                            <h3>Samuel</h3>
                        </div>
                        <div className="descrição">
                            <p>
                                A young developer avid to learn new technologies.
                                <br />
                                I share this passion with filming, photography and skateboarding. Mixing all those hobbies in my pot of imagination, giving always as result a new video on my Youtube channel.
                                <br />
                                When I feel creative, I let it overflow with graphic design.
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
            </div>
        </>
    )
}

export default CardFotos