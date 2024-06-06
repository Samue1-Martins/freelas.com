import React from "react";
import logo from '../../assets/Images/logoFreelas.png';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <section className="footerSectionUm">
                <nav className="footerText">
                    <h4>Desenvolvedores Freelas.com</h4>
                    <Link to="/quem-somos-nos">
                        <h6>
                        Quem somos nós?
                        </h6>
                    </Link>
                </nav>
                <nav className="footerText">
                    <h4>Projeto integrador</h4>
                    <Link to="/sobre-curso">
                        <h6>
                            Sobre o Curso
                        </h6>
                    </Link>
                </nav>

            </section>
            <section className="footerSectionDois">
                <div className="footerSectionDois-image">
                    <img src={logo} alt="" />
                </div>
                <div className="footerTextDois">
                    <p>
                        ₢Todos os direitos reservados ❤️
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer