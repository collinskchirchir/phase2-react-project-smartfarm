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
                        <a href="#" className='active-menu'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Farmer Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Gallery</a>
                    </li>
                    
                </ul>
                <div className="nav-btns-con">
                <button className="btn btn-secondary btn-sm" type="submit">Contact Us</button>
                </div>
            </nav>
  );
}

export default Navbar;