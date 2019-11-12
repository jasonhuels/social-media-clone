import React from "react";
import Message from "./Message";

var masterMessageList = [
  {
    name: "Thato",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg",
    msg: "Firebase won't save record. Halp."
  },
  {
    name: "Blah",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg",
    msg: "UR my friend."
  },
  {
    name: "Goober",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg",
    msg: "Hey dood letz be frendz."
  },
  {
    name: "Doofus",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg",
    msg: "I speells likez a winer!!"
  },

];


function MessageList() {

  return (
    <div>
      <hr />
      {masterMessageList.map((message, index) =>
        <Message name={message.name}
          image={message.image}
          msg={message.msg} 
          key={index}/> 
      )}
    </div>
  );
}
export default MessageList;