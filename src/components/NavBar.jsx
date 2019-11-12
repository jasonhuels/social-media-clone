import React from "react";

function NavBar(){
  return (
    <div >
      <style jsx>{`
        div {
          margin: 10px;
        }
        button{
          color: grey;
          border: solid 2px lightgrey;
          border-radius: 0;
          padding 10px;
        }
        .navSearch{
          float:  right ;
        }
        .navSearch input {
          border: solid 2px skyblue;
          border-radius: 25px;
          padding: 5px;
          margin: 0 20px;
          
        }
        .tweet{
          width: 20%;
          text-align: center;
        }

          `}</style>
      <button className="btn">Home</button>
      <button className="btn">Notifications</button>
      <button className="btn">Messages</button>
      
      <div className="navSearch">
        <input placeholder="Search"></input>
        <input className="tweet" placeholder="Tweet"></input>
      </div>

    </div>
  );
}

export default NavBar;