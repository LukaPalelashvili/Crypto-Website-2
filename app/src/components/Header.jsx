import { useState } from 'react'
import LogoTransparent from '../images/Logo 2 Transparent.png'
import { Link } from 'react-router-dom'

import { ReactComponent as IconArrowRightWhite } from '../images/icon-arrow-right-white.svg';
import { ReactComponent as IconArrowRightSmall } from '../images/icon-arrow-down-small.svg';



export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)

  return (
    <header className="page-header">
      <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={LogoTransparent} alt="Pcnprotocol Logo" />
          </Link>
          <Link to="/"></Link>

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
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(false)
                  }}
                  className="nav-item "
                >
                  <a className="nav-link" href="">
                    About
                  </a>
                </li>
                <li
                  className="dropdown show mr-2 px-2 "
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(true)
                  }}
                >
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
                </li>
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(false)
                  }}
                  className="nav-item "
                >
                  <Link to="/security" className="nav-link">
                    Security
                  </Link>
                </li>
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(false)
                  }}
                  className="nav-item "
                >
                  <a className="nav-link" href="index.html#token-distribution">
                    Token Distribution
                  </a>
                </li>
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(false)
                  }}
                  className="nav-item "
                >
                  <a
                    className="nav-link"
                    href="index.html#token-sale-mobile-app"
                  >
                    Token Sale
                  </a>
                </li>
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(false)
                    setShowDropdown(false)
                  }}
                  className="nav-item "
                >
                  <a className="nav-link" href="index.html#roadmap">
                    Roadmap
                  </a>
                </li>
                <li
                  onMouseOver={() => {
                    setShowMoreDropdown(true)
                    setShowDropdown(false)
                  }}
                  className={`dropdown mr-2 px-2`}
                >
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
                </li>
                <li style={{ border: 2 }} className="dropdown show mr-4 ">
                  <a
                    style={{ padding: '.8rem' }}
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
              <div
                onMouseLeave={() => {
                  setShowDropdown(false)
                }}
                onMouseOver={() => {
                  setShowDropdown(true)
                }}
                style={{ width: '100%' }}
                className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
                aria-labelledby="more"
              >
                {/* <Link to="/privatemessenger" className="dropdown-item">
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
                <Link to="/web" className="dropdown-item">
                  Web3 Browser
                </Link>
                <Link to="/dvpn" className="dropdown-item">
                  DVPN
                </Link> */}
                <div style={{ width: '60%', marginLeft: '20%', marginTop: '30px' }} className="row">
                        
                    <div style={{  }} className="col-md-6">
                    <h4 style={{color: '#fff', fontSize: '24px'}} className="text-4xl xl:text-4xl font-display text-gray-900">Features</h4>
        <p style={{color: '#fff'}} className="2xl:text-2xl mt-4 font-display font-normal">Private Messenger, Crypto Wallet, <br />Web3 Browser, NFT Marketplace &amp; more</p>
                    </div>

                    <div style={{  }} className="col-md-6">
                    <ul className="grid xl:grid-cols-2 gap-8">
        <li>
          <Link to="/privatemessenger" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
                      Private Messenger
                      <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
          </Link>
        </li>
        <li>
        <Link to="/accountgeneration" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
               Account Generation
                      <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
        </Link>
        </li>
        <li>
        <Link to="/KeyPass" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
                          KeyPass
                          <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
                    </Link>
        </li>
        <li>
        <Link to="/KeyPass" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
                          DVPN
                          <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
                    </Link>
        </li>
        <li>
        <Link to="/web"  style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
                          Web3 Browser
                          <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
                    </Link>
                   
        </li>
        <li>
            
                    <Link to="/securecryoto" style={{fontSize: '14px', color: '#fff', width: 'max-content'}} className="flex items-center group header-nav-links">
               Secure Crypto Wallet
                      <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
        </Link>
        </li>
      </ul>

                    </div>

                    {/* <div style={{  }} className="col-md-4">
                    <p>How Are You?</p>

                    </div> */}
              </div>
              </div>
              <div
                onMouseLeave={() => {
                  setShowMoreDropdown(false)
                }}
                onMouseOver={() => {
                  setShowMoreDropdown(true)
                }}
                className={`dropdown-menu ${showMoreDropdown ? 'show' : ''}`}
                aria-labelledby="more"
                style={{ width: '100%',  }}
              >
                 <div style={{ width: '60%', marginLeft: '20%', marginTop: '30px' }} className="row">
                        
                        <div style={{  }} className="col-md-6">
                        <h4 style={{color: '#fff', fontSize: '24px'}} className="text-4xl xl:text-4xl font-display text-gray-900">More</h4>
            <p style={{color: '#fff'}} className="2xl:text-2xl mt-4 font-display font-normal">App, Team, FAQ, <br /> Contact, Jobs &amp; more</p>
                        </div>
    
                        <div style={{  }} className="col-md-6">
                        <ul className="grid xl:grid-cols-2 gap-8">
            <li>
              <a href="Private-Messenger.html" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
               App
                <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
              </a>
            </li>
            <li>
              <a href="Account-Generation.html" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
               Team
                <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
              </a>
            </li>
            <li>
              <a href="Secure-Crypto-Wallet.html" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
               FAQ
                <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
              </a>
            </li>
            <li>
              <a href="keygard.html" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
               Contact
                <span style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
              </a>
            </li>
            <li>
              <a href="Web3-Browser.html" style={{fontSize: '14px', color: '#fff'}} className="flex items-center group header-nav-links">
                Jobs
                <span  style={{marginLeft: '10px'}} className="group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
              </a>
            </li>
          </ul>
    
                        </div>
    
                        {/* <div style={{  }} className="col-md-4">
                        <p>How Are You?</p>
    
                        </div> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
