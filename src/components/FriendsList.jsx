import React from "react";
import Friend from "./Friend";

var masterFriendList = [
  {
    name: "Thato",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg"
  },
  {
    name: "Bilb Ono",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg"
  },
  {
    name: "Filler",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg"
  },
  {
    name: "Meh",
    image: "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg"
  },

];


function FriendList() {

  return (
    <div>
      <hr />
      {masterFriendList.map((friend, index) =>
        <Friend name={friend.name}
          image={friend.image}
          key={index}/> 
      )}
    </div>
  );
}
export default FriendList;