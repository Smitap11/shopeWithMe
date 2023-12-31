import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { ProductCard } from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  //alert(grid);
  
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      value="" 
                      id="filteredInStock" />
                    <label className="form-check-label" htmlFor="">
                      In stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      value="" 
                      id="filteredOutOfStock"
                      checked />
                    <label className="form-check-label" htmlFor="">
                      Out of stock (0)
                    </label>
                  </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-1">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="fromPrice" 
                        placeholder="From" />
                      <label for="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-1">
                      <input 
                        type="email" 
                        className="form-control"
                        id="toPrice" 
                        placeholder="To" />
                      <label for="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <ul className="filter-color ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="filteredSizeSmall"
                        checked />
                      <label className="form-check-label" htmlFor="small">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="filteredSizeMedium"
                       />
                      <label className="form-check-label" htmlFor="medium">
                        M (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="filteredSizeLarge"
                       />
                      <label className="form-check-label" htmlFor="large">
                        L (6)
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="filteredSizeExtraLarge"
                       />
                      <label className="form-check-label" htmlFor="extraLarge">
                        XL (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                  </div>
                  <div className="product-tags d-flex align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                  </div>
                  <div className="product-tags d-flex align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                  <div className="product-tags d-flex align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50 p-2">
                      <img src="images/watch1.jpeg" className="img-fluid" height="80px" width="110px" alt="watch" />
                    </div>
                    <div className="w-50 p-2">
                      <h5>
                        kids watch bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                      <b>$ 400</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50 p-2">
                      <img src="images/headphone.png" className="img-fluid" height="50px" width="75px" alt="watch" />
                    </div>
                    <div className="w-50 p-2">
                      <h5>
                        kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="4"
                        activeColor="#ffd700"
                      />
                      <b>$ 200</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{"width":"100px"}}>Sort By:</p>
                    <select 
                      className="form-control form-select" 
                      id="sortByFilter">
                      <option value="featured">Featured</option>
                      <option value="best-selling" selected>Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="grid-wrapper d-flex align-items-center gap-10">
                    <p className="totalProducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img src="images/grid1.png" 
                        onClick={() => {
                          setGrid(3);
                        }} 
                        className="d-flex img-fluid" alt="grid" />
                      <img src="images/grid2.png" onClick={() => {
                        setGrid(4);
                      }} className="d-flex img-fluid" alt="grid" />
                      <img src="images/grid3.png" onClick={() => {
                        setGrid(6);
                      }} className="d-flex img-fluid" alt="grid" />
                      <img src="images/grid4.png" onClick={() => {
                        setGrid(12);
                      }} className="d-flex img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-4">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore