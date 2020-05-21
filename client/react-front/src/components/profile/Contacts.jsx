import React from "react";

export default function Contacts() {
  return (
    <>
      <h5 className="card-heading">Contacts</h5>
      <div className="mda-list">
        <div className="mda-list-item">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt="List user"
            className="mda-list-item-img"
          />
          <div className="mda-list-item-text mda-2-line">
            <h3>
              <a href="#">Eric Graves</a>
            </h3>
            <div className="text-muted text-ellipsis">Ut ac nisi id mauris</div>
          </div>
        </div>
        <div className="mda-list-item">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            alt="List user"
            className="mda-list-item-img"
          />
          <div className="mda-list-item-text mda-2-line">
            <h3>
              <a href="#">Jessie Cox</a>
            </h3>
            <div className="text-muted text-ellipsis">
              Sed lacus nisl luctus
            </div>
          </div>
        </div>
        <div className="mda-list-item">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="List user"
            className="mda-list-item-img"
          />
          <div className="mda-list-item-text mda-2-line">
            <h3>
              <a href="#">Marie Hall</a>
            </h3>
            <div className="text-muted text-ellipsis">
              Donec congue sagittis mi
            </div>
          </div>
        </div>
        <div className="mda-list-item">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar4.png"
            alt="List user"
            className="mda-list-item-img"
          />
          <div className="mda-list-item-text mda-2-line">
            <h3>
              <a href="#">Guy Carpenter</a>
            </h3>
            <div className="text-muted text-ellipsis">
              Donec convallis arcu sit
            </div>
          </div>
        </div>
      </div>
      <div className="card-body pv0 text-right">
        <a href="" className="btn btn-flat btn-info">
          View all
        </a>
      </div>
    </>
  );
}
