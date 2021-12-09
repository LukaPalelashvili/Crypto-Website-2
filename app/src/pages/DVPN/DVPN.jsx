

import MessengerIntro from '../../images/messenger-intro-2x.png';
import { ReactComponent as PrivateAndSecureLockBottom  } from '../../images/private-and-secure-lock-bottom.svg';
import { ReactComponent as PrivateAndSecureLockTop  } from '../../images/private-and-secure-lock-top.svg';
import  MessengerMessage  from '../../images/messenger-message-2x.png'
import  MessengerPayments  from '../../images/messenger-payments-2x.png'
import { ReactComponent as MessengerBenefit1  } from '../../images/messenger-benefit-1.svg';
import { ReactComponent as MessengerBenefit2  } from '../../images/messenger-benefit-2.svg';
import { ReactComponent as MessengerBenefit3  } from '../../images/messenger-benefit-3.svg';
import  MessengerP2p  from '../../images/messenger-p2p-2x.png'
import  PrivateAndSecureBg  from '../../images/private-and-secure-bg-2x.png'
import  PrivateAndSecureAvatar  from '../../images/private-and-secure-avatar-2x.png'
import { ReactComponent as PrivateAndSecureKey } from '../../images/private-and-secure-key.svg';
import { ReactComponent as IconArrowRightWhite } from '../../images/icon-arrow-right-white.svg';


