import logo from '../assets/logo-primary.png';

function Footer() {
  return(
    <>
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <img className="navbar-brand-logo" src={logo} alt="Logo"></img>
            
          </div>
          
          <div className="col-auto">
            <div className="d-flex justify-content-end">
             
              <ul>
              <li className="list-inline-item">2022 Collins K. Chirchir </li>
                <li className="list-inline-item">
                  <a href="#">FAQ</a>
                </li>

                <li className="list-inline-item">
                  <a href="#">License</a>
                </li>

              </ul>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;