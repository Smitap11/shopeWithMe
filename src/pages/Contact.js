import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoMdHome } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";


const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15071.70117390525!2d72.98147619999999!3d19.19846505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91877d75b27%3A0xd88cfe4620a93ca5!2sThane%20Railway%20Station!5e0!3m2!1sen!2sin!4v1700125022214!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile" />
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
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <IoMdHome className="fs-5" />
                        <address className="mb-0">
                          Hno: 5XPG+PV5, Jambli Naka, Thane West, Thane, Maharashtra 400601
                        </address>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <IoMdCall  className="fs-5"/>
                        <a href="tel:+91 9876567890" className="mb-0">+91 9876567890</a>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <IoIosMail className="fs-5" />
                        <a href="mailto:shopewithme@gmail.com" className="mb-0">shopewithme@gmail.com</a>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <IoInformationCircleSharp className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 Am to 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact