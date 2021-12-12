
export const FAQ = () =>{
    return (
        <>
        <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="heading text-center">
            <div className>
              <h6 className="sub-title">JOIN US</h6>
              <h2 className="title">Contact</h2>
            </div>
            <p className="content-desc ">Have questions? We’re happy to help.</p>
          </div>
          <div className="row">
            <div className="col-xl-8 col-md-12 mx-auto">
              <ul className="list-unstyled contact-info pb-5 mb-5">
                <li className>
                  <i className="ti-headphone" />
                  <span className="ml-1">+44 0123 4567</span>
                </li>
                <li className>
                  <i className="ti-email" />
                  <span className="ml-1">infopcnp@gmail.com</span>
                </li>
                <li className>
                  <i className="ti-comment-alt" />
                  <span className="ml-1">Join us on Telegram</span>
                </li>
              </ul>
              <form action="#" method="post" acceptCharset="utf-8" className="text-center">
                <input type="text" className="form-control" name="name" placeholder="Your Name" />
                <input type="text" className="form-control" name="mail" placeholder="Your Mail" />
                <input type="text" className="form-control" name="message" placeholder="Your Massage" />
                <button type="submit" className="btn btn-lg btn-gradient-purple btn-glow">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>


        </>
    )
}