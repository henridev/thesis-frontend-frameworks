import React, { useState } from "react";
import api from "../api/authorization";
import { withRouter } from "react-router-dom";

function Signup(props) {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInfo({ ...profileInfo, [name]: value });
  }

  function handleSignIn(e) {
    e.preventDefault();
    api
      .signup(profileInfo.name, profileInfo.email, profileInfo.password)
      .then((user) => {
        props.setUser(user);
        props.history.push("/todos");
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal" style={{ margin: "5px" }}>
        Hello welcome to sign up
      </h1>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={profileInfo.name}
        className="form-control"
        placeholder="Name"
        style={{ margin: "5px" }}
      />
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
        onClick={handleSignIn}
        style={{ margin: "5px" }}
      >
        Sign up
      </button>
      <a
        onClick={() => props.setIsLogin(true)}
        className="text-primary"
        style={{ margin: "5px" }}
      >
        I already have an account
      </a>
      <p className="mt-5 mb-3 text-muted">© 2019-2020</p>
    </form>
  );
}

export default withRouter(Signup);
