const ProblemAndSolution = () => {
  return (
    <section className="slider_section">
      <div className="slider_container sap">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="img-box">
                      <img src="assets/images/slider-img.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="detail-box">
                      <h1>
                        Customer Problem & <br />
                        Solution
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur
                        impedit, eveniet non necessitatibus error distinctio
                        mollitia suscipit. Nostrum fugit doloribus consequatur
                        distinctio esse, possimus maiores aliquid repellat
                        beatae cum, perspiciatis enim, accusantium
                        perferendis.
                      </p>
                      <a href="">Reach Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
