import WalletIntro from '../../images/wallet-intro-2x.png'
import Pcnp1112Copy from '../../images/pcnp1112 - Copy.png'
import WalletSecurity from '../../images/wallet-security-2x.png'
import WalletPayments from '../../images/wallet-payments-2x.png'
import WalletDapps from '../../images/wallet-dapps-2x.png'
import { ReactComponent as WalletAccounts } from '../../images/wallet-accounts.svg'
import WalletKeycard from '../../images/wallet-keycard-2x.png'
import { ReactComponent as IconArrowRightWhite } from '../../images/icon-arrow-right-white.svg'






export const SecureCryoto = () => {
    return (
        <>
             <section style={{marginTop: '100px', marginLeft: '30px'}} className="pt-16 xl:pt-0 head-area" id="head-area about">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div id="particles-js" />
            <div className="grid md:grid-cols-2">
              <div className="relative px-8 self-center xl:mb-32">
                <span className="w-screen absolute -z-1 right-0 h-full" />
                <h1 style={{color: '#fff'}} className="leading-tight font-display text-6xl xl:text-7xl 2xl:text-8xl ">A Crypto Super Wallet</h1>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                  With the secure, non-custodial PCNP Wallet, you are in complete control of your funds. <br /> 
                  <br /> Soon on
                </p>
              
              </div>
              <div className="relative mt-24 md:mt-0">
                <div className="md:-mt-24 mx-auto -ml-12 -mr-12 md:ml-0 md:mr-0 flex justify-end items-center md:pt-20">
                  <video width={662} height={756} className="hidden md:block" autoPlay muted loop>
                    <source src="/video/wallet-intro.webm" type="video/webm" />
                    <source src="/video/wallet-intro.mp4" type="video/mp4" />
                  </video>
                  <img className src={WalletIntro} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-WALLET-INTRO*/}
        {/*WALLET-FUND*/}
        <section style={{marginLeft: '30px'}} className="mt-12 text-white">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block md:py-48 pb-12">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={Pcnp1112Copy}/>
                </div>
              </div>
              <div className="flex flex-col px-8 order-first md:order-last justify-center items-start md:pt-0 pt-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Zero Third-Party Interference in Crypto-Wallet &amp; Fund Transaction</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-12 text-xl font-display leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">With PCNP crypto-wallet experience absolute freedom to send, receive and transact your funds including Eth, PCNP, DAI, NFT. User’s crypto-wallets activity and transaction trails are entirely non-custodial with zero interference from governments, banks, or PCNP.
                </p>
                <a style={{marginTop: '20px', animationDelay: '1.8s', opacity: 1}} href="https://our.PCNP.io/inside-the-non-custodial-wallet/" className="btn-lg new-btn btn-gradient-purple btn-glow mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        {/*END-WALLET-FUNDS*/}
        {/*WALLET-SECURITY*/}
        <section style={{marginLeft: '30px'}}>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Security-Driven Design</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display  leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Your digital assets are safe with PCNP as designed using the latest security design to secure you from anti-phishing, personal info hacking &amp; online scamming. With our security-driven design, your public &amp; private keys are safe within the PCNP wallet.&nbsp;</p>
                <div className="flex">
                  <a style={{marginTop: '20px', animationDelay: '1.8s', opacity: 1}} href="https://specs.PCNP.io/spec/2#initial-key-generation/" className="btn-lg new-btn btn-gradient-purple btn-glow mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.8s">View the Specs</a>
                </div>
              </div>
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block pb-32 md:py-48">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={WalletSecurity}  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-WALLET-SECURITY*/}
        {/*WALLET-PAYMENTS-DAPPS*/}
        <section style={{marginLeft: '30px'}}>
          <div className="max-w-screen-2xl mx-auto lg:px-12 md:mt-20">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <span className="w-screen absolute -z-1 right-0 h-full" />
                <div className="h-full px-8 py-32 md:p-32 lg:pr-64 lg:pl-8">
                  <div className="row">
                    <div className="col-md-11 flex flex-col col-lg-10">
                      <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={WalletPayments} />
                      <div className="order-first md:order-last mb-16 md:mb-0">
                        <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-6xl mt-4 md:mt-24 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Unlimited Benefits with De-Fi based DApp Browser &amp; Wallet</h3>
                        <p style={{color: '#fff'}} className="text-xl mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">&nbsp;
                          Unleash the opportunities to gain multiple profits from DApp web 3.0 based browser. PCNP De-Fi crypto-wallet is user-centric and integrated with the latest tech making crypto-trading more accessible.&nbsp;PCNP users can earn and trade tokens, NFTs, Crypto-coins, and more using our browser, wallet, and messaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative md:-mt-16">
                <span className="w-screen absolute -z-1 left-0 h-full" />
                <div className="h-full flex flex-col space-between px-8 py-32 md:p-32 text-white">
                  <div className="flex-1">
                    <h3 className="font-display text-4xl xl:text-6xl mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s"> WorldWide Accessibility For Your Crypto Transactions</h3>
                    <p style={{color: '#fff'}} className="text-xl mt-4 text-gray-300 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">PCNP Wallet is designed to solve the user’s transactional hassles. Now you can send &amp;&nbsp; receive global payments within a snap of time to anyone from anywhere.</p>
                    <a style={{marginTop: '20px', animationDelay: '1.8s', opacity: 1}} href="https://dap.ps/" className="btn-lg new-btn btn-gradient-purple btn-glow mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Learn More</a>
                  </div>
                  <div className="mt-20 order-1 md:order-none -ml-8 -mr-8 md:mx-0 mb-12 md:mb-0 md:mt-48">
                    <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={WalletDapps}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-WALLET-PAYMENTS-DAPPS*/}
        {/*WALLET-ACCOUNTS-KEYCARD*/}
        <section>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2">
              <div className="relative md:-mb-16 order-2 md:order-none">
                <span className="w-screen absolute -z-1 right-0 h-full" />
                <div className="h-full px-8 md:p-32 lg:pr-64 lg:pl-8 text-white flex flex-col space-between">
                  <div className="mt-12 mb-32 md:mb-0">
                    <WalletAccounts />
                  </div>
                  <div className="flex-1 mt-16 md:mt-32 order-first md:order-last">
                    <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-6xl mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Hardware Security with Keycard</h3>
                    <p style={{color: '#fff'}} className="text-xl text-gray-300 mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Add a layer of security to your account and funds with Keycard - the contactless hardware wallet.</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 md:order-none">
                <span className=" w-screen absolute -z-1 left-0 h-full" />
                <div className="h-full px-8 py-32 md:p-32">
                  <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-6xl mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Dedicated Separate Wallet Accounts for Every Task</h3>
                  <p style={{color: '#fff'}} className="text-xl text-gray-700 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Compartmentalize each of your accounts for personal &amp; professional specified tasks by creating special accounts for every task. Eliminate the risks of transitioning funds to the wrong recipients anymore.</p>
                  <a style={{padding: '1rem 3rem', marginTop: '20px'}} href="https://get.keycard.tech/" className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Learn More</a>
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={WalletKeycard} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-WALLET-ACCOUNTS-KEYCARD*/}
        {/*FAQ-BANNER*/}
        <section>
          <div className="max-w-screen-2xl mx-auto lg:py-48 lg:px-20">
            <div className="grid md:grid-cols-1">
              <div className="flex flex-col justify-center text-white lg:xl-48 px-8 items-center py-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Have Questions? Check out the FAQ</h3>
                <a href="/faq/#wallet" target="_blank" className="group inline-flex group items-center text-white font-semibold font-special mt-12 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Frequently Asked Questions
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}