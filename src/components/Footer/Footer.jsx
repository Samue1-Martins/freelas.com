import React from "react";
import logo from '../../assets/Images/logoFreelas.png';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <section className="footerSectionUm">
                <nav className="footerText">
                    <h4>Fale conosco</h4>
                    <a href="">Email</a>
                    <a href="">Instagram</a>
                    <a href="">Linkedim</a>
                </nav>
                <nav className="footerText">
                    <h4>Sobre o Freelas.com</h4>
                    <Link to={".//screens/Sobre/"}>Quem somos</Link>
                    <a href="./screens/Sobre/">Quem somos</a>
                    <a href="#">Sobre o curso</a>
                    <a href="#">Sobre nós</a>
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