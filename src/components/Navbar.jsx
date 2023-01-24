
function Navbar() {
  return(
    <div class="container">
    <nav class="flex-grow-1">
        {/* <!-- Collapse --> */}
        <div class="collapse navbar-collapse" id="navbarDoubleLineContainerNavDropdown">
          <ul class="navbar-nav">
            {/* <!-- Dashboards --> */}
            <li class="nav-item">
              <a id="dashboardsMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle active" href="#" role="button"><i class="bi-house-door dropdown-item-icon"></i> Dashboards</a>
            </li>
            {/* <!-- End Dashboards --> */}

            {/* <!-- Pages --> */}
            <li class="hs-has-sub-menu nav-item">
              <a id="pagesMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button">
                <i class="bi-files-alt dropdown-item-icon"></i> Pages</a>                
            </li>
            {/* <!-- End Pages --> */}

            {/* <!-- Apps --> */}
            <li class="hs-has-sub-menu nav-item">
              <a id="appsMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button">
                <i class="bi-app-indicator dropdown-item-icon"></i> Apps</a>
            </li>
            {/* <!-- End Apps --> */}

            <li class="nav-item">
              <a class="nav-link " href="./layouts/index.html">
                <i class="bi-grid-1x2 dropdown-item-icon"></i> Layouts
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="./documentation/index.html" data-placement="left">
                <i class="bi-book dropdown-item-icon"></i> Docs
              </a>
            </li>
          </ul>

        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </div>
  );
}

export default Navbar;