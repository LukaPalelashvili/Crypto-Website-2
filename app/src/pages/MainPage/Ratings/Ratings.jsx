import IconArrow from '../../../images/icon-arrow.png'
import IcoTrack from '../../../images/ico-track.png'
import IcoBench from '../../../images/ico-bench.png'
import IcoRanker from '../../../images/ico-ranker.png'
import IcoBazaar from '../../../images/ico-bazaar.png'

export const Ratings = () => {
  return (
    <section
      style={{ marginTop: '90px' }}
      className="exchange-listing"
      id="exchange-listing"
    >
      <div className="container-fluid bg-color">
        <div className="container">
          <div className="row listing list-unstyled">
            <div
              className="col d-none d-lg-block text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              <img src={IconArrow} alt="icon-arrow" />
              <p className="mt-1">
                Exchange listing
                <br />
                to be announced
              </p>
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h2>4.3/5</h2>
              <img src={IcoTrack} alt="ico-track" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <h2>4.8/5</h2>
              <img src={IcoBench} alt="ico-bench" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              <h2>3.9/5</h2>
              <img src={IcoRanker} alt="ico-ranker" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <h2>4.1/5</h2>
              <img src={IcoBazaar} alt="ico-bazaar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
