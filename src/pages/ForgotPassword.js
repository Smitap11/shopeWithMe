import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center my-3">You will receive an email to reset your password</p>
                <form action="" className="d-flex flex-column gap-15">
                  <div class="mb-1 row">
                    <div class="col-12">
                      <input
                        type="text"
                        readonly
                        class="form-control"
                        id="staticEmail"
                        value=""
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div class="mb-2 row">
                    <div className="d-flex justify-content-center gap-15 align-items-center flex-column">
                      <button type="submit" className="button border-0">Submit</button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword