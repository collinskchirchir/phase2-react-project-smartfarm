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
                        <NavLink to='/'>
                          <span><i class="fa-solid fa-house me-2"></i></span>
                          Home</NavLink> 
                    </li>
                    <li className="nav-item">
                      
                        <NavLink to='/form'>
                          <span><i class="fa-solid fa-user-plus me-2"></i></span>
                          Add Farmer Form</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register">
                          <span><i class="fa-solid fa-list me-2"></i></span>
                          Farmer Register</NavLink>
                    </li>                    
                </ul>
                <div className="nav-btns-con">
                  <button className="btn btn-outline-light " type="submit">CONTACT US</button>
                </div>
            </nav>
  );
}

export default Navbar;