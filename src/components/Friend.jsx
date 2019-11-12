import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    
    <div className="">
      <div className="row">
      
        <style jsx>{`
            div {
              margin: 0 auto 0 auto;
            }
            img {
              width: 99%;
              background-color: burlywood;
            }
            hr {
              border: 0;
              clear:both;
              display:block;
              width: 96%;               
              background-color:#333;
              height: 1px;
            }
          `}</style>
        
        <div className="col-md-3"><img src={props.image}></img></div>
        <div className="col-md-9">
          <h3>{props.name}</h3>
          <button className="btn btn-primary">Button</button>
        </div>
        <hr />
      </div>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Friend;