import "../../styles/nav.css";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav= (props) =>{
    return(
        <nav>
        <ul className="holder">
            <li> <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined }>Home</NavLink></li>
            <li> <NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : undefined }>Nosotros</NavLink></li>
            <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "active" : undefined }>Servicios</NavLink></li>
            <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "active" : undefined }>Galeria</NavLink></li>
            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : undefined }>Contacto</NavLink></li>
        </ul>
    </nav>
    )
}
export default Nav;