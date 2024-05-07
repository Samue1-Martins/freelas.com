import './Navbar.css';
import logo from '../../assets/Images/logoFreelas.png';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-image'>
                <img src={logo} alt="" />
            </div>
            <nav className='navbar-list'>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <a href="#">Cadastre-se</a>
                        <a href="#">Sobre nós</a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar