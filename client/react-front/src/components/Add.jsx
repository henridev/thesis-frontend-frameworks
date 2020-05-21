import React, { useState } from "react";

export default function Add({ handleCreation }) {
  const [title, setTitle] = useState("");
  return (
    <div className="add-to-do">
      <i
        className="fa fa-plus-circle"
        onClick={(e) => {
          if (title.length > 2) handleCreation(title);
        }}
      ></i>
      <input
        type="text"
        id="input"
        placeholder="Add a to-do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
