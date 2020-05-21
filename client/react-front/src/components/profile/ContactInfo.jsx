import React from "react";

export default function ContactInfo() {
  return (
    <>
      <h5 className="card-heading pb0">Contact Information</h5>
      <div className="card-body">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>
                <em className="ion-document-text icon-fw mr"></em>Area
              </td>
              <td className="ng-binding">Research &amp; development</td>
            </tr>
            <tr>
              <td>
                <em className="ion-egg icon-fw mr"></em>Birthday
              </td>
              <td>
                <span className="ng-scope ng-binding editable">10/11/2000</span>
              </td>
            </tr>
            <tr>
              <td>
                <em className="ion-ios-body icon-fw mr"></em>Member since
              </td>
              <td>
                <span className="ng-scope ng-binding editable">05/11/2015</span>
              </td>
            </tr>
            <tr>
              <td>
                <em className="ion-man icon-fw mr"></em>Gender
              </td>
              <td>
                <span className="ng-scope ng-binding editable">Female</span>
              </td>
            </tr>
            <tr>
              <td>
                <em className="ion-android-home icon-fw mr"></em>Address
              </td>
              <td>
                <span className="ng-scope ng-binding editable">
                  Some street, 123
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <em className="ion-email icon-fw mr"></em>Email
              </td>
              <td>
                <span className="ng-scope editable">
                  <a href="" className="ng-binding">
                    user@mail.com
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <em className="ion-ios-telephone icon-fw mr"></em>Contact phone
              </td>
              <td>
                <span className="ng-scope ng-binding editable">
                  13-123-46578
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-divider"></div>
    </>
  );
}
