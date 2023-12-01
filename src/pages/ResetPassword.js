import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div class="mb-1 row">
                    <div class="col-12 mb-3">
                      <input
                        type="password"
                        class="form-control"
                        value=""
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-12">
                      <input
                        type="password"
                        class="form-control"
                        value=""
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div class="mb-2 row">
                    <div className="d-flex justify-content-center gap-15 align-items-center flex-column">
                      <button type="submit" className="button border-0">Ok</button>
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

export default ResetPassword