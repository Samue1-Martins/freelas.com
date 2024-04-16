import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/Images/FREELAS.png';

const Navbar = () => {
    return(
        <nav>
            <div>
                <Link to={`/`}> 
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div></div>
        </nav>
    )
}

export default Navbar