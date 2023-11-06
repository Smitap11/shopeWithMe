import React from 'react';
import { Link } from 'react-router-dom'
import { BsLinkedin, BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" width="30px" height="30px" />
                <h4 className="mb-0">Sign up for Newsletter</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Enter Email Id Here..."
                    aria-label="Enter Email Id Here..."
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
          
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="mb-4">Contact Us</h5>
              <address className="fs-6 text-white">
                703/A, Landsend Bldg., <br/> Lokhandwala Complex Andheri (W), <br/> Mumbai, Maharashtra 400053, India
              </address>
              <a href="tel:+91 8907656789" className="mt-2 d-block mb-2 text-white">+91 8907656789</a>
              <a href="mailto:shopwithme@gmail.com" className="mt-2 d-block mb-2 text-white">shopwithme@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-15 mt-3">
                <a href="" alt="facebook" className="text-white">
                  <BsFacebook className="fs-5" />
                </a>
                <a href="" alt="youtube" className="text-white">
                  <BsYoutube className="fs-5" />
                </a>
                <a href="" alt="linkedIn" className="text-white">
                  <BsLinkedin className="fs-5" />
                </a>
                <a href="" alt="instagram" className="text-white">
                  <BsInstagram className="fs-5" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-4">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="py-1 mb-1 text-white">Privacy Policy</Link>
                <Link className="py-1 mb-1 text-white">Refund Policy</Link>
                <Link className="py-1 mb-1 text-white">Shipping Policy</Link>
                <Link className="py-1 mb-1 text-white">Terms & Conditions</Link>
                <Link className="py-1 mb-1 text-white">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-4">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="py-1 mb-1 text-white">About Us</Link>
                <Link className="py-1 mb-1 text-white">FAQ</Link>
                <Link className="py-1 mb-1 text-white">Contact Us</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="mb-4">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="py-1 mb-1 text-white">Laptop</Link>
                <Link className="py-1 mb-1 text-white">Headphones</Link>
                <Link className="py-1 mb-1 text-white">Tablets</Link>
                <Link className="py-1 mb-1 text-white">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="row">
          <div className="col-12">
            <p className="mb-0 text-center">&copy; {new Date().getFullYear()}; Powered by Shop with me{" "}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer