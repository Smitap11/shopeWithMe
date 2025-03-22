import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

export const SpecialProduct = () => {
  return (
    <div className="col-md-4 col-sm-6">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch-1.png" className="img-fluid p-2 mx-2" height="150px" width="150px" alt="watch" />
                </div>
                <div className="special-product-content w-75 mx-2">
                    <h5 className="brand">Samsung</h5>
                    <h6 className="title">Samsung Galaxy note 10+ Mobile Phone</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-p">$100</span>&nbsp; <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                            <b>5 </b>days
                        </p>
                        <div className="d-flex align-items-center gap-10">
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                        </div>
                    </div>
                    <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" 
                                role="progressbar"
                                style={{ "width": "25%" }}
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <Link className="button">Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
