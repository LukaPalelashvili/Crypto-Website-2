import Pcn0Copy from '../../images/pcn0- Copy.png';
import BrowserDefi from '../../images/browser-defi-2x.png';
import { ReactComponent as BrowserGames } from '../../images/browser-games.svg';
import { ReactComponent as BrowserCommunity } from '../../images/browser-community.svg';
import { ReactComponent as BrowserLogos } from '../../images/browser-logos.svg';
import { ReactComponent as IconArrowRightWhite } from '../../images/icon-arrow-right-white.svg';








export const Web3Browser = () => {
    return (
        <>
         <main>{/* Header: 3D Animation */}
        {/*BROWSER-INTRO*/}
        <section style={{marginTop: '90px', marginLeft: '30px'}} className="pt-16 xl:pt-0 head-area" id="head-area">
          <div id="particles-js" />
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2">
              <div className="relative px-8 self-center xl:mb-32">
                <span className="w-screen absolute -z-1 right-0 h-full" />
                <h1 style={{color: '#fff'}} className="leading-tight font-display text-6xl xl:text-7xl 2xl:text-8xl ">Private &amp; Secure Web3 Browser With Free VPN Service</h1>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl 2xl:text-4xl font-display font-normal leading-normal ">
                  Access the latest defi dapps, exchanges, marketplaces, games and more with the Web3 Browser <br />   <br /> Soon on
                </p>
                {/* <div className="flex items-center -ml-12 mt-12 ">
                  <a src="https://apps.apple.com/us/app/PCNP-private-communication/id1178893006" target="_blank" rel="noopener" id="official:ios" className="ml-12 app-download"><img src="theme-assets/images/app-store.svg" /></a>
                  <a src="https://play.google.com/store/apps/details?id=im.PCNP.ethereum" target="_blank" rel="noopener" id="official:apk" className="ml-8 xs:ml-4 app-download"><img src="theme-assets/images/google-play.svg" /></a>
                  <a src="https://PCNP-im-files.ams3.cdn.digitaloceanspaces.com/PCNPIm-Mobile-v1.14.0-d1a3a2.apk" target="_blank" rel="noopener" id="official:apk" className="ml-8 xs:ml-4 app-download"><img src="theme-assets/images/apk.svg" /></a>
                  <a src="https://f-droid.org/packages/im.PCNP.ethereum/" target="_blank" rel="noopener" id="official:fdroid" className="ml-8 xs:ml-4 app-download"><img src="theme-assets/images/fdroid.svg" /></a>
                </div> */}
              </div>
              <div className="relative mt-24 md:mt-0">
                <div className="md:-mt-24 mx-auto flex justify-center items-center md:block md:pt-20">
                  <img className src={Pcn0Copy} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-BROWSER-INTRO*/}
        {/*BROWSER-DEFI*/}
        <section style={{marginLeft: '30px'}} className="mt-12 text-white ">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="flex flex-col px-8 justify-center items-start md:pt-0 pt-32">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Absolute Anonymity &amp; Security For Web3 Browser Users</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">With Web 3.0 Browser gets access to the latest DApps, Crypto Exchanges &amp; NFT marketplaces, Crypto Games, and other latest tech platforms</p>
                <a style={{padding: '1rem 3rem', marginTop: '20px'}} href className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Explore Defi DApps</a> 
              </div>
              <div className="px-8">
                <div className="mx-auto flex justify-center items-center md:block md:pt-20">
                  <img className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s" src={BrowserDefi} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-BROWSER-DEFI*/}
        {/*BROWSER-GAMES*/}
        <section className="mt-12">
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <div className="mx-auto flex justify-center items-center md:block lg:pt-48">
                  <BrowserGames />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:px-48 px-8 items-start md:pt-0 lg:pt-48 pt-12 order-first md:order-last">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">Secure Tradings, Profitability with Savings Using De-Fi</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">Utilize rapidly evolving De-Fi tools &amp; services in mobile version with PCNP to get maximum benefits using them.
                </p>
                <a style={{padding: '1rem 3rem', marginTop: '20px'}} href className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">See all DApps</a> 
              </div>
            </div>
          </div>
        </section>
        {/*END-BROWSER-GAMES*/}
        {/*BROWSER-COMMUNITY*/}
        <section style={{marginLeft: '25px'}} className="mt-12">
          <div className="max-w-screen-2xl mx-auto lg:px-12 pb-24 lg:pb-64">
            <div className="grid md:grid-cols-2 gap-24 lg:pt-48 pt-16">
              <div className="flex flex-col justify-center lg:xl-48 px-8 items-start md:pt-0">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Explore Exciting Gaming, Crypto &amp; NFT marketplaces Freely</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">Unlock and Explore various Crypto Exchanges, Crypto Games, NFT, Tokens, and crypto-related marketplaces to stay updated and win airdrops, giveaways, rewards, more….</p>
                <a style={{padding: '1rem 3rem', marginTop: '20px'}} href className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Learn More</a> 
              </div>
              <div className="mx-auto flex justify-end items-center lg:px-0 px-8">
                <div className="mx-auto flex justify-end items-center">
                  <BrowserCommunity  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END-BROWSER-COMMUNITY*/}
        {/*BROWSER-SUBMIT*/}
        <section className="mt-12">
          <div className="max-w-screen-2xl mx-auto lg:px-12 ">
            <div className="grid md:grid-cols-8 lg:pt-48 pt-32">
              <div className="flex flex-col justify-center md:col-start-3 md:col-span-4 lg:xl-48 px-8 items-center md:pt-0">
                <h3 style={{color: '#fff'}} className="font-display text-4xl xl:text-5xl 2xl:text-6xl text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Discover Dapps Curated by Community Members</h3>
                <p style={{color: '#fff'}} className="text-gray-600 mt-12 text-xl text-center font-display animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Dap.ps allows PCNP stakeholders to explore DApps available and sort out the best one for them. Dap.ps is deployed DApp by a third-party community, where you can navigate in various categories and ratings. DApp developers need to deposit SNT to signal and curate their DApp to gain spotlight attention.&nbsp;</p>
                <a style={{padding: '1rem 3rem', marginTop: '20px'}} href className="btn  btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="1.7s">DApp Integration Center</a> 
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:pt-48 pt-32">
            <div className="mx-auto flex justify-end items-center lg:px-0 w-full">
              <div className="mx-auto flex justify-end items-center w-full">
                <BrowserLogos className="w-full hidden md:flex" />
              </div>
            </div>
          </div>
        </section>
        {/*END-BROWSER-SUBMIT*/}
        {/*FAQ-BANNER*/}
        <section>
          <div className="max-w-screen-2xl mx-auto lg:py-48 lg:px-20">
            <div className="grid md:grid-cols-1">
              <div className="flex flex-col justify-center text-white lg:xl-48 px-8 items-center py-32">
                <h3 className="font-display text-4xl xl:text-5xl 2xl:text-6xl text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Have Questions? Check out the FAQ</h3>
                <a href="/faq/#browser" target="_blank" className="group inline-flex group items-center  font-semibold font-special mt-12 animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Frequently Asked Questions
                  <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear"><IconArrowRightWhite /></span>
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