// import ProblemsGraphic from '../../..//images/problems-graphic.png'
import Challanges from '../../../images/isometric1.png';
import SuccessesGraphic from '../../../images/isometriccloud.png';
// import SolutionsGraphic from '../../..//images/solutions-graphic.png'

export const Successes = () => {
  return (
    <section
      id="problem-solution"
      className="problem-solution section-pro section-padding"
    >
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">SUCCESSES</h6>
            <h2 className="title">
              CHALLENGES &amp; <strong>SUCCESSES</strong>
            </h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            More than $40 million in assets were placed under restraint pending
            forfeiture, and more than 30
            <br className="d-none d-xl-block" />
            Liberty Reserve exchanger domain names were seized.
          </p>
        </div>
        <div className="problems">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="heading mb-4">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  CHALLENGES
                </h4>
              </div>
              <p
                className="prosto"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                Getting different internet factors to work together in
                synchronization to get maximum and highly efficient outputs is
                one of the main challenges.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                For the sake of productivity, the strategy of interoperating
                between the new technologies &amp; old centralized resources
                like upgrading from Web 2.0 to 3.0. The intra- operative move
                proved to be a game-changer.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
              >
                <span
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 'bolder',
                    fontFamily: 'Arial, Helvetica, sans-serif'
                  }}
                >
                  PCNP
                </span>{' '}
                owns the data as it helps us leverage our quality services by
                telling the user privacy rights, what we do and what we have and
                created on various platforms.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                Now a new challenge arises in front of us, how PCNP can put
                together this intraoperative strategy by mingling new Tech with
                old centralized resources in a highly productive, cohesive
                manner.
              </p>
            </div>
            <div className="col-md-12 col-lg-6 text-center">
              <img
                src={Challanges}
                className="problems-img animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                alt="problems-graphic"
              />
            </div>
          </div>
        </div>
        <div className="solutions mt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 text-center">
              <img
                src={SuccessesGraphic}
                className="solutions-img animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                alt="problems-graphic"
              />
            </div>
            <div className="col-md-12 col-lg-6 move-first">
              <div className="heading mb-4">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  SUCCESSES
                </h4>
              </div>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                Mutual Agreement by autonomous voting has proven to be the most
                cost-effective &amp; feasible strategy to solve the challenges
                faced by PCNP.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                PCNP is relentlessly resourceful as we are growing at a fast
                pace with steady gains in capital. We recognize our
                responsibility to serve PCNP’s Token holders with the best
                autonomous system by eliminating the possible inefficacies in
                our organization.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
              >
                We tackle challenges in the most optimal way by investing the
                least time, capital, and resources to achieve the best solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
