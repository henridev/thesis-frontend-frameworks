import React from "react";

export default function Item() {
  return (
    <li>
      <div class="form-check">
        {" "}
        <label class="form-check-label">
          {" "}
          <input class="checkbox" type="checkbox" /> For what reason would it be
          advisable. <i class="input-helper"></i>
        </label>{" "}
      </div>{" "}
      <i class="remove mdi mdi-close-circle-outline"></i>
    </li>
  );
}
