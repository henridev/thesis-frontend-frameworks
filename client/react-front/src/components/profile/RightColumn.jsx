import React from "react";
import Contacts from "./Contacts";
import Activity from "./Activity";

export default function RightColumn() {
  return (
    <div className="col-md-5 col-lg-4">
      <div className="card">
        <Contacts />
        <Activity />
      </div>
    </div>
  );
}
