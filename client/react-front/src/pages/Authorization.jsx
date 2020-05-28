import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function Authorization({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin && <Login setUser={setUser} setIsLogin={setIsLogin}></Login>}
      {!isLogin && <Signup setUser={setUser} setIsLogin={setIsLogin}></Signup>}
    </div>
  );
}
