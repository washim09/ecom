const Home = () => {
  return (
    <>
      <div className="hero_area">
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Task</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="catalogueDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Catalogue
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="catalogueDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Hair care
                    </a>
                    <a className="dropdown-item" href="#">
                      Stress care
                    </a>
                    <a className="dropdown-item" href="#">
                      Health care
                    </a>
                    <a className="dropdown-item" href="#">
                      Beard care
                    </a>
                    <a className="dropdown-item" href="#">
                      Beauty care
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="why.html">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">
                    Legacy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <a href="">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </a>
                <form className="form-inline ">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        {/* end header section */}
        {/* slider section */}

        <section className="slider_section">
          <div className="slider_container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>Welcome To Banner</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="img-box">
                          <img src="assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                      <div className="detail-box">
                          <h1>Welcome To Banner</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="img-box">
                          <img src="assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                      <div className="detail-box">
                          <h1>Welcome To Banner</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="img-box">
                          <img src="assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                      <div className="detail-box">
                          <h1>Welcome To Banner</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="img-box">
                          <img src="assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                      <div className="detail-box">
                          <h1>Welcome To Banner</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="img-box">
                          <img src="assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <img src="assets/images/line.png" alt="" />
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end slider section --> */}
      </div>
    </>
  );
};

export default Home;
