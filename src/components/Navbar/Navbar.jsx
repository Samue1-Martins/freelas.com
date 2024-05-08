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
                        <a href="#">Login</a>
                        <a href="#">Freelancers</a>
                        <a href="#">Área do aluno</a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar