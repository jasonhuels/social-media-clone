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
      .what{
        background-color: skyblue;
        height: 10%;
        padding-top: 10px;
      }
      #happening{
        border: solid 1px blue;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        color: skyblue;
        padding: 10px;
        width: 60%;
      }
      ::placeholder { 
        color: skyblue;
        opacity: 1; /* Firefox */
      }
      }
    `}</style>
      <NavBar/>
      <div className="row">
        <div className="col-md-3"><User/><Bio/></div>
        <div className="col-md-6">
          <div className="what">
            <input id="happening" placeholder="What's happening?"/>
            </div>
            <Feed/>
          </div>
        <div className="col-md-3"><FriendsList/></div>
      </div>
    </div>
  );
}

export default App;