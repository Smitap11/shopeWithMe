import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import watch from '../images/watch-1.png';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
        <Meta title="Cart" />
        <BreadCrumb title="Cart" />
        <div className="login-wrapper home-wrapper-2 py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className='cart-header d-flex my-3 justify-content-between align-content-center'>
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className='cart-data d-flex my-3 mb-2 justify-content-between align-content-center'>
                            <div className="cart-col-1 gap-10 d-flex align-items-center">
                                <div className="w-25">
                                    <img 
                                        src={watch}
                                        className="img-fluid"
                                        alt="product image"
                                        height="50px"
                                        width="50px"
                                    />
                                </div>
                                <div className="w-75">
                                    <p>Boult Smart Watch</p>
                                    <p>Color : Light Blue</p>
                                    <p>Size : 20 inch</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 1000</h5>
                            </div>    
                            <div className="cart-col-3 d-flex align-items-center gap-10 align-items-baseline">
                                <div>
                                    <input 
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <MdDelete className="text-danger" />
                            </div>
                            <div className="cart-col-4">$ 1000</div>
                        </div>
                        <div className='cart-data d-flex justify-content-between align-content-center'>
                            <div className="cart-col-1 gap-10 d-flex align-items-center">
                                <div className="w-25">
                                    <img 
                                        src={watch}
                                        className="img-fluid"
                                        alt="product image"
                                        height="50px"
                                        width="50px"
                                    />
                                </div>
                                <div className="w-75">
                                    <p>Boult Smart Watch</p>
                                    <p>Color : Light Blue</p>
                                    <p>Size : 20 inch</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 1000</h5>
                            </div>    
                            <div className="cart-col-3 d-flex align-items-center gap-10 align-items-baseline">
                                <div>
                                    <input 
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <MdDelete className="text-danger" />
                            </div>
                            <div className="cart-col-4">
                                $ 1000
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">
                                Continue To Shopping
                            </Link>
                            <div className="d-flex flex-column align-items-end">
                                <h4>SubTotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className="button">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart