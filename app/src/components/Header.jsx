import LogoTransparent from '../images/Logo 2 Transparent.png'
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className="page-header">
      <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
        <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={LogoTransparent} alt="Pcnprotocol Logo" />
           </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div id="navigation" className="navbar-nav ml-auto">
              <ul className="navbar-nav mt-1">
                <li className="nav-item ">
                  <a className="nav-link" href="">
                    About
                  </a>
                </li>
                <li className="dropdown show mr-2 px-2 ">
                  <a
                    className="dropdown-toggle white"
                    href="index.html#problem-solution"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <div className="dropdown-menu" aria-labelledby="more">
                    <Link to="/privatemessenger" className="dropdown-item">
                        Private Messenger
                    </Link>
                    <Link to="/accountgeneration" className="dropdown-item">
                          Account Generation
                    </Link>
                    <Link to="/securecryoto" className="dropdown-item">
                          Secure Crypto Wallet
                    </Link>
                    <Link to="/KeyPass" className="dropdown-item">
                          KeyPass
                    </Link>
                    <Link to="/web3Browser" className="dropdown-item">
                          Web3 Browser
                    </Link>
                    <Link to="/dvpn" className="dropdown-item">
                          DVPN
                    </Link>
                  </div>
                </li>
                <li className="nav-item ">
                 <Link to="/security" className="nav-link">
                    Security
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="index.html#token-distribution">
                    Token Distribution
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="index.html#token-sale-mobile-app"
                  >
                    Token Sale
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="index.html#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="dropdown show mr-2 px-2 ">
                  <a
                    className="dropdown-toggle white"
                    href="#"
                    role="button"
                    id="more"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <div className="dropdown-menu" aria-labelledby="more">
                    <a className="dropdown-item" href="index.html#mobile-app">
                      App
                    </a>
                    <a className="dropdown-item" href="index.html#team">
                      Team
                    </a>
                    <Link to="/faq" className="dropdown-item">
                       FAQ
                    </Link>
                    <a className="dropdown-item" href="index.html#contact">
                      Contact
                    </a>
                    <a className="dropdown-item" href="jobs.html">
                      Jobs
                    </a>
                  </div>
                </li>
                <li style={{ border: 2 }} className="dropdown show mr-4 ">
                  <a style={{padding: '.8rem'}}
                    className="dropdown-toggle rounded  border border-radius"
                    href="#"
                    role="button"
                    id="language"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    
                  >
                    {' '}
                    EN
                  </a>
                  <div className="dropdown-menu" aria-labelledby="language">
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./es/index.html"
                    >
                      {' '}
                      Español{' '}
                    </a>
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./ger/index.html"
                    >
                      {' '}
                      Deutsch
                    </a>
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./fr/index.html"
                    >
                      {' '}
                      Français
                    </a>
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./ru/index.html"
                    >
                      {' '}
                      Русский
                    </a>
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./it/index.html"
                    >
                      {' '}
                      Italiano
                    </a>
                    <a
                      className="dropdown-item  text-primary-base"
                      href="./pd/index.html"
                    >
                      {' '}
                      Polski
                    </a>
                  </div>
                </li>
              </ul>
              <span id="slide-line" />
              <form className="form-inline mt-2 mt-md-0">
                <a 
                  className="btn btn-sm  btn-gradient-purple btn-glow my-2 my-sm-0 "
                  href="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/account-login.html"
                  target="_blank"
                >
                  Sign in
                </a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
