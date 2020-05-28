import React, { useState } from "react";
import api from "../api/authorization";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [profileInfo, setProfileInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInfo({ ...profileInfo, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    api
      .login(profileInfo.email, profileInfo.password)
      .then((user) => {
        props.setUser(user);
        console.log("user", user);
        props.history.push("/todos");
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal" style={{ margin: "5px" }}>
        Please sign in
      </h1>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={profileInfo.email}
        className="form-control"
        placeholder="Email address"
        style={{ margin: "5px" }}
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={profileInfo.password}
        className="form-control"
        placeholder="Password"
        style={{ margin: "5px" }}
      />
      <button
        className="btn btn-lg btn-primary btn-block"
        onClick={handleLogin}
        type="submit"
        style={{ margin: "5px" }}
      >
        Sign in
      </button>
      <span
        onClick={() => props.setIsLogin(false)}
        className="text-primary"
        style={{ margin: "5px" }}
      >
        make an account
      </span>
    </form>
  );
}

export default withRouter(Login);
