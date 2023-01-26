import { NavLink } from "react-router-dom";
import whiteLogo from '../assets/logo-white.png'
function Navbar() {
  /*eslint-disable*/
  return(
    <nav className="navigation">
                <div className="logo">
                <img src={whiteLogo}   alt=''></img>
                </div>
                <ul className="nav-items">
                    <li className="nav-item"> 
                        <NavLink to='/'>Home</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to='/form'>Add Farmer Form</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register">Farmer Register</NavLink>
                    </li>                    
                </ul>
                <div className="nav-btns-con">
                  <button className="btn btn-outline-light " type="submit">CONTACT US</button>
                </div>
            </nav>
  );
}

export default Navbar;