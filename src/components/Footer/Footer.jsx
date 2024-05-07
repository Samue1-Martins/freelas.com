import React from "react";
import logo from '../../assets/Images/logoFreelas.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <section className="footerSectionUm">
                <nav>
                    <h4>Fale conosco</h4>
                    <a href="">Email</a>
                    <a href="">Instagram</a>
                    <a href="">Linkedim</a>
                </nav>
                <nav>
                    <h4>Sobre o Freelas.com</h4>
                    <a href="#">Quem somos</a>
                    <a href="#">Sobre o curso</a>
                    <a href="#">Sobre nós</a>
                </nav>
            </section>
            <section className="footerSectionDois">
                <div className="footerSectionDois-image">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p>
                        ₢Todos os direitos reservados ❤️
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer