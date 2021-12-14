// import '../../css/main.css';

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
// import '../../css/main.css';
import '../../css/PCN-3d-animation2.css';
import '../../css/our.css';
import '../PrivateMessenger/private.css'






const css = {
      
    fontSize: '10px'
  

}

export const PrivateMessenger  = () => {
    return (
        <>
        

            <div className="content-wrapper" style={css}>
      <div className="content-body" style={css}>
        <main>
        <section style={{marginTop: '150px'}} className="pt-16 xl:pt-0">
              <div className="max-w-screen-2xl mx-auto lg:px-12">
                <div className="grid md:grid-cols-2">
                  <div style={{marginBottom: '1rem'}} className="relative px-8 self-center xl:mb-32">
                    <h1 style={{fontSize: '4.8rem', lineHeight: '4.75rem'}} className="leading-tight font-display text-6xl font-medium xl:text-7xl 2xl:text-8xl">Privacy-Driven  <br /> Messenger&nbsp;</h1>
                    <p style={{fontFamily: 'Comfortaa,Roboto,"Helvetica Neue",Arial,sans-serif', color: '#fff'}} className="text-gray-600 mt-10 mb-16 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                      &nbsp;Start various chats without worrying about third-party surveillance. PCNP Users take full advantage of our immensely private messengers with options to initiate one to one or group chats along with a built-in global payment feature.&nbsp; <br /> <br />
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
                              <PrivateAndSecureLockTop className="absolute top-0" />
                               top
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
          
        {/* second */}
        <section style={{marginTop: '130px', marginLeft: '30px'}} id="about">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block md:py-48 pb-12">
                  
                  <img src={MessengerMessage}  />
                </div>
              </div>
              <div className="flex flex-col px-8 order-second md:order-last justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Define Your Texting Privacy On Your Own Terms&nbsp;&nbsp;</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-6 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Chat the way you want to. Go for a secretive chat with one specific peer,&nbsp; create exclusive group chats or go for public chats to connect &amp; communicate with your community.<br /><br />
                  &nbsp;
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
                 <img src={MessengerPayments} alt="" />
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-6 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Create, Trade and Earn with NFT’s&nbsp;</h3>
                <p style={{color: '#fff'}} className=" mt-6 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Unlock the opportunity to earn PNCP tokens by creating &amp; sending your own stickers in the Decentralized NFT marketplace</p>
              </div>
              <div className="px-8 mb-24 md:mb-0">
                <div className="mx-auto flex justify-center items-center md:block pb-16 md:pt-48">
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Hassle-Free Payments via Crypto Wallets</h3>
                <p style={{color: '#fff'}} className=" mt-6 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">PCNP’s privacy-driven messenger lets its privileged users gain accessibility over direct global payments in chats using our integrated Crypto-Wallet.&nbsp;</p>
              </div>
            </div>
          </div>
        </section>
        {/* 
Benefits */}
        <section style={{marginTop: '120px'}} className="pb-32 lg:pb-48 pt-32 lg:pt-0">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
            <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Why Download &amp; Use PCN protocol Software?&nbsp;</h3>
            <ul className="grid md:grid-cols-3 mt-16 gap-24">
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
                <MessengerBenefit1 />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Anonymous Account Generation&nbsp;</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Users are not requested to submit personal details including smartphone contact numbers, email address or bank accounts to create a PCNP account.&nbsp;&nbsp;
                  </p>
                </div>
              </li>
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
              <MessengerBenefit2 />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Zero-Censorship&nbsp;</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">No more censoring from any third party as PCNP removes all the third-party choke points.&nbsp;</p>
                </div>
              </li>
              <li className="text-gray-200 text-2xl xl:text-5xl flex items-start">
              <MessengerBenefit3 />
                <div className="ml-8">
                  <h4 style={{color: '#fff'}} className="mb-12 text-2xl xl:text-4xl font-display text-gray-900 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Open - Source with No Installation Fee</h4>
                  <p style={{color: '#fff'}} className="text-gray-900 text-xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">&nbsp;PCNP is open-source software that can be reviewed by anyone and is free to install by anyone anywhere.
                  </p>
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
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">P2P Secure Messaging</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-12 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">With PCNP, you can have peer-to-peer chats without worrying about third-party interference or surveillance. PCNP messaging has removed all centralized choke points to lever up the privacy of the P2P network.</p>
                <div className="flex">
                  <a style={{padding: '1rem 3rem', marginTop: '20px'}} href className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Learn More</a> 
                </div>
              </div>
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block">
                  <video className="hidden max-w-none md:block" autoPlay muted loop width={773} height={953}>
                    <source src="/video/messenger-p2p.webm" type="video/webm" />
                    <source src="/video/messenger-p2p.mp4" type="video/mp4" />
                  </video>
                 <img src={MessengerP2p} alt="" />
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
                   <img src={PrivateAndSecureBg} alt="" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center private-and-secure" data-sr-id={0} style={{visibility: 'visible'}}>
                    <div className="flex">
                      <div className="flex mr-6 items-end relative">
                        <div className="relative flex">
                          <img src={PrivateAndSecureAvatar } style={{transform: 'scale(1)'}} alt="" />
                          <div className="absolute inset-0 flex items-center justify-center key z-index: 10 opacity-0" style={{opacity: 1, transform: 'translateX(0px) translateY(0px) scale(0) rotate(0deg)'}}>
                            <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={PrivateAndSecureKey} />
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
                            <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={PrivateAndSecureLockBottom } />
                            <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={PrivateAndSecureLockTop } style={{transform: 'translateY(0px)'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-auto mt-12 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Direct End-to-End Encryption for Private Texting </h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 mb-20 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">PCNP direct messaging works using end-to-end encryption that provides accessibility to private chats to you and your recipient only.&nbsp;</p>
              </div>
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pb-32 md:pb-0">
                <div className="mx-auto flex justify-center items-center md:block pb-16 md:pt-48">
                 <IconArrowRightWhite />
                </div>
                <h3 style={{color: '#fff'}} className="font-display text-4xl mt-12 xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Ultimate Freedom with PCNP Secure Messaging</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">PCNP messaging is designed to maintain maximum text privacy even if somehow compromised. Modified Version of double ratchet algorithm that stops access to previous and future encrypted texts.&nbsp;
                </p>
                <a href="https://our.PCNP.io/the-life-of-a-message/" target="_blank" className="group inline-flex group items-center text-primary-base font-semibold font-special mt-6 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Learn More
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear">
                       <IconArrowRightWhite  /> 
                  </span>
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
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear">
                      <IconArrowRightWhite />
                      </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
        </>
    )
}