export const DVPN = () => {
    return (
        <>
        <div className="content-wrapper">
          <div className="content-body">
            <main style={{fontSize: '10px !important'}}>{/* Header: 3D Animation */}
              <section style={{marginTop: '200px'}} className="head-area" id="head-area">
                <div className="container">
                  <section className="pt-16 xl:pt-0">
                    <div className="max-w-screen-2xl mx-auto lg:px-12">
                      <div className="grid md:grid-cols-2 ">
                        <div style={{marginBottom: '1rem'}} className="relative px-8 self-center xl:mb-32">
                          <h1 style={{fontSize: '4.8rem', lineHeight: '4.75rem'}} className="leading-tight font-display text-6xl font-medium xl:text-7xl 2xl:text-8xl">Serverless, Uncensored &amp;  <br /> Private Decentralized VPN</h1>
                          <p style={{fontFamily: 'Comfortaa,Roboto,"Helvetica Neue",Arial,sans-serif', color: '#fff'}} className="text-gray-600 mt-10 mb-16 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                            &nbsp;Start various chats without worrying about third-party surveillance. PCNP Users take full advantage of our immensely private messengers with options to initiate one to one or group chats along with a built-in global payment feature <br /> <br />
                            Enjoy the facility of Private chats with features to transact payments securely from anywhere to anybody
                          </p>
                        </div>
                        <div className="relative mt-24 md:mt-0">
                          <div className="md:-mt-24 mx-auto -ml-12 -mr-12 md:ml-0 md:mr-0 flex justify-center items-center md:pt-20 relative">
                            <div className="relative max-w-2xl lg:max-w-6xl">
                              <img src={MessengerIntro} />
                              <div className="absolute flex text-white items-center justify-between privacy-first-step-1">
                                <div className="flex text-white w-full items-center justify-between">
                                  <b>1ßI30#{'{'}%3</b>
                                  <time className="text-base">9:40 AM</time>
                                  <div className="lock relative">
                                    <PrivateAndSecureLockBottom />   
                                    <PrivateAndSecureLockTop className="absolute top-0" /> top
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex text-white items-center justify-between privacy-first-step-2 opacity-0">
                                <div className="flex text-black w-full items-center justify-between">
                                  <p>thx! meet me there at 8pm???</p>
                                  <time className="text-base">9:40 AM</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*END-MESSENGER-INTRO*/}
                  {/*MESSENGER-MESSAGE*/}
                </div>
              </section></main></div>
        </div>
        {/* second */}
        <section style={{marginTop: '130px', marginLeft: '30px'}} id="about">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block md:py-48 pb-12">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={MessengerMessage}/>
                </div>
              </div>
              <div className="flex flex-col px-8 order-second md:order-last justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Unlimited Benefits of using PCNP’s Web3.0 with dVPN&nbsp;</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-6 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  With dVPN, users can connect to any public Wi-Fi network safely, zero censorship to stream regionally blocked websites or content, prevent your ISP from tracking your online activities, and prevent price discrimination for online shopping <br /><br />
                  dVPN gives more security for online banking and online purchases, unblocks banned social media apps, and PCNP users browse anonymously using Web 3.0.
                </p>
              </div>
            </div>
          </div> 
        </section>
        {/* third */}
        <section style={{marginLeft: '30px'}} id="our-coin">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <div className="mx-auto flex justify-center items-center md:block pb-16 md:pt-48">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={MessengerPayments} />
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-6 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Economically Sustainable dVPN</h3>
                <p style={{color: '#fff'}} className=" mt-6 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Stake your PCNP tokens to earn rewards from mining, selling, or sharing your extra bandwidth and also get paid to watch ads. PCNP aims to introduce a more democratic, user-friendly, and economically sustainable dVPN</p>
              </div>
              <div className="px-8 mb-24 md:mb-0">
                <div className="mx-auto flex justify-center items-center md:block pb-16 md:pt-48">
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Accessible Online Browsing with dVPN</h3>
                <p style={{color: '#fff'}} className=" mt-6 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">With dVPN let you use the regionally blocked sites and social media apps with zero hassle. Experience the freedom to use the latest browser where you watch ads if you want and earn more PCNP tokens</p>
              </div>
            </div>
          </div>
        </section>
        {/* 
Benefits */}
        <section style={{marginTop: '120px'}} className="pb-32 lg:pb-48 pt-32 lg:pt-0">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
            <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Why PCNP’s dVPN is better for Browsing?&nbsp;</h3>
            <ul className="grid md:grid-cols-3 mt-16 gap-24">
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
                <MessengerBenefit1  />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Stake PCNP Tokens &amp; Earn Mining Rewards&nbsp;</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Secure the integrity of PCNP’s open-source dVPN by staking your PCNP Tokens and earning rewards in crypto tokens by becoming a bandwidth miner.&nbsp;&nbsp;
                  </p>
                </div>
              </li>
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
                <MessengerBenefit2  />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Sell your Extra Left-over Bandwidth &amp; Earn Crypto</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Pay for the bandwidth you use only and share the left-over by selling the leftover bandwidth and earn in crypto tokens.&nbsp;&nbsp;</p>
                </div>
              </li>
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
                <MessengerBenefit3 />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Connect to the Internet on the go&nbsp;</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Set up a node and connect with dVPN anywhere anytime. Users can connect without worrying about being scanned, tracked, blocked, or attacked by any third party.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* peer-to-peer */}
        <section style={{marginLeft: '30px'}} id="our-coin" className="text-white relative z-10 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Zero Censorships &amp; No Online Tracking</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-12 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">User’s demand for dVPN to attain complete autonomy over any online information, no online surveillance tracking activities and geo-positioning, no personal data shared with shopping sites or any third party.</p>
                <div className="flex">
                  <a style={{marginTop: '20px'}} href="https://our.PCNP.io/peer-to-peer-messaging-where-whisper-falls-short-and-waku-picks-up/" className=" btn-lg new-btn btn-gradient-purple btn-glow mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Learn More</a>
                </div>
              </div>
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block">
                  <video className="hidden max-w-none md:block" autoPlay muted loop width={773} height={953}>
                    <source src="/video/messenger-p2p.webm" type="video/webm" />
                    <source src="/video/messenger-p2p.mp4" type="video/mp4" />
                  </video>
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={MessengerP2p} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{marginLeft: '30px'}}>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <div className="relative md:-mb-32 h-64 mt-auto w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={PrivateAndSecureBg} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center private-and-secure" data-sr-id={0} style={{visibility: 'visible'}}>
                    <div className="flex">
                      <div className="flex mr-6 items-end relative">
                        <div className="relative flex">
                          <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={PrivateAndSecureAvatar} style={{transform: 'scale(1)'}} />
                          <div className="absolute inset-0 flex items-center justify-center key z-index: 10 opacity-0" style={{opacity: 1, transform: 'translateX(0px) translateY(0px) scale(0) rotate(0deg)'}}>
                            <PrivateAndSecureKey  />
                          </div>
                        </div>
                      </div>
                      <div className="inner relative">
                        <div className="description py-6">
                          <p className="max-w-6xl text-black-600 md:text-4xl text-1xl font-display leading-snug px-12 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">hey, what is everyone up to <br className="hidden md:inline" />this long weekend?</p>
                        </div>
                        <div className="overlay h-full w-full justify-between px-16 items-center flex top-0 absolute" style={{opacity: 1}}>
                          <div className="text-white bold md:text-4xl text-1xl">1ßI30#{'{'}%3</div>
                          <div className="lock relative">
                            <PrivateAndSecureLockBottom />
                            <PrivateAndSecureLockTop style={{transform: 'translateY(0px)'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-auto mt-12 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Watch Ads &amp; Earn PCNP <br /> Tokens</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 mb-20 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">With dVPN the power is back to the PCNP’s users, you have the authority to choose whether to watch advertisements or not, also getting 70% of the revenue from ads rewarded as PCNP tokens.</p>
              </div>
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pb-32 md:pb-0">
                <div className="mx-auto flex justify-center items-center md:block pb-16 md:pt-48">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src="./theme-assets/images/messenger-protection-2x.png" />
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-12 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Protected Privacy &amp; Anonymity with dVPN&nbsp;</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">The majority of the users use dVPN to maintain privacy by remaining anonymous about their online activities while browsing, shopping, or transacting funds online via Web 3.0. PCNP makes sure to fulfill dVPN’s purpose to attain users’ trust and need to browse &amp; scroll online with any surveillance.
                </p>
                <a href="https://our.PCNP.io/the-life-of-a-message/" target="_blank" className="group inline-flex group items-center text-primary-base font-semibold font-special mt-6 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Learn More
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear"><img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src="./theme-assets/images/icon-arrow-right.svg" /></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-2xl mx-auto lg:py-48 lg:px-20">
            <div className="grid md:grid-cols-1">
              <div className="flex flex-col justify-center text-white lg:xl-48 px-8 items-center py-32 ">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Have Questions? Check out the FAQ</h3>
                <a href="/faq/#messenger" target="_blank" className="group inline-flex group items-center mt-12 text-white font-semibold font-special animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Frequently Asked Questions
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite  /></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}