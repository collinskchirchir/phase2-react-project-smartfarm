import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';
function Header() {
  return(
    <>
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand">
          <img className="navbar-brand-logo" src={logoWhite} alt="Logo"></img>
        </a>
        
         
        <form className="d-flex" role="search">
          
          <button className="btn btn-secondary btn-sm" type="submit">Contact Us</button>
        </form>
      </div>
    </nav>
    </>
  );
}

export default Header;