import React from "react";
// import PropTypes from "prop-types";



function User() {
  return (
    <div className="userBox">

      <style jsx>{`

    .userPic {
      margin-top: -20%;
      background-color: #68a1cc;
      border: solid 5px white;
      border-radius: 28px;
      margin-left: 15%;
      width: 50%;
      z-index: 2;
    }
    .imageArea{
      margin-top: 25%;
      width: 50%;
    }
    .nameDisp{
      float: right;
      background-color: white;
      padding-right: 3%;
      position: relative;
      width: 100%;
      height: 50%;
      
    }
    .userBox{
      border: solid 2px grey;
      background-color: #68a1cc;
      height: 33%;

    }
    .centered{
      text-align: center;
    }
    .nameText{
      text-align: right;
    }
    
    `}</style>



        <div className="imageArea">
          <img className="userPic" src="https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg" alt="" />
        </div>
        <div className="nameDisp">
          <h5 className="nameText" >Kellie A. Corrigan</h5>
          <p className="centered">TWEETS FOLLOWING FOLLOWERS</p>
        </div>

    </div>
  );
}

export default User;