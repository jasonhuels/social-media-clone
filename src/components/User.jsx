import React from "react";
// import PropTypes from "prop-types";



function User() {
  return (
    <div className="userBox">

      <style jsx>{`

    .userPic {
      margin-top: -20px
      background-color: #457dd1;
      border: solid 5px white;
      border-radius: 28px;
      width: 100px;
    }
    .imageArea{
      margin-top: 50%;
      
    }
    .nameDisp{
      float: right;
      background-color: white;
      margin-top: 200px;
      width: 100%;
    }
    .userBox{
      border: solid 2px grey;
      background-color: #457dd1;
    }
    .centered{
      text-align: center;
    }
    `}</style>

      <div className="row">

        <div className="imageArea">
          <img className="userPic" src="https://icon-library.net/images/profile-picture-icon/profile-picture-icon-22.jpg" alt="" />
        </div>
        <div className="nameDisp col-md-8">
          <h3 >Kellie A. Corrigan</h3>
          <h5 className="centered">TWEETS FOLLOWING FOLLOWERS</h5>
        </div>
      </div>
    </div>
  );
}

export default User;