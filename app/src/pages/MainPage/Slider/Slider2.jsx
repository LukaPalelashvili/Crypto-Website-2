import Picture1 from '../../../images/images slider/picture1.png'
import Picture2 from '../../../images/images slider/picture2.png'
import Picture3 from '../../../images/images slider/picture3.png'
import Picture4 from '../../../images/images slider/picture4.png'
import Picture5 from '../../../images/images slider/picture5.png'
import Slider from 'react-slick'

export const Slider2 = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings}>
      <div className="col-lg-6 header-first-main-text col-md-12 ">
        <div style={{ width: '570px', marginTop: '70px' }}>
          <div
            style={{
              width: '600px',
              marginTop: '40px !important'
            }}
          >
            <div className="wpsisac-image-slide">
              <a href>
                {' '}
                <div
                  className="wpsisac-image-slide-wrap"
                  style={{ height: '400px' }}
                >
                  <img
                    src={Picture1}
                    alt="1-The urban farmers battling Bangalore’s jungle"
                  />
                </div>
              </a>
            </div>
            <div className="wpsisac-image-slide">
              <div
                className="wpsisac-image-slide-wrap"
                style={{ height: '400px' }}
              >
                <img
                  src={Picture2}
                  alt="The Head of Design at Ikea on Sampling  Versus"
                />
              </div>
            </div>
            <div className="wpsisac-image-slide">
              <a href>
                {' '}
                <div
                  className="wpsisac-image-slide-wrap"
                  style={{ height: '400px' }}
                >
                  <img
                    src={Picture3}
                    alt="This flagship coffee shop is about to disappear"
                  />
                </div>
              </a>
            </div>
            <div className="wpsisac-image-slide">
              <div
                className="wpsisac-image-slide-wrap"
                style={{ height: '400px' }}
              >
                <img src={Picture4} alt="Dream Homes: North Penthouse Listed" />
              </div>
            </div>
            <div className="wpsisac-image-slide">
              <a href>
                {' '}
                <div
                  className="wpsisac-image-slide-wrap"
                  style={{ height: '400px' }}
                >
                  <img
                    src={Picture5}
                    alt="Kerala: They call it Own Country for nothing"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
