import { ReactComponent as NoPhoneSVG } from '../../..//images/no-phone.svg'
import { ReactComponent as NoEmailSVG } from '../../..//images/no-email.svg'
import { ReactComponent as NoBankSVG } from '../../..//images/no-bank.svg'
import { Link } from 'react-router-dom'

export const Features = () => {
  return (
    <>
      <section className='pcnp-feautures-block' style={{ }}>
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">PCN FEATURES</h6>
            <h2 className="title">Features</h2>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto lg:px-12">
          <div className="grid md:grid-cols-2">
            <div
              style={{ background: 'linear-gradient(#e66465, #9198e5)' }}
              className="bg-blue-gray-light relative"
            >
              {/* <span class="bg-blue-gray-light w-screen absolute -z-1 right-0 h-full"></span> */}
              <div className="h-full px-8 py-32 md:pr-16">
                <div className="row">
                  <div className="col-md-11 col-lg-10">
                    <h3
                      className="title animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                      style={{ animationDelay: '0.2s', opacity: 1 }}
                    >
                      Next-level Messaging Privacy
                    </h3>
                    <p
                      style={{ color: '#FFFFFF', fontSize: '16px' }}
                      className=" mt-6 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      PCNP makes your messaging privacy protected from all
                      possible hacking attacks by third parties. Our messaging
                      privacy technology is based on an open-source,
                      peer-to-peer protocol along with end-to-end encryption for
                      unbreachable privacy.
                    </p>
                    <Link to="/privatemessenger"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                    

                  </div>
                </div>
              </div>
            </div>
            <div className="md:-mt-16">
              {/* <span class="bg-black w-screen absolute -z-1 left-0 h-full"></span> */}
              <div className="h-full flex flex-col space-between px-8 py-32 md:p-32 text-white">
                <div className="flex-1 md:mt-12">
                  <p
                    style={{ fontSize: '15px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-2xl text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Borderless Crypto Payments
                  </p>
                  <h3
                    className="title animated fadeInUpShorter"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                    style={{ color: '#FFFFFF', animationDelay: '0.2s', opacity: 1 }}
                  >
                    Hack-Proof Crypto Wallets
                  </h3>
                  <p
                    style={{ fontSize: '16px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-xl mt-6 text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    Send, Receive, or Store your Cryptocurrencies and tokens,
                    including ERC20, ERC721 &amp; PCNP Tokens, in our
                    security-driven Crypto Wallets. Get access to unhackable Our
                    Crypto Wallets are designed highly intuitive to keep the
                    fund’s security our utmost priority.
                  </p>
                  <Link to="/securecryoto"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                </div>
                <div className="mt-12 md:-mb-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pcnp-feautures-block2' style={{  }}>
        <div className="max-w-screen-2xl mx-auto lg:px-12">
          <div className="grid md:grid-cols-2">
            <div className="relative md:-mb-16 order-2 md:order-none">
              <span className="absolute -z-1 right-0 h-full" />
              <div className="h-full flex flex-col space-between px-8 py-32 md:pr-16 text-white">
                <div>
                  <p
                    style={{ fontSize: '15px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-xl text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Own Your Data
                  </p>
                  <h3
                    className="title animated fadeInUpShorter"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                    style={{ color: '#FFFFFF', animationDelay: '0.2s', opacity: 1 }}
                  >
                    Latest Era of Web 3.0 Browser
                  </h3>
                  <p
                    style={{ fontSize: '16px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-xl text-gray-300 mt-4 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Enter the virtual world with Web Browser 3.0 with unlimited
                    accessibilities offered to the User. Web 3.0 is built over
                    technologies including Open-sourced data, the peer-to-peer
                    decentralized blockchain system, Machine learning, and
                    end-to-end encryption.{' '}
                  </p>
                  <p
                    style={{ fontSize: '16px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-xl text-gray-300 mt-4 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    The ultimate aim of the Web 3.0 Browser is to provide the
                    User with data democracy, fully encrypted data security,
                    credibility through smart contracts, and the provision of
                    economically sustainable and scalable models for the users
                    and service providers.
                  </p>
                  <br />
                  <Link to="/web"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                </div>
                <div className="mt-12 md:mt-4 my-auto flex items-center justify-center flex-1"></div>
              </div>
            </div>
            <div
              style={{
                background:
                  'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)'
              }}
              className=" relative order-1 md:order-none"
            >
              <span className="absolute -z-1 left-0 h-full" />
              <div className="h-full flex flex-col space-between px-8 py-32 md:pr-16 text-white">
                <div className="row">
                  <div className="col-md-11 col-lg-10">
                    <p
                      style={{ fontSize: '15px', color: '#FFFFFF' }}
                      className="text-lg 2xl:text-xl animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      Retain Your Privacy
                    </p>
                    <h3
                      className="title animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                      style={{ animationDelay: '0.2s', opacity: 1 }}
                    >
                      Secure Connectivity with DVPN
                    </h3>
                    <p
                      style={{ fontSize: '16px', color: '#FFFFFF' }}
                      className="text-lg 2xl:text-xl mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      A decentralized VPN is also a feature of PCNP, which
                      offers the User enhanced online privacy, smart home
                      protection against potential hacking attacks, unblocks
                      your social media, improved security for online shopping
                      and online banking.
                    </p>
                    <ul
                      className="mt-16 mb-20 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      <li
                        style={{ color: '#FFFFFF' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoPhoneSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px' }}>
                          No phone number
                        </span>
                      </li>
                      <li
                        style={{ color: '#FFFFFF' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoEmailSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px' }}>
                          No email address
                        </span>
                      </li>
                      <li
                        style={{ color: '#FFFFFF' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoBankSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px' }}>
                          No bank account
                        </span>
                      </li>
                    </ul>
                    <Link to="/accountgeneration"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
