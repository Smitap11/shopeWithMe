import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { ProductCard } from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";



const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth:500,
    img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="single-product-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="single-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
                <div className="product-related-images d-flex flex-wrap gap-15">
                  <div>
                    <img 
                      className="img-fluid"
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png"
                      alt="headset"
                    />
                  </div>
                  <div>
                    <img 
                      className="img-fluid"
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png"
                      alt="headset"
                    />
                  </div>
                  <div>
                    <img 
                      className="img-fluid"
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png"
                      alt="headset"
                    />
                  </div>
                  <div>
                    <img 
                      className="img-fluid"
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png"
                      alt="headset"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="single-product-details">
                <div className="bottomBorder">
                  <h3 className="title">Headphones headset electronics technology.</h3>
                </div>
                <div className="bottomBorder py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-item-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value="3"
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 text-review p-2">( 2 Reviews )</p>
                  </div>
                  <a href="#review" className="review-btn">Write a Review</a>
                </div>
                <div className="bottomBorder py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type : </h3> 
                    <p className="product-data my-2" >Headset</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brand : </h3> 
                    <p className="product-data my-2">Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category : </h3> 
                    <p className="product-data my-2" >Electronics</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data my-2" >Headset</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Availability : </h3> 
                    <p className="product-data my-2" >In stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Size : </h3> 
                    <div className="d-flex flex-wrap gap-10  mt-2 mb-2">
                      <div className="badge border border-1 text-dark border-secondary">S</div>
                      <div className="badge border border-1 text-dark border-secondary">M</div>
                      <div className="badge border border-1 text-dark border-secondary">XL</div>
                      <div className="badge border border-1 text-dark border-secondary">XXL</div>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2">
                    <h3 className="product-heading mb-3">Color : </h3>
                    <Color className="mb-0" />
                  </div>
                  <div className="d-flex gap-10 flex-row align-items-center">
                    <h3 className="product-heading">Qantity : </h3> 
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup">
                      Buy It Now
                    </button>
                  </div>  
                  <div className="d-flex align-items-center gap-15 mt-2">
                    <div>
                      <a href="">
                        <IoIosGitCompare /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <FaRegHeart /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center my-2 gap-10">
                    <h3 className="product-heading">Shipping & Returns : </h3> 
                    <p className="product-data my-2">Free shipping and returns available on all orders!
                      <br /> {" "} within <b>3 - 4 bussiness days</b> 
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="review" className="reviews-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href=""
                        className="text-dark text-decoration-underline"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-3">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-100"
                        name=""
                        id=""
                        cols="10"
                        rows="3"
                        placeholder="Comments"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review my-2">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Larry</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="4"
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. is a long established fact that a reader
                      will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem.
                    </p>
                  </div>
                  <div className="review my-2">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">David</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. is a long established fact that a reader
                      will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-popular-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
