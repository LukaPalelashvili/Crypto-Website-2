import PCNP6 from '../images/pcnp6.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer
      className="footer static-bottom footer-dark footer-custom-class"
      data-midnight="white"
    >
      <div id="particles-js2">
        <div className="container">
          <div className="footer-wrapper">
            <div
              className="title animated "
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <img
                style={{
                  width: '65px',
                  height: '60px',
                  marginBottom: '-7px',
                  marginLeft: '-20px'
                }}
                src={PCNP6}
                alt={'PCNP'}
              />
              <p
                style={{
                  marginLeft: '23px',
                  marginTop: '-25px',
                  color: '#7D7D7D',
                  fontSize: '20px'
                }}
                className="logo-text"
              >
                <span
                  style={{
                    color: '#fff',
                    fontSize: '28px',
                    fontWeight: 'bolder'
                  }}
                >
                  PCN
                </span>
                Protocol
              </p>
            </div>
            <div className="row">
              <div style={{ zIndex: 999 }} className="col-md-2">
                <div className="links">
                  <hr className="footer-head-line" />
                  <h5 className="title mySlider2">
                    <a
                        id="mySlider2"
                        style={{ color: 'white' }}
                        data-toggle="collapse"
                        className="doc-fix animated footer-nav-header collapse-trigger custom-accordion-trigger flex items-center justify-between"
                        href="#footer-nav-1"
                        role="button"
                        aria-expanded="true"
                        aria-controls="footer-nav-1"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s"
                    >
                      Company
                    </a>
                    <hr className='title-bottom-line' />
                  </h5>
                  <div
                    className="collapse custom-accordion hidden-first-block "
                    id="footer-nav-1"
                  >
                    <ul className="useful-links float-left mr-5">
                      <li>
                        <a
                          className="hover:text-white footer-nav-main"
                          target="_blank"
                          rel="noreferrer"
                        
                        >
                          Team
                        </a>
                      </li>
                      <li>
                        <a href='#about'
                          className="hover:text-white footer-nav-main"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-white footer-nav-main"
                          href="#roadmap"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Roadmap
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul id="mySlider" className="useful-links float-left mr-5">
                    <li className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s">
                      <a
                        className="hover:text-white footer-nav-main"
                        target="_blank"
                        rel="noreferrer"
                       
                      >
                        Team
                      </a>
                    </li>
                    <li className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.7s">
                      <a
                        className="hover:text-white footer-nav-main"
                        href="#about"
                        target="_blank"
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.8s">
                      <a
                        className="hover:text-white footer-nav-main"
                        href="#roadmap"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Roadmap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ zIndex: 999 }} className="col-md-2">
                <div className="links">
                  <hr className="footer-head-line" />
                  <h5 className="title ">
                    <a
                      id="mySlider2"
                      style={{ color: 'white' }}
                      data-toggle="collapse"
                      className="doc-fix footer-nav-header animated collapse-trigger custom-accordion-trigger flex items-center justify-between"
                      href="#footer-nav-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="footer-nav-2"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      Features
                    </a>
                  </h5>
                  <hr className='title-bottom-line' />
                  <div
                    className="collapse custom-accordion hidden-first-block"
                    id="footer-nav-2"
                  >
                    <ul className="useful-links float-left mr-5">
                      <li
                        style={{
                          width: 'max-content',
                        }}
                        className="footer-nav-main"
                       
                      >
                        <Link  rel="noreferrer"
                          target="_blank" to="/privatemessenger" >
                      Private Messenger
                    </Link>
                      </li>
                      <li
                        className="footer-nav-main "
                      >
                      <Link to="/securecryoto" target="_blank" >
                      Crypto Wallet
                    </Link>
                      </li>
                      <li
                        style={{
                          lineHeight: '25px',
                        }}
                        className="footer-nav-main"
                      >
                       <Link  rel="noreferrer"
                          target="_blank" to="/dvpn" >
                      DVPN
                    </Link>
                      </li>
                      <li
                        style={{
                          lineHeight: '25px',
                          opacity: 1
                        }}
                        className="footer-nav-main"
                      >
                         <Link  rel="noreferrer"
                          target="_blank" to="/web" >
                      Web3 Browser
                    </Link>
                      </li>
                    </ul>
                  </div>
                  <ul id="mySlider" className="useful-links float-left mr-5">
                    <li 
                      style={{
                        width: 'max-content',
                        opacity: 1
                      }}
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >  
                      <Link 
                          target="_blank" to="/privatemessenger">
                      Private Messenger
                    </Link>
                    </li>
                    <li
                     className="animated"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.7s"
                    >
                      <a href="Secure-Crypto-Wallet.html"></a>
                      <Link to="/securecryoto" target="_blank" >
                        
                      Crypto Wallet
                    </Link>
                    </li>
                    <li
                      style={{
                        lineHeight: '25px',
                        opacity: 1
                      }}
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.8s"
                    >
                      <Link  rel="noreferrer"
                          target="_blank" to="/dvpn" >
                      DVPN
                    </Link>
                    </li>
                    <li
                      style={{
                        lineHeight: '25px',
                        opacity: 1
                      }}
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.9s"
                    >
                      <Link  rel="noreferrer"
                          target="_blank" to="/web" >
                      Web3 Browser
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ zIndex: 999 }} className="col-md-2">
                <div className="links">
                  <hr className="footer-head-line" />
                  <h5 className="title">
                    <a
                      id="mySlider2"
                      style={{ color: 'white' }}
                      data-toggle="collapse"
                      className="doc-fix footer-nav-header animated collapse-trigger custom-accordion-trigger flex items-center justify-between"
                      href="#footer-nav-3"
                      role="button"
                      aria-expanded="true"
                      aria-controls="footer-nav-3"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      Documentation
                    </a>
                  </h5>
                  <hr className='title-bottom-line' />
                  <div
                    className="collapse custom-accordion hidden-first-block"
                    id="footer-nav-3"
                  >
                    <ul className="useful-links float-left mr-5">
                      <li
                        className="footer-nav-main"
                        // data-animation-delay="0.6s"
                        // style={{ animationDelay: '0.6s', opacity: 1 }}
                      >
                        <a href="files\whitepaper.pdf" target="_blank">
                          Whitepaper
                        </a>
                      </li>
                      <li
                        className="footer-nav-main "
                        // data-animation-delay="0.7s"
                        // style={{ animationDelay: '0.7s', opacity: 1 }}
                      >
                        <a href="privacy-policy.html" target="_blank">
                          Privacy Policy
                        </a>
                      </li>
                      <li
                        className="footer-nav-main \"
                        
                      >
                        <a href="terms-of-use.html">Terms of use</a>
                      </li>
                      <li
                        // className="footer-nav-main animated"
                        // data-animation-delay="0.8s"
                        // style={{ animationDelay: '0.8s', opacity: 1 }}
                      >
                         <Link to="/faq" target="_blank">
                      FAQ
                    </Link>
                       
                      </li>
                    </ul>
                  </div>
                  <ul id="mySlider" className="useful-links float-left mr-5">
                    <li
                     className="animated"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.6s"
                    >
                      <a href="files\whitepaper.pdf" target="_blank">
                        Whitepaper
                      </a>
                    </li>
                    <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                    >
                      <a href="privacy-policy.html" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    <li
                     className="animated"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.8s"
                    >
                      <a href="terms-of-use.html">Terms of use</a>
                    </li>
                    <li
                   className="animated"
                   data-animation="fadeInUpShorter"
                   data-animation-delay="0.9s"
                    >
                      <Link to="/faq" target="_blank">
                      FAQ
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ zIndex: 999 }} className="col-md-2">
                <div className="links">
                  <hr className="footer-head-line" />
                  <h5 className="title ">
                    <div
                      style={{ width: 'max-content' }}
                      className="lg:flex lg:items-center"
                    >
                      <a
                        id="mySlider2"
                        style={{ color: 'white' }}
                        data-toggle="collapse"
                        className="footer-nav-header animated js-collapse-trigger custom-accordion-trigger flex items-center justify-between"
                        href="#footer-nav-4"
                        role="button"
                        aria-expanded="true"
                        aria-controls="footer-nav-4"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s"
                      >
                        PCNP Network
                      </a>
                      <a
                        href="https://PCNPnetwork.com/"
                        target="_blank"
                        className="hidden lg:block ml-4 flex-shrink-0 -mt-2"
                      />
                    </div>
                  </h5>
                  <hr className='title-bottom-line' />
                  <div
                    className="collapse custom-accordion hidden-first-block"
                    id="footer-nav-4"
                  >
                    <ul className="useful-links float-left mr-5">
                      <li
                        className="footer-nav-main"
                       
                      >
                         <Link to="/KeyPass" target="_blank">
                        KeyPass
                    </Link>
                       
                      </li>
                      <li
                        style={{
                          width: 'max-content',
                        }}
                        className="footer-nav-main"
                        
                      >
                        <Link to="/accountgeneration" target="_blank">
                      Account Generation
                    </Link>
                      </li>
                      <li
                        className="footer-nav-main "
                      >
                        <a href="index.html#token-sale-mobile-app">
                          Token Sale
                        </a>
                      </li>
                      <li
                        className="footer-nav-main"
                      >
                        <Link to="/security" target="_blank">
                        Security
                    </Link>
                      </li>
                    </ul>
                  </div>
                  <ul id="mySlider" className="useful-links float-left mr-5">
                    <li
                     className="animated"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.6s"
                    >
                       <Link to="/KeyPass" target="_blank">
                        KeyPass
                    </Link>
                    </li>
                    <li
                      style={{
                        width: 'max-content',
                      }}
                      className="animated"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.7s"
                    >
              
                      <Link to="/accountgeneration" target="_blank">
                      Account Generation
                    </Link>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.8s"
                    >
                      <a href="index.html#token-sale-mobile-app">Token Sale</a>
                    </li>
                    <li
                       className="animated"
                       data-animation="fadeInUpShorter"
                       data-animation-delay="0.9s"
                    >
                      <Link to="/security" target="_blank">
                        Security
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jss114">
                  <div
                    style={{ zIndex: 999 }}
                    className="jss132 animated"
                    data-animation-delay="0.5s"
                  >
                    Sign-up for our daily newsletter
                  </div>
                  <form
                    style={{ zIndex: 999 }}
                    action=""
                    className="jss128 animated"
                    data-animation-delay="0.6s"
                    method="POST"
                    target="_blank"
                  >
                    <input
                      aria-hidden="true"
                      className="jss129"
                      name=""
                      tabIndex={-1}
                      type="text"
                      defaultValue
                    />
                    <div
                      className="MuiInputBase-root MuiFilledInput-root jss133 jss126 MuiInputBase-fullWidth"
                      aria-required="true"
                    >
                      <input
                        style={{
                          paddingTop: '12px',
                          paddingBottom: '12px',
                          marginLeft: '15px',
                          borderRadius: '0px 4px 4px 0'
                        }}
                        name="EMAIL"
                        placeholder="Email Address"
                        type="email"
                        className="MuiInputBase-input MuiFilledInput-input jss134 jss125"
                        
                      />
                    </div>
                    <button
                      style={{ borderRadius: '0 4px 4px 0' }}
                      className="btn-glow btn-gradient-purple MuiBut tonBase-root MuiButton-root MuiButton-contained jss124 MuiButton-containedPrimary MuiButton-disableElevation"
                      tabIndex={0}
                      type="submit"
                    >
                      <span className="MuiButton-label">Subscribe</span>
                      <span className="MuiTouchRipple-root" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }} className="row">
              <div style={{ zIndex: 999 }} className="col-md-4">
                <div className="about foooter-links-for-mobiles">
                  <ul className="social-buttons list-unstyled">
                    <li className>
                      <a
                        href="https://www.facebook.com/PCNProtocol/"
                        target="_blank"
                        title="Facebook"
                        className="btn font-medium"
                      >
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li className>
                      <a
                        href="https://twitter.com/PcnProtocol"
                        target="_blank"
                        title="Twitter"
                        className="btn font-medium"
                      >
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li className>
                      <a
                        href="https://www.reddit.com/r/PCNProtocol/"
                        target="_blank"
                        title="Reddit"
                        className="btn font-medium"
                      >
                        <i className="ti-reddit" />
                      </a>
                    </li>
                    <li className>
                      <a
                        href="https://www.youtube.com/channel/UCGkShKklTgRovjWVai_w4OQ"
                        target="_blank"
                        title="Youtube"
                        className="btn font-medium"
                      >
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                    <li className>
                      <a
                        href="https://github.com/PCN-Protocol"
                        target="_blank"
                        title="GitHub"
                        className="btn font-medium"
                      >
                        <i className="ti-github" />
                      </a>
                    </li>
                    <li className>
                      <a
                        href="https://www.instagram.com/pcnprotocol/"
                        target="_blank"
                        title="Instagram"
                        className="btn font-medium"
                      >
                        <i className="ti-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ zIndex: 999 }} className="col-md-4">
                <div className="copy-right mx-auto text-center">
                  <span className="copyright">
                    Copyright © 2019, PCN Protocol. Template Designed by{' '}
                    <a
                      href="http://pixinvent.com"
                      title="pixinvent"
                      className="white"
                    >
                      Pixinvent
                    </a>
                  </span>
                </div>
              </div>
              <div
                style={{ textAlign: 'right', zIndex: 999 }}
                className="col-md-4 p-t-footer"
              >
                <div style={{ display: 'inline-block' }}>
                  <ul style={{ fontSize: '12px' }} className>
                    <li
                      style={{
                        display: 'inline-block',
                        marginRight: '5px',
                        animationDelay: '0.5s',
                        opacity: 1
                      }}
                      className="animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.5s"
                    >
                      <a href="#" title="Twitter" className>
                        Privacy Policy
                      </a>
                    </li>
                    <li style={{ display: 'inline-block' }}>•</li>
                    <li
                      style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        animationDelay: '0.6s',
                        opacity: 1
                      }}
                      className="animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <a href="#" title="LinkedIn" className>
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/sticky-kit/1.1.3/sticky-kit.min.js"></script>
     
     <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
     <script src="https://unpkg.com/scrollreveal@4.0.6/dist/scrollreveal.min.js"></script>
     <script type="text/javascript" src="../js/main.min.js"></script>
    </footer>
  )
}
