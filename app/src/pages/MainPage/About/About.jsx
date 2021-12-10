import NewSmartPhonePhoto from '../../../images/new-smartphone-photo.png'

export const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">About</h6>
            <h2 className="title">What is PCN Protocol</h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            PCN Protocol aims to make crypto-trading easier, flexible, and
            accessible for everyone
            <br className="d-none d-xl-block" />
            by eliminating the barriers in algorithmic trading models.
          </p>
        </div>
        <div className="content-area">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h4
                className="title animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                PCN serves as a<br className="d-none d-xl-block" /> Medium for
                Crypto-Traders
              </h4>
              <h6
                className="pt-4 pb-2 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                PCNP is the User’s immensely secure communications tool in
                compliance with human privacy rights. Designed to be your
                ultimate stop to enjoy the endless benefits, including the Free
                Flow of Information, Protect Online Privacy Rights,
                Highly-Secured Conversations, Scam-proof Online Shopping
                Experiences, with Power of Advertisements returned to Users.
              </h6>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
              >
                PCNP founders try their best to provide practical tools for
                every benefit. The core values for our tools comprise
                Communications, Problem-solving thinking, &amp; Decentralized
                Decision-Making based on unbiased facts. The tools help PCNP to
                produce and execute error-free services for our privileged
                users.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                With Cryptocurrency trading and exchanges, the users or creators
                of the cryptocurrency are free and independent of the hectic
                dealings with the Digital Currency exchangers and providers
                (DCEs &amp; DCPs).
              </p>
            </div>
            <div
              className="col-md-12 col-lg-6 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              <div
                style={{ right: '60px' }}
                className="position-relative what-is-crypto-img float-xl-right"
              >
                <img
                  style={{ height: '500px' }}
                  className="img-fluid"
                  src={NewSmartPhonePhoto}
                  alt="What is Crypto?"
                />
                <div className="play-video text-center">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="play rounded-circle btn-gradient-purple btn-glow video-btn"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/UXAJu3zS4bU"
                    data-target="#ico-modal"
                  >
                    <i className="ti-control-play" />
                  </a>
                  {/* <span class="mt-2 d-none d-md-block">How it works</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
