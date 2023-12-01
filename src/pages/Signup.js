import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="username"
                      readonly
                      class="form-control"
                      id="userName"
                      value=""
                      placeholder="User Name"
                    />
                  </div>
                  <div>
                      <input
                        type="tel"
                        name="mobileNumber"
                        readonly
                        class="form-control"
                        id="mobileNumber"
                        value=""
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        readonly
                        name="useremail"
                        class="form-control"
                        id="useremail"
                        value=""
                        placeholder="User Email"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder="Password"
                      />
                    </div>
                  <div class="mb-3 row">
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0">Sign Up</button>
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

export default Signup