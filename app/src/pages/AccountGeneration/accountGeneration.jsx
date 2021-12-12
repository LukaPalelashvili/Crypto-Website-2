import { ReactComponent as NoPhone } from '../../images/no-phone.svg';
import { ReactComponent as NoEmail } from '../../images/no-email.svg';
import { ReactComponent as NoBank  } from '../../images/no-bank.svg';
import  accountPcnp  from '../../images/accountpcnp.png';
import  accountCreationUsernames  from '../../images/account-creation-usernames-2x.png';
import  accountCreationKey from '../../images/account-creation-key-2x.png';
import  accountCreationStatus from '../../images/account-creation-status-2x.png';
import  accountCreationKeycard from '../../images/account-creation-keycard-2x.png';
import { ReactComponent as IconArrowRightWhite } from '../../images/icon-arrow-right-white.svg';










export const AccountGeneration = () => {
    return (
        <>
         <main>{/* Header: 3D Animation */}
        {/*MESSENGER-INTRO*/}
        {/*ACCOUNT-CREATION-INTRO*/}
        <section style={{marginTop: '80px', marginLeft: '30px'}} className="pt-16 xl:pt-0 head-area" id="head-area">
          <div id="particles-js" /> 
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div id="particles-js" />
            <div className="grid md:grid-cols-2">
              <div className="relative px-8 self-center xl:mb-32">
                <h1 style={{color: '#fff'}} className="leading-tight font-display text-6xl  xl:text-7xl 2xl:text-8xl "> Anonymous Account Generation</h1>
                <ul className="mt-16 mb-20">
                  <li style={{color: '#fff'}} className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                  <NoPhone className="mr-8 md:w-auto w-16" />
                  <span className> No phone number</span></li>
                  <li style={{color: '#fff'}} className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                  <NoEmail className="mr-8 md:w-auto w-16" />
                  <span className>No email address </span></li>
                  <li style={{color: '#fff'}} className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal">
                  <NoBank className="mr-8 md:w-auto w-16" />
                  <span className>No bank account</span></li>
                </ul>
                <br /> <span className style={{color: '#fff'}}> Soon on </span> 
               
              </div>
              <div className="relative mt-24 px-8 md:mt-0">
                <div className="md:-mt-24 mx-auto -ml-12 -mr-12 md:ml-0 md:mr-0 flex justify-end items-center md:pt-20">
                  <img className src={accountPcnp} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-ACCOUNT-CREATION-INTRO*/}
        {/*ACCOUNT-CREATION-USERNAMES*/}
        <section style={{marginLeft: '30px'}} id="about" className="mt-12 text-white">
          <div className="max-w-screen-2xl mx-auto lg:px-12 animated">
            <div className="grid md:grid-cols-2 md:grid-cols-8 gap-24">
              <div className="flex flex-col px-8 md:col-span-3 col-span-6 justify-center items-start md:pt-0 pt-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Maintained Anonymity with Pseudo-username&nbsp;</h3>
                <p style={{color: '#fff'}} className="text-gray-300 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Maintaining your anonymity with fun pseudo-username randomly generated for new accounts. The pseudo-name serves as your default username for perfect anonymity. PseudoUsername are designed randomly in [Adj. + Adj. + Animal Name]&nbsp; format.
                </p>
                <a style={{padding: '1rem 3rem', marginTop: '20px'}} href="https://our.pcnp.io/usernames-in-the-status-messenger/" className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Learn More about PCNP Usernames</a>
              </div>
              <div className="md:px-8 col-span-6 md:col-span-5">
                <div className="mx-auto flex justify-end items-center md:flex md:py-16 pb-12">
                  <img  src={accountCreationUsernames} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-ACCOUNT-CREATION-USERNAMES*/}
        {/*ACCOUNT-CREATION-KEY*/}
        <section>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="md:px-8">
                <div className="mx-auto flex -mt-24 md:mt-0 justify-center items-center md:block">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={accountCreationKey} />
                </div>
              </div>
              <div className="flex order-first md:order-last flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Exclusive Private-Key Generation to Ensure Security</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Private keys will be provided that are dedicated for access to chats and wallets exclusively generated for you. The private keys will be generated by BIP43 via a path derived from the BIP39 mnemonic phrase</p>
                <div className="flex">
                  <a style={{padding: '1rem 3rem', marginTop: '20px'}} href="/faq/#keys-and-accounts" className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Learn More about Key Generation</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-ACCOUNT-CREATION-KEY*/}
        {/*ACCOUNT-CREATION-STATUS*/}
        <section style={{marginLeft: '30px'}}>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Get Customized Username with ENS</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">By staking your 10 PCNP tokens you can register on ENS with a state of us. eth text-based-username in your profile tab. PCNP allows you to register with Ethereum Name Service (ENS) with your wallet address and associate with a custom text username reducing its anonymity.&nbsp;
                </p>
                <div className="flex">
                  <a style={{padding: '1rem 3rem', marginTop: '20px'}} href="form.html" className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Register a State of Us Username</a>
                </div>
              </div>
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center pb-24 md:block md:py-32">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={accountCreationStatus} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-ACCOUNT-CREATION-STATUS*/}
        {/*ACCOUNT-CREATION-STATUS*/}
        <section style={{marginLeft: '30px'}}>
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-8 gap-24">
              <div className="flex flex-col px-8 col-span-6 md:col-span-3 justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation-delay="0.2s">Enhance PNCP Account Protection With KeyCard&nbsp;</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">PCNP never leaves a minute loophole leading to a vulnerability in user’s privacy therefore experts introduced KeyCard. The keyCard is an extended hardware technology of a user's PCNP account. With KeyCard, PCNP users can get offline access to the account with just one tap of the card and pin.
                </p>
                <div className="flex">
                  <a style={{marginTop: '20px', animationDelay: '1.8s', opacity: 1}} href="/keycard-integration/" className="btn-lg new-btn btn-gradient-purple btn-glow mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Get a Keycard</a>
                </div>
              </div>
              <div className="px-8 md:col-span-5 col-span-6">
                <div className="mx-auto flex justify-center items-center md:py-32 pb-24">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s" src={accountCreationKeycard} />
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
        {/*END-ACCOUNT-CREATION-STATUS*/}
        {/*FAQ-BANNER*/}
        <section>
          <div className="max-w-screen-2xl mx-auto lg:py-48 lg:px-20">
            <div className="grid md:grid-cols-1">
              <div className="flex flex-col justify-center text-white lg:xl-48 px-8 items-center py-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Have Questions? Check out the FAQ</h3>
                <a href="/faq/#keys-and-accounts" target="_blank" className="group inline-flex group items-center font-semibold font-special mt-12 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Frequently Asked Questions
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear">
                      <IconArrowRightWhite  /></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*END-FAQ-BANNER*/}
      </main>
        </>
    )
}