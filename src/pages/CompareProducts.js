import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-products-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/close-icon.svg"
                  alt="close"
                  className="position-absolute close-img img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/honor-mobile.jpg" alt="mobile" width="150px" height="180px" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB</h5>
                    <h6 className="price mb-3 mt-3">$166</h6>
                    <div>
                        <div className="product-detail">
                            <h6>Brand:</h6>
                            <p>Motorola</p>
                        </div>
                        <div className="product-detail">
                            <h6>Type:</h6>
                            <p>Mobile</p>
                        </div>
                        <div className="product-detail">
                            <h6>Availability:</h6>
                            <p>In Stock</p>
                        </div>
                        <div className="product-detail">
                            <h6>Color:</h6>
                            <Color />
                        </div>
                        <div className="product-detail">
                            <h6>Size:</h6>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/close-icon.svg"
                  alt="close"
                  className="position-absolute close-img img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/honor-mobile.jpg" alt="mobile" width="150px" height="180px" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB</h5>
                    <h6 className="price mb-3 mt-3">$166</h6>
                    <div>
                        <div className="product-detail">
                            <h6>Brand:</h6>
                            <p>Motorola</p>
                        </div>
                        <div className="product-detail">
                            <h6>Type:</h6>
                            <p>Mobile</p>
                        </div>
                        <div className="product-detail">
                            <h6>Availability:</h6>
                            <p>In Stock</p>
                        </div>
                        <div className="product-detail">
                            <h6>Color:</h6>
                            <Color />
                        </div>
                        <div className="product-detail">
                            <h6>Size:</h6>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
