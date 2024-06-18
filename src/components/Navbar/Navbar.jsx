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
                        <Link to="/freelas.com">Home</Link>
                        {/* <Link to="/login">Login</Link> */}
                        <Link to="/freelas.com/freelancers">Freelancers</Link>
                        <Link to="/freelas.com/area-aluno">Área do Aluno</Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar

