import React from "react";

export default function Reply() {
  return (
    <li class="clearfix">
      <img
        src="https://bootdey.com/img/Content/user_3.jpg"
        class="avatar"
        alt=""
      />
      <div class="post-comments">
        <p class="meta">
          Dec 20, 2014 <a href="#">JohnDoe</a> says :{" "}
          <i class="pull-right">
            <a href="#">
              <small>Reply</small>
            </a>
          </i>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          sapien odio, sit amet
        </p>
      </div>
    </li>
  );
}
