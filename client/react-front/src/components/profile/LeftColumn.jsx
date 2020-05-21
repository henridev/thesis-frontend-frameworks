import React from "react";
import About from "./About";
import ContactInfo from "./ContactInfo";

export default function LeftColumn() {
  return (
    <div className="col-md-7 col-lg-8">
      <form className="card ng-pristine ng-valid">
        <About />
        <ContactInfo />
      </form>
    </div>
  );
}
