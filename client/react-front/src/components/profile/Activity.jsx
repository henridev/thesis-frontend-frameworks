import React from "react";

export default function Activity() {
  return (
    <>
      <div className="card-divider"></div>
      <h5 className="card-heading">Activity</h5>
      <div className="card-body pb0">
        <p className="pull-left mr">
          <em className="ion-record text-info"></em>
        </p>
        <div className="oh">
          <p>
            <strong className="mr-sm">Added</strong>
            <span className="mr-sm">a new issue</span>
            <a href="">#5478</a>
          </p>
          <div className="clearfix">
            <div className="pull-left text-muted">
              <em className="ion-android-time mr-sm"></em>
              <span>an hour ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body pb0">
        <p className="pull-left mr">
          <em className="ion-record text-danger"></em>
        </p>
        <div className="oh">
          <p>
            <strong className="mr-sm">Commented</strong>
            <span className="mr-sm"> on the project</span>
            <a href="">Material</a>
          </p>
          <p className="bl pl">
            <i>That's awesome!</i>
          </p>
          <div className="clearfix">
            <div className="pull-left text-muted">
              <em className="ion-android-time mr-sm"></em>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body pb0">
        <p className="pull-left mr">
          <em className="ion-record text-success"></em>
        </p>
        <div className="oh">
          <p>
            <strong className="mr-sm">Completed</strong>
            <span> all tasks asigned this week</span>
          </p>
          <div className="clearfix">
            <div className="pull-left text-muted">
              <em className="ion-android-time mr-sm"></em>
              <span>3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body pb0">
        <p className="pull-left mr">
          <em className="ion-record text-info"></em>
        </p>
        <div className="oh">
          <p>
            <strong className="mr-sm">Published</strong>
            <span className="mr-sm"> new photos on the album</span>
            <a href="">WorldTrip</a>
          </p>
          <p>
            <a href="">
              <img
                src="https://via.placeholder.com/200x200"
                alt="Pic"
                className="mr-sm thumb48"
              />
            </a>
            <a href="">
              <img
                src="https://via.placeholder.com/200x200"
                alt="Pic"
                className="mr-sm thumb48"
              />
            </a>
            <a href="">
              <img
                src="https://via.placeholder.com/200x200"
                alt="Pic"
                className="mr-sm thumb48"
              />
            </a>
          </p>
          <div className="clearfix">
            <div className="pull-left text-muted">
              <em className="ion-android-time mr-sm"></em>
              <span>4 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="clearfix">
          <p className="pull-left mr">
            <em className="ion-record text-primary"></em>
          </p>
          <div className="oh">
            <p>
              <strong className="mr-sm">Following</strong>
              <span className="mr-sm">Jane Kuhn</span>
            </p>
            <p>
              <span className="image-list">
                <a href="">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User"
                    className="img-circle thumb32"
                  />
                </a>
                <a href="">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="User"
                    className="img-circle thumb32"
                  />
                </a>
                <a href="">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="User"
                    className="img-circle thumb32"
                  />
                </a>
                <a href="">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt="User"
                    className="img-circle thumb32"
                  />
                </a>
                <a href="">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt="User"
                    className="img-circle thumb32"
                  />
                </a>
                <strong>
                  <a href="" className="ml-sm link-unstyled">
                    +200
                  </a>
                </strong>
              </span>
            </p>
            <div className="clearfix">
              <div className="pull-left text-muted">
                <em className="ion-android-time mr-sm"></em>
                <span>yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
