import { Link } from 'react-router-dom'
import logoMCD from './assets/logoMCD.png'
import './navbar.css'

const Navbar = () => {
    return ( 
        <nav>
        <ul>
            <img src={logoMCD}/>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menulist">Menu</Link>
            </li>
            <li>
                <Link to="/create">Add Menu</Link>
            </li>
        </ul>
        </nav>
     );
}
 
export default Navbar;
