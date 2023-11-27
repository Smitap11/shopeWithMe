import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';


const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card w-100 position-relative">
                <img
                    src="images/close-icon.svg"
                    alt="close"
                    className="position-absolute close-img img-fluid"
                />
                <div className="wishlist-card-img text-center">
                    <img src="images/speaker.png" width="150px" height="180px" />
                </div>
                <div className="py-3">
                    <h5 className="title">Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB</h5>
                    <h6 className="price mb-3 mt-3">$166</h6>
                </div>    
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card w-100 position-relative">
                <img
                    src="images/close-icon.svg"
                    alt="close"
                    className="position-absolute close-img img-fluid"
                />
                <div className="wishlist-card-img text-center">
                    <img src="images/speaker.png" width="150px" height="180px" />
                </div>
                <div className="py-3">
                    <h5 className="title">Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB</h5>
                    <h6 className="price mb-3 mt-3">$166</h6>
                </div>    
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card w-100 position-relative">
                <img
                    src="images/close-icon.svg"
                    alt="close"
                    className="position-absolute close-img img-fluid"
                />
                <div className="wishlist-card-img text-center">
                    <img src="images/speaker.png" width="150px" height="180px" />
                </div>
                <div className="py-3">
                    <h5 className="title">Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB</h5>
                    <h6 className="price mb-3 mt-3">$166</h6>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default Wishlist