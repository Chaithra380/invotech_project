function Header(){
    return(
        <div className="Header">
        <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="logo.jfif" alt="" width="30" height="24"/>
          </a>
           <ul className="menu-items">
            <li>
                <a href="#" className="nav-anchor">About Us</a>
            </li>
            <li>
                <a href="#" className="nav-anchor">Explore Courses</a>
            </li>
            <li>
                <a href="#" className="nav-anchor">How it Works</a>
            </li>
            <li>
                <a href="#" className="nav-anchor">Contact Us</a>
            </li>
            <li>
                <a href="#" className="nav-anchor">Careers</a>
            </li>
           </ul>
           <button type="button" className="btn btn-primary">Get Started</button>
        </div>
      </nav>
      </div>
    );
};

export default Header;