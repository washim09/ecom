const OurBestSeller = () => {
  return (
    <>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Bestseller</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p1.png" alt="Item 1" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 1</h6>
                    <h6>
                      Price
                      <span>$200</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p2.png" alt="Item 2" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 2</h6>
                    <h6>
                      Price
                      <span>$300</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p3.png" alt="Item 3" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 3</h6>
                    <h6>
                      Price
                      <span>$110</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            {/* Item 4 */}
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p4.png" alt="Item 4" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 4</h6>
                    <h6>
                      Price
                      <span>$45</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p5.png" alt="Item 5" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 5</h6>
                    <h6>
                      Price
                      <span>$95</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="assets/images/p6.png" alt="Item 6" />
                  </div>
                  <div className="detail-box">
                    <h6>Item 6</h6>
                    <h6>
                      Price
                      <span>$70</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBestSeller;
