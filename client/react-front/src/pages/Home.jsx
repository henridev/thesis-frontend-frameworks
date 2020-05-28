import React from "react";

export default function Home() {
  return (
    <div
      className="about"
      style={{
        padding: "20px",
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: "0.25rem",
      }}
    >
      <div className="inner-about">
        <h1>React todo app</h1>
        <br />
        <p>Welcome to the react version of your favourite todo app</p>
      </div>
    </div>
  );
}
