import React from "react";
import Top from "../components/profile/Top";
import LeftColumn from "../components/profile/LeftColumn";
import RightColumn from "../components/profile/RightColumn";
import "../styles/profile.css";

export default function Profile() {
  return (
    <section className="container ng-scope ng-fadeInLeftShort">
      <Top />
      <div className="container-fluid ng-scope">
        <div class="row">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
}
