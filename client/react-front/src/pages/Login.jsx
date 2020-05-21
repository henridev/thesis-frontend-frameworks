import React, { useEffect, useState } from "react";
import api from "../api/auth";
import "../styles/login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .login(form.email, form.password)
      .then((user) => {
        props.history.push("/");
      })
      .catch((err) => setMessage(err.toString()));
  }

  return (
    <>
      <div className="container bootstrap snippet">
        <div className="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
          <div className="lcb-float">
            <i className="fa fa-users"></i>
          </div>
          <div className="form-group">
            <input
              value={form.email}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              value={form.password}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="clearfix"></div>
          <button
            onClick={login}
            className="btn btn-block btn-primary btn-float m-t-25"
          >
            Login
          </button>
          <ul className="login-navigation">
            <li data-block="#l-register" className="bg-green">
              Register
            </li>
            <li data-block="#l-forget-password" className="bg-orange">
              Forgot Password?
            </li>
          </ul>
        </div>
        {message && <div className="info info-danger">{message}</div>}
      </div>
    </>
  );
}
