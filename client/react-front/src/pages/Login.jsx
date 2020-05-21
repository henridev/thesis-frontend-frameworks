import React from "react";
import "../styles/login.css";

export default function Login() {
  return (
    <>
      <div class="container bootstrap snippet">
        <div class="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
          <div class="lcb-float">
            <i class="fa fa-users"></i>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="clearfix"></div>
          <a href="" class="btn btn-block btn-primary btn-float m-t-25">
            Sign In
          </a>
          <ul class="login-navigation">
            <li data-block="#l-register" class="bg-green">
              Register
            </li>
            <li data-block="#l-forget-password" class="bg-orange">
              Forgot Password?
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
