import React from "react";
import ChatBubble from "./ChatBubble";
import Reply from "./Reply";

export default function Comments() {
  return (
    <>
      <ul class="comments">
        <ChatBubble
          person="JohnDoe"
          date="Dec 18, 2014"
          imgsrc="https://bootdey.com/img/Content/user_1.jpg"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          sapien odio, sit amet"
        />
        <ChatBubble
          person="JohnDoe"
          date="Dec 18, 2014"
          imgsrc="https://bootdey.com/img/Content/user_1.jpg"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          sapien odio, sit amet"
        />
        <ChatBubble
          person="BenDover"
          date="Dec 20, 2014"
          imgsrc="https://bootdey.com/img/Content/user_2.jpg"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          sapien odio, sit amet"
        />
        <li class="clearfix">
          <ChatBubble
            person="BenDover"
            date="Dec 20, 2014"
            imgsrc="https://bootdey.com/img/Content/user_2.jpg"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          sapien odio, sit amet"
          />
          <ul class="comments">
            <Reply />
          </ul>
        </li>
      </ul>
    </>
  );
}
