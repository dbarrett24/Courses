import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="David"
        timeAgo="Today at 4:00pm"
        commentText="Wow, nice job, you a cool guy!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Kelsey"
        timeAgo="Wednesday at 6:52am"
        commentText="I think you could have done a twirl in your dance instead of the fist pump... Just sayin'"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Connor"
        timeAgo="Yesterday at 8:45pm"
        commentText="Dad, MewTwo is the STRONGEST Pokemon! He has all the powers in the whole world!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Rudy"
        timeAgo="Monday at 12:43am"
        commentText="I sought da guy. The Icecream guy says 'I gat the ICE CREAAAAM!' and the ice cream guy rolls over, the ice cream guy runs away!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Afton"
        timeAgo="Saturday at 3:31pm"
        commentText="Can't wait to meet you, Mom and Dad!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
