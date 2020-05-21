import React from "react";

export default function ChatBubble({ imgsrc, date, person, message }) {
  return (
    <>
      <li className="clearfix">
        <img src={imgsrc} className="avatar" alt="avatar" />
        <div className="post-comments">
          <p className="meta">
            {date} <a href="#">{person}</a> says :{" "}
            <i className="pull-right">
              <a href="#">
                <small>Reply</small>
              </a>
            </i>
          </p>
          <p>{message}</p>
        </div>
      </li>
    </>
  );
}
