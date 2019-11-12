import React from "react";
import Feed from "./Feed";
import NavBar from "./NavBar";
import User from "./User";
import Bio from "./Bio";
import FriendsList from "./FriendsList";

function App(){
  return (
    <div className="main">
    <style jsx>{`
      .main {
        margin: 30px;
      }
      }
    `}</style>
      <NavBar/>
      <div className="row">
        <div className="col-md-3"><User/><Bio/></div>
        <div className="col-md-6"><input placeholder="What's happening?"></input><Feed/></div>
        <div className="col-md-3"><FriendsList/></div>
      </div>
    </div>
  );
}

export default App;