import './Navbar.css';
import logo from '../../assets/Images/logoFreelas.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-image'>
                <img src={logo} alt="" />
            </div>
            <nav className='navbar-list'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <a href="#">Freelancers</a>
                        <a href="#">Área do aluno</a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar