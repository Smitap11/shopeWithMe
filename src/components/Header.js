import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; 

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over $100 & free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 9808765467">
                  +91 9808765467
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center mb-0">
            <div className="col-2">
              <h3>
                <Link className="text-white">ShopWithMe</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-9 m-0 p-0" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between mb-0">
                <div className='mb-0'>
                  <Link className="d-flex align-items-center space-left-10 text-white mb-0">
                  <img src="/images/compare.png" alt="compare" />
                    <span className="space-left-10 mb-0">Compare <br/> products </span>
                  </Link>
                </div>
                <div className='mb-0'>
                  <Link className="d-flex align-items-center space-left-10 text-white mb-0">
                  <img src="/images/whishlist.png" alt="wishlist" />
                    <span className='space-left-10 mb-0'>Favourite <br/> wishlist </span>
                  </Link>
                </div>
                <div className='mb-0'>
                  <Link className="d-flex align-items-center space-left-10 text-white mb-0">
                  <img src="/images/user.png" alt="user" />
                    <span className='space-left-10 mb-0'>Sign <br/> In </span>
                  </Link>
                </div>
                <div className='mb-0'>
                  <Link className="d-flex align-items-center space-left-10 text-white mb-0">
                  <img src="/images/shopping-cart.png" alt="cart" />
                    <div className="d-flex flex-column space-left-10 mb-0">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30 bg-transparent border-0">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/cat.png" height="15px" width="15px" /> <span className="me-5 d-inline-block">&nbsp; Categories &nbsp;</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>  
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header