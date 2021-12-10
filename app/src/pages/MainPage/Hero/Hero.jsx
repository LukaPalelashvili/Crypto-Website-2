import { Particles } from '../../../components/Particles'

export const Hero = () => {
  return (
    <section className="head-area" id="head-area">
      <div id="particle"></div>
      <div className="head-content d-flex align-items-center">
        <div className="container">
          <div className="banner-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 our-slider move-first">
                <div className="banner-content pt-5">
                  <h1 className="best-Template ">
                    PCN Protocol Brings the Ultimate{' '}
                    <br className="d-none d-xl-block" />
                    User Experience with <br className="d-none d-xl-block" />{' '}
                    Unbreachable Security
                  </h1>
                  <h3 className="d-block white ">
                    PCN Protocol is the 1st communication network built on{' '}
                    <br className="d-none d-xl-block" />
                    the Blockchain system to enable foolproof security{' '}
                    <br className="d-none d-xl-block" /> to users’ untrackable
                    internet usage with DVPN{' '}
                    <br className="d-none d-xl-block" /> using the latest Web
                    3.0.{' '}
                  </h3>
                  <div className="mt-5">
                    <a
                      href="#token-sale-mobile-app"
                      className="btn our-slider-but1 btn-lg btn-gradient-purple btn-glow mr-4 mb-2 "
                    >
                      Purchase Token
                    </a>
                    <a
                      href="#whitepaper"
                      className="btn btn-lg our-slider-but2 btn-gradient-purple btn-glow mb-2 "
                    >
                      Whitepaper
                    </a>
                  </div>
                </div>
              </div>
              {/*<Slider/>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
