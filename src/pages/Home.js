import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BlogCard } from "../components/BlogCard";
import { ProductCard } from "../components/ProductCard";
import { SpecialProduct } from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <Meta title={"Shop With Me"} />
      <BreadCrumb title="Shop With Me" />
      <section className="home-wrapper-1 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="left-banner p-2 position-relative">
                <img
                  src="images/banner-1.png"
                  height="400px"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="left-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>ipad S13+ pro max</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="right-banner-1 p-2 position-relative ">
                  <img
                    src="images/right-banner-1.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="right-banner-1-content position-absolute">
                    <h6>BEST SALE</h6>
                    <h5>boAt Airdopes</h5>
                    <p>From $50.00 or $66</p>
                  </div>
                </div>
                <div className="right-banner-1 p-2 position-relative ">
                  <img
                    src="images/right-banner-2.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="right-banner-1-content position-absolute">
                    <h6>NEW ARRIAVAL</h6>
                    <h5>
                      Tatybo Gaming <br /> Headset
                    </h5>
                    <p>From $17.00 or $30</p>
                  </div>
                </div>
                <div className="right-banner-1 p-2 position-relative ">
                  <img
                    src="images/right-banner-3.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="right-banner-1-content position-absolute">
                    <h6>15% OFF</h6>
                    <h5>
                      Basznrty Smart <br /> Watch for Men
                    </h5>
                    <p>Save upto 25% off.</p>
                  </div>
                </div>
                <div className="right-banner-1 p-2 position-relative ">
                  <img
                    src="images/right-banner-4.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="right-banner-1-content position-absolute">
                    <h6>FASHION TRENDS</h6>
                    <h5>
                      Trendy Queen <br /> Womens Jacket
                    </h5>
                    <p>From $34.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="images/free-shipping.png"
                    alt="services"
                    height="50px"
                    width="40px"
                  />
                  <div className="">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="images/daily-surprise.jpg"
                    alt="services"
                    height="50px"
                    width="40px"
                  />
                  <div className="">
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="images/support.jpg"
                    alt="services"
                    height="50px"
                    width="40px"
                  />
                  <div className="">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="images/secure-payments.png"
                    alt="services"
                    height="50px"
                    width="40px"
                  />
                  <div className="">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="images/best-price.jpg"
                    alt="services"
                    height="50px"
                    width="50px"
                  />
                  <div className="">
                    <h6>Affortable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/camera.png"
                    height="60px"
                    width="60px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/smart-watch.png"
                    height="60px"
                    width="60px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/music-gaming.jpg"
                    height="60px"
                    width="60px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Wireless Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/speaker.png"
                    height="60px"
                    width="60px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Modern Refrigerators</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/fridge.jpeg"
                    height="60px"
                    width="50px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/smart-phone.jpg"
                    height="60px"
                    width="40px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Airdopes</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/airpods.jpeg"
                    height="60px"
                    width="60px"
                    alt="camera"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TVs</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/smart-tv.jpeg"
                    height="50px"
                    width="60px"
                    alt="camera"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-featured-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="home-famouse-wrapper p-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famouse-card position-relative">
                <img
                  src="images/famouse-banner.png"
                  className="img-fluid"
                  alt="famouse"
                />
                <div className="famouse-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.22/mo. for 24 mo.* </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famouse-card position-relative">
                <img
                  src="images/famouse-2.png"
                  className="img-fluid"
                  alt="famouse"
                />
                <div className="famouse-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famouse-card position-relative">
                <img
                  src="images/famouse-3.png"
                  className="img-fluid"
                  alt="famouse"
                />
                <div className="famouse-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Smartphone 14 pro max</h6>
                  <p className="text-dark">
                    New in blue. From $999 or $41.00/mo.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famouse-card position-relative">
                <img
                  src="images/famouse-4.png"
                  className="img-fluid"
                  alt="famouse"
                />
                <div className="famouse-content position-absolute">
                  <h5 className="text-dark">Room-filling Sound</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">
                    From $788 or $125.22/mo. for 12 mo.*{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-special-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="home-popular-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="home-marquee-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex gap-10">
                  <div className="mx-4 w-25">
                    <img
                      src="images/samsung-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/lakme-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/dell-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/nykaa-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/intel-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/canon-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/lg-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/lenovo-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/maybelline-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/glamglow-brand.png"
                      width="100px"
                      height="50px"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-blog-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
