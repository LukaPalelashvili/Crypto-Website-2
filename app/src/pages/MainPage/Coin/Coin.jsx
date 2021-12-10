import OurCoin from '../../../images/our-coin.png'

export const Coin = () => {
  return (
    <section id="our-coin" className="our-coin section-padding ">
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">About coin</h6>
            <h2 className="title">PCNP’s Crypto-Coins</h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            PCNP has already introduced its users with its cryptocurrency known
            as “CIC COINS.” To make blockchain mining and trading more feasible
            for PCNP users.{' '}
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-5 col-md-12 animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.6s"
          >
            <div className="coin-img">
              <img className="img-fluid" src={OurCoin} alt="Coin Image" />
            </div>
          </div>
          <div style={{ marginTop: '60px' }} className="col-lg-7 col-md-12">
            <div className="heading mb-4">
              <h4
                className="title animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
              >
                CIC Coin
              </h4>
            </div>
            <p
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              CIC Coins offers numerous utilities to its owners and PCNP’s
              users. Enjoy the exclusive perks of being a CIC Coin owner as we
              have regular giveaways, airdrops, Blinbox campaigns, DAO support,
              and more opportunities to grow within the PCNP community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
