import Picture1 from '../../../images/images slider/picture1.png'
import Picture2 from '../../../images/images slider/picture2.png'
import Picture3 from '../../../images/images slider/picture3.png'
import Picture4 from '../../../images/images slider/picture4.png'
import Picture5 from '../../../images/images slider/picture5.png'

export const Slider = () => {
  return (
    <div className="col-lg-6 header-first-main-text col-md-12 ">
      <div
        // style={{ width: '570px', marginTop: '70px' }}
        className="wpsisac-slick-carousal-wrp wpsisac-clearfix "
        data-conf='{"slidestoshow":"3","slidestoscroll":1,"dots":"true","arrows":"true","autoplay":"true","autoplay_interval":3000,"speed":300,"rtl":"false","centermode":"true","lazyload":"","variablewidth":"false","loop":"true","hover_pause":"true"}'
      >
        <div
          style={{
            width: '600px',
            marginTop: '40px !important'
          }}
          id="wpsisac-slick-carousal-7"
          className="wpsisac-slick-init wpsisac-slick-carousal design-6 wpsisac-image-fit wpsisac-center"
        >
          <div className="wpsisac-image-slide">
            <a href>
              {' '}
              <div
                className="wpsisac-image-slide-wrap"
                // style={{ height: '400px' }}
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
              // style={{ height: '400px', transform: 'scale(1.5)' }}
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
                // style={{ height: '400px' }}
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
              // style={{ height: '400px' }}
            >
              <img src={Picture4} alt="Dream Homes: North Penthouse Listed" />
            </div>
          </div>
          <div className="wpsisac-image-slide">
            <a href>
              {' '}
              <div
                className="wpsisac-image-slide-wrap"
                // style={{ height: '400px' }}
              >
                <img
                  src={Picture5}
                  alt="Kerala: They call it Own Country for nothing"
                />
              </div>
            </a>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
