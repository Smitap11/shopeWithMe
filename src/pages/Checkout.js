import React from 'react'

function Checkout() {
    
  return (
    <>
        <div className="checkout-wrapper py-4 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h4 className="website-name">Shop With Me</h4>
                            <nav style={{ "--bs-breadcrumb-divider" : "/" }}>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details">
                                Nitya Nanda
                            </p>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout