import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';



export const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    //alert(grid);

  return (
    <>
        <div className={` ${location.pathname === "/store" ? `grid-${grid}` : "grid-3"} `}>
            <Link to=":id" className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wishlist.svg" height="15px" width="15px" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch-2.jpg" className="img-fluid" width="150px" height="200px" alt="product watch" />
                    <img src="images/watch-3.jpg" className="img-fluid" width="150px" height="200px" alt="product watch" />
                </div>
                <div className="product-details">
                    <h6 className="product-brand">Havells</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                    />
                    <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>
                    From lighting, switches, electrical circuitry and wiring to home & kitchen appliances, fans, air coolers and water heaters. The eco-friendly and power saving.
                    </p>
                    <p className="product-price">$200.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link to="/">
                            <img src="images/prod-compare.png" height="15px" width="15px" title="compare" alt="compare" />
                        </Link>
                        <Link to="/">
                            <img src="images/view.png" height="15px" width="15px" title="View" alt="view" />
                        </Link>
                        <Link to="/">
                            <img src="images/addtocart.png" height="15px" width="15px" title="Add to cart" alt="addtocart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname === "/store" ? `grid-${grid}` : "grid-3"} `}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wishlist.svg" height="15px" width="15px" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch-2.jpg" className="img-fluid" width="150px" height="200px" alt="product watch" />
                    <img src="images/watch-3.jpg" className="img-fluid" width="150px" height="200px" alt="product watch" />
                </div>
                <div className="product-details">
                    <h6 className="product-brand">Havells</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                    />
                    <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>
                        From lighting, switches, electrical circuitry and wiring to home & kitchen appliances, fans, air coolers and water heaters. The eco-friendly and power saving.
                    </p>
                    <p className="product-price">$200.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link to="/">
                            <img src="images/prod-compare.png" height="15px" width="15px" title="compare" alt="compare" />
                        </Link>
                        <Link to="/">
                            <img src="images/view.png" height="15px" width="15px" title="View" alt="view" />
                        </Link>
                        <Link to="/">
                            <img src="images/addtocart.png" height="15px" width="15px" title="Add to cart" alt="addtocart" />
                        </Link>
                    </div>
                </div>
            </Link>
    </div>
    </>
  )
}
