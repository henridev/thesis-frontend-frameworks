import React from "react";
import Comments from "../components/chat/Comments";
import "../styles/chat.css";

export default function Chat() {
  return (
    <div class="container bootstrap snippet">
      <div class="row">
        <div class="col-md-12">
          <div class="blog-comment">
            <h3 class="text-success">Comments</h3>
            <hr />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}
