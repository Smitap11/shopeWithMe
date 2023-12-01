import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div class="mb-3 row">
                    <label for="email" class="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        readonly
                        class="form-control"
                        id="staticEmail"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                      Password
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                    <div className="mt-3">
                      <Link to="/forgotPassword">Forgot Password?</Link>
                      <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                        <button type="submit" className="button border-0">Login</button>
                        <Link to="/signup" className="button signup">SignUp</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login