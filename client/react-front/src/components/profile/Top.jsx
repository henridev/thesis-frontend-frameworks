import React from "react";

export default function Top(props) {
  return (
    <div className="container-overlap bg-blue-500 ng-scope">
      <div className="media m0 pv">
        <div className="media-left">
          <a href="#">
            <img
              src="https://i.pravatar.cc/250"
              alt="User"
              className="media-object img-circle thumb64"
            />
          </a>
        </div>
        <div className="media-body media-middle">
          <h4 className="media-heading text-white">Christine Matthews</h4>
          <span className="text-white">
            Sed eget lacus quis diam molestie mollis.
          </span>
        </div>
      </div>
    </div>
  );
}
