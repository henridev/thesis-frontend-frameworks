import React, { useState } from "react";

export default function Add({ handleCreation }) {
  const [title, setTitle] = useState("");
  return (
    <li className="list-group-item">
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <input
            aria-describedby="inputGroup-sizing-sm"
            type="text"
            id="input"
            className="form-control"
            placeholder="new todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="input-group-text" id="inputGroup-sizing-sm">
            add{" "}
            <i
              className="fa fa-plus-circle"
              onClick={(e) => {
                if (title.length > 2) handleCreation(title);
              }}
            ></i>
          </span>
        </div>
      </div>
    </li>
  );
}
