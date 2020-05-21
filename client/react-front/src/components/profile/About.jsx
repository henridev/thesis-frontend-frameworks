import React from "react";

export default function About() {
  return (
    <>
      <h5 className="card-heading pb0">About</h5>
      <div className="card-body">
        <p className="ng-scope ng-binding editable">
          Pellentesque porta tincidunt justo, non fringilla erat iaculis in. Sed
          nisi erat, ornare eu pellentesque quis, pellentesque non nulla. Proin
          rutrum, est pellentesque commodo mattis, sem justo porttitor odio, id
          aliquet lacus augue nec nisl.
        </p>
      </div>
      <div className="card-divider"></div>
      <div className="card-offset">
        <div className="card-offset-item text-right">
          <button
            type="button"
            className="btn-raised btn btn-warning btn-circle btn-lg"
          >
            <em className="fa fa-edit"></em>
          </button>
          <button
            type="submit"
            className="btn-raised btn btn-success btn-circle btn-lg ng-hide"
          >
            <em className="fa fa-check"></em>
          </button>
        </div>
      </div>
    </>
  );
}
